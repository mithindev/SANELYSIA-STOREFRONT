'use client';

import * as React from 'react';
import { ProductItem } from '@/data/catalog';
import { formatPaise } from '@/lib/utils/cn';

export interface CartLineItem {
  id: string; // product id + variant id
  productId: string;
  slug: string;
  title: string;
  variantTitle: string;
  pricePaise: number;
  formattedPrice: string;
  image: string;
  quantity: number;
}

interface CartContextValue {
  items: CartLineItem[];
  isOpen: boolean;
  totalPaise: number;
  formattedTotal: string;
  itemCount: number;
  addItem: (product: ProductItem, variantTitle?: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = React.createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'san_elysia_cart_items_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartLineItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Load from local storage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to local storage on change
  React.useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items, isHydrated]);

  const addItem = React.useCallback(
    (product: ProductItem, variantTitle = 'Default', quantity = 1) => {
      const matchedVariant = product.variants.find((v) => v.title === variantTitle);
      const pricePaise = matchedVariant ? matchedVariant.pricePaise : product.pricePaise;
      const formattedPrice = matchedVariant
        ? matchedVariant.formattedPrice
        : product.formattedPrice;
      const lineId = `${product.id}_${variantTitle}`;
      setItems((current) => {
        const existing = current.find((item) => item.id === lineId);
        if (existing) {
          return current.map((item) =>
            item.id === lineId
              ? { ...item, quantity: Math.min(99, item.quantity + quantity) }
              : item
          );
        }
        return [
          ...current,
          {
            id: lineId,
            productId: product.id,
            slug: product.slug,
            title: product.title,
            variantTitle,
            pricePaise,
            formattedPrice,
            image: product.image,
            quantity,
          },
        ];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = React.useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== id));
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: Math.min(99, quantity) } : item
      )
    );
  }, []);

  const clearCart = React.useCallback(() => {
    setItems([]);
  }, []);

  const openCart = React.useCallback(() => setIsOpen(true), []);
  const closeCart = React.useCallback(() => setIsOpen(false), []);
  const toggleCart = React.useCallback(() => setIsOpen((prev) => !prev), []);

  const totalPaise = React.useMemo(() => {
    return items.reduce((sum, item) => sum + item.pricePaise * item.quantity, 0);
  }, [items]);

  const formattedTotal = React.useMemo(() => formatPaise(totalPaise), [totalPaise]);

  const itemCount = React.useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        totalPaise,
        formattedTotal,
        itemCount,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const defaultCartValue: CartContextValue = {
  items: [],
  isOpen: false,
  totalPaise: 0,
  formattedTotal: '₹0',
  itemCount: 0,
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  toggleCart: () => {},
};

export function useCart() {
  const context = React.useContext(CartContext);
  return context || defaultCartValue;
}

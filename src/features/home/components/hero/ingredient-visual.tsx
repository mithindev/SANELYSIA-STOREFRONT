import * as React from 'react';
import Image from 'next/image';
import type { HeroIngredientCardSpec } from '../../data/hero-stage-data';

interface IngredientVisualProps {
  ingredient: HeroIngredientCardSpec;
}

/**
 * Renders either a studio macro photograph or bespoke multi-layered luxury
 * botanical/molecular vector art calibrated to SAN ELYSIA's warm champagne palette.
 */
export function IngredientVisual({ ingredient }: IngredientVisualProps) {
  if (ingredient.artKind === 'photo' && ingredient.imageSrc) {
    return (
      <Image
        src={ingredient.imageSrc}
        alt={ingredient.name}
        fill
        sizes="(max-width: 768px) 160px, 180px"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(circle at 38% 32%, #FFF9F0 0%, #EFE2CE 52%, ${ingredient.accentHex}44 100%)`,
      }}
    >
      {/* Ambient liquid specular halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-55 blur-xl"
        style={{ backgroundColor: ingredient.accentHex }}
      />
      <svg
        viewBox="0 0 160 160"
        className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`drop-${ingredient.id}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#FAF0DE" stopOpacity="0.78" />
            <stop offset="78%" stopColor={ingredient.accentHex} stopOpacity="0.48" />
            <stop offset="100%" stopColor="#5A3825" stopOpacity="0.28" />
          </radialGradient>
          <linearGradient id={`leaf-${ingredient.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8BB27B" />
            <stop offset="60%" stopColor="#4F794B" />
            <stop offset="100%" stopColor="#2F4C2E" />
          </linearGradient>
          <linearGradient id={`gold-${ingredient.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8DEAC" />
            <stop offset="55%" stopColor="#CE9F5B" />
            <stop offset="100%" stopColor="#8B5E2A" />
          </linearGradient>
        </defs>

        {ingredient.artKind === 'kojic-rice' && (
          <g>
            {/* Fermented translucent essence sphere + luminous rice pearls */}
            <circle cx="80" cy="68" r="34" fill={`url(#drop-${ingredient.id})`} />
            <ellipse cx="68" cy="54" rx="11" ry="6" transform="rotate(-24 68 54)" fill="#FFFFFF" fillOpacity="0.72" />
            <ellipse cx="52" cy="96" rx="13" ry="7" transform="rotate(-18 52 96)" fill={`url(#gold-${ingredient.id})`} />
            <ellipse cx="78" cy="103" rx="14" ry="7.5" transform="rotate(12 78 103)" fill="#FFFDF8" stroke="#D8BE94" strokeWidth="1.2" />
            <ellipse cx="105" cy="95" rx="12" ry="6.5" transform="rotate(-8 105 95)" fill={`url(#gold-${ingredient.id})`} opacity="0.9" />
            <circle cx="114" cy="48" r="5" fill="#FFFFFF" fillOpacity="0.6" />
            <circle cx="44" cy="52" r="3.5" fill="#FFFFFF" fillOpacity="0.5" />
          </g>
        )}

        {ingredient.artKind === 'azelaic-grain' && (
          <g>
            {/* Golden botanical grain stalks + soothing drop */}
            <path d="M46 116 C64 84, 84 56, 114 34" stroke="#9C7139" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {[0, 1, 2, 3, 4].map((i) => {
              const x = 60 + i * 11;
              const y = 98 - i * 13;
              return (
                <g key={i}>
                  <ellipse cx={x - 7} cy={y - 4} rx="8" ry="4" transform={`rotate(-48 ${x - 7} ${y - 4})`} fill={`url(#gold-${ingredient.id})`} />
                  <ellipse cx={x + 6} cy={y + 3} rx="8" ry="4" transform={`rotate(12 ${x + 6} ${y + 3})`} fill={`url(#gold-${ingredient.id})`} opacity="0.92" />
                </g>
              );
            })}
            <circle cx="94" cy="84" r="19" fill={`url(#drop-${ingredient.id})`} />
            <ellipse cx="88" cy="76" rx="6" ry="3.2" transform="rotate(-25 88 76)" fill="#FFFFFF" fillOpacity="0.82" />
          </g>
        )}

        {ingredient.artKind === 'licorice-root' && (
          <g>
            {/* Warm botanical licorice stems & soft cream blossom */}
            <path d="M38 108 Q74 86 116 98" stroke="#7A4F2B" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M54 96 Q84 68 122 54" stroke="#99683D" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <g transform="translate(82 60)">
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <ellipse
                  key={deg}
                  cx="0"
                  cy="-15"
                  rx="7.5"
                  ry="13"
                  transform={`rotate(${deg})`}
                  fill="#FFFDF7"
                  stroke="#E1C9A6"
                  strokeWidth="1"
                />
              ))}
              <circle cx="0" cy="0" r="6" fill="#D59E4C" />
            </g>
            <circle cx="52" cy="54" r="6" fill={`url(#drop-${ingredient.id})`} />
            <circle cx="118" cy="80" r="4.5" fill={`url(#drop-${ingredient.id})`} />
          </g>
        )}

        {ingredient.artKind === 'salicylic-willow' && (
          <g>
            {/* Sleek willow leaf + crisp clarifying droplets */}
            <path
              d="M42 108 C50 64, 82 34, 122 30 C118 70, 88 102, 42 108 Z"
              fill={`url(#leaf-${ingredient.id})`}
            />
            <path d="M44 106 Q80 70 119 32" stroke="#D7E7CD" strokeWidth="1.4" strokeOpacity="0.65" fill="none" />
            <circle cx="88" cy="68" r="14" fill={`url(#drop-${ingredient.id})`} />
            <ellipse cx="83" cy="62" rx="4.5" ry="2.4" transform="rotate(-25 83 62)" fill="#FFFFFF" fillOpacity="0.88" />
            <circle cx="56" cy="56" r="6" fill={`url(#drop-${ingredient.id})`} />
            <circle cx="114" cy="92" r="8" fill={`url(#drop-${ingredient.id})`} />
          </g>
        )}

        {ingredient.artKind === 'aloe-cucumber' && (
          <g>
            {/* Crisp cucumber round + dewy botanical aloe blade */}
            <path d="M36 104 C54 58, 90 36, 128 34 C112 70, 78 96, 36 104 Z" fill={`url(#leaf-${ingredient.id})`} />
            <circle cx="92" cy="78" r="28" fill="#BBD8A4" stroke="#4D7E4A" strokeWidth="3.5" />
            <circle cx="92" cy="78" r="21" fill="#E3F2D4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <ellipse
                key={deg}
                cx="92"
                cy="66"
                rx="2.3"
                ry="5"
                transform={`rotate(${deg} 92 78)`}
                fill="#FFFDF4"
                fillOpacity="0.9"
              />
            ))}
            <circle cx="62" cy="58" r="7.5" fill={`url(#drop-${ingredient.id})`} />
          </g>
        )}

        {ingredient.artKind === 'pea-quinoa' && (
          <g>
            {/* Curved green botanical pod with luminous pearl seeds + quinoa grains */}
            <path d="M38 82 C54 44, 98 34, 126 52 C106 84, 68 96, 38 82 Z" fill={`url(#leaf-${ingredient.id})`} />
            <circle cx="66" cy="68" r="8.5" fill="#B5D38E" stroke="#6E9952" strokeWidth="1" />
            <circle cx="85" cy="61" r="9.2" fill="#C4DF9D" stroke="#6E9952" strokeWidth="1" />
            <circle cx="104" cy="57" r="7.8" fill="#B5D38E" stroke="#6E9952" strokeWidth="1" />
            <circle cx="56" cy="100" r="6" fill={`url(#gold-${ingredient.id})`} />
            <circle cx="72" cy="105" r="5" fill="#E8C98F" />
            <circle cx="88" cy="101" r="6.5" fill={`url(#gold-${ingredient.id})`} />
            <circle cx="104" cy="96" r="4.5" fill="#F2D7A5" />
          </g>
        )}

        {ingredient.artKind === 'sweet-almond' && (
          <g>
            {/* Golden roasted almond + luminous nourishing oil droplet */}
            <path d="M44 92 C44 62, 74 42, 92 42 C96 66, 78 96, 44 92 Z" fill="#9E6234" />
            <path d="M52 86 C56 68, 72 54, 86 48" stroke="#6F3F1B" strokeWidth="1.4" strokeOpacity="0.45" fill="none" />
            <path d="M84 96 C78 72, 96 52, 118 52 C122 76, 108 100, 84 96 Z" fill="#C78A54" />
            <circle cx="84" cy="78" r="18" fill={`url(#gold-${ingredient.id})`} fillOpacity="0.88" />
            <ellipse cx="78" cy="71" rx="6" ry="3" transform="rotate(-24 78 71)" fill="#FFFDF6" fillOpacity="0.85" />
          </g>
        )}

        {ingredient.artKind === 'hyaluronic-drop' && (
          <g>
            {/* Layered luminous crystal moisture droplets */}
            <circle cx="82" cy="68" r="32" fill={`url(#drop-${ingredient.id})`} />
            <ellipse cx="70" cy="54" rx="11" ry="6" transform="rotate(-28 70 54)" fill="#FFFFFF" fillOpacity="0.9" />
            <circle cx="48" cy="88" r="10" fill={`url(#drop-${ingredient.id})`} />
            <circle cx="114" cy="92" r="8" fill={`url(#drop-${ingredient.id})`} />
            <circle cx="112" cy="46" r="5.5" fill="#FFFFFF" fillOpacity="0.72" />
          </g>
        )}
      </svg>
    </div>
  );
}

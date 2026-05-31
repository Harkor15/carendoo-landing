# Carendoo Landing Page - Dokumentacja dla Agentów

## 📋 Przegląd projektu

Minimalistyczna landing page dla Carendoo - aplikacji do zarządzania wydatkami z AI. Stack:
- **React 18** + **TypeScript** (typesafety)
- **Vite** (szybki dev server, build)
- **React Router v7** (SPA routing)
- **Tailwind CSS** (styling)
- **i18next** (wielojęzyczność: PL, EN)

## 🏗️ Struktura projektu

```
src/
├── app/                    # Logika aplikacji
│   ├── app.tsx            # Landing page
│   ├── Confirm.tsx        # Podstrona potwierdzenia
│   └── TranslationKeys.ts # Stałe dla tłumaczeń
├── components/            # Komponenty wielokrotnego użytku (Atomic Design)
│   ├── ButtonLarge.tsx
│   ├── ButtonSmall.tsx
│   ├── ButtonText.tsx
│   └── Card.tsx
├── images/                # Assety (logo, ilustracje)
├── i18n.ts               # Konfiguracja wielojęzyczności
├── index.css             # Style globalne
├── main.tsx              # Entry point + routing
└── vite-env.d.ts         # Deklaracje typów Vite

public/
├── 404.html              # Fallback dla GitHub Pages (SPA routing)
├── CNAME                 # Custom domain
└── manifest.webmanifest  # PWA metadata
```

## 🎯 Główne zasady

### 1. **Komponenty (Atomic Design)**
- **ButtonSmall/Large** - Akcje główne
- **ButtonText** - Linki nieobowiązkowe
- **Card** - Karty z treścią (Feature cards)

Wszystkie komponenty:
- Są **funkcyjne** (nie klasowe)
- Mają **jasne propsy** (TypeScript interface)
- Stylem się zajmuje **Tailwind** (nie separate CSS)

### 2. **Routing (React Router v7)**
```
/ → App (landing page główna)
/confirm → Confirm (potwierdzenie)
```

**Ścieżka routing**:
- Wszystkie routy zdefiniowane w `src/main.tsx`
- Brak zagnieżdżeń - proste, czyste, skalowalne
- Fallback dla 404 skonfigurowany (patrz `SPA_ROUTING_CONFIG.md`)

### 3. **Wielojęzyczność (i18next)**
- Obsługiwane języki: **PL**, **EN**
- Przechowywanie:
  - Konfiguracja: `src/i18n.ts`
  - Klucze: `src/app/TranslationKeys.ts` (Enums dla type-safety)
  - Zasoby: wewnętrzne (w `i18n.ts`) - nie ma osobnych plików JSON

**Użycie w komponencie**:
```tsx
const { t, i18n } = useTranslation();
const text = t(TranslationKeys.title);
i18n.changeLanguage('en');
```

### 4. **Styling (Tailwind)**
- Konfiguracja: `tailwind.config.js`
- CSS globals: `src/index.css`
- **BEZ** custom CSS plików dla komponentów
- Tailwind class'y bezpośrednio w JSX

## 🚀 Workflow

### Development
```bash
npm run dev
# Uruchamia Vite dev server na http://localhost:3000
# Hot reload działa automatycznie
# Routing SPA obsługiwany przez historyApiFallback
```

### Build
```bash
npm run build
# TypeScript type-check → Vite build
# Output: dist/
```

### Preview (production build lokalnie)
```bash
npm run preview
# Uruchamia preview dist/ na http://localhost:4173
```

### Deployment
```bash
npm run deploy
# Buduje projekt i deployuje na GitHub Pages
# Ustawia CNAME dla carendoo.com
```

### Linting
```bash
npm run lint
# ESLint + Prettier check (skonfigurowane z lint-staged w .git/hooks)
```

## ✅ Checklist dodawania nowych podstron

1. **Utwórz plik strony**: `src/app/NewPage.tsx`
   ```tsx
   import { useTranslation } from 'react-i18next';
   
   export default function NewPage() {
     const { t } = useTranslation();
     return <div>{/* Zawartość */}</div>;
   }
   ```

2. **Dodaj route**: `src/main.tsx`
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Dodaj tłumaczenia**: `src/app/TranslationKeys.ts`
   ```ts
   export enum TranslationKeys {
     // ...
     newPageTitle = 'newPage.title',
   }
   ```

4. **Dodaj zasoby**: `src/i18n.ts`
   ```ts
   pl: {
     newPage: { title: 'Moja strona' }
   }
   ```

5. **Testuj**: `npm run dev` → http://localhost:3000/new-page

## 📦 Zależności klucze

| Pakiet | Wersja | Rola |
|--------|--------|------|
| react | 18.3.1 | Core UI framework |
| react-router-dom | 7.15.0 | Routing |
| react-i18next | 13.0.0 | Tłumaczenia |
| tailwindcss | Latest | Styling |
| typescript | Latest | Type safety |
| vite | Latest | Build tool |

## 🔧 Konfiguracje

- **ESLint**: `eslint.config.js` - style guide
- **Prettier**: zintegrowany z ESLint (format on save)
- **Tailwind**: `tailwind.config.js` - motyw
- **TypeScript**: `tsconfig.json` + `tsconfig.app.json`
- **Vite**: `vite.config.ts` - aliases path (`@components`, etc.)
- **Husky + Lint-staged**: Auto-linting na commit

## 🐛 Troubleshooting

**404 przy odświeżeniu na `/confirm`?**
→ `vite.config.ts` ma `historyApiFallback: true`. Jeśli nie działa, sprawdź `SPA_ROUTING_CONFIG.md`

**Tłumaczenia się nie zmieniają?**
→ Upewnij się, że używasz `i18n.changeLanguage()` z `useTranslation()` hook'a

**Build się nie kompiluje?**
→ Sprawdź `npm run lint` - TypeScript errors będą widoczne tam

**Routing źle pracuje na production?**
→ Sprawdź `.htaccess` / serwer - musi redirectować wszystkie 404 na `index.html`

## 📝 Notatki

- **Brak testów** - dla mini landing page'a nie są konieczne (można dodać gdy będzie potrzeba)
- **Brak API** - dane są hardcoded. Gdy będzie backend, dodaj layer do `src/services/`
- **Responsywne** - Tailwind breakpoints (sm, md, lg, xl)
- **PWA-ready** - `manifest.webmanifest` jest, ale nie zaimplementowany. Można dodać Service Worker gdy będzie potrzeba

---

*Ostatnia aktualizacja: 1 czerwca 2026*

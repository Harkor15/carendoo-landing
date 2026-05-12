# Carendoo Landing Page - Konfiguracja SPA Routing

## Problem
W Single Page Application (SPA) routing nie działa, gdy użytkownik odświeży stronę na ścieżce innej niż root (np. `/confirm`). Serwer zwraca 404, ponieważ plik nie istnieje fizycznie.

## Rozwiązanie

### 1. **GitHub Pages** (jeśli będziesz deployować na GH Pages)
Już skonfigurowane w:
- `public/404.html` - Catches all 404s i redirectuje do `index.html` z informacją o oryginalnej ścieżce
- `index.html` - Zawiera skrypt obsługujący redirect z `sessionStorage`

**Jak działa:**
1. Użytkownik wejdzie na `/confirm`
2. GitHub Pages zwróci 404.html
3. 404.html przetrzymuje ścieżkę w `sessionStorage` i redirectuje do `/`
4. index.html odczyta `sessionStorage.redirect` i przywróci oryginalną ścieżkę
5. React Router obsługuje routing

### 2. **Serwer Apache** (.htaccess)
Plik `public/.htaccess` zawiera regułę mod_rewrite, która:
- Pozwala na dostęp do istniejących plików (obrazy, CSS, JS)
- Wszystkie inne żądania redirectuje do `index.html`

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### 3. **Nginx**
Dodaj do konfiguracji Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 4. **Node.js / Express**
Dodaj middleware:
```javascript
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
```

### 5. **Dev Server (Vite)**
Już skonfigurowany w `vite.config.ts`:
```typescript
server: {
  port: 3000,
  middlewareMode: false,
  historyApiFallback: true,
}
```

Dzięki `historyApiFallback: true` - odświeżenie strony na `/confirm` będzie działać lokalnie.

## Testowanie

### Lokalnie
```bash
npm run dev
# Odwiedź http://localhost:3000/confirm
# Odśwież stronę (F5)
# Powinno działać bez 404
```

### Build produkcyjny
```bash
npm run build
npm run preview
# Odwiedź http://localhost:4173/confirm
# Odśwież stronę
# Powinno działać bez 404
```

## Deployment

Jeśli deployujesz na **carendoo.com**, upewnij się, że serwer:
- Ma skonfigurowany `.htaccess` (Apache)
- Lub posiada odpowiednią konfigurację Nginx
- Lub ma middleware Node.js do handleowania SPA

## Pliki zmodyfikowane/dodane
- ✅ `vite.config.ts` - Dodano `historyApiFallback`
- ✅ `index.html` - Dodano redirect script
- ✅ `public/404.html` - Nowy plik (GitHub Pages)
- ✅ `public/.htaccess` - Nowy plik (Apache)

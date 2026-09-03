import fs from "fs";
import path from "path";

// List of all SPA routes that need direct 200 OK responses on GitHub Pages
const routes = [
  "confirm",
  "privacy-policy",
  "delete-account",
  "expired-link",
  "error",
];

const distDir = path.resolve("dist");
const indexHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexHtmlPath)) {
  console.error("dist/index.html not found. Run build first.");
  process.exit(1);
}

const indexContent = fs.readFileSync(indexHtmlPath, "utf-8");

routes.forEach((route) => {
  // 1. Create [route]/index.html (handles https://carendoo.com/route/)
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, "index.html"), indexContent);

  // 2. Create [route].html (handles clean URLs like https://carendoo.com/route on GitHub Pages without trailing slash)
  const routeFile = path.join(distDir, `${route}.html`);
  fs.writeFileSync(routeFile, indexContent);

  console.log(`[postbuild] Created ${route}/index.html and ${route}.html`);
});

console.log("[postbuild] Completed copying index.html for all route paths.");

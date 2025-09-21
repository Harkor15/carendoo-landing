import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/app";
import ico from "./images/ico.png";
import "./i18n";

const setFavicon = (href: string) => {
  const existing = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
  if (existing) {
    existing.href = href;
    return;
  }
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = href;
  document.head.appendChild(link);
};

setFavicon(ico);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

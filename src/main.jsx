import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// ثبّت سلوك الاسترجاع الافتراضي لمنع قفزات بسيطة عند التحميل/الرجوع
if ('scrollRestoration' in window.history) {
  try { window.history.scrollRestoration = 'manual'; } catch {}
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import { Suspense } from "react";
import { Link } from "react-router-dom";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import SEOPage from "./pages/services/seo";
import SEOAuditPage from "./pages/services/seo-audit";
import GoogleAdsPage from "./pages/services/google-ads";
import BrandMarketingPage from "./pages/services/brand-marketing";
import CybersecurityPage from "./pages/services/cybersecurity";
import routes from "tempo-routes";
import Contact from "./pages/contact";

function AppRoutes() {
  const tempoRoutes =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <>
      {tempoRoutes}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/seo-audit" element={<SEOAuditPage />} />
        <Route path="/services/google-ads" element={<GoogleAdsPage />} />
        <Route
          path="/services/brand-marketing"
          element={<BrandMarketingPage />}
        />
        <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;

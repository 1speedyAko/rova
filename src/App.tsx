import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import SEOPage from "./pages/services/seo";
import GoogleAdsPage from "./pages/services/google-ads";
import BrandMarketingPage from "./pages/services/brand-marketing";
import CybersecurityPage from "./pages/services/cybersecurity";
import routes from "tempo-routes";
import Contact from "./pages/contact";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route
            path="/services/brand-marketing"
            element={<BrandMarketingPage />}
          />
          <Route
            path="/services/cybersecurity"
            element={<CybersecurityPage />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;

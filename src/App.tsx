import { RouterContext, useRouterProvider } from "@/lib/use-router";
import { Layout } from "@/components/site/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { TreatmentsPage } from "@/pages/TreatmentsPage";
import { BlogPage } from "@/pages/BlogPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { AppointmentsPage } from "@/pages/AppointmentsPage";
import { ContactPage } from "@/pages/ContactPage";
import { SkinGuidePage } from "@/pages/SkinGuidePage";
import { BlogAffordableSkincarePage } from "@/pages/BlogAffordableSkincarePage";
import { BlogAcneSkinChangesPage } from "@/pages/BlogAcneSkinChangesPage";
import { BlogFairnessCreamSteroidPage } from "@/pages/BlogFairnessCreamSteroidPage";
import { BlogBlueLightScreenTimePage } from "@/pages/BlogBlueLightScreenTimePage";
import { BlogMnrfVsCo2LaserPage } from "@/pages/BlogMnrfVsCo2LaserPage";
import { BlogBangaloreWeatherSkinPage } from "@/pages/BlogBangaloreWeatherSkinPage";
import { BlogLaserHairReductionMythsPage } from "@/pages/BlogLaserHairReductionMythsPage";
import { BlogAcneScarringPage } from "@/pages/BlogAcneScarringPage";
import { DrKrithiPage } from "@/pages/DrKrithiPage";

function renderPage(path: string) {
  switch (path) {
    case "/about":        return <AboutPage />;
    case "/dr-krithi-subhas-chandra-dermatologist-bengaluru": return <DrKrithiPage />;
    // Legacy / alternate slugs — redirect to canonical Dr. Krithi page for SEO
    case "/dr-krithi-subhas":
    case "/dr-krithi-subhas-chandra":
    case "/dr-kriti-subhas":
    case "/dr-kriti-subhas-chandra":
    case "/dr-krithi":
    case "/dr-kriti":
    case "/doctor":       return <DrKrithiPage />;
    case "/treatments":   return <TreatmentsPage />;
    case "/skin-guide":   return <SkinGuidePage />;
    case "/blog":         return <BlogPage />;
    case "/blog/affordable-skincare-simple-routine": return <BlogAffordableSkincarePage />;
    case "/blog/acne-treatment-skin-changes-dermatologist": return <BlogAcneSkinChangesPage />;
    case "/blog/fairness-cream-steroid-skin-awareness": return <BlogFairnessCreamSteroidPage />;
    case "/blog/blue-light-skin-damage-screen-time": return <BlogBlueLightScreenTimePage />;
    case "/blog/mnrf-vs-fractional-co2-laser-acne-scars": return <BlogMnrfVsCo2LaserPage />;
    case "/blog/bangalore-weather-skin-barrier-breakouts": return <BlogBangaloreWeatherSkinPage />;
    case "/blog/laser-hair-reduction-myths-permanent": return <BlogLaserHairReductionMythsPage />;
    case "/blog/why-some-people-scar-easily-after-pimples": return <BlogAcneScarringPage />;
    case "/gallery":      return <GalleryPage />;
    case "/appointments": return <AppointmentsPage />;
    case "/contact":      return <ContactPage />;
    default:              return <HomePage />;
  }
}

export default function App() {
  const router = useRouterProvider();
  return (
    <RouterContext.Provider value={router}>
      <Layout>
        {renderPage(router.path)}
      </Layout>
    </RouterContext.Provider>
  );
}

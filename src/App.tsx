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

function renderPage(path: string) {
  switch (path) {
    case "/about":        return <AboutPage />;
    case "/treatments":   return <TreatmentsPage />;
    case "/skin-guide":   return <SkinGuidePage />;
    case "/blog":         return <BlogPage />;
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

import { useEffect } from "react";

const BASE_URL = "https://tasvaclinicwebsite-1.onrender.com";
const PAGE_SCHEMA_ID = "seo-page-schema";

const DEFAULTS = {
  title: "Tasvaa Skin & Hair Clinic | Best Dermatologist in Bengaluru | Sarjapur",
  description:
    "Expert skin & hair treatments in Sarjapur, Bengaluru. Consult Dr. Krithi Subhas — MBBS, MD, DNB Dermatologist. Acne, pigmentation, PRP therapy, laser hair reduction, hair fall treatment & more. Book now.",
  ogTitle: "Tasvaa Skin & Hair Clinic | Best Dermatologist in Bengaluru",
  ogDesc:
    "Advanced skin & hair treatments in Sarjapur, Bengaluru. Acne, PRP, laser, pigmentation, hydra facials & more — doctor-led, personalised care.",
  twitterTitle: "Tasvaa Skin & Hair Clinic | Dermatologist in Bengaluru",
  twitterDesc:
    "Expert skin & hair treatments in Sarjapur, Bengaluru. PRP, laser, acne, pigmentation & more.",
  canonical: `${BASE_URL}/`,
};

function metaByName(name: string): HTMLMetaElement | null {
  return document.querySelector(`meta[name="${name}"]`);
}

function metaByProp(property: string): HTMLMetaElement | null {
  return document.querySelector(`meta[property="${property}"]`);
}

function setMetaName(name: string, content: string) {
  const el = metaByName(name);
  if (el) el.content = content;
}

function setMetaProp(property: string, content: string) {
  const el = metaByProp(property);
  if (el) el.content = content;
}

function setCanonical(href: string) {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (el) el.href = href;
}

function upsertPageSchema(json: string) {
  let el = document.getElementById(PAGE_SCHEMA_ID) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = PAGE_SCHEMA_ID;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = json;
}

function removePageSchema() {
  document.getElementById(PAGE_SCHEMA_ID)?.remove();
}

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  schemaJson?: string;
}

export function useSEO({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  schemaJson,
}: SEOConfig) {
  useEffect(() => {
    const canonical = path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;
    const resolvedOgTitle = ogTitle ?? title;
    const resolvedOgDesc = ogDescription ?? description;

    document.title = title;
    setMetaName("description", description);
    setCanonical(canonical);
    setMetaProp("og:title", resolvedOgTitle);
    setMetaProp("og:description", resolvedOgDesc);
    setMetaProp("og:url", canonical);
    setMetaName("twitter:title", resolvedOgTitle);
    setMetaName("twitter:description", resolvedOgDesc);

    if (schemaJson) {
      upsertPageSchema(schemaJson);
    } else {
      removePageSchema();
    }

    return () => {
      document.title = DEFAULTS.title;
      setMetaName("description", DEFAULTS.description);
      setCanonical(DEFAULTS.canonical);
      setMetaProp("og:title", DEFAULTS.ogTitle);
      setMetaProp("og:description", DEFAULTS.ogDesc);
      setMetaProp("og:url", DEFAULTS.canonical);
      setMetaName("twitter:title", DEFAULTS.twitterTitle);
      setMetaName("twitter:description", DEFAULTS.twitterDesc);
      removePageSchema();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, ogTitle, ogDescription, schemaJson]);
}

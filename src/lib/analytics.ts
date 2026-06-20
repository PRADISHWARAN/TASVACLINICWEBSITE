const isDev = import.meta.env.DEV;

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | undefined {
  return (window as unknown as { gtag?: GtagFn }).gtag;
}

// GA4 auto-fires page_view on initial load via the gtag.js script.
// This flag skips the first call from useSEO to prevent double-counting.
let _initialPageHandled = false;

export function trackPageView(pagePath: string, pageTitle: string) {
  if (!_initialPageHandled) {
    _initialPageHandled = true;
    return;
  }
  const g = getGtag();
  if (!g) return;
  g("event", "page_view", {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
  if (isDev) console.log("[GA4] Page View Tracked:", pagePath);
}

export function trackPhoneClick(phoneNumber: string) {
  const g = getGtag();
  if (!g) return;
  g("event", "phone_click", {
    event_category: "engagement",
    event_label: phoneNumber,
  });
  if (isDev) console.log("[GA4] Phone Click Tracked:", phoneNumber);
}

export function trackWhatsAppClick() {
  const g = getGtag();
  if (!g) return;
  g("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: "whatsapp",
  });
  if (isDev) console.log("[GA4] WhatsApp Click Tracked");
}

export function trackAppointmentLead() {
  const g = getGtag();
  if (!g) return;
  g("event", "generate_lead", {
    event_category: "lead",
    event_label: "appointment_form",
  });
  if (isDev) console.log("[GA4] Appointment Lead Tracked");
}

export function trackContactLead() {
  const g = getGtag();
  if (!g) return;
  g("event", "generate_lead", {
    event_category: "lead",
    event_label: "contact_form",
  });
  if (isDev) console.log("[GA4] Contact Lead Tracked");
}

// Generic event — kept for any future custom events
export function trackEvent(name: string, params?: Record<string, string | number>) {
  const g = getGtag();
  if (g) g("event", name, params ?? {});
}

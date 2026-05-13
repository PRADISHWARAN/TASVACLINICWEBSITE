export function trackEvent(name: string, params?: Record<string, string | number>) {
  const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof g === "function") g("event", name, params ?? {});
}

/**
 * Lightweight event tracking.
 *
 * Events are forwarded to Vercel Web Analytics (window.va) and/or Google
 * Analytics (window.gtag) when either is installed on the page. Nothing is
 * stored in the visitor's browser and no numbers are invented.
 */

export type AnalyticsEventType =
  | 'page_view'
  | 'project_click'
  | 'cta_click'
  | 'contact_submit'
  | 'whatsapp_click'
  | 'button_click';

type Primitive = string | number | boolean | null;

declare global {
  interface Window {
    va?: (event: 'event', payload: { name: string; data?: Record<string, Primitive> }) => void;
    gtag?: (command: 'event', name: string, params?: Record<string, unknown>) => void;
  }
}

function toPrimitives(details?: Record<string, unknown>): Record<string, Primitive> | undefined {
  if (!details) return undefined;
  const out: Record<string, Primitive> = {};
  for (const [key, value] of Object.entries(details)) {
    if (value === null || ['string', 'number', 'boolean'].includes(typeof value)) {
      out[key] = value as Primitive;
    } else {
      out[key] = String(value);
    }
  }
  return out;
}

export const AnalyticsService = {
  initialize(): void {
    // Page views are recorded automatically by Vercel/GA when installed.
  },

  trackEvent(type: AnalyticsEventType, label: string, details?: Record<string, unknown>): void {
    if (typeof window === 'undefined' || type === 'page_view') return;
    const data = { label, ...toPrimitives(details) };
    try {
      window.va?.('event', { name: type, data });
      window.gtag?.('event', type, data);
    } catch {
      // Tracking must never break the page.
    }
  },
};

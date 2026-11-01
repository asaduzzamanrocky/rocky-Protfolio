import { AnalyticsEvent, NotificationPreferences } from "../types";

const STORAGE_KEY_EVENTS = "rocky_portfolio_local_events_v2";
const STORAGE_KEY_METRICS = "rocky_portfolio_local_metrics_v2";
const STORAGE_KEY_AUTH = "rocky_portfolio_auth_role";
const STORAGE_KEY_NOTIFS = "rocky_portfolio_notification_settings";

export function detectDevice():
  "Mac" | "iPhone" | "Windows" | "Android" | "Other" {
  if (typeof window === "undefined") return "Mac";
  const ua = window.navigator.userAgent;
  if (/Macintosh|Mac OS X/i.test(ua)) return "Mac";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iPhone";
  if (/Windows/i.test(ua)) return "Windows";
  if (/Android/i.test(ua)) return "Android";
  return "Other";
}

export interface MetricSummary {
  totalPageViews: number;
  uniqueVisitors: number;
  totalProjectClicks: number;
  contactSubmissions: number;
  whatsappInquiries: number;
  averageCTR: number;
  deviceBreakdown: {
    mac: number;
    iphone: number;
    windows: number;
    android: number;
    other: number;
  };
  trafficSources: { source: string; percentage: number }[];
  projectCTRMap: Record<string, { clicks: number; views: number }>;
}

// Local browser activity only. These counters are not aggregate site analytics.
const DEFAULT_METRICS: MetricSummary = {
  totalPageViews: 0,
  uniqueVisitors: 0,
  totalProjectClicks: 0,
  contactSubmissions: 0,
  whatsappInquiries: 0,
  averageCTR: 0,
  deviceBreakdown: { mac: 0, iphone: 0, windows: 0, android: 0, other: 0 },
  trafficSources: [],
  projectCTRMap: {},
};

export const DEFAULT_NOTIFICATIONS: NotificationPreferences = {
  frequency: "realtime",
  channels: {
    email: true,
    whatsapp: true,
    browserPush: false,
    soundEffects: true,
  },
  clientInquiryAlerts: true,
  weeklyTrafficReport: true,
  securityPings: true,
};

export class AnalyticsService {
  private static events: AnalyticsEvent[] = [];
  private static metrics: MetricSummary = DEFAULT_METRICS;

  static initialize(): void {
    if (typeof window === "undefined") return;
    try {
      const storedMetrics = localStorage.getItem(STORAGE_KEY_METRICS);
      if (storedMetrics) {
        this.metrics = JSON.parse(storedMetrics);
      } else {
        localStorage.setItem(
          STORAGE_KEY_METRICS,
          JSON.stringify(DEFAULT_METRICS),
        );
      }

      const storedEvents = localStorage.getItem(STORAGE_KEY_EVENTS);
      if (storedEvents) {
        this.events = JSON.parse(storedEvents);
      } else {
        this.events = [];
        localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(this.events));
      }
    } catch {
      // safe fallback
    }
  }

  static trackEvent(
    type: AnalyticsEvent["type"],
    label: string,
    details?: Record<string, unknown>,
  ): void {
    const device = detectDevice();
    const event: AnalyticsEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString(),
      type,
      label,
      device,
      details,
    };

    this.events.unshift(event);
    if (this.events.length > 100) this.events.pop();

    // Update metrics
    if (type === "page_view") {
      this.metrics.totalPageViews += 1;
    } else if (type === "project_click") {
      this.metrics.totalProjectClicks += 1;
      const projId = details?.projectId as string;
      if (projId) {
        if (!this.metrics.projectCTRMap[projId]) {
          this.metrics.projectCTRMap[projId] = { clicks: 0, views: 0 };
        }
        this.metrics.projectCTRMap[projId].clicks += 1;
      }
    } else if (type === "contact_submit") {
      this.metrics.contactSubmissions += 1;
    } else if (type === "whatsapp_click") {
      this.metrics.whatsappInquiries += 1;
    }

    // Recalculate average CTR
    if (this.metrics.totalPageViews > 0) {
      this.metrics.averageCTR = Number(
        (
          (this.metrics.totalProjectClicks / this.metrics.totalPageViews) *
          100
        ).toFixed(1),
      );
    }

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(this.events));
        localStorage.setItem(STORAGE_KEY_METRICS, JSON.stringify(this.metrics));
      } catch {
        // ignore
      }
    }
  }

  static getMetrics(): MetricSummary {
    return { ...this.metrics };
  }

  static getRecentEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  static getRole(): "guest" | "admin" {
    if (typeof window === "undefined") return "guest";
    return (
      (localStorage.getItem(STORAGE_KEY_AUTH) as "guest" | "admin") || "guest"
    );
  }

  static setRole(role: "guest" | "admin"): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY_AUTH, role);
  }

  static getNotificationPreferences(): NotificationPreferences {
    if (typeof window === "undefined") return DEFAULT_NOTIFICATIONS;
    try {
      const stored = localStorage.getItem(STORAGE_KEY_NOTIFS);
      return stored ? JSON.parse(stored) : DEFAULT_NOTIFICATIONS;
    } catch {
      return DEFAULT_NOTIFICATIONS;
    }
  }

  static saveNotificationPreferences(prefs: NotificationPreferences): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(prefs));
    } catch {
      // ignore
    }
  }
}

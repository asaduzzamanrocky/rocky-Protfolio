export type ThemeMode = 'dark-crimson' | 'dark-emerald' | 'dark-cyan' | 'light-contrast';

export interface Project {
  id: string;
  title: string;
  domain: string;
  category: 'healthcare' | 'corporate' | 'ecommerce' | 'uiux';
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  liveUrl: string;
  isFeatured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  bulletPoints: string[];
  tags: string[];
}

export interface ToolItem {
  name: string;
  category: 'web' | 'design' | 'ecommerce' | 'seo' | 'cloud' | 'ai' | 'security';
  level: number; // 0 - 100
  iconName: string;
  highlight: string;
}

export interface AnalyticsEvent {
  id: string;
  timestamp: string;
  type: 'page_view' | 'project_click' | 'cta_click' | 'contact_submit' | 'whatsapp_click' | 'button_click';
  label: string;
  device: 'Mac' | 'iPhone' | 'Windows' | 'Android' | 'Other';
  details?: Record<string, unknown>;
}

export interface NotificationPreferences {
  frequency: 'realtime' | 'daily' | 'weekly' | 'critical_only';
  channels: {
    email: boolean;
    whatsapp: boolean;
    browserPush: boolean;
    soundEffects: boolean;
  };
  clientInquiryAlerts: boolean;
  weeklyTrafficReport: boolean;
  securityPings: boolean;
}

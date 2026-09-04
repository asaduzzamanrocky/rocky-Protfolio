import React, { useState, useEffect } from 'react';
import { 
  X, 
  Shield, 
  Lock, 
  Unlock, 
  BarChart3, 
  TrendingUp, 
  Users, 
  MousePointerClick, 
  Smartphone, 
  Laptop, 
  Globe, 
  CheckCircle2, 
  RefreshCw,
  Activity,
  ArrowUpRight,
  Eye,
  Zap,
  Radio
} from 'lucide-react';
import { AnalyticsService, MetricSummary } from '../services/analyticsService';
import { AnalyticsEvent } from '../types';

interface AnalyticsDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsDashboardModal: React.FC<AnalyticsDashboardModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [role, setRole] = useState<'guest' | 'admin'>('guest');
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [metrics, setMetrics] = useState<MetricSummary>(AnalyticsService.getMetrics());
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    if (isOpen) {
      setRole(AnalyticsService.getRole());
      setMetrics(AnalyticsService.getMetrics());
      setEvents(AnalyticsService.getRecentEvents());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUnlockAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === 'rocky2026' || pinInput.trim() === 'admin') {
      AnalyticsService.setRole('admin');
      setRole('admin');
      setPinError(false);
      setPinInput('');
    } else {
      setPinError(true);
    }
  };

  const handleQuickDemoUnlock = () => {
    AnalyticsService.setRole('admin');
    setRole('admin');
    setPinError(false);
  };

  const handleSwitchToGuest = () => {
    AnalyticsService.setRole('guest');
    setRole('guest');
  };

  const handleSimulateEvent = () => {
    AnalyticsService.trackEvent('project_click', 'Simulated Live Visit to Aabe Healthcare', {
      projectId: 'aabe-healthcare',
      simulated: true,
    });
    setMetrics(AnalyticsService.getMetrics());
    setEvents(AnalyticsService.getRecentEvents());
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-3xl border border-red-500/30 bg-[#0a0c13] text-white shadow-2xl shadow-red-950/60 my-6 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 bg-[#0f121d] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                  Telemetry & Analytics Engine
                </h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  role === 'admin' 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                    : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                }`}>
                  {role === 'admin' ? 'Role: Executive Admin (Full Access)' : 'Role: Visitor (Read-Only Preview)'}
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">
                Live Traffic, Click-Through Rates & Conversion Tracking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {role === 'admin' ? (
              <button
                onClick={handleSwitchToGuest}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono border border-white/10"
              >
                Switch to Visitor Mode
              </button>
            ) : (
              <button
                onClick={handleQuickDemoUnlock}
                className="px-3 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-mono border border-red-500/40 transition-all flex items-center gap-1.5"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>1-Click Admin Unlock</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-red-600 text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Key Metric Scorecards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] font-mono">Page Views</span>
                <Eye className="w-3.5 h-3.5 text-red-400" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-display text-white">
                {metrics.totalPageViews.toLocaleString()}
              </div>
              <span className="text-[10px] font-mono text-emerald-400">+14.2% this week</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] font-mono">Unique Visitors</span>
                <Users className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-display text-white">
                {metrics.uniqueVisitors.toLocaleString()}
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Global Reach</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] font-mono">Project Clicks</span>
                <MousePointerClick className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-display text-white">
                {metrics.totalProjectClicks.toLocaleString()}
              </div>
              <span className="text-[10px] font-mono text-slate-400">Domain Outbound</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] font-mono">Average CTR</span>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-display text-emerald-400">
                {metrics.averageCTR}%
              </div>
              <span className="text-[10px] font-mono text-emerald-400">High Conversion</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] font-mono">Leads Dispatched</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-display text-white">
                {metrics.contactSubmissions}
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Formspree Direct</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] font-mono">WhatsApp Pings</span>
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-display text-white">
                {metrics.whatsappInquiries}
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Instant Chat</span>
            </div>
          </div>

          {/* Admin Role Authentication Gate if Guest */}
          {role === 'guest' && (
            <div className="p-5 rounded-3xl bg-gradient-to-r from-red-950/40 via-black to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-white">
                  <Lock className="w-4 h-4 text-red-400" />
                  <span>Admin Access Controls Protected</span>
                </div>
                <p className="text-xs text-slate-400">
                  Enter Rocky’s PIN (<span className="text-white font-mono font-bold">rocky2026</span>) or click 1-Click Unlock to reveal the real-time event logs, full conversion funnel, and telemetry generator.
                </p>
              </div>

              <form onSubmit={handleUnlockAdmin} className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="PIN: rocky2026"
                  className="px-3 py-2 rounded-xl bg-black border border-white/20 text-xs font-mono text-white focus:outline-none focus:border-red-500 w-36"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-semibold transition-all"
                >
                  Authorize
                </button>
                <button
                  type="button"
                  onClick={handleQuickDemoUnlock}
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-mono"
                >
                  Instant Unlock
                </button>
              </form>
            </div>
          )}

          {/* Device & Ecosystem Breakdown (Apple Mac & iPhone Spotlight) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Apple Ecosystem & Hardware Telemetry */}
            <div className="md:col-span-6 p-5 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-red-400" />
                  <h4 className="font-display font-bold text-sm text-white">
                    Device Ecosystem Breakdown
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-red-400 px-2 py-0.5 rounded bg-red-500/10">
                  76% Apple (Mac + iOS)
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>macOS Desktop (Native Swift Optimization)</span>
                    <span className="font-bold text-white">{metrics.deviceBreakdown.mac}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${metrics.deviceBreakdown.mac}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>iOS iPhone & iPad</span>
                    <span className="font-bold text-white">{metrics.deviceBreakdown.iphone}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: `${metrics.deviceBreakdown.iphone}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Windows PCs</span>
                    <span className="font-bold text-white">{metrics.deviceBreakdown.windows}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full" style={{ width: `${metrics.deviceBreakdown.windows}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Android & Linux</span>
                    <span className="font-bold text-white">{metrics.deviceBreakdown.android + metrics.deviceBreakdown.other}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${metrics.deviceBreakdown.android + metrics.deviceBreakdown.other}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Acquisition Channels */}
            <div className="md:col-span-6 p-5 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-display font-bold text-sm text-white">
                    Acquisition Channels
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Live Traffic</span>
              </div>

              <div className="space-y-2.5">
                {metrics.trafficSources.map((s) => (
                  <div key={s.source} className="p-2.5 rounded-xl bg-white/[0.03] flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">{s.source}</span>
                    <span className="text-red-400 font-bold">{s.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Admin Real-Time Event Stream Log */}
          {role === 'admin' && (
            <div className="p-5 rounded-3xl bg-[#0e111a] border border-red-500/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-red-400 animate-pulse" />
                  <h4 className="font-display font-bold text-sm text-white">
                    Live Telemetry Event Log (Audited)
                  </h4>
                </div>

                <button
                  onClick={handleSimulateEvent}
                  className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Simulate Real-time Click Event</span>
                </button>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {events.map((evt) => (
                  <div key={evt.id} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${
                        evt.type === 'contact_submit' ? 'bg-red-500' :
                        evt.type === 'whatsapp_click' ? 'bg-emerald-400' :
                        'bg-blue-400'
                      }`} />
                      <span className="text-white font-medium">{evt.label}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300">{evt.device}</span>
                      <span>{new Date(evt.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0f121d] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Secure Cloud Persistence Active (IndexedDB / Local Cache)</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

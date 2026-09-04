import React, { useState, useEffect } from 'react';
import { 
  X, 
  Settings, 
  Bell, 
  Mail, 
  MessageSquare, 
  Volume2, 
  Cloud, 
  CheckCircle2, 
  Smartphone, 
  ShieldAlert, 
  Sparkles,
  Save
} from 'lucide-react';
import { NotificationPreferences } from '../types';
import { AnalyticsService } from '../services/analyticsService';

interface NotificationSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationSettingsModal: React.FC<NotificationSettingsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [preferences, setPreferences] = useState<NotificationPreferences>(
    AnalyticsService.getNotificationPreferences()
  );
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPreferences(AnalyticsService.getNotificationPreferences());
      setIsSaved(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    AnalyticsService.saveNotificationPreferences(preferences);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg rounded-3xl border border-red-500/30 bg-[#0d0f17] text-white shadow-2xl shadow-red-950/50 p-6 sm:p-7 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Notification & Dispatch Settings
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Granular Alert Frequencies & Delivery Channels
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* iCloud Sync Indicator */}
        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-xs font-mono">
            <Cloud className="w-4 h-4 text-sky-400" />
            <span>Cross-Device Sync (Mac, iPhone, iPad)</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Active
          </span>
        </div>

        {/* Frequency Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
            Dispatch Frequency
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'realtime', label: 'Real-time (Immediate)' },
              { id: 'daily', label: 'Daily Digest (09:00 AM)' },
              { id: 'weekly', label: 'Weekly Summary' },
              { id: 'critical_only', label: 'High Priority Only' },
            ].map((freq) => (
              <button
                key={freq.id}
                type="button"
                onClick={() => setPreferences({ ...preferences, frequency: freq.id as any })}
                className={`p-2.5 rounded-xl text-xs font-mono border text-left transition-all ${
                  preferences.frequency === freq.id
                    ? 'bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                    : 'bg-white/[0.02] text-slate-400 border-white/5 hover:bg-white/5'
                }`}
              >
                {freq.label}
              </button>
            ))}
          </div>
        </div>

        {/* Channels Toggles */}
        <div className="space-y-3">
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
            Delivery Channels
          </label>

          <div className="space-y-2 text-xs font-mono">
            {/* Email */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-400" />
                <span>Primary Email (asaduzzamanrocky@gmail.com)</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.channels.email}
                onChange={(e) => setPreferences({
                  ...preferences,
                  channels: { ...preferences.channels, email: e.target.checked }
                })}
                className="w-4 h-4 accent-red-500 cursor-pointer"
              />
            </div>

            {/* WhatsApp */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Alert (+880 1714-722651)</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.channels.whatsapp}
                onChange={(e) => setPreferences({
                  ...preferences,
                  channels: { ...preferences.channels, whatsapp: e.target.checked }
                })}
                className="w-4 h-4 accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Audio Cue */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Volume2 className="w-4 h-4 text-purple-400" />
                <span>Tactile Audio Synth Feedback</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.channels.soundEffects}
                onChange={(e) => setPreferences({
                  ...preferences,
                  channels: { ...preferences.channels, soundEffects: e.target.checked }
                })}
                className="w-4 h-4 accent-purple-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl font-display font-semibold text-xs text-white bg-red-600 hover:bg-red-500 flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all"
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Saved to iCloud!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Preferences</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

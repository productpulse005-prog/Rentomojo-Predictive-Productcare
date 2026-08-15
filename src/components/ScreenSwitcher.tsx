import React from 'react';
import { ScreenId } from '../types';
import { Smartphone, Monitor, Sparkles } from 'lucide-react';

interface ScreenSwitcherProps {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  isDeviceFrame: boolean;
  onToggleDeviceFrame: () => void;
}

export const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  currentScreen,
  onSelectScreen,
  isDeviceFrame,
  onToggleDeviceFrame,
}) => {
  const screens: { id: ScreenId; label: string; tag: string }[] = [
    { id: 'subscriptions', label: '1. Subscriptions', tag: 'Screen 1' },
    { id: 'product_health', label: '2. Product Health', tag: 'Screen 2' },
    { id: 'preventive_ai', label: '3. Preventive AI', tag: 'Screen 3' },
    { id: 'problem_alert', label: '4. Problem Alert', tag: 'Screen 4' },
    { id: 'schedule_slot', label: '5. Schedule Slot', tag: 'Screen 5' },
    { id: 'replacement_economy', label: '6. Replacement Cost', tag: 'Screen 6' },
    { id: 'technician_review', label: '7. Tech Review', tag: 'Screen 7' },
  ];

  return (
    <div className="bg-slate-900 text-white px-3 py-2 text-xs border-b border-slate-800 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Screens Jump Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-red-400" />
            Screens:
          </span>
          {screens.map((s) => {
            const isActive = currentScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectScreen(s.id)}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#c8102e] text-white shadow-sm ring-1 ring-red-400'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Right: Device Frame Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleDeviceFrame}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors"
            title="Toggle between Mobile Simulator & Responsive View"
          >
            {isDeviceFrame ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Mobile Frame: ON</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Mobile Frame: OFF</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

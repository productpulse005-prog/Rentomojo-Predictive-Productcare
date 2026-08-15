import React from 'react';
import { Package, Bell, Calendar, User } from 'lucide-react';
import { TabId } from '../types';

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  unreadAlertsCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  unreadAlertsCount = 2,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 bg-[#f8fafc]/95 backdrop-blur-lg border-t border-slate-200/80 px-3 py-2 flex items-center justify-around shadow-lg">
      {/* 1. My Products */}
      <button
        onClick={() => onTabChange('products')}
        className={`flex flex-col items-center justify-center transition-all ${
          activeTab === 'products'
            ? 'bg-[#d31238] text-white px-5 py-1.5 rounded-full shadow-md shadow-red-500/20'
            : 'text-slate-600 hover:text-slate-900 px-3 py-1'
        }`}
      >
        <Package className="w-5 h-5 stroke-[2]" />
        <span className="text-[11px] font-semibold mt-0.5 tracking-tight">My Products</span>
      </button>

      {/* 2. Alerts */}
      <button
        onClick={() => onTabChange('alerts')}
        className={`relative flex flex-col items-center justify-center transition-all ${
          activeTab === 'alerts'
            ? 'bg-[#d31238] text-white px-5 py-1.5 rounded-full shadow-md shadow-red-500/20'
            : 'text-slate-600 hover:text-slate-900 px-3 py-1'
        }`}
      >
        <div className="relative">
          <Bell className="w-5 h-5 stroke-[2]" />
          {unreadAlertsCount > 0 && activeTab !== 'alerts' && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full ring-2 ring-white animate-pulse" />
          )}
        </div>
        <span className="text-[11px] font-semibold mt-0.5 tracking-tight">Alerts</span>
      </button>

      {/* 3. Schedule */}
      <button
        onClick={() => onTabChange('schedule')}
        className={`flex flex-col items-center justify-center transition-all ${
          activeTab === 'schedule'
            ? 'bg-[#d31238] text-white px-5 py-1.5 rounded-full shadow-md shadow-red-500/20'
            : 'text-slate-600 hover:text-slate-900 px-3 py-1'
        }`}
      >
        <Calendar className="w-5 h-5 stroke-[2]" />
        <span className="text-[11px] font-semibold mt-0.5 tracking-tight">Schedule</span>
      </button>

      {/* 4. Profile */}
      <button
        onClick={() => onTabChange('profile')}
        className={`flex flex-col items-center justify-center transition-all ${
          activeTab === 'profile'
            ? 'bg-[#d31238] text-white px-5 py-1.5 rounded-full shadow-md shadow-red-500/20'
            : 'text-slate-600 hover:text-slate-900 px-3 py-1'
        }`}
      >
        <User className="w-5 h-5 stroke-[2]" />
        <span className="text-[11px] font-semibold mt-0.5 tracking-tight">Profile</span>
      </button>
    </nav>
  );
};

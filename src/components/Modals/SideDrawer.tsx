import React from 'react';
import { X, Shield, Package, Calendar, Bell, HelpCircle, Phone, FileText, Sparkles, ChevronRight } from 'lucide-react';
import { ScreenId, TabId } from '../../types';
import { USER_PROFILE } from '../../data/mockData';
import { motion, AnimatePresence } from 'motion/react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateScreen: (screen: ScreenId) => void;
  onSelectTab: (tab: TabId) => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateScreen,
  onSelectTab,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="w-[82%] max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div>
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white">
                <div className="flex items-center gap-3">
                  <img
                    src={USER_PROFILE.avatarUrl}
                    alt={USER_PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-md"
                  />
                  <div>
                    <h3 className="text-[16px] font-extrabold leading-tight">
                      {USER_PROFILE.name}
                    </h3>
                    <p className="text-[11px] text-rose-100 font-medium mt-0.5">
                      {USER_PROFILE.plan}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-3 space-y-1">
                <div className="px-3 py-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                  Menu & Quick Views
                </div>

                <button
                  onClick={() => {
                    onSelectTab('products');
                    onNavigateScreen('subscriptions');
                    onClose();
                  }}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-slate-100 text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-slate-600" />
                    <span className="text-[13.5px] font-bold">Your Subscriptions</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    onNavigateScreen('product_health');
                    onClose();
                  }}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-slate-100 text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-amber-600" />
                    <span className="text-[13.5px] font-bold">Product Health Diagnostics</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    onNavigateScreen('preventive_ai');
                    onClose();
                  }}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-slate-100 text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-red-600" />
                    <span className="text-[13.5px] font-bold">AI Predictive Insights</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    onSelectTab('schedule');
                    onClose();
                  }}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-slate-100 text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-[13.5px] font-bold">Inspection Schedule</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    onNavigateScreen('technician_review');
                    onClose();
                  }}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-slate-100 text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span className="text-[13.5px] font-bold">Technician Status Tracker</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Footer Support */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
              <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>Rentomojo Helpline: 1800-419-RENT</span>
              </div>
              <p className="text-[10.5px] text-slate-400">
                Rentomojo Care v2.4.1 • Proactive AI Diagnostics
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

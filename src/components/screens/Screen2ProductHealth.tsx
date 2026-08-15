import React from 'react';
import { Calendar, Wrench, BarChart2, Lightbulb, AlertTriangle, ArrowRight } from 'lucide-react';
import { ScreenId } from '../../types';
import { IMAGES } from '../../data/mockData';
import { motion } from 'motion/react';

interface Screen2ProductHealthProps {
  onNavigate: (screen: ScreenId) => void;
}

export const Screen2ProductHealth: React.FC<Screen2ProductHealthProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 pb-28 pt-1">
      {/* Maintenance Recommended Warning Box */}
      <div className="bg-[#fff9e6] rounded-2xl p-4 border border-[#fde68a] border-l-4 border-l-[#f59e0b] shadow-sm">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-[#d97706]">
            <AlertTriangle className="w-6 h-6 stroke-[2.3]" />
          </div>
          <div className="flex-1">
            <h2 className="text-[17px] font-extrabold text-[#78350f] leading-snug">
              Maintenance recommended
            </h2>
            <p className="text-[13px] font-medium text-[#92400e] mt-0.5">
              Washing Machine (WM-4920)
            </p>

            {/* Health Score Bar */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[12px] font-bold">
                <span className="text-[#92400e]">Health Score</span>
                <span className="text-[#b45309]">Moderate Risk (62%)</span>
              </div>
              <div className="w-full h-2.5 bg-[#fef3c7] rounded-full mt-1.5 overflow-hidden p-[1px]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '62%' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Image */}
      <div className="bg-[#f3f4f6] rounded-3xl p-6 flex items-center justify-center border border-slate-200/80 shadow-inner relative overflow-hidden group">
        <div className="w-full max-w-[260px] aspect-square flex items-center justify-center">
          <img
            src={IMAGES.washingMachineFront}
            alt="Whirlpool Washing Machine WM-4920"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200 text-[11px] font-bold text-slate-700 shadow-sm">
          WM-4920
        </div>
      </div>

      {/* Section: Why? */}
      <div className="space-y-3 pt-1">
        <h3 className="text-[22px] font-extrabold text-slate-900 tracking-tight">
          Why?
        </h3>

        {/* Reason 1: Product Age */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
            <Calendar className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              PRODUCT AGE
            </span>
            <span className="text-[16px] font-extrabold text-slate-900 mt-0.5 block">
              28 months
            </span>
          </div>
        </div>

        {/* Reason 2: Last Service */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
            <Wrench className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              LAST SERVICE
            </span>
            <span className="text-[16px] font-extrabold text-slate-900 mt-0.5 block">
              9 months ago
            </span>
          </div>
        </div>

        {/* Reason 3: Usage Pattern */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
            <BarChart2 className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              USAGE
            </span>
            <span className="text-[16px] font-extrabold text-slate-900 mt-0.5 block">
              Higher than average
            </span>
          </div>
        </div>

        {/* Insight Box */}
        <div className="bg-[#eff6ff] rounded-2xl p-4 border border-[#bfdbfe] shadow-sm flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 stroke-[2.5]" />
          </div>
          <p className="text-[13px] text-slate-700 leading-relaxed font-medium">
            Products with similar usage patterns have required maintenance recently. Proactive servicing can prevent unexpected breakdowns.
          </p>
        </div>
      </div>

      {/* Sticky Bottom CTA Button */}
      <div className="fixed bottom-14 left-0 right-0 max-w-md mx-auto px-4 z-30 pointer-events-none">
        <button
          onClick={() => onNavigate('preventive_ai')}
          className="w-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.98] text-white py-3.5 px-6 rounded-2xl font-extrabold text-[15px] shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 pointer-events-auto transition-all"
        >
          <span>See recommendation</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

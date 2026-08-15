import React from 'react';
import { Wrench, Bot, UserCheck, Info, MapPin, History, HardHat } from 'lucide-react';
import { ScreenId } from '../../types';
import { IMAGES } from '../../data/mockData';
import { motion } from 'motion/react';

interface Screen7TechnicianReviewProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenHistory: () => void;
}

export const Screen7TechnicianReview: React.FC<Screen7TechnicianReviewProps> = ({
  onNavigate,
  onOpenHistory,
}) => {
  return (
    <div className="space-y-4 pb-24 pt-2">
      {/* Top Header Badge & Asset Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ede9fe] text-purple-700 shadow-xs ring-4 ring-purple-50">
          <div className="relative">
            <HardHat className="w-8 h-8 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
              !
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-[25px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Technician review required
          </h1>
          <p className="text-[14px] font-semibold text-slate-500 mt-0.5">
            Asset #RNT-492-B
          </p>
        </div>
      </div>

      {/* Card 1: AI Recommendation */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-slate-600 text-[11px] font-extrabold uppercase tracking-wider">
          <div className="w-6 h-6 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
            <Bot className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
          <span>AI RECOMMENDATION</span>
        </div>

        <div>
          <h3 className="text-[24px] font-black text-[#c8102e] tracking-tight">
            Replacement
          </h3>
          {/* Progress bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="h-full bg-[#c8102e] rounded-full"
            />
          </div>
          <span className="text-[12px] text-slate-500 font-medium mt-1.5 block">
            Confidence level: 85%
          </span>
        </div>
      </div>

      {/* Card 2: Technician Assessment */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />

        <div className="flex items-center gap-2 text-slate-600 text-[11px] font-extrabold uppercase tracking-wider relative z-10">
          <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
            <UserCheck className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
          <span>TECHNICIAN ASSESSMENT</span>
        </div>

        <div className="relative z-10 pt-1">
          <div className="flex items-center gap-2 text-[22px] font-black text-slate-900 tracking-tight">
            <span>Pending</span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <p className="text-[13px] font-medium text-slate-600 mt-0.5">
            Awaiting field operative dispatch
          </p>
        </div>
      </div>

      {/* Card 3: Status Update banner */}
      <div className="bg-[#f0f7ff] rounded-2xl p-4 border border-[#d0e4ff] border-l-4 border-l-[#c8102e] shadow-sm flex items-start gap-3">
        <div className="text-[#c8102e] shrink-0 mt-0.5">
          <Info className="w-5 h-5 stroke-[2.3]" />
        </div>
        <div className="space-y-1">
          <h3 className="text-[15px] font-extrabold text-slate-900 leading-snug">
            Status Update
          </h3>
          <p className="text-[13px] text-slate-700 leading-relaxed font-normal">
            Our AI identified an elevated replacement risk. A technician will confirm the condition before any decision is made.
          </p>
        </div>
      </div>

      {/* Card 4: Warehouse Alpha Live Inspection Photo */}
      <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[16/9] bg-slate-900">
        <img
          src={IMAGES.technicianLab}
          alt="Technician reviewing electronics board"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Location pill */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] font-extrabold text-slate-800 flex items-center gap-1.5 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-red-600 stroke-[2.5]" />
          <span>WAREHOUSE ALPHA</span>
        </div>
      </div>

      {/* Action Button: View Inspection History */}
      <div className="pt-2">
        <button
          onClick={onOpenHistory}
          className="w-full bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 text-slate-800 py-3 px-4 rounded-xl font-bold text-[14px] shadow-sm flex items-center justify-center gap-2 transition-all"
        >
          <History className="w-4 h-4 stroke-[2.2] text-slate-600" />
          <span>View Inspection History</span>
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { AlertTriangle, Snowflake, Wrench, ShoppingCart, Repeat, CheckCircle, Clock } from 'lucide-react';
import { ScreenId } from '../../types';
import { motion } from 'motion/react';

interface Screen6ReplacementEconomicsProps {
  onNavigate: (screen: ScreenId) => void;
  onExploreReplacement: () => void;
  onRepairAnyway: () => void;
}

export const Screen6ReplacementEconomics: React.FC<Screen6ReplacementEconomicsProps> = ({
  onNavigate,
  onExploreReplacement,
  onRepairAnyway,
}) => {
  const [selectedOption, setSelectedOption] = useState<'replace' | 'repair'>('replace');

  return (
    <div className="space-y-5 pb-32 pt-1">
      {/* Header Info */}
      <div className="space-y-1 px-1">
        <div className="flex items-center gap-1.5 text-[#b45309] text-[12px] font-extrabold tracking-wider uppercase">
          <AlertTriangle className="w-4 h-4 stroke-[2.5]" />
          <span>RECOMMENDATION</span>
        </div>
        <h1 className="text-[25px] font-extrabold tracking-tight text-slate-900 leading-tight">
          Replacement may be more economical
        </h1>
        <p className="text-[13.5px] text-slate-600 leading-normal">
          Based on the repair cost and remaining lifecycle of your LG 1.5 Ton AC, replacing the unit might offer better long-term value.
        </p>
      </div>

      {/* Asset Preview Pill */}
      <div className="bg-[#f0f7ff] rounded-2xl p-4 border border-[#d0e4ff] flex items-center gap-3.5 shadow-2xs">
        <div className="w-12 h-12 rounded-xl bg-[#dbeafe] flex items-center justify-center text-blue-700 shrink-0">
          <Snowflake className="w-6 h-6 stroke-[2.2]" />
        </div>
        <div>
          <h3 className="text-[16px] font-extrabold text-slate-900">
            LG 1.5 Ton AC
          </h3>
          <p className="text-[12.5px] font-medium text-slate-600">
            Compressor Failure Detected
          </p>
        </div>
      </div>

      {/* Financial Breakdown Section */}
      <div className="space-y-3.5 pt-1">
        <h2 className="text-[18px] font-extrabold text-slate-900 tracking-tight">
          Financial Breakdown
        </h2>

        {/* Option A: Repair Unit */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => setSelectedOption('repair')}
          className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer shadow-sm ${
            selectedOption === 'repair'
              ? 'border-slate-400 ring-2 ring-slate-300'
              : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Option A
              </span>
              <h3 className="text-[18px] font-extrabold text-slate-900 mt-0.5">
                Repair Unit
              </h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <Wrench className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>

          <div className="mt-3">
            <div className="text-[28px] font-black text-slate-900 tracking-tight">
              ₹7,500
            </div>
            <p className="text-[12.5px] text-slate-500 font-medium">
              Estimated repair cost
            </p>
          </div>

          {/* Remaining Life Metric Banner */}
          <div className="mt-4 bg-[#f0f7ff] rounded-xl p-3 border border-[#d0e4ff] flex items-center gap-2 text-[12.5px] text-[#1e40af] font-semibold">
            <Clock className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.3]" />
            <span>Remaining Life Metric: <span className="text-blue-950 font-normal">Only 6–12 months expected after repair.</span></span>
          </div>
        </motion.div>

        {/* AI Recommendation: Replace Unit */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => setSelectedOption('replace')}
          className={`bg-white rounded-2xl p-5 border border-l-4 border-l-[#c8102e] transition-all cursor-pointer shadow-sm relative overflow-hidden ${
            selectedOption === 'replace'
              ? 'border-red-300 ring-2 ring-red-200'
              : 'border-slate-200'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#c8102e] uppercase tracking-wider block">
                AI Recommendation
              </span>
              <h3 className="text-[18px] font-extrabold text-slate-900 mt-0.5">
                Replace Unit
              </h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#c8102e]">
              <ShoppingCart className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-baseline gap-1">
              <span className="text-[28px] font-black text-slate-900 tracking-tight">
                ₹9,999
              </span>
              <span className="text-[14px] font-bold text-slate-500">
                /mo
              </span>
            </div>
            <p className="text-[12.5px] text-slate-500 font-medium">
              For a brand new equivalent AC
            </p>
          </div>

          {/* Benefit Box */}
          <div className="mt-4 bg-[#fff1f2] rounded-xl p-3 border border-[#ffe4e6] flex items-start gap-2 text-[12.5px] text-[#9f1239] font-medium leading-snug">
            <CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5 stroke-[2.3]" />
            <span>
              <strong className="font-bold text-[#881337]">Benefit:</strong> New warranty, higher efficiency, zero immediate repair costs.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-14 left-0 right-0 max-w-md mx-auto px-4 z-30 pointer-events-none space-y-2">
        <button
          onClick={onExploreReplacement}
          className="w-full bg-[#c8102e] hover:bg-[#b00d28] active:scale-[0.98] text-white py-3.5 px-6 rounded-2xl font-extrabold text-[14px] tracking-wide uppercase shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 pointer-events-auto transition-all"
        >
          <Repeat className="w-4 h-4 stroke-[2.5]" />
          <span>EXPLORE REPLACEMENT</span>
        </button>
        <button
          onClick={onRepairAnyway}
          className="w-full bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 text-slate-800 py-3 px-6 rounded-2xl font-extrabold text-[13.5px] tracking-wide uppercase shadow-sm pointer-events-auto transition-all"
        >
          REPAIR ANYWAY
        </button>
      </div>
    </div>
  );
};

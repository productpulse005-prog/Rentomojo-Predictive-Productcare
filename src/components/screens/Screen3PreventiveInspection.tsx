import React from 'react';
import { Sparkles, Search, Calendar, History, TrendingUp, Info, ArrowRight } from 'lucide-react';
import { ScreenId } from '../../types';
import { motion } from 'motion/react';

interface Screen3PreventiveInspectionProps {
  onNavigate: (screen: ScreenId) => void;
  onRemindLater: () => void;
}

export const Screen3PreventiveInspection: React.FC<Screen3PreventiveInspectionProps> = ({
  onNavigate,
  onRemindLater,
}) => {
  return (
    <div className="space-y-4 pb-24 pt-1">
      {/* Header Info */}
      <div className="space-y-1 px-1">
        <div className="flex items-center gap-1.5 text-[#d31238] text-[12px] font-extrabold tracking-wider uppercase">
          <Sparkles className="w-4 h-4 stroke-[2.5]" />
          <span>AI RECOMMENDATION</span>
        </div>
        <h1 className="text-[26px] font-extrabold tracking-tight text-slate-900 leading-tight">
          Preventive Inspection
        </h1>
        <p className="text-[13.5px] text-slate-600 leading-normal">
          Recommended action for &apos;Sofa Set - L Shape&apos; based on predictive analysis.
        </p>
      </div>

      {/* Main Inspection Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative">
        {/* Red Top Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 w-full" />

        <div className="p-5 space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-slate-700 shrink-0">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[18px] font-extrabold text-slate-900 leading-snug">
                Schedule Inspection
              </h3>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                A routine check is advised to ensure continued structural integrity and fabric quality.
              </p>
            </div>
          </div>

          {/* Confidence Badge */}
          <div>
            <span className="inline-flex items-center gap-1.5 bg-[#f5efe6] text-[#78350f] border border-[#e6dbce] text-[11px] font-bold px-3 py-1 rounded-full tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#b45309]" />
              CONFIDENCE: MODERATE
            </span>
          </div>

          {/* Evidence Signals */}
          <div className="border-t border-slate-100 pt-3.5 space-y-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              EVIDENCE SIGNALS
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-slate-700 text-[12px] font-semibold px-3 py-1 rounded-xl shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-red-500 stroke-[2]" />
                Product age
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-slate-700 text-[12px] font-semibold px-3 py-1 rounded-xl shadow-2xs">
                <History className="w-3.5 h-3.5 text-red-500 stroke-[2]" />
                Service history
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-slate-700 text-[12px] font-semibold px-3 py-1 rounded-xl shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 text-red-500 stroke-[2]" />
                Usage pattern
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => onNavigate('schedule_slot')}
              className="w-full bg-[#b91c1c] hover:bg-[#991b1b] active:scale-[0.98] text-white py-3 px-4 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Calendar className="w-4 h-4 stroke-[2.2]" />
              <span>Book Inspection Now</span>
            </button>
            <button
              onClick={onRemindLater}
              className="w-full bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 text-slate-700 py-2.5 px-4 rounded-xl font-bold text-[14px] transition-all"
            >
              Remind Me Later
            </button>
          </div>
        </div>
      </div>

      {/* Why Am I Seeing This? Card */}
      <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-[16px]">
          <Info className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
          <h3>Why am I seeing this?</h3>
        </div>
        <p className="text-[13px] text-slate-700 leading-relaxed font-normal">
          Based on <strong className="font-bold text-slate-900">28 months</strong> of continuous use and typical wear cycles for L-shape sofas in households with moderate activity, our system detects a higher probability of minor joint stress or fabric thinning.
        </p>
        <div className="border-t border-slate-200/70 pt-3 grid grid-cols-2 text-left gap-2 text-[12.5px]">
          <div>
            <span className="text-slate-500 block">Last service</span>
            <span className="font-bold text-slate-900 block mt-0.5">14 months ago</span>
          </div>
          <div>
            <span className="text-slate-500 block">Average lifespan</span>
            <span className="font-bold text-slate-900 block mt-0.5">48 months</span>
          </div>
        </div>
      </div>

      {/* Proactive vs Reactive Cost Analysis */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div>
          <h3 className="text-[17px] font-extrabold text-slate-900">
            Proactive vs. Reactive Cost Analysis
          </h3>
          <p className="text-[13px] text-slate-600 mt-1 leading-relaxed">
            A preventive inspection typically mitigates larger repair costs down the line. Here is an estimated comparison based on similar product profiles.
          </p>
        </div>

        {/* Cost Comparison Bars */}
        <div className="space-y-3 pt-1">
          {/* Preventive Inspection */}
          <div>
            <div className="flex items-center justify-between text-[12.5px] font-bold">
              <span className="text-slate-600 uppercase tracking-wide text-[11px]">PREVENTIVE INSPECTION</span>
              <span className="text-slate-900 font-extrabold">₹299</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '22%' }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-full bg-[#dc2626] rounded-full"
              />
            </div>
          </div>

          {/* Estimated Reactive Repair */}
          <div>
            <div className="flex items-center justify-between text-[12.5px] font-bold">
              <span className="text-slate-600 uppercase tracking-wide text-[11px]">ESTIMATED REACTIVE REPAIR</span>
              <span className="text-slate-900 font-extrabold">₹1,850+</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '92%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-full bg-slate-900 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Direct link to Screen 4 modal or Screen 6 */}
      <div className="flex justify-between items-center px-1 text-xs text-slate-500 pt-1">
        <span>Want to see prompt alert popup?</span>
        <button
          onClick={() => onNavigate('problem_alert')}
          className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
        >
          View Alert Banner <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

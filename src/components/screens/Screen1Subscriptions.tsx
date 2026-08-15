import React from 'react';
import { Wind, Disc, Refrigerator, Wrench, CheckCircle2, AlertTriangle, ChevronRight, Sparkles } from 'lucide-react';
import { ScreenId } from '../../types';
import { motion } from 'motion/react';

interface Screen1SubscriptionsProps {
  onNavigate: (screen: ScreenId) => void;
}

export const Screen1Subscriptions: React.FC<Screen1SubscriptionsProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 pb-20 pt-1">
      {/* Title Header */}
      <div className="px-1">
        <h1 className="text-[26px] font-extrabold tracking-tight text-slate-900 leading-tight">
          Your Subscriptions
        </h1>
        <p className="text-[14px] text-slate-600 mt-1 leading-normal">
          Track the health and service history of your active rentals.
        </p>
      </div>

      {/* Subscription Cards List */}
      <div className="space-y-4">
        {/* Card 1: LG Split AC 1.5 Ton */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15 }}
          onClick={() => onNavigate('replacement_economy')}
          className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm cursor-pointer hover:border-slate-300 transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              {/* AC Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center text-red-500 shrink-0">
                <Wind className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug">
                  LG Split AC 1.5 Ton
                </h3>
                <p className="text-[12px] font-medium text-slate-400 mt-0.5 tracking-wide">
                  ID: RNT-AC-4829
                </p>
              </div>
            </div>

            {/* Healthy Badge */}
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
              HEALTHY
            </span>
          </div>

          <div className="border-t border-slate-100 mt-4 pt-3 grid grid-cols-2 text-left">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                AGE
              </span>
              <span className="text-[14px] font-bold text-slate-800 mt-0.5 block">
                14 Months
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                LAST SERVICE
              </span>
              <span className="text-[14px] font-bold text-slate-800 mt-0.5 block">
                2 Months ago
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Whirlpool Front Load (Maintenance Needed) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15 }}
          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm border-l-4 border-l-amber-500 relative overflow-hidden transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              {/* Washing Machine Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-amber-700 shrink-0">
                <Disc className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug">
                  Whirlpool Front Load
                </h3>
                <p className="text-[12px] font-medium text-slate-400 mt-0.5 tracking-wide">
                  ID: RNT-WM-9102
                </p>
              </div>
            </div>

            {/* Maintenance Badge */}
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200/90 text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5] text-amber-700" />
              MAINTENANCE
            </span>
          </div>

          <div className="border-t border-slate-100 mt-4 pt-3 grid grid-cols-2 text-left">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                AGE
              </span>
              <span className="text-[14px] font-bold text-slate-800 mt-0.5 block">
                28 Months
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                LAST SERVICE
              </span>
              <span className="text-[14px] font-bold text-amber-700 mt-0.5 block">
                9 Months ago
              </span>
            </div>
          </div>

          {/* Action Button: See Recommendation */}
          <button
            onClick={() => onNavigate('product_health')}
            className="w-full mt-4 bg-[#c8102e] hover:bg-[#b00d28] active:scale-[0.98] text-white py-2.5 px-4 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Wrench className="w-4 h-4 stroke-[2.5]" />
            <span>See Recommendation</span>
          </button>
        </motion.div>

        {/* Card 3: Samsung Double Door */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15 }}
          onClick={() => onNavigate('technician_review')}
          className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm cursor-pointer hover:border-slate-300 transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              {/* Fridge Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center text-red-500 shrink-0">
                <Refrigerator className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug">
                  Samsung Double Door
                </h3>
                <p className="text-[12px] font-medium text-slate-400 mt-0.5 tracking-wide">
                  ID: RNT-RF-3314
                </p>
              </div>
            </div>

            {/* Healthy Badge */}
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
              HEALTHY
            </span>
          </div>

          <div className="border-t border-slate-100 mt-4 pt-3 grid grid-cols-2 text-left">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                AGE
              </span>
              <span className="text-[14px] font-bold text-slate-800 mt-0.5 block">
                6 Months
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                LAST SERVICE
              </span>
              <span className="text-[14px] font-bold text-slate-800 mt-0.5 block">
                6 Months ago
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Proactive Tip / Quick Actions */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-4 border border-red-100 text-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
            <Sparkles className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">Rentomojo Care Guard™ Active</p>
            <p className="text-[11px] text-slate-600">Continuous predictive health tracking</p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('preventive_ai')}
          className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-0.5"
        >
          View AI Insights <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

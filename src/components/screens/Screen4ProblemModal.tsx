import React from 'react';
import { Radio, Wrench, Clock, ArrowRight } from 'lucide-react';
import { ScreenId } from '../../types';
import { IMAGES } from '../../data/mockData';
import { motion } from 'motion/react';

interface Screen4ProblemModalProps {
  onNavigate: (screen: ScreenId) => void;
  onDismiss: () => void;
}

export const Screen4ProblemModal: React.FC<Screen4ProblemModalProps> = ({
  onNavigate,
  onDismiss,
}) => {
  return (
    <div className="py-2 pb-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
      >
        {/* Room Header Image with Signal Detected Pill */}
        <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
          <img
            src={IMAGES.washingMachineRoom}
            alt="Washing machine in laundry room"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Signal Detected Badge */}
          <div className="absolute top-4 right-4 bg-[#fde8e8] border border-[#fbd5d5] text-[#9b1c1c] text-[12px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 backdrop-blur-xs">
            <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse stroke-[2.5]" />
            <span>Signal Detected</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          <div className="space-y-2">
            <h2 className="text-[23px] font-extrabold text-slate-900 leading-snug tracking-tight">
              Let&apos;s prevent a problem before it happens
            </h2>
            <p className="text-[14.5px] text-slate-600 leading-relaxed">
              We detected signals that your washing machine may need attention.
            </p>
          </div>

          {/* Recommendation Box */}
          <div className="bg-[#f0f5ff] rounded-2xl p-4 border border-[#dbeafe] space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                <Wrench className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  RECOMMENDATION
                </span>
                <p className="text-[14px] font-bold text-slate-900 leading-snug">
                  Schedule preventive inspection
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[12.5px] text-slate-600 pl-10 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
              <span>Expected duration: 30 minutes</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-1">
            <button
              onClick={() => onNavigate('schedule_slot')}
              className="w-full bg-[#c8102e] hover:bg-[#b00d28] active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 shadow-md shadow-red-500/20 transition-all"
            >
              <span>Schedule inspection</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={onDismiss}
              className="w-full bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 text-slate-700 py-3 px-4 rounded-xl font-bold text-[14.5px] transition-all"
            >
              Not now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

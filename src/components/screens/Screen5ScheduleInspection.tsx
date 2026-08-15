import React, { useState } from 'react';
import { X, AlertTriangle, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { ScreenId, InspectionSlot } from '../../types';
import { MOCK_INSPECTION_SLOTS } from '../../data/mockData';
import { motion } from 'motion/react';

interface Screen5ScheduleInspectionProps {
  onNavigate: (screen: ScreenId) => void;
  onClose: () => void;
  onConfirmSuccess: (slot: InspectionSlot) => void;
}

export const Screen5ScheduleInspection: React.FC<Screen5ScheduleInspectionProps> = ({
  onNavigate,
  onClose,
  onConfirmSuccess,
}) => {
  const [selectedSlotId, setSelectedSlotId] = useState<string>('slot-1');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const selectedSlot = MOCK_INSPECTION_SLOTS.find(s => s.id === selectedSlotId) || MOCK_INSPECTION_SLOTS[0];

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onConfirmSuccess(selectedSlot);
      setTimeout(() => {
        onNavigate('technician_review');
      }, 1200);
    }, 600);
  };

  return (
    <div className="space-y-5 pb-28 pt-1">
      {/* Header with Close X */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close scheduling"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-[20px] font-extrabold text-slate-900 tracking-tight">
            Schedule Inspection
          </h1>
        </div>
      </div>

      {/* Proactive Maintenance Banner */}
      <div className="bg-[#fff4f4] rounded-2xl p-4 border border-[#fed7d7] shadow-sm">
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-full bg-[#fde8e8] flex items-center justify-center text-[#c8102e] shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[16px] font-extrabold text-slate-900 leading-snug">
              Proactive Maintenance
            </h3>
            <p className="text-[13px] text-slate-600 leading-relaxed">
              Diagnostic signals indicate a potential anomaly. Scheduling an inspection now prevents future downtime.
            </p>
          </div>
        </div>
      </div>

      {/* Time Slot Selection */}
      <div className="space-y-3 pt-1">
        <h2 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
          SELECT A TIME SLOT
        </h2>

        <div className="space-y-3">
          {MOCK_INSPECTION_SLOTS.map((slot) => {
            const isSelected = selectedSlotId === slot.id;
            return (
              <motion.div
                key={slot.id}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedSlotId(slot.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all ${
                  isSelected
                    ? 'border-2 border-[#d31238] bg-[#fff1f2] shadow-sm'
                    : 'border border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className={`text-[11px] font-extrabold uppercase tracking-wider block ${
                        isSelected ? 'text-[#c8102e]' : 'text-slate-500'
                      }`}
                    >
                      {slot.dayLabel}
                    </span>
                    <span className="text-[17px] font-extrabold text-slate-900 mt-0.5 block tracking-tight">
                      {slot.timeRange}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-[#c8102e] text-white flex items-center justify-center shadow-xs">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Success Notification Modal Overlay when booked */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 bottom-24 max-w-md mx-auto z-50 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <p className="text-sm font-bold">Inspection Confirmed!</p>
            <p className="text-xs text-slate-300">
              {selectedSlot.dayLabel}, {selectedSlot.timeRange}
            </p>
          </div>
        </motion.div>
      )}

      {/* Sticky Bottom Confirmation Button */}
      <div className="fixed bottom-14 left-0 right-0 max-w-md mx-auto px-4 z-30 pointer-events-none">
        <button
          disabled={isSubmitting || isSuccess}
          onClick={handleConfirm}
          className="w-full bg-[#c8102e] hover:bg-[#b00d28] disabled:bg-slate-400 active:scale-[0.98] text-white py-3.5 px-6 rounded-2xl font-extrabold text-[15px] shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 pointer-events-auto transition-all"
        >
          {isSubmitting ? (
            <span>Scheduling inspection...</span>
          ) : isSuccess ? (
            <span>Confirmed ✓</span>
          ) : (
            <>
              <span>Confirm inspection</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

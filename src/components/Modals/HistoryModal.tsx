import React from 'react';
import { X, CheckCircle2, MapPin, Calendar, User, FileText } from 'lucide-react';
import { MOCK_SERVICE_HISTORY } from '../../data/mockData';
import { motion, AnimatePresence } from 'motion/react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div>
                <h3 className="text-[17px] font-extrabold text-slate-900">
                  Asset Inspection History
                </h3>
                <p className="text-[12px] text-slate-500 font-medium">
                  Verified Warehouse Alpha logs for #RNT-492-B
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="p-4 overflow-y-auto space-y-3 divide-y divide-slate-100">
              {MOCK_SERVICE_HISTORY.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="text-[13.5px] font-extrabold text-slate-900">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {item.id}
                    </span>
                  </div>

                  <p className="text-[12.5px] text-slate-600 pl-8 leading-relaxed">
                    {item.notes}
                  </p>

                  <div className="pl-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {item.technician}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.facility}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <FileText className="w-4 h-4 text-red-600" />
                Audited by Quality Assurance
              </span>
              <button
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Close Logs
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

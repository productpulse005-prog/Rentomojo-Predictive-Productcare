import React, { useState } from 'react';
import { X, Check, ShoppingBag, Zap, Shield, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReplacementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectReplacement: (modelName: string) => void;
}

export const ReplacementModal: React.FC<ReplacementModalProps> = ({
  isOpen,
  onClose,
  onSelectReplacement,
}) => {
  const [selectedId, setSelectedId] = useState<string>('m1');

  const models = [
    {
      id: 'm1',
      title: 'LG 1.5 Ton 5-Star AI Dual Inverter Split AC',
      sub: 'Copper Condenser, 2025 Model',
      price: '₹1,099/mo',
      energy: '5-Star Inverter',
      savings: 'Saves ~₹450/mo on electricity',
      tag: 'BEST VALUE',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm2',
      title: 'Daikin 1.5 Ton 3-Star Inverter Split AC',
      sub: 'PM 2.5 Filter, Rapid Chill Mode',
      price: '₹999/mo',
      energy: '3-Star Inverter',
      savings: 'Zero installation fee',
      tag: 'POPULAR',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-red-50 to-orange-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[16px] font-extrabold text-slate-900">
                    Recommended Upgrades
                  </h3>
                  <p className="text-[11px] text-slate-600 font-semibold">
                    Zero upfront swap fee under Rentomojo Care
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/80 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="p-4 overflow-y-auto space-y-3">
              {models.map((m) => {
                const isSelected = selectedId === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedId(m.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-2 border-red-600 bg-red-50/40 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold bg-red-600 text-white px-2 py-0.5 rounded-md uppercase tracking-wide">
                          {m.tag}
                        </span>
                        <h4 className="text-[14.5px] font-extrabold text-slate-900 leading-snug pt-1">
                          {m.title}
                        </h4>
                        <p className="text-xs text-slate-500">{m.sub}</p>
                      </div>
                      <div className="text-right shrink-0 pl-2">
                        <span className="text-[16px] font-black text-slate-900 block">
                          {m.price}
                        </span>
                        <span className="text-[10px] text-emerald-600 font-bold block">
                          Free Delivery
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        {m.energy}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-blue-500" />
                        Complete Care Shield
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-white flex items-center gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 rounded-xl transition-colors"
              >
                Keep Current
              </button>
              <button
                onClick={() => {
                  const item = models.find(m => m.id === selectedId);
                  onSelectReplacement(item?.title || 'Upgraded AC Unit');
                }}
                className="flex-2 bg-[#c8102e] hover:bg-[#b00d28] text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Confirm Unit Swap</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

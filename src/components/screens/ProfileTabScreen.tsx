import React from 'react';
import { User, ShieldCheck, MapPin, Phone, Mail, Award, HelpCircle, ChevronRight, LogOut } from 'lucide-react';
import { USER_PROFILE } from '../../data/mockData';
import { ScreenId } from '../../types';

interface ProfileTabScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ProfileTabScreen: React.FC<ProfileTabScreenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 pb-24 pt-1">
      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="relative">
          <img
            src={USER_PROFILE.avatarUrl}
            alt={USER_PROFILE.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-full object-cover border-2 border-red-500 shadow-sm"
          />
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-[19px] font-extrabold text-slate-900 leading-snug">
              {USER_PROFILE.name}
            </h2>
          </div>
          <p className="text-[12.5px] text-slate-500">{USER_PROFILE.email}</p>
          <div className="mt-1.5 inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
            <Award className="w-3.5 h-3.5" />
            {USER_PROFILE.plan}
          </div>
        </div>
      </div>

      {/* Account Settings / Care Details */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100 overflow-hidden">
        <div className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Primary Rental Address</p>
              <p className="text-[13px] font-bold text-slate-800 truncate max-w-[220px]">
                {USER_PROFILE.address}
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>

        <div className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Registered Mobile</p>
              <p className="text-[13px] font-bold text-slate-800">{USER_PROFILE.phone}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>

        <div
          onClick={() => onNavigate('subscriptions')}
          className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center text-red-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-slate-900">Rentomojo Care Warranty</p>
              <p className="text-[12px] text-slate-500">100% Free Repairs & Replacement Included</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>

        <div className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-slate-900">24x7 Priority Support</p>
              <p className="text-[12px] text-slate-500">Call Care Specialist: 1800-419-RENT</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Sign Out */}
      <div className="pt-2">
        <button className="w-full py-3 text-slate-500 hover:text-red-600 text-xs font-bold flex items-center justify-center gap-2 rounded-xl hover:bg-red-50 transition-colors">
          <LogOut className="w-4 h-4" />
          <span>Sign Out of Rentomojo Account</span>
        </button>
      </div>
    </div>
  );
};

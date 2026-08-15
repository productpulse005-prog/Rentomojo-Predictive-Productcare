import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, ChevronRight, Phone } from 'lucide-react';
import { ScreenId } from '../../types';

interface ScheduleTabScreenProps {
  onNavigate: (screen: ScreenId) => void;
  bookedSlot?: { dayLabel: string; timeRange: string } | null;
}

export const ScheduleTabScreen: React.FC<ScheduleTabScreenProps> = ({
  onNavigate,
  bookedSlot,
}) => {
  return (
    <div className="space-y-4 pb-24 pt-1">
      <div className="px-1">
        <h1 className="text-[25px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Inspection Schedule
        </h1>
        <p className="text-[13.5px] text-slate-600 mt-0.5">
          Manage technician appointments and service history
        </p>
      </div>

      {/* Upcoming / Active Appointment */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 bg-rose-50 text-red-700 border border-red-200 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
            Upcoming Visit
          </span>
          <span className="text-[12px] font-bold text-slate-400">ID: RNT-INSP-9021</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-[18px] font-extrabold text-slate-900">
            Whirlpool Front Load (WM-4920)
          </h3>
          <div className="space-y-1.5 text-[13px] text-slate-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-600 shrink-0 stroke-[2.2]" />
              <span className="font-semibold text-slate-900">
                {bookedSlot ? `${bookedSlot.dayLabel}, ${bookedSlot.timeRange}` : 'Tomorrow, 10:00 AM – 12:00 PM'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 stroke-[2.2]" />
              <span className="text-slate-600 truncate">Indiranagar 100ft Road, Bangalore</span>
            </div>
          </div>
        </div>

        {/* Assigned Technician */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs">
              RV
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Ramesh Verma</p>
              <p className="text-[11px] text-slate-500">Certified Appliance Specialist (4.9 ★)</p>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-200 shadow-2xs">
            <Phone className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => onNavigate('schedule_slot')}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-colors"
          >
            Reschedule
          </button>
          <button
            onClick={() => onNavigate('technician_review')}
            className="flex-1 bg-[#c8102e] hover:bg-[#b00d28] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
          >
            Live Tracking
          </button>
        </div>
      </div>

      {/* Book New Preventive Check Banner */}
      <div
        onClick={() => onNavigate('schedule_slot')}
        className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-4 shadow-md flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
      >
        <div>
          <h4 className="font-extrabold text-[15px]">Schedule Another Asset Check</h4>
          <p className="text-[12px] text-rose-100 mt-0.5">Complementary under Rentomojo Care Plus</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </div>
      </div>

      {/* Past Inspection History */}
      <div className="space-y-3 pt-2">
        <h3 className="text-[16px] font-extrabold text-slate-900">
          Recent Completed Visits
        </h3>

        <div className="space-y-2.5">
          <div className="bg-white rounded-xl p-3.5 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-[13.5px] font-bold text-slate-900">LG Split AC 1.5 Ton</h4>
                <span className="text-[11px] font-medium text-slate-400">2 Months ago</span>
              </div>
              <p className="text-[12px] text-slate-600 mt-0.5">
                Refrigerant pressure checked, antibacterial filter cleaned.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3.5 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-[13.5px] font-bold text-slate-900">Samsung Double Door Refrigerator</h4>
                <span className="text-[11px] font-medium text-slate-400">6 Months ago</span>
              </div>
              <p className="text-[12px] text-slate-600 mt-0.5">
                Thermostat calibration and gasket seal verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

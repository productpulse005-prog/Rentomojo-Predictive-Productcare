import { ProductSubscription, InspectionSlot, ServiceHistoryItem } from '../types';

export const USER_PROFILE = {
  name: 'Aditi Sharma',
  email: 'aditi.eie2000@gmail.com',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  plan: 'Rentomojo Care Plus',
  activeSubscriptions: 3,
  address: 'Indiranagar 100ft Road, Bangalore, Karnataka - 560038',
  phone: '+91 98765 43210'
};

export const MOCK_SUBSCRIPTIONS: ProductSubscription[] = [
  {
    id: 'lg-ac-4829',
    name: 'LG Split AC 1.5 Ton',
    category: 'ac',
    assetCode: 'RNT-AC-4829',
    status: 'HEALTHY',
    ageMonths: 14,
    lastService: '2 Months ago',
    lastServiceMonthsAgo: 2,
    imageUrl: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'whirlpool-wm-9102',
    name: 'Whirlpool Front Load',
    category: 'washing_machine',
    assetCode: 'RNT-WM-9102',
    status: 'MAINTENANCE',
    ageMonths: 28,
    lastService: '9 Months ago',
    lastServiceMonthsAgo: 9,
    hasRecommendation: true,
    recommendationType: 'inspection',
    imageUrl: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'samsung-rf-3314',
    name: 'Samsung Double Door',
    category: 'refrigerator',
    assetCode: 'RNT-RF-3314',
    status: 'HEALTHY',
    ageMonths: 6,
    lastService: '6 Months ago',
    lastServiceMonthsAgo: 6,
    imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80'
  }
];

export const MOCK_INSPECTION_SLOTS: InspectionSlot[] = [
  {
    id: 'slot-1',
    dayLabel: 'TOMORROW',
    timeRange: '10:00 AM – 12:00 PM',
    isRecommended: true
  },
  {
    id: 'slot-2',
    dayLabel: 'TOMORROW',
    timeRange: '2:00 PM – 4:00 PM'
  },
  {
    id: 'slot-3',
    dayLabel: 'WEDNESDAY',
    timeRange: '9:00 AM – 11:00 AM'
  },
  {
    id: 'slot-4',
    dayLabel: 'THURSDAY',
    timeRange: '3:00 PM – 5:00 PM'
  }
];

export const MOCK_SERVICE_HISTORY: ServiceHistoryItem[] = [
  {
    id: 'SRV-8821',
    date: '14 May 2025',
    type: 'Periodic Deep Clean & Descaling',
    technician: 'Ramesh Verma (ID #TECH-409)',
    facility: 'Warehouse Alpha - Mobile Fleet',
    status: 'Completed',
    notes: 'Drum balance verified, inlet valve cleaned, no leaks observed.'
  },
  {
    id: 'SRV-7104',
    date: '12 Nov 2024',
    type: 'Motor & Belt Calibration',
    technician: 'Suresh Kumar (ID #TECH-211)',
    facility: 'Central Service Station Bangalore',
    status: 'Completed',
    notes: 'Routine 18-month preventative diagnostic completed.'
  },
  {
    id: 'SRV-5940',
    date: '20 Feb 2024',
    type: 'Initial Quality Inspection & Installation',
    technician: 'Anand Nair (ID #TECH-105)',
    facility: 'On-site Customer Delivery Unit',
    status: 'Completed',
    notes: 'Unit installed with surge protector and leveling pads.'
  }
];

export const IMAGES = {
  washingMachineFront: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
  washingMachineRoom: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1000&q=80',
  technicianLab: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  acUnit: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
  sofaUnit: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
};

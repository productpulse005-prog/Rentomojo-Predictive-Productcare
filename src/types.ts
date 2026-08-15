export type ScreenId = 
  | 'subscriptions'       // Screen 1: Your Subscriptions
  | 'product_health'      // Screen 2: Product Health (WM-4920)
  | 'preventive_ai'       // Screen 3: Preventive Inspection (Sofa / WM)
  | 'problem_alert'       // Screen 4: Let's prevent a problem before it happens
  | 'schedule_slot'       // Screen 5: Schedule Inspection
  | 'replacement_economy' // Screen 6: Replacement may be more economical (LG AC)
  | 'technician_review';  // Screen 7: Technician review required (Asset #RNT-492-B)

export type TabId = 'products' | 'alerts' | 'schedule' | 'profile';

export interface ProductSubscription {
  id: string;
  name: string;
  category: 'ac' | 'washing_machine' | 'refrigerator' | 'sofa' | 'appliance';
  assetCode: string;
  status: 'HEALTHY' | 'MAINTENANCE' | 'CRITICAL';
  ageMonths: number;
  lastService: string;
  lastServiceMonthsAgo: number;
  imageUrl?: string;
  hasRecommendation?: boolean;
  recommendationType?: 'inspection' | 'replacement' | 'preventive';
}

export interface InspectionSlot {
  id: string;
  dayLabel: string;
  timeRange: string;
  isRecommended?: boolean;
}

export interface ServiceHistoryItem {
  id: string;
  date: string;
  type: string;
  technician: string;
  facility: string;
  status: 'Completed' | 'Pending' | 'Scheduled';
  notes: string;
}

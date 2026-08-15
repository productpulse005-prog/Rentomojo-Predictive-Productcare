import React, { useState } from 'react';
import { ScreenId, TabId, InspectionSlot } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ScreenSwitcher } from './components/ScreenSwitcher';
import { Screen1Subscriptions } from './components/screens/Screen1Subscriptions';
import { Screen2ProductHealth } from './components/screens/Screen2ProductHealth';
import { Screen3PreventiveInspection } from './components/screens/Screen3PreventiveInspection';
import { Screen4ProblemModal } from './components/screens/Screen4ProblemModal';
import { Screen5ScheduleInspection } from './components/screens/Screen5ScheduleInspection';
import { Screen6ReplacementEconomics } from './components/screens/Screen6ReplacementEconomics';
import { Screen7TechnicianReview } from './components/screens/Screen7TechnicianReview';
import { ScheduleTabScreen } from './components/screens/ScheduleTabScreen';
import { ProfileTabScreen } from './components/screens/ProfileTabScreen';
import { HistoryModal } from './components/Modals/HistoryModal';
import { ReplacementModal } from './components/Modals/ReplacementModal';
import { SideDrawer } from './components/Modals/SideDrawer';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, BellRing } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('subscriptions');
  const [activeTab, setActiveTab] = useState<TabId>('products');
  const [isDeviceFrame, setIsDeviceFrame] = useState<boolean>(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isReplacementOpen, setIsReplacementOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [bookedSlot, setBookedSlot] = useState<InspectionSlot | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    // synchronize bottom tab highlight
    if (screen === 'subscriptions') {
      setActiveTab('products');
    } else if (screen === 'preventive_ai' || screen === 'technician_review' || screen === 'problem_alert') {
      setActiveTab('alerts');
    } else if (screen === 'schedule_slot') {
      setActiveTab('schedule');
    }
  };

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    if (tab === 'products') {
      setCurrentScreen('subscriptions');
    } else if (tab === 'alerts') {
      setCurrentScreen('preventive_ai');
    } else if (tab === 'schedule') {
      // open schedule tab or screen 5
      // if already booked, open schedule tab view
    } else if (tab === 'profile') {
      // profile tab
    }
  };

  const handleBack = () => {
    if (currentScreen === 'product_health' || currentScreen === 'replacement_economy') {
      setCurrentScreen('subscriptions');
      setActiveTab('products');
    } else if (currentScreen === 'schedule_slot' || currentScreen === 'problem_alert') {
      setCurrentScreen('product_health');
    } else if (currentScreen === 'preventive_ai' || currentScreen === 'technician_review') {
      setCurrentScreen('subscriptions');
      setActiveTab('products');
    } else {
      setCurrentScreen('subscriptions');
      setActiveTab('products');
    }
  };

  const renderCurrentView = () => {
    // If user clicked profile tab
    if (activeTab === 'profile') {
      return <ProfileTabScreen onNavigate={handleNavigate} />;
    }
    // If user clicked schedule tab directly
    if (activeTab === 'schedule' && currentScreen !== 'schedule_slot') {
      return <ScheduleTabScreen onNavigate={handleNavigate} bookedSlot={bookedSlot} />;
    }

    switch (currentScreen) {
      case 'subscriptions':
        return <Screen1Subscriptions onNavigate={handleNavigate} />;
      case 'product_health':
        return <Screen2ProductHealth onNavigate={handleNavigate} />;
      case 'preventive_ai':
        return (
          <Screen3PreventiveInspection
            onNavigate={handleNavigate}
            onRemindLater={() => {
              showToast('Reminder scheduled for next week');
              handleNavigate('subscriptions');
            }}
          />
        );
      case 'problem_alert':
        return (
          <Screen4ProblemModal
            onNavigate={handleNavigate}
            onDismiss={() => handleNavigate('subscriptions')}
          />
        );
      case 'schedule_slot':
        return (
          <Screen5ScheduleInspection
            onNavigate={handleNavigate}
            onClose={handleBack}
            onConfirmSuccess={(slot) => {
              setBookedSlot(slot);
              showToast(`Inspection booked for ${slot.dayLabel}, ${slot.timeRange}`);
            }}
          />
        );
      case 'replacement_economy':
        return (
          <Screen6ReplacementEconomics
            onNavigate={handleNavigate}
            onExploreReplacement={() => setIsReplacementOpen(true)}
            onRepairAnyway={() => {
              showToast('Repair request registered. Technician will contact you.');
              handleNavigate('technician_review');
            }}
          />
        );
      case 'technician_review':
        return (
          <Screen7TechnicianReview
            onNavigate={handleNavigate}
            onOpenHistory={() => setIsHistoryOpen(true)}
          />
        );
      default:
        return <Screen1Subscriptions onNavigate={handleNavigate} />;
    }
  };

  // Determine header configuration based on active screen
  const getHeaderProps = () => {
    if (currentScreen === 'product_health') {
      return {
        showBack: true,
        onBack: handleBack,
        titleOverride: 'PRODUCT HEALTH',
        isRedTitle: true,
        showAvatar: true,
      };
    }
    if (currentScreen === 'schedule_slot') {
      // Screen 5 has its own custom internal header with close icon
      return null;
    }
    if (currentScreen === 'replacement_economy') {
      return {
        showBack: true,
        onBack: handleBack,
        titleOverride: undefined,
        showAvatar: true,
      };
    }
    if (activeTab === 'profile') {
      return {
        showBack: false,
        onMenuClick: () => setIsDrawerOpen(true),
        titleOverride: 'Account & Care',
        isRedTitle: false,
        showAvatar: true,
      };
    }
    if (activeTab === 'schedule' && currentScreen !== 'schedule_slot') {
      return {
        showBack: false,
        onMenuClick: () => setIsDrawerOpen(true),
        titleOverride: undefined,
        showAvatar: true,
      };
    }
    // Default (Screen 1, 3, 7)
    return {
      showBack: false,
      onMenuClick: () => setIsDrawerOpen(true),
      titleOverride: undefined,
      showAvatar: true,
    };
  };

  const headerProps = getHeaderProps();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Screen Switcher Bar for easy demo & review */}
      <ScreenSwitcher
        currentScreen={currentScreen}
        onSelectScreen={(s) => handleNavigate(s)}
        isDeviceFrame={isDeviceFrame}
        onToggleDeviceFrame={() => setIsDeviceFrame(!isDeviceFrame)}
      />

      {/* Main Container */}
      <div className={`flex-1 flex justify-center ${isDeviceFrame ? 'py-6 px-3' : 'p-0'}`}>
        <div
          className={`w-full max-w-md bg-white flex flex-col relative transition-all ${
            isDeviceFrame
              ? 'rounded-[40px] shadow-2xl border-[10px] border-slate-900 overflow-hidden ring-1 ring-slate-800 min-h-[820px] max-h-[890px]'
              : 'min-h-screen shadow-md'
          }`}
        >
          {/* Mobile Notch Bar if in Device Frame */}
          {isDeviceFrame && (
            <div className="bg-white pt-2.5 pb-1 px-7 flex items-center justify-between text-[12px] font-bold text-slate-800 select-none">
              <span>9:41</span>
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
              <div className="flex items-center gap-1.5 text-xs">
                <span>5G</span>
                <span className="w-5 h-2.5 bg-slate-800 rounded-xs border border-slate-800 inline-block" />
              </div>
            </div>
          )}

          {/* Header */}
          {headerProps && (
            <Header
              {...headerProps}
              onProfileClick={() => setActiveTab('profile')}
            />
          )}

          {/* Screen Content */}
          <main className="flex-1 overflow-y-auto px-4 pt-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentScreen}-${activeTab}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {renderCurrentView()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Bottom Navigation */}
          <BottomNav
            activeTab={activeTab}
            onTabChange={handleTabChange}
            unreadAlertsCount={2}
          />
        </div>
      </div>

      {/* Modals & Drawers */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />

      <ReplacementModal
        isOpen={isReplacementOpen}
        onClose={() => setIsReplacementOpen(false)}
        onSelectReplacement={(modelName) => {
          setIsReplacementOpen(false);
          showToast(`Replacement request submitted for ${modelName}`);
          handleNavigate('technician_review');
        }}
      />

      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onNavigateScreen={handleNavigate}
        onSelectTab={handleTabChange}
      />

      {/* Global Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-4 right-4 max-w-md mx-auto z-50 bg-slate-900/95 text-white p-3.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3 border border-slate-700"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            </div>
            <p className="text-xs font-semibold flex-1">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

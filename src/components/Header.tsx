import React from 'react';
import { Menu, ArrowLeft, User } from 'lucide-react';
import { USER_PROFILE } from '../data/mockData';

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  titleOverride?: string;
  isRedTitle?: boolean;
  showAvatar?: boolean;
  onProfileClick?: () => void;
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  showBack = false,
  onBack,
  titleOverride,
  isRedTitle = false,
  showAvatar = true,
  onProfileClick,
  onMenuClick,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3.5 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-3">
        {showBack ? (
          <button
            onClick={onBack}
            className="p-1.5 -ml-1.5 text-red-600 hover:text-red-700 active:scale-95 transition-transform rounded-full hover:bg-red-50 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
        ) : (
          <button
            onClick={onMenuClick}
            className="p-1.5 -ml-1.5 text-gray-800 hover:text-gray-950 active:scale-95 transition-transform rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 stroke-[2.5]" />
          </button>
        )}

        {titleOverride ? (
          <h1
            className={`text-xl font-extrabold tracking-tight ${
              isRedTitle ? 'text-red-600 uppercase tracking-tight' : 'text-gray-900'
            }`}
          >
            {titleOverride}
          </h1>
        ) : (
          <div className="flex items-center gap-1.5 select-none">
            <span className="text-2xl font-extrabold tracking-tight text-[#d31238] font-sans">
              Rentomojo Care
            </span>
          </div>
        )}
      </div>

      {showAvatar && (
        <button
          onClick={onProfileClick}
          className="relative rounded-full focus:outline-none ring-2 ring-transparent hover:ring-red-300 transition-all"
          aria-label="User Profile"
        >
          {USER_PROFILE.avatarUrl ? (
            <img
              src={USER_PROFILE.avatarUrl}
              alt="Aditi Sharma"
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-full object-cover border border-gray-200 shadow-sm"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <User className="w-5 h-5" />
            </div>
          )}
        </button>
      )}
    </header>
  );
};

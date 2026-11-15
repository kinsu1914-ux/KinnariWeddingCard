import React from 'react';

interface PageNavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ currentPage, onPageChange }) => {
  const tabs = [
    { id: 1, title: '૧. મુખ્ય પૃષ્ઠ', short: 'મુખ્ય', icon: 'fa-book-open' },
    { id: 2, title: '૨. શુભ પ્રસંગો', short: 'પ્રસંગો', icon: 'fa-calendar-alt' },
    { id: 3, title: '૩. લગ્ન સ્થળ & મોસાળ', short: 'સ્થળ/મોસાળ', icon: 'fa-map-marked-alt' },
    { id: 4, title: '૪. સ્નેહીજનો & ટહૂકો', short: 'પરિવાર/ટહૂકો', icon: 'fa-heart' },
  ];

  return (
    <nav className="w-full max-w-4xl mx-auto mb-2 sm:mb-4 px-1">
      <div className="grid grid-cols-4 gap-1 sm:gap-2">
        {tabs.map((tab) => {
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onPageChange(tab.id)}
              className={`py-1.5 sm:py-2.5 px-1 sm:px-2 rounded-lg font-bold text-[11px] sm:text-xs transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 shadow-md border ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 via-gold to-amber-500 text-maroon-950 border-amber-200 shadow-gold/30 scale-[1.02]'
                  : 'bg-maroon-950/80 text-amber-200/90 border-gold/30 hover:bg-maroon-900 hover:text-gold'
              }`}
            >
              <i className={`fas ${tab.icon} text-[10px] sm:text-xs`}></i>
              <span className="hidden sm:inline">{tab.title}</span>
              <span className="sm:hidden">{tab.short}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

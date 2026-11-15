import React from 'react';
import { saturdayEvents, sundayEvents } from '../../data/weddingData';
import mandavdaImg from '/mandavda.png?url';
import haldiImg from '/haldi.png?url';
import bhojanImg from '/bhojan.png?url';

export const WeddingDetailsPage: React.FC = () => {
  const renderIcon = (icon: string) => {
    if (icon === 'mandavda') {
      return <img src={mandavdaImg} alt="Mandavda" className="w-8 h-8 object-contain" loading="lazy" decoding="async" />;
    }
    if (icon === 'haldi') {
      return <img src={haldiImg} alt="Haldi" className="w-8 h-8 object-contain" loading="lazy" decoding="async" />;
    }
    if (icon === 'mandva-bhojan') {
      return <img src={bhojanImg} alt="Bhojan" className="w-8 h-8 object-contain" loading="lazy" decoding="async" />;
    }
    return <span className="text-xl">{icon}</span>;
  };

  return (
    <div id="page-2" className="page-content p-2 sm:p-6 md:p-8 bg-amber-50/40">
      <div className="border-2 border-gold p-2.5 sm:p-6 rounded-xl relative">
        {/* Page Header */}
        <div className="text-center mb-3 sm:mb-6">
          <span className="text-[10px] sm:text-xs text-maroon-800 font-bold uppercase tracking-widest block">
            卐 ॥ માંગલિક પ્રસંગો ॥ 卐
          </span>
          <h2 className="font-yatra text-xl sm:text-3xl text-maroon-800 mt-1">
            શુભ લગ્ન મહોત્સવ સમયપત્રક
          </h2>
          <div className="w-20 sm:w-28 h-0.5 sm:h-1 bg-gold mx-auto mt-1 sm:mt-2 rounded-full"></div>
        </div>

        {/* Section 1: Saturday Events */}
        <div className="mb-4">
          <div className="bg-maroon-900 text-gold text-center py-1.5 px-3 rounded-lg border border-gold/40 shadow-sm mb-2">
            <h3 className="font-bold text-xs sm:text-sm tracking-wide">
              ॥ સંવત ૨૦૮૩ ના કારતક વદ બારસ ને શનિવાર તા. ૦૫-૧૨-૨૦૨૬ ના રોજ ॥
            </h3>
          </div>

          <div className="space-y-2">
            {saturdayEvents.map((evt) => (
              <div
                key={evt.id}
                className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-gold/30 bg-white shadow-sm hover:border-gold transition-all"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border border-gold bg-amber-50">
                  {renderIcon(evt.icon)}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="font-bold text-maroon-900 text-sm sm:text-base leading-tight">
                      ॥ {evt.titleGujarati} ॥
                    </h4>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                      {evt.timeGujarati}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5 truncate">
                    {evt.venueGujarati}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Sunday Events */}
        <div>
          <div className="bg-maroon-900 text-gold text-center py-1.5 px-3 rounded-lg border border-gold/40 shadow-sm mb-2">
            <h3 className="font-bold text-xs sm:text-sm tracking-wide">
              ॥ સંવત ૨૦૮૩ ના કારતક વદ તેરસ ને રવિવાર તા. ૬-૧૨-૨૦૨૬ ના રોજ ॥
            </h3>
          </div>

          <div className="space-y-2">
            {sundayEvents.map((evt) => (
              <div
                key={evt.id}
                className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-gold/30 bg-white shadow-sm hover:border-gold transition-all"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border border-gold bg-amber-50">
                  {renderIcon(evt.icon)}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="font-bold text-maroon-900 text-sm sm:text-base leading-tight">
                      ॥ {evt.titleGujarati} ॥
                    </h4>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                      {evt.timeGujarati}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5 truncate">
                    {evt.venueGujarati}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

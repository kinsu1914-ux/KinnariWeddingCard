import React from 'react';
import { darshanabhilashi, tahuko } from '../../data/weddingData';

interface MainEventVenuePageProps {
  onShareWhatsApp: () => void;
}

export const MainEventVenuePage: React.FC<MainEventVenuePageProps> = ({ onShareWhatsApp }) => {
  return (
    <div id="page-4" className="page-content p-2 sm:p-6 md:p-8 bg-amber-50/40">
      <div className="border-2 border-gold p-2.5 sm:p-6 rounded-xl relative">
        {/* Page Header */}
        <div className="text-center mb-3 sm:mb-6">
          <span className="text-[10px] sm:text-xs text-maroon-800 font-bold uppercase tracking-widest block">
            સ્નેહી સ્મરણ &amp; ટહૂકો
          </span>
          <h2 className="font-yatra text-xl sm:text-3xl text-maroon-800 mt-1">
            દર્શનભિલાષી &amp; બાળ ટહૂકો
          </h2>
          <div className="w-20 sm:w-28 h-0.5 sm:h-1 bg-gold mx-auto mt-1 sm:mt-2 rounded-full"></div>
        </div>

        {/* Darshanabhilashi Elders Card */}
        <div className="bg-white p-3.5 sm:p-5 rounded-xl border border-gold/40 shadow-sm mb-4">
          <div className="text-center mb-2">
            <span className="font-bold text-xs sm:text-sm text-maroon-900 border-b-2 border-gold pb-0.5 inline-block">
              ॥ દર્શનભિલાષી ॥
            </span>
          </div>

          {/* Pitrus / Heavenly Ancestors */}
          <div className="bg-amber-50 border border-gold/30 rounded-lg p-2 text-center text-xs text-maroon-900 font-semibold mb-3">
            {darshanabhilashi.elders.map((elder, idx) => (
              <p key={idx} className="leading-relaxed">{elder}</p>
            ))}
          </div>

          {/* Family Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {darshanabhilashi.familyMembers.map((fam, idx) => (
              <div key={idx} className="p-1.5 rounded-lg bg-amber-50/60 border border-gold/20 flex flex-col justify-center">
                <span className="font-bold text-maroon-950">{fam.name}</span>
                {fam.spouse && <span className="font-bold text-maroon-900 text-xs mt-0.5">{fam.spouse}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Tahuko Section */}
        <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 p-3.5 sm:p-5 rounded-xl border-2 border-gold/60 text-center shadow-md mb-4">
          <span className="text-lg">🦚</span>
          <h3 className="font-bold text-maroon-900 text-xs sm:text-sm uppercase tracking-wider block mt-0.5">
            ॥ ટહૂકો ॥
          </h3>
          <p className="font-yatra text-maroon-900 text-sm sm:text-base mt-2 leading-relaxed px-2">
            &ldquo;{tahuko.poem}&rdquo;
          </p>

          <div className="mt-3 pt-2 border-t border-gold/30">
            <p className="text-[11px] sm:text-xs text-gray-700 font-medium leading-relaxed">
              {tahuko.kids}
            </p>
          </div>

          {/* Cash Gift Note */}
          <div className="mt-3 inline-block bg-white px-3 py-1 rounded-full border border-maroon-800 text-[11px] sm:text-xs font-bold text-maroon-900 shadow-sm">
            {tahuko.note}
          </div>
        </div>

        {/* WhatsApp Share Button */}
        <div className="text-center my-3">
          <button
            onClick={onShareWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-full shadow-lg transition text-xs sm:text-sm cursor-pointer"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            <span>વોટ્સએપ પર આમંત્રણ શેર કરો (Share Invitation)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

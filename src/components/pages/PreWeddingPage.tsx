import React from 'react';
import { venueDetails, mosalPaksh, jamaiPaksh } from '../../data/weddingData';

export const PreWeddingPage: React.FC = () => {
  return (
    <div id="page-3" className="page-content p-2 sm:p-6 md:p-8 bg-amber-50/40">
      <div className="border-2 border-gold p-2.5 sm:p-6 rounded-xl relative">
        {/* Page Header */}
        <div className="text-center mb-3 sm:mb-6">
          <span className="text-[10px] sm:text-xs text-maroon-800 font-bold uppercase tracking-widest block">
            સ્થળ &amp; પરિવાર વિગત
          </span>
          <h2 className="font-yatra text-xl sm:text-3xl text-maroon-800 mt-1">
            શુભ લગ્ન સ્થળ &amp; મોસાળ પક્ષ
          </h2>
          <div className="w-20 sm:w-28 h-0.5 sm:h-1 bg-gold mx-auto mt-1 sm:mt-2 rounded-full"></div>
        </div>

        {/* Wedding Venue Card */}
        <div className="bg-maroon-900 text-white p-3.5 sm:p-5 rounded-xl border border-gold text-center relative overflow-hidden shadow-lg mb-4">
          <span className="text-[10px] sm:text-xs text-gold uppercase tracking-widest font-bold block mb-1">
            ॥ શુભ લગ્ન સ્થળ ॥
          </span>
          <h3 className="font-yatra text-lg sm:text-2xl text-gold">
            {venueDetails.nameGujarati}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100 mt-1 leading-relaxed">
            {venueDetails.addressGujarati}
          </p>
          <div className="bg-maroon-950/70 border border-gold/30 rounded-lg p-2 mt-2">
            <p className="text-[11px] sm:text-xs text-amber-200">
              {venueDetails.noteGujarati}
            </p>
          </div>
          <a
            href={venueDetails.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-gold to-amber-500 text-maroon-950 px-4 py-2 rounded-full text-xs font-bold hover:brightness-110 shadow-md transition"
          >
            <i className="fas fa-map-marker-alt"></i> ગૂગલ મેપ પર જુઓ (Google Maps)
          </a>
        </div>

        {/* Residence Card (અવસરનું આંગણું) */}
        <div className="bg-amber-100/80 p-3 rounded-xl border border-gold/60 text-center mb-4">
          <span className="text-[10px] sm:text-xs text-maroon-800 font-bold uppercase tracking-widest block">
            ॥ અવસરનું આંગણું (નિવાસસ્થાન) ॥
          </span>
          <p className="text-xs text-maroon-950 font-semibold mt-1">
            {venueDetails.residenceGujarati}
          </p>
        </div>

        {/* Mosal Paksh List */}
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-gold/40 shadow-sm mb-4">
          <div className="text-center mb-2">
            <span className="font-bold text-xs sm:text-sm text-maroon-900 border-b-2 border-gold pb-0.5 inline-block">
              ॥ મોસાળ પક્ષ ॥
            </span>
          </div>
          <ul className="text-xs text-gray-800 space-y-1.5 leading-relaxed divide-y divide-gold/10">
            {mosalPaksh.map((person, index) => (
              <li key={index} className="pt-1 flex items-start gap-1.5">
                <span className="text-amber-600 text-[10px] mt-0.5">🌸</span>
                <span>{person}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Jamai Paksh List */}
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-gold/40 shadow-sm">
          <div className="text-center mb-2">
            <span className="font-bold text-xs sm:text-sm text-maroon-900 border-b-2 border-gold pb-0.5 inline-block">
              ॥ જમાઈ પક્ષ ॥
            </span>
          </div>
          <ul className="text-xs text-gray-800 space-y-1.5 leading-relaxed divide-y divide-gold/10">
            {jamaiPaksh.map((person, index) => (
              <li key={index} className="pt-1 flex items-start gap-1.5">
                <span className="text-amber-600 text-[10px] mt-0.5">🌸</span>
                <span>{person}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { coupleData, inviterContact } from '../data/weddingData';

interface EnvelopeIntroProps {
  isOpen: boolean;
  onOpen: () => void;
  onSkip: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ isOpen, onOpen, onSkip }) => {
  if (isOpen) return null;

  return (
    <div
      id="envelopeOverlay"
      className="fixed inset-0 bg-[#230206]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 transition-all duration-700"
    >
      <div className="max-w-md w-full text-center">
        {/* Top Blessing */}
        <div className="mb-3">
          <span className="text-3xl sm:text-4xl animate-bounce inline-block">🕉️</span>
          <p className="font-yatra text-gold text-sm sm:text-base mt-1 tracking-widest">
            ॥ શ્રી ચામુંડા માતાય નમઃ ॥ ॥ શ્રી ગણેશાય નમઃ ॥
          </p>
          <p className="text-amber-200/90 text-xs mt-0.5 tracking-wider font-semibold">
            સોલંકી પરિવારના વંદન સહ...
          </p>
          <h2 className="font-yatra text-3xl sm:text-4xl text-amber-200 mt-1">શુભવિવાહ</h2>
        </div>

        {/* Envelope Card Graphic */}
        <div className="relative mx-auto w-full max-w-sm bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 rounded-2xl border-4 border-gold shadow-2xl p-5 sm:p-6 flex flex-col justify-between items-center overflow-hidden transition-transform duration-500 hover:scale-105">
          <div className="absolute inset-2 border-2 border-dashed border-gold/40 rounded-xl pointer-events-none"></div>

          {/* Recipient placeholder line like in the image */}
          <div className="w-full text-left px-2 pt-1">
            <p className="text-[11px] text-amber-200/90 font-medium border-b border-gold/30 pb-1">
              સ્નેહી શ્રી, <span className="text-gold font-bold">આપનું સહપરિવાર હાર્દિક સ્વાગત છે</span>
            </p>
          </div>

          <div className="my-3 text-center">
            <p className="text-[11px] text-gold/80 uppercase tracking-widest font-semibold">
              મંગલ પરિણય
            </p>
            <h3 className="font-yatra text-2xl sm:text-3xl text-gold mt-1">
              {coupleData.bride.prefix} {coupleData.bride.nameGujarati}
              <span className="text-amber-300 text-lg sm:text-xl block my-0.5 font-sans font-normal">
                સંગ
              </span>
              {coupleData.groom.prefix} {coupleData.groom.nameGujarati}
            </h3>
            <p className="text-xs text-amber-200 mt-2 font-mono">રવિવાર, ૬ ડિસેમ્બર ૨૦૨૬</p>
          </div>

          {/* Inviter Info Footer on Envelope */}
          <div className="text-[10px] text-amber-200/70 border-t border-gold/20 w-full pt-1.5 pb-2 text-center">
            <p className="font-semibold text-gold/90">નિમંત્રક :</p>
            <p>{inviterContact.name}</p>
            <p className="text-[9px] text-amber-300/80">નવા નરોડા, અમદાવાદ</p>
          </div>

          {/* Wax Seal / Button */}
          <button
            onClick={onOpen}
            className="relative z-10 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-gold to-amber-500 text-maroon-950 font-bold shadow-xl border-2 border-amber-200 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-lg">💌</span>
            <span>કાર્ડ ખોલો (Open Invitation)</span>
          </button>
        </div>

        <p
          className="text-xs text-gold/70 mt-4 cursor-pointer hover:underline"
          onClick={onSkip}
        >
          સીધા કાર્ડ પર જાઓ (Skip to Card) →
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import { coupleData, inviterContact } from '../../data/weddingData';
import ganeshaCoverImg from '/ganesha_cover.png?url';

export const CoverPage: React.FC = () => {
  return (
    <div id="page-1" className="page-content p-2 sm:p-6 md:p-8 bg-amber-50/40">
      <div className="border-2 border-dashed border-maroon-800/40 p-2.5 sm:p-6 rounded-xl relative">
        {/* Gayatri Mantra */}
        <div className="text-center my-1 bg-amber-100/60 border border-gold/40 rounded-lg p-1.5 sm:p-2 mb-2">
          <p className="font-serif text-[9px] sm:text-xs text-maroon-900 font-bold tracking-wider leading-relaxed">
            ॥ ૐ ભૂર્ભુવઃ સ્વઃ તત્સવિતુર્વરેણ્યમ્ ભર્ગો દેવસ્ય ધી મહી ધિયો યો નઃ પ્રચોદયાત્ ॥
          </p>
        </div>

        {/* Lord Ganesha Image */}
        <div className="text-center my-1 sm:my-2">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto flex items-center justify-center mb-1 sm:mb-2 drop-shadow-md">
            <img 
              src={ganeshaCoverImg} 
              alt="Lord Ganesha" 
              className="w-full h-full object-contain"
              decoding="async"
            />
          </div>
          <p className="text-[10px] sm:text-xs text-maroon-800 font-bold tracking-widest uppercase">
            ॥ શ્રી ચામુંડા માતાય નમઃ ॥ &nbsp;|&nbsp; ॥ શ્રી ગણેશાય નમઃ ॥
          </p>

          {/* Shubh Vivah Calligraphy Style */}
          <h2 className="font-yatra text-3xl sm:text-6xl text-maroon-800 my-0.5 sm:my-2 drop-shadow-sm leading-tight">
            શુભ વિવાહ
          </h2>

          <div className="flex items-center justify-center gap-2 text-maroon-900 font-semibold my-1 sm:my-2">
            <span className="h-0.5 w-8 sm:w-12 bg-gold"></span>
            <span className="text-xs sm:text-base text-maroon-800 font-bold">રવિવાર તા. ૬-૧૨-૨૦૨૬</span>
            <span className="h-0.5 w-8 sm:w-12 bg-gold"></span>
          </div>
        </div>

        {/* Chamunda Mata Blessing Proclamation */}
        <div className="text-center my-2 text-xs sm:text-sm text-gray-800 leading-relaxed px-2">
          <p>
            સહર્ષ જણાવવાનું કે <span className="font-bold text-maroon-900">શ્રી ચામુંડા માતાજીની અસીમ કૃપાથી</span>
          </p>
          <p className="text-[11px] sm:text-xs text-gray-700 mt-0.5">
            ગામ ખેરાલુ (હાલ નવા નરોડા, અમદાવાદ) નિવાસી
          </p>
          <p className="font-semibold text-maroon-900 mt-0.5">
            અ.સૌ. જશોદાબેન તથા બિપીનચંદ્ર કાન્તિલાલ સોલંકી ની સુપુત્રી
          </p>
        </div>

        {/* Bride & Groom Centerpiece */}
        <div className="my-2 sm:my-4 text-center bg-maroon-900 text-gold p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-gold shadow-lg relative overflow-hidden">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>

          <p className="text-amber-200 text-xs sm:text-sm font-semibold mb-1">મંગલ પરિણય બંધન</p>
          
          <div className="text-center my-2">
            <span className="text-xs text-amber-300 block">{coupleData.bride.prefix}</span>
            <h3 className="font-yatra text-2xl sm:text-4xl text-amber-300 tracking-wide font-bold">
              {coupleData.bride.nameGujarati}
            </h3>
            
            <div className="my-1.5 flex items-center justify-center gap-2">
              <span className="h-px w-10 bg-gold/40"></span>
              <span className="text-sm sm:text-base text-gold font-serif">ના શુભ લગ્ન</span>
              <span className="h-px w-10 bg-gold/40"></span>
            </div>

            <span className="text-xs text-amber-300 block">{coupleData.groom.prefix}</span>
            <h3 className="font-yatra text-2xl sm:text-4xl text-amber-300 tracking-wide font-bold">
              {coupleData.groom.nameGujarati}
            </h3>
          </div>

          {/* Groom's parentage note */}
          <div className="mt-2 pt-2 border-t border-gold/30 text-[11px] sm:text-xs text-amber-100/90 leading-relaxed">
            <p className="text-gold font-medium">{coupleData.groom.nativeGujarati}</p>
            <p>{coupleData.groom.parentsGujarati}</p>
          </div>
        </div>

        {/* Wedding Date Proclamation */}
        <div className="text-center my-2 text-xs sm:text-sm text-gray-800 leading-relaxed px-2">
          <p>
            સાથે <span className="font-bold text-maroon-900">સંવત ૨૦૮૩ ના કારતક વદ તેરસ ને રવિવાર તા. ૬-૧૨-૨૦૨૬</span> ના શુભદિને નિર્ધાર્યા છે,
          </p>
          <p className="text-[11px] sm:text-xs text-gray-700 mt-1">
            તો આ શુભ પ્રસંગે નવદંપતિને આશીર્વાદ આપવા સહકુટુંબ પધારી શોભામાં અભિવૃદ્ધિ કરશોજી...
          </p>
        </div>

        {/* Inviter Footer Box */}
        <div className="mt-3 bg-amber-100/80 p-2.5 sm:p-4 rounded-xl border border-gold/60 text-center">
          <span className="text-[10px] sm:text-xs text-maroon-800 font-bold uppercase tracking-wider block">
            || નિમંત્રક ||
          </span>
          <h4 className="font-bold text-maroon-900 text-sm sm:text-base mt-0.5">
            {inviterContact.name}
          </h4>
          <p className="text-[11px] sm:text-xs text-gray-700 mt-0.5 leading-snug">
            {inviterContact.address}
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs font-bold text-maroon-900">
            <a href={`tel:${inviterContact.phone1}`} className="bg-gold/30 hover:bg-gold/50 px-2.5 py-1 rounded-full border border-gold/40 flex items-center gap-1">
              📞 {inviterContact.phone1}
            </a>
            <a href={`tel:${inviterContact.phone2}`} className="bg-gold/30 hover:bg-gold/50 px-2.5 py-1 rounded-full border border-gold/40 flex items-center gap-1">
              📞 {inviterContact.phone2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

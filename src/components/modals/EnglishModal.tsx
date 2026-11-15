import React from 'react';
import { coupleData, venueDetails } from '../../data/weddingData';

interface EnglishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRSVP: () => void;
}

export const EnglishModal: React.FC<EnglishModalProps> = ({ isOpen, onClose, onOpenRSVP }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-gold rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-maroon-900 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gold/20"
        >
          ✕
        </button>

        <div className="text-center mb-4 border-b border-gold/40 pb-3">
          <p className="text-xs uppercase tracking-widest text-maroon-800 font-bold">
            || Shree Chamunda Matay Namah || Shree Ganeshay Namah ||
          </p>
          <h2 className="font-serif text-2xl text-maroon-900 mt-1 font-bold">
            Wedding Invitation
          </h2>
          <p className="text-xs text-gray-600 mt-0.5">Solanki Family, Ahmedabad</p>
        </div>

        <div className="text-center text-xs text-gray-800 space-y-3 leading-relaxed">
          <p>
            With the divine blessings of <strong>Shree Chamunda Mataji</strong>, we cordially invite you and your family to celebrate the auspicious wedding ceremony of our beloved daughter:
          </p>

          <div className="my-3 py-2 bg-maroon-900 text-gold rounded-xl border border-gold">
            <h3 className="text-xl font-serif font-bold text-amber-300">
              {coupleData.bride.nameEnglish}
            </h3>
            <p className="text-[11px] text-amber-100">{coupleData.bride.parentsEnglish}</p>
            <p className="text-[10px] text-amber-200/80">{coupleData.bride.nativeEnglish}</p>

            <span className="text-xs text-gold/80 block my-1">with</span>

            <h3 className="text-xl font-serif font-bold text-amber-300">
              {coupleData.groom.nameEnglish}
            </h3>
            <p className="text-[11px] text-amber-100">{coupleData.groom.parentsEnglish}</p>
            <p className="text-[10px] text-amber-200/80">{coupleData.groom.nativeEnglish}</p>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gold/40 text-left space-y-2">
            <h4 className="font-bold text-maroon-900 border-b border-gold/30 pb-1 text-center">
              Program Details
            </h4>
            <div>
              <p className="font-bold text-maroon-950">Saturday, 5th December 2026:</p>
              <p className="text-gray-700">• Ganesh Sthapana &amp; Mandap Muhurat: 8:00 AM</p>
              <p className="text-gray-700">• Haldi Ceremony: 3:00 PM</p>
              <p className="text-gray-700">• Raas Garba &amp; Sangeet: 9:00 PM Onwards (Shakti Chowk)</p>
            </div>
            <div>
              <p className="font-bold text-maroon-950">Sunday, 6th December 2026:</p>
              <p className="text-gray-700">• Jaan Arrival: 10:00 AM</p>
              <p className="text-gray-700">• Hast Melap (Wedding Rituals): 11:00 AM to 2:00 PM</p>
              <p className="text-gray-700">• Mameru Ceremony: 12:00 PM</p>
              <p className="text-gray-700">• Wedding Reception &amp; Lunch: 12:00 PM Onwards</p>
              <p className="text-gray-700">• Kanya Vidai: 5:00 PM</p>
            </div>
          </div>

          <div className="bg-maroon-950 text-gold p-3 rounded-xl border border-gold text-center">
            <p className="font-bold text-xs uppercase tracking-wider text-amber-300">Wedding Venue:</p>
            <p className="text-sm font-bold text-white mt-0.5">{venueDetails.nameGujarati}</p>
            <p className="text-xs text-amber-100">{venueDetails.addressGujarati}</p>
            <a
              href={venueDetails.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-gold text-maroon-950 text-xs font-bold px-3 py-1 rounded-full hover:bg-amber-300 transition"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="pt-2 flex justify-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenRSVP();
              }}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-xs shadow-md"
            >
              Send RSVP on WhatsApp
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gold text-maroon-950 font-bold rounded-full text-xs shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

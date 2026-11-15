import React from 'react';
import { coupleData, venueDetails } from '../../data/weddingData';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShareWhatsApp: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, onShareWhatsApp }) => {
  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    currentUrl
  )}&color=800020&bgcolor=fffdf9`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-gold rounded-2xl max-w-sm w-full p-4 sm:p-6 shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-maroon-900 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gold/20"
        >
          ✕
        </button>

        <span className="text-2xl">📱</span>
        <h3 className="font-yatra text-xl text-maroon-900 mt-1">સ્કેન QR કોડ</h3>
        <p className="text-xs text-gray-600 mb-3">
          {coupleData.bride.nameGujarati} અને {coupleData.groom.nameGujarati} ના શુભ લગ્ન
        </p>

        <div className="p-3 bg-white border-2 border-gold rounded-xl inline-block shadow-md my-2">
          <img src={qrCodeUrl} alt="Invitation QR Code" className="w-44 h-44 object-contain mx-auto" />
        </div>

        <p className="text-[11px] text-gray-600 mt-2">
          આ QR કોડ સ્કેન કરીને ડિજિટલ આમંત્રણ કાર્ડ સીધું મોબાઈલમાં ખોલો.
        </p>

        <div className="mt-3 flex flex-col gap-2">
          <a
            href={venueDetails.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-gold hover:bg-amber-300 text-maroon-950 font-bold rounded-full text-xs shadow-md transition"
          >
            📍 લગ્ન સ્થળ મેપ જુઓ (Nikol Hall)
          </a>
          <button
            onClick={onShareWhatsApp}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-xs shadow-md transition"
          >
            <i className="fab fa-whatsapp"></i> કાર્ડ વોટ્સએપ પર શેર કરો
          </button>
        </div>
      </div>
    </div>
  );
};

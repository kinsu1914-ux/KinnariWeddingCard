import React, { useState } from 'react';
import { inviterContact, coupleData } from '../../data/weddingData';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppRSVP = (phone: string) => {
    const message =
      `🌸 *લગ્ન આમંત્રણ પ્રતિભાવ (RSVP)* 🌸\n\n` +
      `નમસ્તે, *${coupleData.bride.nameGujarati} અને ${coupleData.groom.nameGujarati}* ના શુભ લગ્ન પ્રસંગે:\n` +
      `👤 *અતિથિનું નામ:* ${name || 'સહપરિવાર'}\n` +
      `👥 *કુલ સભ્યો:* ${guestCount}\n` +
      `✅ *હાજરી:* ${attending === 'yes' ? 'અમે ચોક્કસ પધારીશું' : 'દિલગીર છીએ, હાજરી આપી શકાશે નહીં'}\n\n` +
      `શુભકામનાઓ સહ!`;

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const waUrl = `https://api.whatsapp.com/send?phone=91${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-gold rounded-2xl max-w-md w-full p-4 sm:p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-maroon-900 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gold/20"
        >
          ✕
        </button>

        <div className="text-center mb-4">
          <span className="text-2xl">💌</span>
          <h3 className="font-yatra text-2xl text-maroon-900 mt-1">RSVP - હાજરી નોંધણી</h3>
          <p className="text-xs text-gray-600">સોલંકી પરિવાર આપના સ્નેહભર્યા આગમનની પ્રતીક્ષામાં છે</p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-6">
            <span className="text-4xl text-emerald-600">✓</span>
            <h4 className="font-bold text-maroon-900 text-lg mt-2">આપનો ખૂબ ખૂબ આભાર!</h4>
            <p className="text-xs text-gray-700 mt-1">આપનો પ્રતિભાવ સફળતાપૂર્વક મોકલાઈ ગયો છે.</p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-gold text-maroon-950 font-bold rounded-full text-xs shadow-md"
            >
              બંધ કરો
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleWhatsAppRSVP(inviterContact.phone1);
            }}
            className="space-y-3 text-xs"
          >
            <div>
              <label className="block text-maroon-950 font-bold mb-1">આપનું નામ (Your Name)</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="દા.ત. રમેશભાઈ પટેલ"
                className="w-full px-3 py-2 border border-gold/50 rounded-lg focus:outline-none focus:border-maroon-800 bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-maroon-950 font-bold mb-1">કુલ સભ્યો</label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-3 py-2 border border-gold/50 rounded-lg focus:outline-none focus:border-maroon-800 bg-white"
                >
                  <option value="1">૧ (એકલા)</option>
                  <option value="2">૨ (દંપતી)</option>
                  <option value="3-4">૩-૪ સભ્યો</option>
                  <option value="5+">સહપરિવાર (૫+)</option>
                </select>
              </div>

              <div>
                <label className="block text-maroon-950 font-bold mb-1">હાજરી</label>
                <select
                  value={attending}
                  onChange={(e) => setAttending(e.target.value as 'yes' | 'no')}
                  className="w-full px-3 py-2 border border-gold/50 rounded-lg focus:outline-none focus:border-maroon-800 bg-white"
                >
                  <option value="yes">પધારીશું (Attending)</option>
                  <option value="no">દિલગીર છીએ (Regret)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-maroon-950 font-bold mb-1.5 text-center">
                વોટ્સએપ દ્વારા પ્રતિભાવ મોકલો:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleWhatsAppRSVP(inviterContact.phone1)}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center justify-center gap-1 shadow-md text-xs cursor-pointer"
                >
                  <i className="fab fa-whatsapp"></i> {inviterContact.phone1}
                </button>
                <button
                  type="button"
                  onClick={() => handleWhatsAppRSVP(inviterContact.phone2 || '')}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center justify-center gap-1 shadow-md text-xs cursor-pointer"
                >
                  <i className="fab fa-whatsapp"></i> {inviterContact.phone2}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

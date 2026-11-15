import { CoupleInfo, FamilyContact, WeddingEvent } from '../types/wedding';

export const coupleData: CoupleInfo = {
  bride: {
    prefix: 'ચિ.',
    nameGujarati: 'કિન્નરી',
    nameEnglish: 'Kinnari',
    parentsGujarati: 'અ.સૌ. જશોદાબેન તથા શ્રી બિપીનચંદ્ર કાન્તિલાલ સોલંકી ની સુપુત્રી',
    parentsEnglish: 'Daughter of Mrs. Jashodaben & Mr. Bipinchandra Kantilal Solanki',
    nativeGujarati: 'ગામ ખેરાલુ (હાલ નવા નરોડા, અમદાવાદ) નિવાસી',
    nativeEnglish: 'Native: Kheralu (Currently residing at Nava Naroda, Ahmedabad)'
  },
  groom: {
    prefix: 'ચિ.',
    nameGujarati: 'સુરેશ',
    nameEnglish: 'Suresh',
    parentsGujarati: 'અ.સૌ. ઉર્મિલાબેન તથા શ્રી મહેન્દ્રભાઇ ભીમજીભાઈ હાલારી ના સુપુત્ર',
    parentsEnglish: 'Son of Mrs. Urmilaben & Mr. Mahendrabhai Bhimjibhai Halari',
    nativeGujarati: 'ગામ દહિસરા - રાજકોટ (હાલ મુંબઈ) નિવાસી સાથે',
    nativeEnglish: 'Native: Dahisara - Rajkot (Currently residing at Mumbai)'
  },
  weddingDate: {
    gujarati: 'સંવત ૨૦૮૩ ના કારતક વદ તેરસ ને રવિવાર તા. ૬-૧૨-૨૦૨૬ ના શુભદિને',
    english: 'Sunday, 6th December 2026',
    isoTimestamp: 'December 6, 2026 11:00:00'
  }
};

export const inviterContact: FamilyContact = {
  name: 'શ્રી બિપીનચંદ્ર કાન્તિલાલ સોલંકી / અ.સૌ. જશોદાબેન બિપીનચંદ્ર સોલંકી',
  relation: 'નિમંત્રક',
  address: 'ડી-૩૧૨, વિભાગ-૧૦, પાર્શ્વનાથ ટાઉનશીપ, શક્તિ ચોક, કૃષ્ણનગરની પાછળ, નવા નરોડા, અમદાવાદ-૩૮૨૩૪૬.',
  phone1: '9904878018',
  phone2: '9104733503'
};

// Mangalik Prasango - Shanivar 05-12-2026
export const saturdayEvents: WeddingEvent[] = [
  {
    id: 'ganesh-mandap',
    titleGujarati: 'ગણેશ સ્થાપના / મંડપ મુહૂર્ત',
    titleEnglish: 'Ganesh Sthapana & Mandap Muhurat',
    dateGujarati: 'શનિવાર તા. ૦૫-૧૨-૨૦૨૬ (કારતક વદ બારસ)',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'સવારે ૮-૦૦ કલાકે',
    timeEnglish: '8:00 AM',
    venueGujarati: 'અવસરનું આંગણું, પાર્શ્વનાથ ટાઉનશીપ, નવા નરોડા',
    venueEnglish: 'Residence, Parshwanath Township, Nava Naroda',
    icon: 'mandavda'
  },
  {
    id: 'haldi',
    titleGujarati: 'હલ્દી રસમ',
    titleEnglish: 'Haldi Ceremony',
    dateGujarati: 'શનિવાર તા. ૦૫-૧૨-૨૦૨૬ (કારતક વદ બારસ)',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'બપોરે ૩-૦૦ કલાકે',
    timeEnglish: '3:00 PM',
    venueGujarati: 'અવસરનું આંગણું, પાર્શ્વનાથ ટાઉનશીપ, નવા નરોડા',
    venueEnglish: 'Residence, Parshwanath Township, Nava Naroda',
    icon: 'haldi'
  },
  {
    id: 'raas-garba',
    titleGujarati: 'રાસ ગરબા',
    titleEnglish: 'Raas Garba & Sangeet',
    dateGujarati: 'શનિવાર તા. ૦૫-૧૨-૨૦૨૬ (કારતક વદ બારસ)',
    dateEnglish: 'Saturday, Dec 5, 2026',
    timeGujarati: 'રાત્રે ૯-૦૦ કલાકે',
    timeEnglish: '9:00 PM Onwards',
    venueGujarati: 'શક્તિ ચોક, પાર્શ્વનાથ ટાઉનશીપ, કૃષ્ણનગર પાછળ, નવા નરોડા',
    venueEnglish: 'Shakti Chowk, Parshwanath Township, Nava Naroda',
    icon: '💃'
  }
];

// Mangalik Prasango - Ravivar 06-12-2026
export const sundayEvents: WeddingEvent[] = [
  {
    id: 'jaan-aagman',
    titleGujarati: 'જાન આગમન',
    titleEnglish: 'Jaan Aagman (Groom Party Arrival)',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬ (કારતક વદ તેરસ)',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'સવારે ૧૦-૦૦ કલાકે',
    timeEnglish: '10:00 AM',
    venueGujarati: 'નિકોલ કોમ્યુનિટી હોલ, નવા નરોડા',
    venueEnglish: 'Nikol Community Hall, Nava Naroda',
    icon: '🐎'
  },
  {
    id: 'hast-melap',
    titleGujarati: 'હસ્ત મેળાપ',
    titleEnglish: 'Hast Melap (Wedding Ceremony)',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬ (કારતક વદ તેરસ)',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'સવારે ૧૧ થી ૨ કલાકે',
    timeEnglish: '11:00 AM to 2:00 PM',
    venueGujarati: 'નિકોલ કોમ્યુનિટી હોલ, નવા નરોડા',
    venueEnglish: 'Nikol Community Hall, Nava Naroda',
    icon: '🤝'
  },
  {
    id: 'mameru',
    titleGujarati: 'મામેરૂં',
    titleEnglish: 'Mameru Ceremony',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬ (કારતક વદ તેરસ)',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'બપોરે ૧૨-૦૦ કલાકે',
    timeEnglish: '12:00 PM',
    venueGujarati: 'નિકોલ કોમ્યુનિટી હોલ, નવા નરોડા',
    venueEnglish: 'Nikol Community Hall, Nava Naroda',
    icon: '🎁'
  },
  {
    id: 'bhojan-samarambh',
    titleGujarati: 'ભોજન સમારંભ',
    titleEnglish: 'Bhojan Samarambh (Reception / Lunch)',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬ (કારતક વદ તેરસ)',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'બપોરે ૧૨-૦૦ કલાકે થી આપના આગમન સુધી',
    timeEnglish: '12:00 PM Onwards',
    venueGujarati: 'નિકોલ કોમ્યુનિટી હોલ, નવા નરોડા',
    venueEnglish: 'Nikol Community Hall, Nava Naroda',
    icon: 'mandva-bhojan'
  },
  {
    id: 'kanya-vidai',
    titleGujarati: 'કન્યા વિદાય',
    titleEnglish: 'Kanya Vidai (Farewell Ceremony)',
    dateGujarati: 'રવિવાર તા. ૬-૧૨-૨૦૨૬ (કારતક વદ તેરસ)',
    dateEnglish: 'Sunday, Dec 6, 2026',
    timeGujarati: 'સાંજે ૫-૦૦ કલાકે',
    timeEnglish: '5:00 PM',
    venueGujarati: 'નિકોલ કોમ્યુનિટી હોલ, નવા નરોડા',
    venueEnglish: 'Nikol Community Hall, Nava Naroda',
    icon: '👰'
  }
];

// Venue Details
export const venueDetails = {
  nameGujarati: 'નિકોલ કોમ્યુનિટી હોલ',
  addressGujarati: 'આમ્રકુંજ સોસાયટી, ભવાની ચોક, નવા નરોડા, અમદાવાદ.',
  noteGujarati: 'તા.ક. : સારંગપુર થી રૂટ નં. ૧૨૭, ભવાની ચોક ઉતરવું.',
  mapsUrl: 'https://maps.google.com/?q=Nikol+Community+Hall+Nava+Naroda+Ahmedabad',
  residenceGujarati: 'ડી-૩૧૨, વિભાગ-૧૦, પાર્શ્વનાથ ટાઉનશીપ, શક્તિ ચોક, કૃષ્ણનગરની પાછળ, નવા નરોડા, અમદાવાદ-૩૮૨૩૪૬.'
};

// Darshanabhilashi (દર્શનભિલાષી)
export const darshanabhilashi = {
  elders: [
    'સ્વ. કાન્તિલાલ ભલાભાઇ સોલંકી',
    'સ્વ. રેવાબેન કાન્તિલાલ સોલંકી',
    'સ્વ. દિપક બિપીનચંદ્ર સોલંકી'
  ],
  familyMembers: [
    { name: 'શ્રી દિનકરભાઈ કાન્તિલાલ સોલંકી', spouse: 'અ.સૌ. અંબિકાબેન દિનકરભાઈ સોલંકી' },
    { name: 'શ્રી હર્ષદભાઈ કાન્તિલાલ સોલંકી', spouse: 'અ.સૌ. દક્ષાબેન હર્ષદભાઈ સોલંકી' },
    { name: 'શ્રી હેમંત બિપીનચંદ્ર સોલંકી', spouse: 'અ.સૌ. ગાર્ગી હેમંત સોલંકી' },
    { name: 'શ્રી હિરેન દિનકરભાઈ સોલંકી', spouse: 'અ.સૌ. જીજ્ઞાશા હિરેન સોલંકી' },
    { name: 'શ્રી જીગ્નેશ દિનકરભાઈ સોલંકી', spouse: '' },
    { name: 'શ્રી હિમાલય દિનકરભાઈ સોલંકી', spouse: '' },
    { name: 'શ્રી હિતાર્થ હેમંતભાઈ શ્રોફ', spouse: '' }
  ]
};

// Mosal Paksh (મોસાળ પક્ષ)
export const mosalPaksh = [
  'સ્વ. પરસોત્તમભાઈ બી. ચૌહાણ / સ્વ. લક્ષ્મીબેન પી. ચૌહાણ',
  'સ્વ. કરશનભાઈ બી. ચૌહાણ / ગં.સ્વ. ગંગાબેન કે. ચૌહાણ',
  'શ્રી ડાહ્યાભાઇ બી. ચૌહાણ / સ્વ. પુષ્પાબેન ડી. ચૌહાણ',
  'શ્રી દિલીપભાઈ પી. ચૌહાણ (મામા) / અ.સૌ. રમિલાબેન ડી. ચૌહાણ (મામી)',
  'શ્રી મહેશભાઈ પી. ચૌહાણ (મામા)',
  'અ.સૌ. મધુકાંતાબેન મહેન્દ્રકુમાર લેઉઆ (માસી)',
  'ગં.સ્વ. અરુણાબેન હરજીવન બેંકર (માસી)',
  'અ.સૌ. મીનાક્ષીબેન ચંદ્રકાંતભાઈ સોલંકી (માસી)'
];

// Jamai Paksh (જમાઈ પક્ષ)
export const jamaiPaksh = [
  'સ્વ. ખેમચંદ્ર ડી. મકવાણા (ફુઆ) / ગં.સ્વ. ઉર્મિલાબેન કે. મકવાણા (ફોઈ)',
  'શ્રી દિનેશકુમાર એચ. પરમાર (ફુઆ) / અ.સૌ. પ્રભાવતી ડી. પરમાર (ફોઈ)'
];

// Tahuko (ટહૂકો - Children)
export const tahuko = {
  poem: 'નથી કરવું Tweet, કે નથી કરવું Whatsapp, નથી કરવો SMS કે નથી કરવો E-mail, રહેજો અમારી ફોઈ/માસી નાં લગ્નમાં Face to Face.',
  kids: 'હિતાર્થ, જીયા, શાનવી, શિવાંશ, પ્રાણ્શુ, યુવિન, પૂર્વ, મિત્તલ (પિન્કી), ક્રિવા, જેનિલ, પર્વણ્ય, અર્થ, કથન, કબીર, હિયાંશ',
  note: 'નોંધ :- ભેટ, સાડીની બદલામાં રોકડ સ્વીકાર્ય છે.'
};

// Printing Press Credit from Card
export const pressCredit = 'માતંગી પ્રિન્ટીંગ પ્રેસ - કૃષ્ણનગર રોડ, સૈજપુર, અમદાવાદ.';

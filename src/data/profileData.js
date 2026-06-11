// ============================================================
//  SINGLE SOURCE OF TRUTH — edit everything here.
//  Telugu (te) + English live side by side on most fields.
//  To replace a photo: drop your image in /public/photos and
//  set the path below, e.g. photo: "/photos/krishna-hero.jpg".
//  Leave "" to keep the warm sunflower placeholder.
// ============================================================

export const profileData = {
  name: 'Nandikonda Krishna Vardhan Reddy',

  loading: {
    blessing: 'శుభమస్తు',
    name: 'Nandikonda Krishna Vardhan Reddy',
    nameTe: 'నందికొండ కృష్ణ వర్ధన్ రెడ్డి',
  },

  hero: {
    photo: '/photos/krishna-hero.jpg',
    blessing: 'శుభమస్తు',
    nameTe: 'నందికొండ కృష్ణ వర్ధన్ రెడ్డి',
    name: 'Nandikonda Krishna Vardhan Reddy',
    tagline: 'Tradition, Family Values & A Beautiful Journey Ahead',
    teLine: 'శాంతి • గౌరవం • ప్రేమ',
    quickFacts: ['26 Years', "6' / 188 cm", 'Property Manager', 'Bratislava, Slovakia'],
    ctaPrimary: 'View Profile',
    ctaSecondary: 'Download Biodata',
  },

  intro: {
    teHeading: 'వివాహ పరిచయం',
    heading: 'Marriage Introduction',
    body:
      'Nandikonda Krishna Vardhan Reddy is a respectful, family-oriented, and culturally rooted individual with a modern outlook toward life. He values tradition, relationships, professional responsibility, and mutual respect.',
    teLine: 'సాంప్రదాయం మరియు ఆధునిక జీవితం కలిసిన వ్యక్తిత్వం.',
  },

  // ---- 10 scroll-based photo storytelling sections ----
  photoStory: [
    {
      photo: '/photos/krishna-story-1.jpg',
      teTitle: 'మంచి విలువలు',
      title: 'A Man of Values',
      text:
        'Krishna carries strong family values and believes in respect, kindness, honesty, and integrity.',
    },
    {
      photo: '/photos/krishna-story-2.jpg',
      teTitle: 'మన సంప్రదాయం',
      title: 'Rooted in Tradition',
      text:
        'He respects Hindu traditions, Telugu culture, family customs, festivals, and meaningful rituals.',
    },
    {
      photo: '/photos/krishna-story-3.jpg',
      teTitle: 'ప్రశాంత స్వభావం',
      title: 'Calm and Responsible',
      text:
        'His calm nature, patience, and maturity make him dependable and emotionally balanced.',
    },
    {
      photo: '/photos/krishna-story-4.jpg',
      teTitle: 'వృత్తి పై దృష్టి',
      title: 'Professionally Focused',
      text:
        'As a Property Manager at Hotel Puzzle s.r.o in Bratislava, he is responsible, disciplined, and career-focused.',
    },
    {
      photo: '/photos/krishna-story-5.jpg',
      teTitle: 'కుటుంబానికి ప్రాధాన్యం',
      title: 'Family First',
      text: 'He values family bonding, togetherness, respect, and warm relationships.',
    },
    {
      photo: '/photos/krishna-story-6.jpg',
      teTitle: 'సరళమైన జీవితం',
      title: 'Simple and Elegant Living',
      text: 'He believes in a balanced lifestyle with simplicity, dignity, and purpose.',
    },
    {
      photo: '/photos/krishna-story-7.jpg',
      teTitle: 'మంచి మనసు',
      title: 'Positive Personality',
      text:
        'His humility, kindness, and friendly nature make people feel comfortable around him.',
    },
    {
      photo: '/photos/krishna-story-8.jpg',
      teTitle: 'గౌరవమైన భాగస్వామి',
      title: 'Respectful Life Partner',
      text:
        'He believes marriage is built on trust, understanding, emotional support, patience, and shared values.',
    },
    {
      photo: '/photos/krishna-story-9.jpg',
      teTitle: 'సంస్కృతి పై గౌరవం',
      title: 'Cultural Pride',
      text:
        'He appreciates Indian traditions, spiritual values, Telugu family culture, and festive celebrations.',
    },
    {
      photo: '/photos/krishna-story-10.jpg',
      teTitle: 'కొత్త ప్రయాణం',
      title: 'Ready for a Meaningful Journey',
      text:
        'He looks forward to a beautiful married life filled with respect, happiness, companionship, and shared dreams.',
    },
  ],

  profile: {
    teHeading: 'వ్యక్తిగత వివరాలు',
    heading: 'Profile Details',
    rows: [
      { label: 'Name', value: 'Nandikonda Krishna Vardhan Reddy', icon: 'User' },
      { label: 'తెలుగు పేరు', value: 'నందికొండ కృష్ణ వర్ధన్ రెడ్డి', icon: 'Languages' },
      { label: 'Date of Birth', value: '13 July 1999', icon: 'CalendarDays' },
      { label: 'Age', value: '26 Years', icon: 'Clock' },
      { label: 'Height', value: "188 cm / 6'", icon: 'Ruler' },
      { label: 'Caste', value: 'Reddy (Motati)', icon: 'Users' },
      { label: 'Gothram', value: 'Chamanthala', icon: 'Flower2' },
      { label: 'Star', value: 'Punarvasu', icon: 'Star' },
      { label: 'Rashi', value: 'Mithunam', icon: 'Moon' },
      { label: 'Profession', value: 'Property Manager – Hotel Puzzle s.r.o', icon: 'Briefcase' },
      { label: 'Location', value: 'Bratislava, Slovakia', icon: 'MapPin' },
      { label: 'Annual Income', value: '€17,600 / approx. ₹15.8 Lakhs per year', icon: 'Wallet' },
    ],
  },

  family: {
    teHeading: 'కుటుంబ నేపథ్యం',
    heading: 'Family Background',
    body:
      'He comes from a respectable and cultured Reddy Hindu family that values agriculture, tradition, hard work, family bonding, and social respect. The family carries a warm and welcoming outlook while staying connected to Telugu cultural roots.',
    members: [
      { role: 'Father', name: 'Anji Reddy', detail: 'Agriculture & Fertilizer Business', icon: 'UserRound' },
      { role: 'Mother', name: 'Padma', detail: 'Homemaker & Farmer', icon: 'Flower2' },
      { role: 'Brother', name: 'Nandikonda Shiva Vardhan Reddy', detail: 'Sibling', icon: 'Users' },
    ],
    values: ['Agriculture', 'Tradition', 'Hard Work', 'Family Bonding', 'Social Respect'],
  },

  career: {
    teHeading: 'వృత్తి',
    heading: 'Profession & Career',
    body:
      'Krishna is professionally settled in Bratislava, Slovakia, working as a Property Manager at Hotel Puzzle s.r.o. His career reflects responsibility, discipline, stability, and a strong work ethic.',
    cards: [
      { label: 'Role', value: 'Property Manager', icon: 'Briefcase' },
      { label: 'Company', value: 'Hotel Puzzle s.r.o', icon: 'Building2' },
      { label: 'Location', value: 'Bratislava, Slovakia', icon: 'MapPin' },
      { label: 'Annual Income', value: '€17,600 / approx. ₹15.8 Lakhs', icon: 'Wallet' },
      { label: 'Education', value: 'To be updated', icon: 'GraduationCap' },
      { label: 'Work Ethic', value: 'Responsible & disciplined', icon: 'TrendingUp' },
    ],
  },

  horoscope: {
    teHeading: 'జాతక వివరాలు',
    heading: 'Horoscope Details',
    rows: [
      { label: 'Date of Birth', value: '13 July 1999' },
      { label: 'Time of Birth', value: 'To be updated' },
      { label: 'Place of Birth', value: 'To be updated' },
      { label: 'Star (Nakshatra)', value: 'Punarvasu' },
      { label: 'Rashi', value: 'Mithunam' },
      { label: 'Gothram', value: 'Chamanthala' },
      { label: 'Caste', value: 'Reddy (Motati)' },
      { label: 'Manglik Status', value: 'To be updated' },
    ],
  },

  lifestyle: {
    teHeading: 'జీవన శైలి',
    heading: 'Lifestyle & Interests',
    tiles: [
      { label: 'Family Values', icon: 'Home' },
      { label: 'Telugu Culture', icon: 'Landmark' },
      { label: 'Spirituality', icon: 'Sparkles' },
      { label: 'Festivals', icon: 'PartyPopper' },
      { label: 'Travel', icon: 'Plane' },
      { label: 'Career Growth', icon: 'TrendingUp' },
      { label: 'Simple Living', icon: 'Leaf' },
      { label: 'Meaningful Relationships', icon: 'HeartHandshake' },
      { label: 'Responsibility', icon: 'ShieldCheck' },
      { label: 'Respectful Nature', icon: 'Heart' },
    ],
  },

  partner: {
    teHeading: 'జీవిత భాగస్వామి ఆశలు',
    heading: 'Partner Expectations',
    body:
      'Looking for a kind-hearted, educated, family-oriented life partner who respects Indian traditions, Telugu culture, relationships, and believes in building a peaceful and happy married life together.',
    teLine: 'గౌరవం, నమ్మకం, ప్రేమతో కూడిన అందమైన జీవితం.',
  },

  gallery: {
    teHeading: 'ఫోటో గ్యాలరీ',
    heading: 'Photo Gallery',
    photos: [
      { photo: '/photos/krishna-story-8.jpg', caption: 'Portrait' },
      { photo: '/photos/krishna-story-1.jpg', caption: 'Grace' },
      { photo: '/photos/krishna-hero.jpg', caption: 'Elegance' },
      { photo: '/photos/krishna-story-7.jpg', caption: 'Joy' },
      { photo: '/photos/krishna-story-2.jpg', caption: 'Tradition' },
      { photo: '/photos/krishna-extra-1.jpg', caption: 'Style' },
      { photo: '/photos/krishna-story-6.jpg', caption: 'Simplicity' },
      { photo: '/photos/krishna-story-3.jpg', caption: 'Calm' },
      { photo: '/photos/krishna-story-9.jpg', caption: 'Culture' },
      { photo: '/photos/krishna-story-10.jpg', caption: 'Journey' },
    ],
  },

  contact: {
    teHeading: 'సంప్రదించండి',
    heading: 'Contact',
    phone: 'To be updated',
    phoneDial: '',
    whatsapp: '',
    email: 'To be updated',
    location: 'Bratislava, Slovakia / India',
  },

  footer: {
    blessing: 'శుభమస్తు',
    name: 'Nandikonda Krishna Vardhan Reddy',
    line: 'Built with tradition, values, and grace.',
  },
}

export default profileData

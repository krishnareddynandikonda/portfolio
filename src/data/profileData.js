// ============================================================
//  SINGLE SOURCE OF TRUTH — edit everything here.
//  To replace a photo: drop your image in /public/photos and
//  set the path below, e.g. photo: "/photos/krishna-hero.jpg".
//  Leave "" to keep the elegant gold placeholder.
// ============================================================

export const profileData = {
  name: 'Krishna Vardan Reddy',

  loading: {
    name: 'Krishna Vardan Reddy',
    tagline: 'A Marriage Portfolio',
  },

  hero: {
    photo: '/photos/krishna-hero.jpg',
    kicker: 'Royal South Indian Hindu Marriage Portfolio',
    name: 'Krishna Vardan Reddy',
    tagline: 'A graceful blend of tradition, values, ambition, and family.',
    subtext:
      'A refined marriage profile rooted in Hindu culture, family values, and a modern outlook toward life.',
    ctaPrimary: 'View Profile',
    ctaSecondary: 'Download Biodata',
  },

  intro: {
    eyebrow: 'Introduction',
    heading: 'A Life Rooted in Grace',
    body:
      'Krishna Vardan Reddy is a respectful, well-mannered, family-oriented individual with a calm personality and strong cultural values. He believes in tradition, meaningful relationships, career growth, and building a peaceful life with mutual respect.',
  },

  // ---- 10 scroll-based photo storytelling sections ----
  photoStory: [
    {
      photo: '/photos/krishna-story-1.jpg',
      title: 'A Man of Values',
      text:
        'Krishna carries strong family values and believes in respect, kindness, honesty, and integrity in every aspect of life.',
    },
    {
      photo: '/photos/krishna-story-2.jpg',
      title: 'Rooted in Tradition',
      text:
        'He respects Hindu traditions, family customs, festivals, rituals, and the timeless beauty of Indian culture.',
    },
    {
      photo: '/photos/krishna-story-3.jpg',
      title: 'Calm and Responsible',
      text:
        'His personality reflects maturity, patience, and responsibility, making him dependable and emotionally balanced.',
    },
    {
      photo: '/photos/krishna-story-4.jpg',
      title: 'Professionally Focused',
      text:
        'Krishna is career-oriented, disciplined, and committed to building a secure, stable, and meaningful future.',
    },
    {
      photo: '/photos/krishna-story-5.jpg',
      title: 'Family First',
      text:
        'He values togetherness, family bonding, respectful relationships, and the warmth of a close family environment.',
    },
    {
      photo: '/photos/krishna-story-6.jpg',
      title: 'Simple and Elegant Living',
      text:
        'He believes in a balanced lifestyle defined by simplicity, dignity, discipline, and meaningful living.',
    },
    {
      photo: '/photos/krishna-story-7.jpg',
      title: 'Positive Personality',
      text:
        'His calm nature, humility, and friendly character make him easy to connect with and deeply respected.',
    },
    {
      photo: '/photos/krishna-story-8.jpg',
      title: 'Respectful Life Partner',
      text:
        'He believes marriage is built on trust, understanding, emotional support, patience, and shared values.',
    },
    {
      photo: '/photos/krishna-story-9.jpg',
      title: 'Cultural Pride',
      text:
        'Krishna appreciates Indian traditions, spiritual values, festive celebrations, and the beauty of Hindu family culture.',
    },
    {
      photo: '/photos/krishna-story-10.jpg',
      title: 'Ready for a Meaningful Journey',
      text:
        'He looks forward to a beautiful married life filled with companionship, respect, happiness, and shared dreams.',
    },
  ],

  profile: {
    eyebrow: 'Profile Details',
    heading: 'Biodata',
    rows: [
      { label: 'Name', value: 'Krishna Vardan Reddy', icon: 'User' },
      { label: 'Age', value: '28 Years', icon: 'CalendarDays' },
      { label: 'Height', value: "5'10\"", icon: 'Ruler' },
      { label: 'Religion', value: 'Hindu', icon: 'Flower2' },
      { label: 'Community', value: 'Reddy', icon: 'Users' },
      { label: 'Mother Tongue', value: 'Telugu', icon: 'Languages' },
      { label: 'Education', value: "Bachelor's Degree", icon: 'GraduationCap' },
      { label: 'Profession', value: 'Software Professional', icon: 'Briefcase' },
      { label: 'Location', value: 'Hyderabad, Telangana', icon: 'MapPin' },
      { label: 'Lifestyle', value: 'Family-oriented, disciplined, respectful', icon: 'Heart' },
    ],
  },

  family: {
    eyebrow: 'Family Background',
    heading: 'A Cultured & Welcoming Home',
    body:
      'He comes from a respectable and cultured Hindu family that values education, traditions, relationships, and social respect. The family carries a warm, welcoming, and modern outlook while staying connected to cultural roots.',
    values: ['Education', 'Traditions', 'Relationships', 'Respect', 'Togetherness', 'Modern Outlook'],
  },

  career: {
    eyebrow: 'Education & Career',
    heading: 'A Steady, Purposeful Path',
    timeline: [
      { title: "Bachelor's Degree", desc: 'A strong academic foundation built on discipline and curiosity.' },
      { title: 'Software Professional', desc: 'Building a rewarding career in technology with consistency.' },
      { title: 'Stable Career Path', desc: 'Focused on security, reliability, and steady professional growth.' },
      { title: 'Growth Mindset', desc: 'Always learning, improving, and embracing new opportunities.' },
      { title: 'Responsible Future Planning', desc: 'Thoughtful about family, finances, and a balanced life.' },
      { title: 'Professional Discipline', desc: 'Dedicated, dependable, and committed to doing things well.' },
    ],
  },

  horoscope: {
    eyebrow: 'Horoscope & Hindu Details',
    heading: 'Traditional Particulars',
    rows: [
      { label: 'Date of Birth', value: '15 August 1996' },
      { label: 'Time of Birth', value: '7:30 AM' },
      { label: 'Place of Birth', value: 'Hyderabad' },
      { label: 'Rashi', value: 'Simha' },
      { label: 'Nakshatra', value: 'Magha' },
      { label: 'Gotra', value: 'To be updated' },
      { label: 'Manglik Status', value: 'To be updated' },
    ],
  },

  lifestyle: {
    eyebrow: 'Lifestyle & Interests',
    heading: 'What Shapes His World',
    tiles: [
      { label: 'Family Values', icon: 'Home' },
      { label: 'Spirituality', icon: 'Sparkles' },
      { label: 'Travel', icon: 'Plane' },
      { label: 'Music', icon: 'Music2' },
      { label: 'Fitness', icon: 'Dumbbell' },
      { label: 'Festivals', icon: 'PartyPopper' },
      { label: 'Culture', icon: 'Landmark' },
      { label: 'Career Growth', icon: 'TrendingUp' },
      { label: 'Meaningful Relationships', icon: 'HeartHandshake' },
      { label: 'Simple Living', icon: 'Leaf' },
    ],
  },

  partner: {
    eyebrow: 'Partner Expectations',
    heading: 'Seeking a Kindred Soul',
    body:
      'Looking for a kind-hearted, educated, family-oriented life partner who respects Indian traditions, values relationships, and believes in building a peaceful and happy married life together.',
  },

  gallery: {
    eyebrow: 'Gallery',
    heading: 'Moments & Memories',
    photos: [
      { photo: '/photos/krishna-gallery-1.jpg', caption: 'Tradition' },
      { photo: '/photos/krishna-gallery-2.jpg', caption: 'Family' },
      { photo: '/photos/krishna-gallery-3.jpg', caption: 'Celebration' },
      { photo: '/photos/krishna-gallery-4.jpg', caption: 'Culture' },
      { photo: '/photos/krishna-gallery-5.jpg', caption: 'Portrait' },
      { photo: '/photos/krishna-gallery-6.jpg', caption: 'Festival' },
      { photo: '/photos/krishna-gallery-7.jpg', caption: 'Heritage' },
      { photo: '/photos/krishna-gallery-8.jpg', caption: 'Joy' },
      { photo: '/photos/krishna-gallery-9.jpg', caption: 'Grace' },
      { photo: '/photos/krishna-gallery-10.jpg', caption: 'Future' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Reach the Family',
    phone: '+91 98765 43210',
    phoneDial: '+919876543210',
    whatsapp: '919876543210',
    email: 'krishnavardan@example.com',
    location: 'Hyderabad, Telangana',
  },

  footer: {
    name: 'Krishna Vardan Reddy',
    line: 'Built with tradition, values, and grace.',
  },
}

export default profileData

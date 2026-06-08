// Central content for the Nikkah site. Edit these to update guest-facing details.

export const CONTACT_EMAIL = 's.khanco24@gmail.com';

// When the Nikkah begins — drives the live countdown. 5:20 PM Pacific.
export const NIKKAH_DATETIME = '2026-06-14T17:20:00-07:00';

export const COUPLE = {
  groom: 'Shaheer',
  bride: 'Amna',
};

export const EVENT = {
  dateLong: 'Sunday, the Fourteenth of June, 2026',
  dateShort: '14 · 06 · 2026 — San Diego, California',
};

export const VENUE = {
  name: 'Hilton Garden Inn Del Mar',
  street: '3939 Ocean Bluff Avenue',
  cityState: 'San Diego, California 92130',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=3939+Ocean+Bluff+Avenue+San+Diego+CA+92130',
};

export const SCHEDULE = [
  { time: '4:00 PM', name: "Bride's family arrives" },
  { time: '4:30 PM', name: "Groom's family arrives" },
  { time: '5:00 PM', name: 'Guests seated' },
  { time: '5:05 PM', name: "Groom's entrance" },
  { time: '5:10 PM', name: "Bride's entrance", desc: "Following the groom's entrance" },
  { time: '5:20 PM', name: 'Nikkah begins', key: true },
  { time: '6:00 PM', name: 'Nikkah ends' },
  { time: '6:00–6:45', name: 'Guest photos by family', desc: 'Family names announced by the DJ' },
  { time: '6:45 PM', name: 'Dinner served' },
  { time: '8:00 PM', name: 'Choreographed dances begin' },
  { time: '8:30 PM', name: 'Choreographed dances end' },
  { time: '8:35 PM', name: 'Dessert served' },
  { time: '8:45 PM', name: 'Open dance floor' },
  { time: '10:00 PM', name: 'Closing & wrap up' },
];

// Light, pastel attire palette for the celebration.
export const DRESS_SWATCHES = [
  { label: 'Pastel Pink', color: '#f7c8d0' },
  { label: 'Pastel Yellow', color: '#f7ec9e' },
  { label: 'Pastel Green', color: '#bfe3c6' },
  { label: 'Pastel Blue', color: '#aac9ea' },
];

export const FAQS = [
  {
    q: 'Is parking available at the venue?',
    a: 'Yes — complimentary valet and self-parking are available on-site. We recommend arriving a little early to settle in before the ceremony.',
  },
  {
    q: 'Will the ceremony be indoors?',
    a: 'The Nikkah and dinner will both take place indoors in a climate-controlled hall, with a garden courtyard open for photographs.',
  },
  {
    q: 'Can I bring children?',
    a: 'We adore your little ones and warmly welcome families. Please refer to your invitation for the names included in your party.',
  },
  {
    q: 'Will there be seating arrangements?',
    a: 'Open seating during the Nikkah, with assigned tables for the dinner reception. Ushers will be happy to guide you.',
  },
  {
    q: "I have a question that isn't here.",
    a: { before: 'Please reach out to the couple directly at ', email: true, after: ' — we are always glad to help.' },
  },
];

/**
 * Invitation content lives here. Update an event without changing UI code.
 * `location.url` may be any Google Maps or venue URL.
 */
export const wedding = {
  couple: 'Krutik & Jahanvee',
  groom: 'Krutik',
  bride: 'Jahanvee',
  invocation: 'શ્રી ગણેશાય નમઃ',
  date: '2026-12-11T18:30:00+05:30',
  dateLabel: '11 December 2026',
  muhurat: '6:30 PM onwards',
  location: {
    name: 'The Celebration Courtyard',
    address: 'Gujarat, India',
    url: 'https://maps.google.com/?q=Gujarat,India',
  },
  rsvp: { whatsapp: 'https://wa.me/?text=We%20would%20love%20to%20celebrate%20with%20Krutik%20%26%20Jahanvee!', form: '' },
  music: '/assets/audio/wedding-melody.mp3',
  events: [
    {
      name: 'Ganesh Puja · Grah Shanti', gujarati: 'ગણેશ પૂજા · ગૃહ શાંતિ',
      date: '2026-12-09', day: 'Wednesday', displayDate: '09 December 2026',
      time: 'To be announced',
      location: { name: 'Family residence', address: 'Gujarat, India', url: 'https://maps.google.com/?q=Gujarat,India' },
      description: 'Prayer and blessings for a peaceful beginning.', dressCode: 'Traditional elegance',
    },
    {
      name: 'Haldi', gujarati: 'હળદી',
      date: '2026-12-09', day: 'Wednesday', displayDate: '09 December 2026',
      time: 'To be announced',
      location: { name: 'Family residence', address: 'Gujarat, India', url: 'https://maps.google.com/?q=Gujarat,India' },
      description: 'A joyful gathering brightened by turmeric, laughter and love.', dressCode: 'Shades of yellow',
    },
    {
      name: 'Sangeet', gujarati: 'સંગીત',
      date: '2026-12-10', day: 'Thursday', displayDate: '10 December 2026',
      time: 'To be announced',
      location: { name: 'The Celebration Courtyard', address: 'Gujarat, India', url: 'https://maps.google.com/?q=Gujarat,India' },
      description: 'A luminous evening of music, stories and joyful dance.', dressCode: 'Festive jewel tones',
    },
    {
      name: 'Wedding', gujarati: 'લગ્ન',
      date: '2026-12-11', day: 'Friday', displayDate: '11 December 2026',
      time: '6:30 PM onwards',
      location: { name: 'The Celebration Courtyard', address: 'Gujarat, India', url: 'https://maps.google.com/?q=Gujarat,India' },
      description: 'Join us as two journeys become one.', dressCode: 'Indian formal',
    },
  ],
}

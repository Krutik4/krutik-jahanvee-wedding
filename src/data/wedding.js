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
    name: 'Blue Bell Lawn',
    address: 'Ghodbunder Road, Thane',
    url: 'https://www.google.com/maps/search/?api=1&query=Blue+Bell+Lawn%2C+Ghodbunder+Road%2C+Thane',
  },
  rsvp: { whatsapp: 'https://wa.me/?text=We%20would%20love%20to%20celebrate%20with%20Krutik%20%26%20Jahanvee!', form: '' },
  music: 'assets/audio/wedding-melody.mp3',
  decor: {
    lantern: 'Lantern.svg', lotusLeft: 'Lotus 1 Left.svg', lotusRight: 'Lotus 1 Right.svg',
    leafLeft: 'Leaf - Left.svg', flowerLeft: 'Flower - Left.svg', flowerRight: 'Flower - Right.svg',
    peacockLeft: 'Peacock Left.png', peacockRight: 'Peacock Right.png',
  },
  events: [
    {
      name: 'Ganesh Puja · Grah Shanti', gujarati: 'ગણેશ પૂજા · ગૃહ શાંતિ',
      date: '2026-12-09', day: 'Wednesday', displayDate: '09 December 2026',
      time: 'To be announced',
      location: { name: 'My Residence', address: 'MICL Aaradhya Eastwind, Vikhroli East, Mumbai', url: 'https://www.google.com/maps/search/?api=1&query=MICL+Aaradhya+Eastwind%2C+Vikhroli+East%2C+Mumbai' },
      description: 'Prayer and blessings for a peaceful beginning.', dressCode: '',
    },
    {
      name: 'Haldi', gujarati: 'હળદી',
      date: '2026-12-09', day: 'Wednesday', displayDate: '09 December 2026',
      time: 'To be announced',
      location: { name: 'My Residence', address: 'MICL Aaradhya Eastwind, Vikhroli East, Mumbai', url: 'https://www.google.com/maps/search/?api=1&query=MICL+Aaradhya+Eastwind%2C+Vikhroli+East%2C+Mumbai' },
      description: 'A joyful gathering brightened by turmeric, laughter and love.', dressCode: 'Pastel colors',
    },
    {
      name: 'Sangeet', gujarati: 'સંગીત',
      date: '2026-12-10', day: 'Thursday', displayDate: '10 December 2026',
      time: 'To be announced',
      location: { name: 'Murildhar Hall', address: 'Ghodbunder Road, Thane', url: 'https://www.google.com/maps/search/?api=1&query=Murildhar+Hall%2C+Ghodbunder+Road%2C+Thane' },
      description: 'A luminous evening of music, stories and joyful dance.', dressCode: '',
    },
    {
      name: 'Wedding', gujarati: 'લગ્ન',
      date: '2026-12-11', day: 'Friday', displayDate: '11 December 2026',
      time: '6:30 PM onwards',
      location: { name: 'Blue Bell Lawn', address: 'Ghodbunder Road, Thane', url: 'https://www.google.com/maps/search/?api=1&query=Blue+Bell+Lawn%2C+Ghodbunder+Road%2C+Thane' },
      description: 'Join us as two journeys become one.', dressCode: '',
    },
  ],
}

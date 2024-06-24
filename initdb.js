const sql = require('better-sqlite3');
const db = sql('pets.db');

const dummyPets = [
  {
    name: 'Fluffy',
    slug: 'fluffy',
    image: '/images/pet-1.jpg',
    gender: 'male',
    description:
      'Fluffy is a small Shih Tzu with long, silky white hair, brown eyes, and a playful personality.',
    location: 'San Jose',
    contact_information: '555-1234',
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    name: 'Bella',
    slug: 'bella',
    image: '/images/pet-2.jpg',
    gender: 'female',
    description:
      'Bella is a medium-sized Golden Retriever with wavy golden fur, expressive brown eyes, and a friendly demeanor.',
    location: 'Alajuela',
    contact_information: '555-5678',
    creator: 'Jane Smith',
    creator_email: 'janesmith@example.com',
  },
  {
    name: 'Max',
    slug: 'max',
    image: '/images/pet-3.jpg',
    gender: 'male',
    description:
      'Max is a large German Shepherd with short, black and tan fur, sharp blue eyes, and a loyal nature.',
    location: 'Heredia',
    contact_information: '555-8765',
    creator: 'Jim Brown',
    creator_email: 'jimbrown@example.com',
  },
  {
    name: 'Luna',
    slug: 'luna',
    image: '/images/pet-4.jpg',
    gender: 'female',
    description:
      'Luna is a small Pomeranian with fluffy, orange fur, bright black eyes, and a calm temperament.',
    location: 'Cartago',
    contact_information: '555-4321',
    creator: 'Sarah Johnson',
    creator_email: 'sarahjohnson@example.com',
  },
  {
    name: 'Charlie',
    slug: 'charlie',
    image: '/images/pet-5.jpg',
    gender: 'male',
    description:
      'Charlie is a medium-sized Beagle with short, tricolor fur, large brown eyes, and an inquisitive personality.',
    location: 'Puntarenas',
    contact_information: '555-8765',
    creator: 'Mike Wilson',
    creator_email: 'mikewilson@example.com',
  },
  {
    name: 'Milo',
    slug: 'milo',
    image: '/images/pet-6.jpg',
    gender: 'male',
    description:
      'Milo is a small Chihuahua with smooth, tan fur, dark brown eyes, and an adventurous spirit.',
    location: 'Guanacaste',
    contact_information: '555-5432',
    creator: 'Anna Davis',
    creator_email: 'annadavis@example.com',
  },
  {
    name: 'Lily',
    slug: 'lily',
    image: '/images/pet-7.jpg',
    gender: 'female',
    description:
      'Lily is a medium-sized Cocker Spaniel with curly, black and white fur, soft brown eyes, and a loving nature.',
    location: 'Limon',
    contact_information: '555-6789',
    creator: 'Robert Martinez',
    creator_email: 'robertmartinez@example.com',
  },
  {
    name: 'Rocky',
    slug: 'rocky',
    image: '/images/pet-8.jpg',
    gender: 'male',
    description:
      'Rocky is a large Rottweiler with short, black and tan fur, dark eyes, and a protective personality.',
    location: 'San Jose',
    contact_information: '555-2345',
    creator: 'Emily White',
    creator_email: 'emilywhite@example.com',
  },
  {
    name: 'Daisy',
    slug: 'daisy',
    image: '/images/pet-9.jpg',
    gender: 'female',
    description:
      'Daisy is a small Poodle with curly, white fur, bright black eyes, and a cheerful demeanor.',
    location: 'Alajuela',
    contact_information: '555-6789',
    creator: 'Paul Green',
    creator_email: 'paulgreen@example.com',
  },
  {
    name: 'Oscar',
    slug: 'oscar',
    image: '/images/pet-10.jpg',
    gender: 'male',
    description:
      'Oscar is a medium-sized Dachshund with smooth, brown fur, dark eyes, and a gentle nature.',
    location: 'Heredia',
    contact_information: '555-3456',
    creator: 'Laura King',
    creator_email: 'lauraking@example.com',
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS pets (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       name TEXT NOT NULL,
       gender TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL,
       location TEXT NOT NULL,
       contact_information TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO pets VALUES (
         null,
         @slug,
         @name,
         @gender,
         @image,
         @description,
         @location,
         @contact_information,
         @creator,
         @creator_email
      )
   `);

  for (const pet of dummyPets) {
    stmt.run(pet);
  }
}

initData();

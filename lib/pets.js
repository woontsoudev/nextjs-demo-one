import sql from 'better-sqlite3';

const db = sql('pets.db');

export async function getPets() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM pets').all();
}

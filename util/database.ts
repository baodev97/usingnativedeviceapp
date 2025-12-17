import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseAsync("places.db");

export async function initBb() {
  const result = (await db).execAsync(` CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    );`);
    return result
}

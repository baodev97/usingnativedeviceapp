import { Location } from "@/components/Places/LocationPicker";
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
  return result;
}

export async function insertPlace(place: {
  title: string;
  imageUri: string;
  address: string;
  location:Location
}) {
  const result = (await db).runAsync(
    `INSERT INTO places (title, imageUri, address, lat, lng)
     VALUES (?, ?, ?, ?, ?)`,
    [place.title, place.imageUri, place.address, place.location.lat, place.location.lng]
  );
  console.log(result,"result insert")
  return result;
}


export async function fetchPlaces(){
    const rows = (await db).getAllAsync<{
    id: number;
    title: string;
    imageUri: string;
    address: string;
    lat: number;
    lng: number;
  }>('SELECT * FROM places');

  return rows;
}
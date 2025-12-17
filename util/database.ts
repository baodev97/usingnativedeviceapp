import { Location } from "@/components/Places/LocationPicker";
import { PlaceType } from "@/models/place";
import * as SQLite from "expo-sqlite";

type PlaceRow = {
  id: number;
  title: string;
  imageUri: string;
  address: string;
  lat: number;
  lng: number;
};

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
  location: Location;
}) {
  const result = (await db).runAsync(
    `INSERT INTO places (title, imageUri, address, lat, lng)
     VALUES (?, ?, ?, ?, ?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );
  console.log(result, "result insert");
  return result;
}

export async function fetchPlaces(): Promise<PlaceType[]> {
  const rows = (await db).getAllAsync<PlaceRow>("SELECT * FROM places");

  const places: PlaceType[] = (await rows).map(
    (row: {
      id: { toString: () => any };
      title: string;
      imageUri: string;
      address: string;
      lat: number;
      lng: number;
    }) => ({
      id: row.id.toString(),
      title: row.title,
      imageUri: row.imageUri,
      address: row.address,
      location: {
        lat: row.lat,
        lng: row.lng,
      },
    })
  );

  return places;
}

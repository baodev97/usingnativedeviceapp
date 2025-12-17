import { Location } from "@/components/Places/LocationPicker";

export type PlaceType = {
    title: string;
  imageUri: string;
  address: string;
  location: Location;
  id:string;
};

class Place {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
  id:string;

  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: Location,
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = Math.random().toString();
  }
}

export default Place;

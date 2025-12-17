const GOOGLE_API_KEY = "AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4";
const GOOGLE_SIGNATURE = "AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4";

export function getMapPreview(lat: number, lang: number) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lang}&zoom=14&size=400x200&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lang}&key=${GOOGLE_API_KEY}&signature=${GOOGLE_SIGNATURE}`;
  return imagePreviewUrl;
}


// call API Reverse geocoding response - V4
export async function getAddress(lat: number, lng: number) {
  const url = `https://geocode.googleapis.com/v4beta/geocode/location?location.latitude=${lat}&location.longitude=-${lng}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const address = data.results[0].formattedAddress;
    return address;
  } catch (error) {
    throw new Error("Failed to fetch address");
  }
}

// get Address no call API
export async function getAdressNoCallApi(lat: number, lng: number){
    const defaultAddress = `Location-${lat}-${lng}-HCM`
    return defaultAddress
}

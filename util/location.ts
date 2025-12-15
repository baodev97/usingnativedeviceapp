const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4'
const GOOGLE_SIGNATURE = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4'

export function getMapPreview(lat:number,lang:number){
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lang}&zoom=14&size=400x200&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lang}&key=${GOOGLE_API_KEY}&signature=${GOOGLE_SIGNATURE}`
    return imagePreviewUrl
}
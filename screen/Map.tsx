import MapView, { Region } from "react-native-maps";

function Map() {
  const region: Region = {
    latitude: 10.7221761,
    longitude: 106.6587894,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView initialRegion={region}></MapView>;
}
export default Map;

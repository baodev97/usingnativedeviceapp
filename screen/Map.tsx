import { RootStackParamList } from "@/App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { MapMarker, MapPressEvent, Region } from "react-native-maps";

export type MapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Map"
>;
function Map() {
  const [selectedLocation, setSelectedLocation] = useState<
    { lat: number; lng: number } | undefined
  >();
  const region: Region = {
    latitude: 10.7221761,
    longitude: 106.6587894,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectedLocationHandler(event: MapPressEvent) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
      lat: lat,
      lng: lng,
    });
    console.log(selectedLocation)
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectedLocationHandler}
    >
      {selectedLocation && (
        <MapMarker
        title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}
export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

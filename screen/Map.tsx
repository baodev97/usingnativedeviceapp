import { RootStackParamList } from "@/App";
import IconButton from "@/components/UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapMarker, MapPressEvent, Region } from "react-native-maps";

export type MapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Map"
>;
function Map() {
  const [selectedLocation, setSelectedLocation] = useState<
    { lat: number; lng: number } | undefined
  >();
  const navigation = useNavigation<MapScreenNavigationProp>();
  const region: Region = {
    latitude: 10.7221761,
    longitude: 106.6587894,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectedLocationHandler(event: MapPressEvent) {
    
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    console.log(lat,lng)
    setSelectedLocation({
      lat: lat,
      lng: lng,
    });
    console.log(selectedLocation);
  }

  const  savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked",
        "You have to pick a location (by tapping on the map) first"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  },[])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          name="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation,savePickedLocationHandler]);

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

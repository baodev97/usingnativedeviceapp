import IconButton from "@/components/UI/IconButton";
import { RootStackNavProp } from "@/helper/typeNativeStack";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapMarker, MapPressEvent, Region } from "react-native-maps";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const navigation = useNavigation<RootStackNavProp<"Map">>();
  const region: Region = {
    latitude: 10.7221761,
    longitude: 106.6587894,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectedLocationHandler(event: MapPressEvent) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    console.log(lat, lng);
    setSelectedLocation({
      lat: lat,
      lng: lng,
    });
    // console.log(selectedLocation);
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked",
        "You have to pick a location (by tapping on the map) first"
      );
      return;
    }
    // navigation.navigate({
    //   name: "AddPlace",
    //   params: {
    //     pickedLat: selectedLocation.lat,
    //     pickedLng: selectedLocation.lng,
    //   },
    //   merge: true,
    // });
    navigation.dispatch(
      StackActions.popTo("AddPlace", {
        pickedLat: selectedLocation.lat,
        pickedLng: selectedLocation.lng,
      })
    );
  }, [navigation, selectedLocation]);

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
  }, [navigation, savePickedLocationHandler]);

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

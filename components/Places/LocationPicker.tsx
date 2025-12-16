import { Colors } from "@/constants/colors";
import { RootStackNavProp, RootStackRouteProp } from "@/helper/typeNativeStack";
import {
    useIsFocused,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import {
    getCurrentPositionAsync,
    PermissionStatus,
    useForegroundPermissions,
} from "expo-location";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
export type Location = {
  lat: number;
  lng: number;
};

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState<Location | undefined>();
  const navigation = useNavigation<RootStackNavProp<"AddPlace">>();
  const route = useRoute<RootStackRouteProp<"AddPlace">>();
  const isFocused = useIsFocused();

  const [locationPermissionInfomation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInfomation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInfomation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "you need to grant location permissions to use this app"
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    try {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }
      let location = await getCurrentPositionAsync();
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      console.log(error);
    }
    return;
  }
  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let LocationPreview = <Text>No location picked yet.</Text>;

  // code with using google map statis api
  //   if(pickedLocation){
  //     LocationPreview = <Image source={{uri:getMapPreview(pickedLocation.lat,pickedLocation.lng)}}/>
  //   }
  if (pickedLocation) {
    LocationPreview = (
      <View>
        <Text>{pickedLocation.lat}</Text>
        <Text>{pickedLocation.lng}</Text>
      </View>
    );
  }

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  return (
    <View>
      <View style={styles.mapPreview}>{LocationPreview}</View>
      <View style={styles.actions}>
        <OutlineButton
          name="location"
          color={Colors.primary500}
          onPress={getLocationHandler}
        >
          Locate User
        </OutlineButton>
        <OutlineButton
          name="map"
          color={Colors.primary500}
          onPress={pickOnMapHandler}
        >
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 8,
    flex: 1,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

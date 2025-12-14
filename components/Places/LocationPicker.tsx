import { Colors } from "@/constants/colors";
import {
    getCurrentPositionAsync,
    PermissionStatus,
    useForegroundPermissions,
} from "expo-location";
import { Alert, StyleSheet, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";

function LocationPicker() {
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
        return
      }
      let location = await getCurrentPositionAsync();
        console.log(location);
    } catch (error) {
      console.log(error);
    }

    return;
  }
  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

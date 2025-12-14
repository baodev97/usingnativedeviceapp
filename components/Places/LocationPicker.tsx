import { Colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";

function LocationPicker() {
  return (
    <View>
      <View style={styles.mapPreview}></View>
        <View style={styles.actions}>
          <OutlineButton
            name="location"
            color={Colors.primary500}
            onPress={() => {}}
          >
            Locate User
          </OutlineButton>
          <OutlineButton
            name="map"
            color={Colors.primary500}
            onPress={() => {}}
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

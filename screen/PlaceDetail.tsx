import OutlineButton from "@/components/UI/OutlineButton";
import { Colors } from "@/constants/colors";
import { RootStackRouteProp } from "@/helper/typeNativeStack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type PlaceDetailProps = {
  route: RootStackRouteProp<"PlaceDetail">;
};

function PlaceDetail({ route }: PlaceDetailProps) {
  const idPlace = route.params?.idPlace;

  function handlerOpenMap() {}
  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Address {idPlace}</Text>
        </View>
        <OutlineButton
          name="map"
          size={24}
          color={Colors.primary500}
          onPress={handlerOpenMap}
        >
          Open Map
        </OutlineButton>
      </View>
    </ScrollView>
  );
}
export default PlaceDetail;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

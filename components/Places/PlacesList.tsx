import { Colors } from "@/constants/colors";
import { RootStackNavProp } from "@/helper/typeNativeStack";
import { PlaceType } from "@/models/place";
import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

type PlacesListProps = {
  places: PlaceType[];
};

function PlacesList({ places }: PlacesListProps) {

  const navigation = useNavigation<RootStackNavProp<"AllPlaces">>()

  function onSelectedPlaceHandler(id:string){
    navigation.navigate("PlaceDetail",{idPlace:id})
  }
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} selectedPlaceHandler={onSelectedPlaceHandler}/>}
    />
  );
}
export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 16,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

import { Colors } from "@/constants/colors";
import Place, { PlaceType } from "@/models/place";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker, { Location } from "./LocationPicker";

type PickedLocation = {
  lat: number;
  lng: number;
  address: string;
};

type PlaceFormProps = {
  onCreatePlace: (place:PlaceType) => void;
};

function PlaceForm({ onCreatePlace }: PlaceFormProps) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<undefined | string>();
  const [pickedLocation, setPickedLocation] = useState<
    PickedLocation | undefined
  >();

  function changeTitleHandler(enteredText: string) {
    setEnteredTitle(enteredText);
  }
  function takeImageHandler(imageUri: string) {
    setSelectedImage(imageUri);
  }
  const pickLocationHandler = useCallback(
    ({ location, address }: { location: Location; address: string }) => {
      const inforPickedLocation = { ...location, address };
      setPickedLocation(inforPickedLocation);
    },
    []
  );

  function savePlaceHandler() {
    const place = new Place(
      enteredTitle,
      selectedImage ? selectedImage : "",
      pickedLocation ? pickedLocation.address : "",
      {
        lat: pickedLocation ? pickedLocation.lat : 0,
        lng: pickedLocation ? pickedLocation.lng : 0,
      }
    );
    onCreatePlace(place);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker onImageTake={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}
export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    marginHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

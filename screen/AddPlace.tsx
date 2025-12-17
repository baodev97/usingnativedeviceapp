import PlaceForm from "@/components/Places/PlaceForm";
import { RootStackNavProp } from "@/helper/typeNativeStack";
import { PlaceType } from "@/models/place";
import { insertPlace } from "@/util/database";
import { StackActions } from "@react-navigation/native";

type AddPlaceProps = {
  navigation: RootStackNavProp<"AddPlace">;
};

function AddPlace({ navigation }: AddPlaceProps) {
  async function createPlaceHandler(place: PlaceType) {
    await insertPlace(place);
    navigation.dispatch(
      StackActions.popTo("AllPlaces", {
        place: place,
      })
    );
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
export default AddPlace;

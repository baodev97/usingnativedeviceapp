import PlaceForm from "@/components/Places/PlaceForm";
import { RootStackNavProp } from "@/helper/typeNativeStack";
import { PlaceType } from "@/models/place";
import { StackActions } from "@react-navigation/native";

type AddPlaceProps = {
    navigation: RootStackNavProp<"AddPlace">
}

function AddPlace ({navigation}:AddPlaceProps){
    function createPlaceHandler(place:PlaceType){
        navigation.dispatch(
              StackActions.popTo("AllPlaces", {
                place:place
              })
            );
    }

    return <PlaceForm onCreatePlace = {createPlaceHandler}/>
}
export default AddPlace;
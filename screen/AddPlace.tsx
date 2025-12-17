import PlaceForm from "@/components/Places/PlaceForm";
import { RootStackNavProp } from "@/helper/typeNativeStack";

type AddPlaceProps = {
    navigation: RootStackNavProp<"AddPlace">
}

function AddPlace ({navigation}:AddPlaceProps){

    return <PlaceForm/>
}
export default AddPlace;
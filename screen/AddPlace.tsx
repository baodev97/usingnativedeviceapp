import PlaceForm from "@/components/Places/PlaceForm";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";


function AddPlace (){
    const route = useRoute();

  useEffect(() => {
    console.log("AddPlace route.key =", route.key);
  }, [route.key]);

    return <PlaceForm/>
}
export default AddPlace;
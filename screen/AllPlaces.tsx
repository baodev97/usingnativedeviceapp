import PlacesList from "@/components/Places/PlacesList";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

function AllPlaces (){
   
 const route = useRoute();

  useEffect(() => {
    console.log("AddPlace route.key =", route.key);
  }, [route.key]);

    return <PlacesList />
}
export default AllPlaces;
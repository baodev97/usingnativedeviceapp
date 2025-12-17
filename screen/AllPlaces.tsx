import PlacesList from "@/components/Places/PlacesList";
import { RootStackRouteProp } from "@/helper/typeNativeStack";
import { PlaceType } from "@/models/place";
import { fetchPlaces } from "@/util/database";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

type AllPlacesProps = {
  route: RootStackRouteProp<"AllPlaces">;
};

type LoadedPlace = [] | PlaceType[] ;

function AllPlaces({ route }: AllPlacesProps) {
  const [loadedPlace, setLoadedPlace] = useState<LoadedPlace>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces(){
        const result = await fetchPlaces();
        setLoadedPlace(result);
    }
    
    if (isFocused) {
        loadPlaces()
      
    }
  }, [isFocused]);

  return <PlacesList places = {loadedPlace} />;
}
export default AllPlaces;

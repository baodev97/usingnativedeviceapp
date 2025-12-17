import PlacesList from "@/components/Places/PlacesList";
import { RootStackRouteProp } from "@/helper/typeNativeStack";
import { PlaceType } from "@/models/place";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

type AllPlacesProps = {
  route: RootStackRouteProp<"AllPlaces">;
};
type LoadedPlace = [] | PlaceType[];

function AllPlaces({ route }: AllPlacesProps) {
  const [loadedPlace, setLoadedPlace] = useState<LoadedPlace>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlace((currentPlaces) => [...currentPlaces,route.params.place]);
    }
  }, [isFocused, route.params]);

  console.log("loaded", loadedPlace)
  return <PlacesList />;
}
export default AllPlaces;

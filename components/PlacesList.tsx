import { PlaceType } from "@/models/place";
import { FlatList, Text } from "react-native";



type PlacesListProps = {
    places:PlaceType[]
}

function PlacesList ({places}:PlacesListProps){
    return <FlatList data={places} keyExtractor={(item)=>item.id} renderItem={(itemData)=>(<Text>itemData</Text>)}/>
}
export default PlacesList;
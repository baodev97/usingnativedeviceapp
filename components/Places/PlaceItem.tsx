import { PlaceType } from "@/models/place";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PlaceItemProps = {
    place:PlaceType
}

function PlaceItem({place}:PlaceItemProps) {
  return (
    <Pressable>
        <Image source={{uri:place.imageUri}}/>
        <View>
            <Text>{place.title}</Text>
            <Text>{place.address}</Text>
        </View>
    </Pressable>
  )
}
export default PlaceItem;

const styles = StyleSheet.create({
    
})
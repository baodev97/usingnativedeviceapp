import { RootStackParamList } from "@/App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import MapView, { Region } from "react-native-maps";


export type MapScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Map'>;
function Map() {
  const region: Region = {
    latitude: 10.7221761,
    longitude: 106.6587894,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
}
export default Map;

const styles = StyleSheet.create({
    map:{
        flex:1
    }
})
import { StatusBar, StyleSheet } from "react-native";
import AllPlaces from "./screen/AllPlaces";


export default function App() {
  return (
    <>
     <StatusBar barStyle={'dark-content'} />
     <AllPlaces/>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer:{

  }
});
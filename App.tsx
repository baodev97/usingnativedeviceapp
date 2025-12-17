import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import { PlaceType } from "./models/place";
import AddPlace from "./screen/AddPlace";
import AllPlaces from "./screen/AllPlaces";
import Map from "./screen/Map";
import PlaceDetail from "./screen/PlaceDetail";
import { initBb } from "./util/database";

export type RootStackParamList = {
  AllPlaces: { place: PlaceType };
  AddPlace: undefined | { pickedLat: number; pickedLng: number };
  Map: undefined;
  PlaceDetail:{idPlace:string}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInitialized, setDbInitiallized] = useState(false);

  useEffect(() => {
    initBb()
      .then(() => {
        setDbInitiallized(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(async () => {
        setDbInitiallized(true);
        await SplashScreen.hideAsync();
      });
  }, []);
  if (!dbInitialized) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle={"dark-content"} />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: {
              backgroundColor: Colors.gray700,
            },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favotite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  size={24}
                  name="add"
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="PlaceDetail" component={PlaceDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer: {},
});

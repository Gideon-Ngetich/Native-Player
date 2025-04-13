import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigation from "./src/navigator/StackNavigation";
import DrawerNavigator from "./src/components/DrawerNavigator";
import TrackPlayer from "react-native-track-player";
import { useEffect } from "react";

export default function App() {

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer()
    console.log("App track player setup successfully")
  }
  useEffect(() => {
   setupPlayer()
  }, [])
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <StackNavigation /> */}
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

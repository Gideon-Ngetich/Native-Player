import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigation from "./src/navigator/StackNavigation";
import DrawerNavigator from "./src/components/DrawerNavigator";

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <StackNavigation /> */}
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

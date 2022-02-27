import Home from "./screens/home"
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  RobotoMono_400Regular,
  RobotoMono_700Bold,
} from '@expo-google-fonts/roboto-mono'

export default function App() {
  let [fontsLoaded] = useFonts({
    "roboto-regular": RobotoMono_400Regular,
    "roboto-bold": RobotoMono_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Home />
  );
}


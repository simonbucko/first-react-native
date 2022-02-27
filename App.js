import Home from "./screens/home"
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'roboto-mono': 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap',
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Home />
  );
}


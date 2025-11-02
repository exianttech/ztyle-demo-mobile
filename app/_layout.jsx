import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';

// redux
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function RootLayout() {

  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    JostRegular: require('@/assets/fonts/Jost-Regular.ttf'),
    JostBold: require('@/assets/fonts/Jost-Bold.ttf'),
    DancingScriptRegular: require('@/assets/fonts/DancingScript-Regular.ttf'),
    DancingScriptBold: require('@/assets/fonts/DancingScript-Bold.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

  }, [loaded]);

  if (!loaded) return null;

  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }} />
        <FlashMessage
          position='top'
        />
      </SafeAreaProvider>
    </Provider>
    
  )
}

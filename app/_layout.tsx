import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';



export default function RootLayout() {

  return (
    <>
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ presentation: 'modal', title: 'Modal', headerShown: false }} />
        <Stack.Screen name="login" options={{ presentation: 'modal', title: 'Modal', headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
      
  );
}

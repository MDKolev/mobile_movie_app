import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/MoviesList" options={{ headerShown: false}} />
      <Stack.Screen name="screens/MovieDetails" options={{ headerShown: false}} />
      <Stack.Screen name="screens/Profile" options={{ headerShown: false}} />
    </Stack>
  );
}
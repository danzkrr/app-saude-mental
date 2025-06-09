import { Stack } from 'expo-router';
import { UserProvider } from '@/components/UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(common_user)" options={{ headerShown: false }} />
        <Stack.Screen name="(professional)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}

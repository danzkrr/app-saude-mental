import { Stack } from 'expo-router';

export default function UserLoginLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="help"
        options={{
          title: 'Voltar',
          headerStyle: {
            backgroundColor: 'rgb(118, 181, 214)',
          },
          headerTintColor: '#fff',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}

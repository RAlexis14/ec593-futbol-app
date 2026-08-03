import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Pantalla inicial */}
      <Stack.Screen name="index" />

      {/* Acceso sin navbar */}
      <Stack.Screen name="login" />

      {/* Aplicación principal con navbar */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
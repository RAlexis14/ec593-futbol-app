import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const bottomSpace = Math.max(insets.bottom, 8);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#e6161a',
        tabBarInactiveTintColor: '#eae3e2',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',

          // Aumenta la altura según los botones del celular
          height: 60 + bottomSpace,

          // Sube los iconos para evitar la barra de Android
          paddingBottom: bottomSpace,
          paddingTop: 7,

          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
        },

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="candidatos"
        options={{
          title: 'Candidatos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="estadistica"
        options={{
          title: 'Estadistica',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'bar-chart' : 'bar-chart-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
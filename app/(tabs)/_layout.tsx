import { Ionicons } from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';
import { Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
    const insets = useSafeAreaInsets();
    const bottomSpace = Math.max(insets.bottom, 8);

    const handleLogout = () => {
        Alert.alert(
            'Cerrar sesión',
            '¿Deseas regresar al inicio de sesión?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Salir',
                    style: 'destructive',
                    onPress: () => router.replace('/login' as any),
                },
            ],
        );
    };

    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                // Colores del navbar
                tabBarActiveTintColor: '#FFD100',
                tabBarInactiveTintColor: '#FFFFFF',

                tabBarStyle: {
                    backgroundColor: '#003DA5',
                    height: 60 + bottomSpace,
                    paddingBottom: bottomSpace,
                    paddingTop: 7,
                    borderTopWidth: 0,
                },

                tabBarLabelStyle: {
                    fontSize: 10,
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
                name="españa"
                options={{
                    title: 'España',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'football' : 'football-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="api"
                options={{
                    title: 'API',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'cloud' : 'cloud-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="acerca"
                options={{
                    title: 'Acerca de',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? 'information-circle'
                                    : 'information-circle-outline'
                            }
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="salir"
                options={{
                    title: 'Salir',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="log-out-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
                listeners={{
                    tabPress: (event) => {
                        event.preventDefault();
                        handleLogout();
                    },
                }}
            />

            
        </Tabs>
    );
}
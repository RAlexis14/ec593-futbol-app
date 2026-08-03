import { router } from 'expo-router';
import { useEffect } from 'react';

import {
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../constants/colors';

const SPLASH_DURATION = 3000;

export default function SplashScreen() {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/login' as any);
        }, SPLASH_DURATION);

        // Limpia el temporizador al cerrar la pantalla
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/images/Bandera_España.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.title}>ESP</Text>

            <Text style={styles.phrase}>
                España campeón del mundo (2026)
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Contenedor principal
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 24,
    },

    // Logo del Splash
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },

    // Identificador
    title: {
        color: COLORS.primary,
        fontSize: 42,
        fontWeight: '800',
    },

    // Frase inferior
    phrase: {
        color: COLORS.white,
        fontSize: 16,
        lineHeight: 23,
        textAlign: 'center',
        marginTop: 18,
    },
});
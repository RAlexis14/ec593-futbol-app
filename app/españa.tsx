import { useState } from 'react';

import {
    Image,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import ProgressBar from '../components/ProgressBar';

import { COLORS } from '../constants/colors';
import { useSplashTimer } from '../hooks/useSplashTimer';

export default function HomeScreen() {
    const [showHome, setShowHome] = useState(false);

    useSplashTimer(() => {
        setShowHome(true);
    }, 3000);



    // Pantalla principal
    return (
        <SafeAreaView style={styles.homeContainer}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Header title="ESPAÑA " />
                <Text style={styles.teamTitle}>
                    Selección Campeona
                </Text>

                <Image
                    source={require('../assets/images/Bandera_España.png')}
                    style={styles.homeLogo}
                />





                <InfoCard
                    title="Director Técnico"
                    value="Luis de la Fuente"
                />

                <InfoCard
                    title="Capitán"
                    value="Rodrigo Hernández"
                />

                <InfoCard
                    title="Marcador"
                    value="1-2"
                />

                <ProgressBar percentage={100} />

                <Text style={styles.quote}>
                    "España el equipo mas dominante del mundial"
                </Text>

                <Text style={styles.teamTitle}>
                    JUGADORES DESTACADOS
                </Text>


<InfoCard
                    title="Balon de oro mundial"
                    value="Rodrigo Hernández"
                />

                <InfoCard
                    title="Mejor juvenil del toneo "
                    value="Rodrigo Hernández"
                />

                <InfoCard
                    title="Fichaje Estrella"
                    value="Marc Cucurrela ( REAL MADRID)"
                />




                

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 20,
    },

    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },

    splashTitle: {
        fontSize: 42,
        fontWeight: 'bold',
        color: COLORS.primary,
    },

    splashPhrase: {
        marginTop: 20,
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 16,
    },

    homeContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scrollContent: {
        padding: 20,
        paddingBottom: 50,
    },

    homeLogo: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginBottom: 10,
    },

    teamTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: COLORS.text,
    },

    quote: {
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 20,
        color: COLORS.gray,
    },

    button: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 14,
        borderRadius: 12,
    },

    secondButton: {
        marginTop: 12,
    },

    buttonText: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
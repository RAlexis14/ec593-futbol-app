import { useState } from 'react';

import {
    Image,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import InfoCard from '../components/InfoCard';
import ProgressBar from '../components/ProgressBar';

import { COLORS } from '../constants/colors';

export default function HomeScreen() {
    const [showHome, setShowHome] = useState(false);





    // Pantalla principal
    return (
        <SafeAreaView style={styles.homeContainer}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >


                <InfoCard
                    title="Estadisticas"
                    value="Candidatos de la alcaldía de Quito"
                />

                <Text style={styles.teamTitle}>
                    Jorge Yunda Machado
                </Text>

                <Image
                    source={require('../assets/images/jorge.jpg')}
                    style={styles.homeLogo}
                />





                <InfoCard
                    title="Postulante 1"
                    value="LoroMero"
                    details={[
                        'Nacionalidad: Ecuatoriana',
                        'Estuvo en el cargo en el año 2022',
                        'CON EL 80 % votos estiamados',
                    ]}

                    
                />


                <ProgressBar percentage={80} />


                                <Text style={styles.teamTitle}>
                    Wilson Merino
                </Text>

                                <Image
                    source={require('../assets/images/wilson.jpg')}
                    style={styles.homeLogo}
                />

                                <InfoCard
                    title="Postulante 2"
                    value="Wilsin593"
                    details={[
                        'Nacionalidad: Ecuatoriana',
                        'Tiene grandes aspiraciones para ser Alcalde segun los porcentajes estimados',
                        'CON EL 60 % votos estiamados',
                    ]}
                />

                                <ProgressBar percentage={60} />


                                <Text style={styles.teamTitle}>
                    Carla Larrea
                </Text>

                                <Image
                    source={require('../assets/images/carla.jpg')}
                    style={styles.homeLogo}
                />

                
                <InfoCard
                    title="Postulante 3"
                    value="Carlita"
                    details={[
                        'Nacionalidad: Ecuatoriana',
                        'La mujer que mas votos estimados mantiens al dia de hoy ',
                        'CON EL 40 % votos estiamados',
                    ]}

                    
                />

                                                <ProgressBar percentage={40} />










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
        width: 200,
        height: 200,
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
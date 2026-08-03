import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';

import { COLORS } from '../../constants/colors';

export default function SpainScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Header title="SELECCIÓN DE ESPAÑA" />

                <Image
                    source={require('../../assets/images/Bandera_España.png')}
                    style={styles.logo}
                />

                <Text style={styles.description}>
                    Información general y jugadores destacados de la Selección
                    Española de Fútbol.
                </Text>

                <InfoCard
                    title="Información general"
                    items={[
                        {
                            label: 'Confederación',
                            value: 'UEFA',
                        },
                        {
                            label: 'Director técnico',
                            value: 'Luis de la Fuente',
                        },
                        {
                            label: 'Estadio principal',
                            value: 'Estadios oficiales de España',
                        },
                    ]}
                />

                <InfoCard
                    title="Jugadores destacados"
                    items={[
                        {
                            label: 'Mejor jugador',
                            value: 'Lamine Yamal',
                        },
                        {
                            label: 'Jugador revelación',
                            value: 'Nico Williams',
                        },
                        {
                            label: 'Goleador',
                            value: 'Ferran Torres',
                        },
                    ]}
                />

                <View style={styles.messageCard}>
                    <Text style={styles.messageTitle}>
                        Identidad deportiva
                    </Text>

                    <Text style={styles.messageText}>
                        España se caracteriza por su juego colectivo, posesión del
                        balón, calidad técnica y presión ofensiva.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Pantalla
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    content: {
        padding: 20,
        paddingBottom: 45,
    },

    // Imagen principal
    logo: {
        width: 145,
        height: 145,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginBottom: 12,
    },

    description: {
        color: COLORS.gray,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 20,
    },

    // Tarjeta complementaria
    messageCard: {
        backgroundColor: '#FFF7CC',
        borderLeftWidth: 4,
        borderLeftColor: '#FFCD00',
        borderRadius: 14,
        padding: 16,
        marginTop: 4,
    },

    messageTitle: {
        color: '#854D0E',
        fontSize: 16,
        fontWeight: '800',
    },

    messageText: {
        color: '#713F12',
        fontSize: 14,
        lineHeight: 21,
        marginTop: 7,
    },
});
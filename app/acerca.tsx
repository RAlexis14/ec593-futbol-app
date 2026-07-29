import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import PlayerSection from '../components/PlayerSection';

import { COLORS } from '../constants/colors';
import { PLAYERS } from '../constants/players';

export default function ConvocadosScreen() {
    const handleGoBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Header title="Convocados Ecuador 🇪🇨" />

                <PlayerSection
                    title="🧤 Porteros"
                    players={PLAYERS.goalkeepers}
                />

                <PlayerSection
                    title="🛡️ Defensas"
                    players={PLAYERS.defenders}
                />

                <PlayerSection
                    title="🎯 Mediocampistas"
                    players={PLAYERS.midfielders}
                />

                <PlayerSection
                    title="⚽ Delanteros"
                    players={PLAYERS.forwards}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGoBack}
                >
                    <Text style={styles.buttonText}>
                        ← Volver al Inicio
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    button: {
        marginTop: 20,
        backgroundColor: COLORS.secondary,
        paddingVertical: 14,
        borderRadius: 12,
    },

    buttonText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
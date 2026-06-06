import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string;
    players: string[];
}

export default function PlayerSection({
    title,
    players,
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            {players.map((player) => (
                <Text key={player} style={styles.player}>
                    ⚽ {player}
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    player: {
        marginBottom: 6,
    },
});
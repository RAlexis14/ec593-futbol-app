import { StyleSheet, Text, View } from 'react-native';

import PlayerCard from './PlayerCard';

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
            <Text style={styles.title}>
                {title}
            </Text>

            <View style={styles.playersContainer}>
                {players.map((player) => (
                    <PlayerCard
                        key={player}
                        name={player}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },

    playersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
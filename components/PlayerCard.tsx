import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

interface Props {
    name: string;
}

export default function PlayerCard({ name }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.player}>
                ⚽ {name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '48%',
        backgroundColor: COLORS.white,
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        elevation: 2,
    },

    player: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
    },
});
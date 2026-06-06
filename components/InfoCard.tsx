import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

interface Props {
    title: string;
    value: string;
}

export default function InfoCard({ title, value }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        elevation: 2,
    },

    title: {
        fontWeight: 'bold',
        marginBottom: 4,
    },

    value: {
        color: COLORS.text,
    },
});
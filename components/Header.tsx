import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.secondary,
        textAlign: 'center',
    },
});
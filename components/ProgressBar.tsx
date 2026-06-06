import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

interface Props {
    percentage: number;
}

export default function ProgressBar({
    percentage,
}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.barBackground}>
                <View
                    style={[
                        styles.barFill,
                        { width: `${percentage}%` },
                    ]}
                />
            </View>

            <Text style={styles.text}>
                {percentage}% de fe
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

    barBackground: {
        height: 18,
        backgroundColor: '#D1D5DB',
        borderRadius: 10,
    },

    barFill: {
        height: 18,
        borderRadius: 10,
        backgroundColor: COLORS.success,
    },

    text: {
        marginTop: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../constants/colors';

interface InfoItem {
    label: string;
    value: string;
}

interface InfoCardProps {
    title?: string;
    value?: string;
    details?: string[];
    items?: InfoItem[];
}

export default function InfoCard({
    title,
    value,
    details = [],
    items = [],
}: InfoCardProps) {
    return (
        <View style={styles.card}>
            {title ? <Text style={styles.title}>{title}</Text> : null}

            {value ? <Text style={styles.mainValue}>{value}</Text> : null}

            {details.map((detail, index) => (
                <Text key={`${detail}-${index}`} style={styles.detail}>
                    {detail}
                </Text>
            ))}

            {items.map((item) => (
                <View key={item.label} style={styles.row}>
                    <Text style={styles.label}>{item.label}:</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        elevation: 2,
    },

    title: {
        color: COLORS.secondary,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5,
    },

    mainValue: {
        color: COLORS.text,
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 8,
    },

    detail: {
        color: COLORS.gray,
        fontSize: 14,
        lineHeight: 21,
        marginBottom: 3,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 9,
    },

    label: {
        color: COLORS.text,
        fontSize: 14,
        fontWeight: '700',
        marginRight: 5,
    },

    itemValue: {
        flex: 1,
        color: COLORS.gray,
        fontSize: 14,
        lineHeight: 20,
    },
});
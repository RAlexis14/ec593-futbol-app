import { StyleSheet, Text, View } from 'react-native';

import type { ApiUser } from '../types/api-user';

type ApiUserCardProps = {
    user: ApiUser;
};

export default function ApiUserCard({ user }: ApiUserCardProps) {
    const initials = user.name
        .split(' ')
        .slice(0, 2)
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase();

    return (
        <View style={styles.card}>
            {/* Avatar generado con iniciales */}
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
            </View>

            {/* Información del usuario */}
            <View style={styles.information}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.username}>@{user.username}</Text>

                <View style={styles.divider} />

                <Text style={styles.detail}>📧 {user.email}</Text>
                <Text style={styles.detail}>📞 {user.phone}</Text>
                <Text style={styles.detail}>🌐 {user.website}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
    },

    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C60B1E',
        marginRight: 14,
    },

    avatarText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '800',
    },

    information: {
        flex: 1,
    },

    name: {
        color: '#111827',
        fontSize: 17,
        fontWeight: '800',
    },

    username: {
        color: '#C60B1E',
        fontSize: 13,
        fontWeight: '600',
        marginTop: 2,
    },

    divider: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginVertical: 10,
    },

    detail: {
        color: '#4B5563',
        fontSize: 13,
        lineHeight: 20,
    },
});
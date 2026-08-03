import { useCallback, useEffect, useState } from 'react';

import {
    ActivityIndicator,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

type ApiUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
};

type UserCardProps = {
    user: ApiUser;
};

function UserCard({ user }: UserCardProps) {
    const initials = user.name
        .split(' ')
        .slice(0, 2)
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase();

    return (
        <View style={styles.card}>
            {/* Avatar con iniciales */}
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
            </View>

            {/* Datos obtenidos desde API */}
            <View style={styles.userInformation}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.username}>@{user.username}</Text>

                <View style={styles.divider} />

                <Text style={styles.detail}>📧 {user.email}</Text>
                <Text style={styles.detail}>📞 {user.phone}</Text>
                <Text style={styles.detail}>🌐 {user.website}</Text>
            </View>
        </View>
    );
}

export default function ApiScreen() {
    const [users, setUsers] = useState<ApiUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const loadUsers = useCallback(async () => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data: ApiUser[] = await response.json();
            setUsers(data);
        } catch {
            setErrorMessage(
                'No se pudieron cargar los usuarios. Revisa tu conexión a Internet.',
            );
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    // Estado de carga
    if (isLoading) {
        return (
            <SafeAreaView style={styles.centeredContainer}>
                <ActivityIndicator
                    size="large"
                    color="#C60B1E"
                />

                <Text style={styles.loadingText}>
                    Consultando la API...
                </Text>
            </SafeAreaView>
        );
    }

    // Estado de error
    if (errorMessage) {
        return (
            <SafeAreaView style={styles.centeredContainer}>
                <Text style={styles.errorIcon}>⚠️</Text>

                <Text style={styles.errorTitle}>
                    Ocurrió un problema
                </Text>

                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>

                <Pressable
                    style={({ pressed }) => [
                        styles.retryButton,
                        pressed && styles.buttonPressed,
                    ]}
                    onPress={loadUsers}
                >
                    <Text style={styles.retryButtonText}>
                        Reintentar
                    </Text>
                </Pressable>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <UserCard user={item} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Usuarios desde API
                        </Text>

                        <Text style={styles.subtitle}>
                            Datos obtenidos dinámicamente mediante Fetch API.
                        </Text>

                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {users.length} registros encontrados
                            </Text>
                        </View>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Pantalla
    container: {
        flex: 1,
        backgroundColor: '#F4F7FC',
    },

    listContent: {
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 35,
    },

    // Encabezado
    header: {
        marginBottom: 20,
    },

    title: {
        color: '#111827',
        fontSize: 28,
        fontWeight: '800',
    },

    subtitle: {
        color: '#6B7280',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 5,
    },

    badge: {
        alignSelf: 'flex-start',
        backgroundColor: '#FCE7E9',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginTop: 12,
    },

    badgeText: {
        color: '#C60B1E',
        fontSize: 12,
        fontWeight: '700',
    },

    // Tarjeta de usuario
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C60B1E',
        borderRadius: 28,
        marginRight: 14,
    },

    avatarText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '800',
    },

    userInformation: {
        flex: 1,
    },

    userName: {
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

    // Carga y error
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F7FC',
        paddingHorizontal: 28,
    },

    loadingText: {
        color: '#6B7280',
        fontSize: 14,
        marginTop: 12,
    },

    errorIcon: {
        fontSize: 44,
    },

    errorTitle: {
        color: '#111827',
        fontSize: 21,
        fontWeight: '800',
        marginTop: 12,
    },

    errorMessage: {
        color: '#6B7280',
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
        marginTop: 8,
    },

    retryButton: {
        backgroundColor: '#C60B1E',
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginTop: 20,
    },

    retryButtonText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },

    buttonPressed: {
        opacity: 0.8,
    },
});
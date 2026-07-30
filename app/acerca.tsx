import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Developer = {
    id: number;
    name: string;
    initials: string;
    role: string;
    description: string;
    image: number;
};

const DEVELOPERS: Developer[] = [
    {
        id: 1,
        name: 'Rommel Pachacama',
        initials: 'RP',
        role: 'Estudiante de Ingeniería en Sistemas de Información',
        description:
            'Responsable del desarrollo móvil, la navegación y el diseño de interfaces de la aplicación.',
        image: require('../assets/images/perfil-rommel.gif'),
    },
];

export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>Acerca de</Text>

                <Text style={styles.subtitle}>
                    Conoce quién desarrolló esta aplicación
                </Text>

                <View style={styles.card}>
                    {DEVELOPERS.map((developer) => (
                        <View key={developer.id} style={styles.profile}>
                            <View style={styles.avatarBorder}>
                                <Image
                                    source={developer.image}
                                    style={styles.avatar}
                                    contentFit="cover"
                                    autoplay
                                />
                            </View>

                            <View style={styles.information}>
                                <Text style={styles.name}>{developer.name}</Text>
                                <Text style={styles.role}>{developer.role}</Text>
                                <Text style={styles.description}>
                                    {developer.description}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>



                <Text style={styles.footer}>EC593 Fútbol App · 2026</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F4F7FC',
    },

    content: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 30,
    },

    title: {
        color: '#111827',
        fontSize: 28,
        fontWeight: '800',
    },

    subtitle: {
        color: '#6B7280',
        fontSize: 15,
        marginTop: 4,
        marginBottom: 22,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },

    profile: {
        alignItems: 'center',
    },

    avatarBorder: {
        width: 118,
        height: 118,
        borderRadius: 59,
        borderWidth: 4,
        borderColor: '#ffaa00',
        padding: 4,
        backgroundColor: '#FFFFFF',
    },

    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 54,
        backgroundColor: '#E5E7EB',
    },

    information: {
        alignItems: 'center',
        marginTop: 14,
    },

    name: {
        color: '#003DA5',
        fontSize: 21,
        fontWeight: '800',
        textAlign: 'center',
    },

    role: {
        color: '#374151',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 5,
    },

    description: {
        color: '#6B7280',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 10,
    },

    projectInformation: {
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 4,
        borderLeftColor: '#FFD100',
        borderRadius: 14,
        padding: 16,
        marginTop: 18,
    },

    projectTitle: {
        color: '#003DA5',
        fontSize: 16,
        fontWeight: '800',
    },

    projectText: {
        color: '#4B5563',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 6,
    },

    footer: {
        color: '#6B7280',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 26,
    },
});
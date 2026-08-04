import { Image, ImageSource } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Developer = {
    id: number;
    name: string;
    initials: string;
    role: string;
    description: string;
    image: ImageSource;
};



const DEVELOPERS: Developer[] = [


    
    {
        id: 1,
        name: 'Jorge Yunda Machado',
        initials: 'RP',
        role: 'Yunda fue elegido alcalde en 2019',
        description:
            'Una de sus obras principales es realizar el nuevo estadio OLIMPICO en la Mitad del Mundo.',
        image: require('../assets/images/jorge.jpg'),
    },

    {
        id: 2,
        name: 'Wilson Merino Rivadeneira',
        initials: 'RP',
        role: 'Movimiento Imparables 79',
        description:
            'Tiene como obra principal el metro de Quito desde el Labrador a Calderon.',
        image: require('../assets/images/wilson.jpg'),
    },

    {
        id: 3,
        name: 'Carla Larrea',
        initials: 'RP',
        role: 'El movimiento oficialista Acción Democrática Nacional (ADN)',
        description:
            'Su principal obra se basa en la construcción de la nueva Universidad en el Sur de Quito.',
        image: require('../assets/images/carla.jpg'),
    },
    

    
];

export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                {/* Encabezado */}
                <Text style={styles.title}>Candidatos</Text>

                <Text style={styles.subtitle}>
                    Conoce quiénes seran los principales nombres para la alcaldía de Quito
                </Text>

                {/* Tarjetas de integrantes */}
                {DEVELOPERS.map((developer) => (
                    <View key={developer.id} style={styles.card}>
                        <View style={styles.profile}>
                            {/* Imagen de perfil */}
                            <View style={styles.avatarBorder}>
                                <Image
                                    source={developer.image}
                                    style={styles.avatar}
                                    contentFit="cover"
                                    autoplay
                                />
                            </View>

                            {/* Información personal */}
                            <View style={styles.information}>
                                <Text style={styles.name}>{developer.name}</Text>

                                <Text style={styles.role}>{developer.role}</Text>

                                <Text style={styles.description}>
                                    {developer.description}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}

                {/* Pie de página */}
                <Text style={styles.footer}>CNE App · 2026</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Pantalla
    safeArea: {
        flex: 1,
        backgroundColor: '#F4F7FC',
    },

    // Contenido desplazable
    content: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 30,
    },

    // Encabezado
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

    // Tarjeta principal
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },

    // Perfil
    profile: {
        alignItems: 'center',
    },

    // Borde de la imagen
    avatarBorder: {
        width: 118,
        height: 118,
        borderRadius: 59,
        borderWidth: 4,
        borderColor: '#FFAA00',
        padding: 4,
        backgroundColor: '#FFFFFF',
    },

    // Imagen o GIF
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 54,
        backgroundColor: '#E5E7EB',
    },

    // Datos del integrante
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

    // Pie de página
    footer: {
        color: '#6B7280',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 12,
    },
});
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const DEMO_CREDENTIALS = {
    email: 'estudiante@uce.edu.ec',
    password: '1234',
};

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        const normalizedEmail = email.trim().toLowerCase();

        // Validación de campos
        if (!normalizedEmail || !password) {
            Alert.alert(
                'Campos incompletos',
                'Ingresa el correo y la contraseña.',
            );
            return;
        }

        // Validación local
        const isValidUser =
            normalizedEmail === DEMO_CREDENTIALS.email &&
            password === DEMO_CREDENTIALS.password;

        if (!isValidUser) {
            Alert.alert(
                'Acceso denegado',
                'El correo o la contraseña son incorrectos.',
            );
            return;
        }

        // Abre la aplicación con navbar
        router.replace('/(tabs)' as any);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >
                    {/* Encabezado */}
                    <View style={styles.header}>
                        <View style={styles.logoContainer}>
                            <Ionicons
                                name="football"
                                size={43}
                                color="#FFCD00"
                            />
                        </View>

                        <Text style={styles.title}>Iniciar sesión</Text>

                        <Text style={styles.subtitle}>
                            Accede a España Fútbol App
                        </Text>
                    </View>

                    {/* Formulario */}
                    <View style={styles.card}>
                        <Text style={styles.label}>
                            Correo electrónico
                        </Text>

                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="mail-outline"
                                size={20}
                                color="#6B7280"
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="correo@ejemplo.com"
                                placeholderTextColor="#9CA3AF"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>

                        <Text style={styles.label}>
                            Contraseña
                        </Text>

                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="lock-closed-outline"
                                size={20}
                                color="#6B7280"
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Ingresa tu contraseña"
                                placeholderTextColor="#9CA3AF"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                autoCapitalize="none"
                            />

                            <Pressable
                                accessibilityRole="button"
                                accessibilityLabel={
                                    showPassword
                                        ? 'Ocultar contraseña'
                                        : 'Mostrar contraseña'
                                }
                                onPress={() =>
                                    setShowPassword((currentValue) => !currentValue)
                                }
                            >
                                <Ionicons
                                    name={
                                        showPassword
                                            ? 'eye-off-outline'
                                            : 'eye-outline'
                                    }
                                    size={22}
                                    color="#6B7280"
                                />
                            </Pressable>
                        </View>

                        <Pressable
                            style={({ pressed }) => [
                                styles.loginButton,
                                pressed && styles.loginButtonPressed,
                            ]}
                            onPress={handleLogin}
                        >
                            <Text style={styles.loginButtonText}>
                                Ingresar
                            </Text>
                        </Pressable>
                    </View>

                    {/* Credenciales para demostración */}
                    <View style={styles.demoCard}>
                        <Text style={styles.demoTitle}>
                            Credenciales de prueba
                        </Text>

                        <Text style={styles.demoText}>
                            Correo: estudiante@uce.edu.ec
                        </Text>

                        <Text style={styles.demoText}>
                            Contraseña: 1234
                        </Text>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Pantalla principal
    safeArea: {
        flex: 1,
        backgroundColor: '#F4F7FC',
    },

    keyboardContainer: {
        flex: 1,
    },

    content: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 22,
        paddingVertical: 30,
    },

    // Encabezado
    header: {
        alignItems: 'center',
        marginBottom: 24,
    },

    logoContainer: {
        width: 84,
        height: 84,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C60B1E',
        borderRadius: 42,
        marginBottom: 16,
    },

    title: {
        color: '#111827',
        fontSize: 28,
        fontWeight: '800',
    },

    subtitle: {
        color: '#6B7280',
        fontSize: 14,
        marginTop: 5,
    },

    // Tarjeta del formulario
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        elevation: 3,

        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },

    label: {
        color: '#374151',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 7,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 12,
        paddingHorizontal: 13,
        marginBottom: 17,
    },

    input: {
        flex: 1,
        color: '#111827',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 13,
    },

    // Botón de acceso
    loginButton: {
        backgroundColor: '#C60B1E',
        borderRadius: 12,
        paddingVertical: 14,
        marginTop: 3,
    },

    loginButtonPressed: {
        opacity: 0.8,
    },

    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
    },

    // Datos de demostración
    demoCard: {
        backgroundColor: '#FFF7CC',
        borderLeftWidth: 4,
        borderLeftColor: '#FFCD00',
        borderRadius: 12,
        padding: 14,
        marginTop: 18,
    },

    demoTitle: {
        color: '#854D0E',
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 6,
    },

    demoText: {
        color: '#713F12',
        fontSize: 13,
        lineHeight: 20,
    },

    disclaimer: {
        color: '#6B7280',
        fontSize: 12,
        lineHeight: 18,
        textAlign: 'center',
        marginTop: 18,
    },
});
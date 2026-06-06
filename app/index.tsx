import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import ProgressBar from '../components/ProgressBar';

import { COLORS } from '../constants/colors';

import { useSplashTimer } from '../hooks/useSplashTimer';

export default function HomeScreen() {
  const [showHome, setShowHome] = useState(false);

  useSplashTimer(() => {
    setShowHome(true);
  }, 3000);

  if (!showHome) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <Image
          source={require('../assets/images/logo-fef.jpg')}
          style={styles.logo}
        />

        <Text style={styles.splashTitle}>
          EC593
        </Text>

        <Text style={styles.splashPhrase}>
          Arrecho nunca muere, y si muere,
          muere arrecho.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Header title="🇪🇨 LA TRI DEL 593" />

      <Image
        source={require('../assets/images/logo-fef.jpg')}
        style={styles.homeLogo}
      />

      <Text style={styles.teamTitle}>
        Selección Ecuatoriana de Fútbol
      </Text>

      <InfoCard
        title="Director Técnico"
        value="Sebastián Beccacece"
      />

      <InfoCard
        title="Capitán"
        value="Enner Valencia"
      />

      <InfoCard
        title="Objetivo"
        value="Clasificar y competir en el Mundial 2026"
      />

      <ProgressBar percentage={99} />

      <Text style={styles.quote}>
        "La fe no juega, pero empuja a la Tri."
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push('/convocados' as any)
        }
      >
        <Text style={styles.buttonText}>
          Ver Convocados →
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
  },

  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  splashTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  splashPhrase: {
    marginTop: 20,
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 16,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  homeLogo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 10,
  },

  teamTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.text,
  },

  quote: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
    color: COLORS.gray,
  },

  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
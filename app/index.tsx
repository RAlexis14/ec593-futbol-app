import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { COLORS } from '../constants/colors';
import { TEXTS } from '../constants/texts';
import { useSplashTimer } from '../hooks/useSplashTimer';

export default function Index() {
  const [showHome, setShowHome] = useState(false);

  useSplashTimer(() => {
    setShowHome(true);
  });

  if (!showHome) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <Text style={styles.logo}>⚽</Text>

        <Text style={styles.title}>
          {TEXTS.splashTitle}
        </Text>

        <Text style={styles.phrase}>
          {TEXTS.splashPhrase}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.teamTitle}>
        🇪🇨 {TEXTS.teamName}
      </Text>

      <View style={styles.card}>
        <Text>Director Técnico:</Text>
        <Text>{TEXTS.coach}</Text>
      </View>

      <View style={styles.card}>
        <Text>Capitán:</Text>
        <Text>{TEXTS.captain}</Text>
      </View>

      <View style={styles.card}>
        <Text>Objetivo:</Text>
        <Text>{TEXTS.goal}</Text>
      </View>

      <View style={styles.card}>
        <Text>Probabilidad de ganar el Mundial:</Text>
        <Text>{TEXTS.fanFaith}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: 20,
  },

  logo: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  phrase: {
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 18,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  teamTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
});
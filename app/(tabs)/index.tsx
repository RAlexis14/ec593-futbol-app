import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import ProgressBar from '../../components/ProgressBar';

import { COLORS } from '../../constants/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header title="BIENVENIDO CAMPEÓN" />

        <Image
          source={require('../../assets/images/Bandera_España.png')}
          style={styles.logo}
        />

        <Text style={styles.subtitle}>
          Y en segundo lugar...
        </Text>

        <Header title="ARGENTINA" />

        <Image
          source={require('../../assets/images/argentina.png')}
          style={styles.logo}
        />

        <InfoCard
          title="Director Técnico"
          value="Lionel Scaloni"
        />

        <InfoCard
          title="Capitán"
          value="Lionel Messi"
        />

        <InfoCard
          title="Marcador Final"
          value="1-2"
        />

        <ProgressBar percentage={100} />

        <Text style={styles.quote}>
          “España, el equipo más dominante del Mundial.”
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Pantalla principal
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  // Logos de selecciones
  logo: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 10,
  },

  subtitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  quote: {
    color: COLORS.gray,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
});
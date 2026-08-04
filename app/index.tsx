import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProgressBar from '../components/ProgressBar';

import { COLORS } from '../constants/colors';
import { useSplashTimer } from '../hooks/useSplashTimer';

/*
 * Lugar de votación de demostración.
 * Cambia estos datos cuando tengas tu recinto oficial.
 */
const VOTING_PLACE = {
  name: 'Universidad Central del Ecuador',
  address: 'Av. Universitaria, Quito, Ecuador',
  province: 'Pichincha',
  canton: 'Quito',
  parish: 'Belisario Quevedo',
  board: 'Junta N.º 012',
  latitude: -0.2008,
  longitude: -78.5047,
};

const ELECTION_STATS = [
  {
    id: 1,
    value: '8',
    label: 'Candidatos',
    icon: 'people-outline' as const,
  },
  {
    id: 2,
    value: '24',
    label: 'Parroquias',
    icon: 'location-outline' as const,
  },
  {
    id: 3,
    value: '1',
    label: 'Alcaldía',
    icon: 'business-outline' as const,
  },
];

const APP_FEATURES = [
  'Consulta de candidatos a la Alcaldía de Quito.',
  'Revisión de perfiles y propuestas electorales.',
  'Consulta del lugar de votación en un mapa interactivo.',
  'Información general del proceso electoral.',
];

export default function HomeScreen() {
  const [showHome, setShowHome] = useState(false);

  useSplashTimer(() => {
    setShowHome(true);
  }, 3000);

  const openVotingPlaceInMaps = async () => {
    const mapsUrl =
      `https://www.google.com/maps/search/?api=1` +
      `&query=${VOTING_PLACE.latitude},${VOTING_PLACE.longitude}`;

    try {
      const canOpen = await Linking.canOpenURL(mapsUrl);

      if (!canOpen) {
        Alert.alert(
          'Mapa no disponible',
          'No existe una aplicación compatible para abrir la ubicación.',
        );
        return;
      }

      await Linking.openURL(mapsUrl);
    } catch {
      Alert.alert(
        'Error',
        'No fue posible abrir la ubicación en el mapa.',
      );
    }
  };

  // Splash Screen
  if (!showHome) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <View style={styles.splashLogoContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            size={92}
            color={COLORS.primary}
          />
        </View>

        <Text style={styles.splashTitle}>
          BIENVENIDOS
        </Text>

        <Text style={styles.splashPhrase}>
          Plataforma electoral CNE 2026
        </Text>

        <View style={styles.splashProgress}>
          <ProgressBar percentage={60} />
        </View>
      </SafeAreaView>
    );
  }

  // Home Screen
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.greeting}>
                Hola,
              </Text>

              <Text style={styles.userName}>
                Rommel Pachacama
              </Text>

              <Text style={styles.headerSubtitle}>
                Elecciones Municipales de Quito
              </Text>
            </View>

            <View style={styles.profileIcon}>
              <Ionicons
                name="person-outline"
                size={27}
                color="#FFFFFF"
              />
            </View>
          </View>

          <View style={styles.statusBadge}>
            <Ionicons
              name="checkmark-circle"
              size={17}
              color="#166534"
            />

            <Text style={styles.statusText}>
              Habilitado para votar
            </Text>
          </View>
        </View>

        {/* Estadísticas */}
        <Text style={styles.sectionLabel}>
          RESUMEN DEL PROCESO
        </Text>

        <View style={styles.statsContainer}>
          {ELECTION_STATS.map((stat) => (
            <View
              key={stat.id}
              style={styles.statCard}
            >
              <Ionicons
                name={stat.icon}
                size={24}
                color="#6D28D9"
              />

              <Text style={styles.statValue}>
                {stat.value}
              </Text>

              <Text style={styles.statLabel}>
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Información disponible */}
        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Ionicons
                name="information-circle-outline"
                size={23}
                color="#6D28D9"
              />
            </View>

            <Text style={styles.cardTitle}>
              Qué encontrarás en la app
            </Text>
          </View>

          {APP_FEATURES.map((feature) => (
            <View
              key={feature}
              style={styles.featureRow}
            >
              <View style={styles.featureBullet}>
                <Ionicons
                  name="checkmark"
                  size={13}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.featureText}>
                {feature}
              </Text>
            </View>
          ))}
        </View>

        {/* Título del lugar de votación */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeaderText}>
            <Text style={styles.sectionTitle}>
              Tu lugar de votación
            </Text>

            <Text style={styles.sectionSubtitle}>
              Mueve o amplía el mapa para explorar la ubicación
            </Text>
          </View>

          <Ionicons
            name="map-outline"
            size={26}
            color="#6D28D9"
          />
        </View>

        {/* Mapa interactivo */}
        <View style={styles.mapCard}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: VOTING_PLACE.latitude,
              longitude: VOTING_PLACE.longitude,
              latitudeDelta: 0.012,
              longitudeDelta: 0.012,
            }}
            scrollEnabled
            zoomEnabled
            rotateEnabled
            pitchEnabled
            showsCompass
            showsScale
          >
            <Marker
              coordinate={{
                latitude: VOTING_PLACE.latitude,
                longitude: VOTING_PLACE.longitude,
              }}
              title={VOTING_PLACE.name}
              description={VOTING_PLACE.address}
              pinColor="#6D28D9"
            />
          </MapView>

          {/* Datos del recinto */}
          <View style={styles.placeInformation}>
            <View style={styles.placeTitleRow}>
              <View style={styles.locationIcon}>
                <Ionicons
                  name="location"
                  size={22}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.placeTitleContainer}>
                <Text style={styles.placeName}>
                  {VOTING_PLACE.name}
                </Text>

                <Text style={styles.placeAddress}>
                  {VOTING_PLACE.address}
                </Text>
              </View>
            </View>

            <View style={styles.placeDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>
                  Provincia
                </Text>

                <Text style={styles.detailValue}>
                  {VOTING_PLACE.province}
                </Text>
              </View>

              <View style={styles.detailDivider} />

              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>
                  Cantón
                </Text>

                <Text style={styles.detailValue}>
                  {VOTING_PLACE.canton}
                </Text>
              </View>

              <View style={styles.detailDivider} />

              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>
                  Junta
                </Text>

                <Text style={styles.detailValue}>
                  {VOTING_PLACE.board}
                </Text>
              </View>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.mapsButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={openVotingPlaceInMaps}
            >
              <Ionicons
                name="navigate-outline"
                size={20}
                color="#FFFFFF"
              />

              <Text style={styles.mapsButtonText}>
                Abrir ubicación en Maps
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Información electoral */}
        <View style={styles.electionCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Ionicons
                name="document-text-outline"
                size={22}
                color="#6D28D9"
              />
            </View>

            <Text style={styles.cardTitle}>
              Información electoral
            </Text>
          </View>

          <View style={styles.electionRow}>
            <Text style={styles.electionLabel}>
              Elección
            </Text>

            <Text style={styles.electionValue}>
              Alcaldía de Quito
            </Text>
          </View>

          <View style={styles.horizontalDivider} />

          <View style={styles.electionRow}>
            <Text style={styles.electionLabel}>
              Parroquia
            </Text>

            <Text style={styles.electionValue}>
              {VOTING_PLACE.parish}
            </Text>
          </View>

          <View style={styles.horizontalDivider} />

          <View style={styles.electionRow}>
            <Text style={styles.electionLabel}>
              Estado
            </Text>

            <View style={styles.activeStatus}>
              <View style={styles.activeDot} />

              <Text style={styles.activeText}>
                Registro activo
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.disclaimer}>
          Los datos electorales y el lugar de votación son demostrativos.
          Consulta la información oficial del CNE antes de acudir a votar.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Splash Screen
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 24,
  },

  splashLogoContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  splashTitle: {
    color: COLORS.primary,
    fontSize: 39,
    fontWeight: '800',
  },

  splashPhrase: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 14,
  },

  splashProgress: {
    width: '80%',
    marginTop: 18,
  },

  // Pantalla principal
  homeContainer: {
    flex: 1,
    backgroundColor: '#F5F3FA',
  },

  scrollContent: {
    paddingBottom: 40,
  },

  // Encabezado
  header: {
    backgroundColor: '#4C1D95',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 24,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTextContainer: {
    flex: 1,
    paddingRight: 12,
  },

  greeting: {
    color: '#DDD6FE',
    fontSize: 15,
    fontWeight: '600',
  },

  userName: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    marginTop: 2,
  },

  headerSubtitle: {
    color: '#C4B5FD',
    fontSize: 13,
    marginTop: 5,
  },

  profileIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D28D9',
    borderRadius: 25,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#DCFCE7',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 17,
    gap: 6,
  },

  statusText: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '700',
  },

  // Títulos de sección
  sectionLabel: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },

  sectionHeaderText: {
    flex: 1,
    paddingRight: 10,
  },

  sectionTitle: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '800',
  },

  sectionSubtitle: {
    color: '#6B7280',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },

  // Estadísticas
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },

  statCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    paddingVertical: 16,
    paddingHorizontal: 5,
    marginHorizontal: 4,
    elevation: 2,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
  },

  statValue: {
    color: '#4C1D95',
    fontSize: 21,
    fontWeight: '800',
    marginTop: 7,
  },

  statLabel: {
    color: '#6B7280',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 3,
  },

  // Tarjeta informativa
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 2,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  cardIcon: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDE9FE',
    borderRadius: 12,
    marginRight: 11,
  },

  cardTitle: {
    flex: 1,
    color: '#111827',
    fontSize: 17,
    fontWeight: '800',
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 11,
  },

  featureBullet: {
    width: 19,
    height: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7C3AED',
    borderRadius: 10,
    marginRight: 10,
    marginTop: 1,
  },

  featureText: {
    flex: 1,
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 21,
  },

  // Tarjeta del mapa
  mapCard: {
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 3,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,
  },

  map: {
    width: '100%',
    height: 240,
  },

  placeInformation: {
    padding: 17,
  },

  placeTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIcon: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D28D9',
    borderRadius: 13,
    marginRight: 12,
  },

  placeTitleContainer: {
    flex: 1,
  },

  placeName: {
    color: '#111827',
    fontSize: 17,
    fontWeight: '800',
  },

  placeAddress: {
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 3,
  },

  placeDetails: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    paddingVertical: 12,
    marginTop: 16,
  },

  detailItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  detailDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
  },

  detailLabel: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  detailValue: {
    color: '#374151',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
  },

  mapsButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C1D95',
    borderRadius: 13,
    paddingVertical: 13,
    marginTop: 16,
    gap: 8,
  },

  mapsButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  buttonPressed: {
    opacity: 0.8,
  },

  // Tarjeta electoral
  electionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginHorizontal: 20,
    marginTop: 22,
    elevation: 2,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
  },

  electionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  electionLabel: {
    color: '#6B7280',
    fontSize: 13,
  },

  electionValue: {
    maxWidth: '58%',
    color: '#111827',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'right',
  },

  horizontalDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 13,
  },

  activeStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: '#22C55E',
    borderRadius: 4,
    marginRight: 6,
  },

  activeText: {
    color: '#15803D',
    fontSize: 13,
    fontWeight: '700',
  },

  // Nota final
  disclaimer: {
    color: '#9CA3AF',
    fontSize: 11,
    lineHeight: 17,
    textAlign: 'center',
    marginHorizontal: 28,
    marginTop: 20,
  },
});
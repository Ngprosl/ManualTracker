import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { HeaderWithDrawer } from '@/components/HeaderWithDrawer';
import { DownloadButton } from '@/components/DownloadButton';
import { useTheme } from '@/hooks/useTheme';
import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import { funcionalidadesData } from '../../data/funcionalidadesData';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function FuncionalidadDetailScreen() {
  const params = useLocalSearchParams();
  const slug = params.slug as string;
  const { theme } = useTheme();
  const styles = createStyles(theme);

  // Mapeo de slugs a imágenes locales para casos prácticos
  const practiceImages: Record<string, any> = {
    'posicion-gps': require('@/assets/images/posicionGPS.png'),
    'viajes-paradas': require('@/assets/images/funcionalidadViajesYParadas.png'),
    'info-meteorologica': require('@/assets/images/funcionalidadClima.png'),
    'medicion-areas': require('@/assets/images/medicionDeArea.png')
  };

  const funcionalidad = funcionalidadesData.find(f => f.slug === slug);

  if (!funcionalidad) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Funcionalidad no encontrada</Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={20} color="#fff" />
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={20} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{funcionalidad.title}</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <AnimatedView entering={FadeInDown.delay(100)} style={styles.heroSection}>
          <Image
            source={{ uri: funcionalidad.image }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>{funcionalidad.title}</Text>
            <Text style={styles.heroSubtitle}>{funcionalidad.subtitle}</Text>
          </View>
        </AnimatedView>

        {/* Descripción */}
        <AnimatedView entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.description}>{funcionalidad.description}</Text>
        </AnimatedView>

        {/* Características */}
        {funcionalidad.features && (
          <AnimatedView entering={FadeInDown.delay(300)} style={styles.section}>
            <Text style={styles.sectionTitle}>Características Principales</Text>
            <View style={styles.featuresContainer}>
              {funcionalidad.features.map((feature, index) => (
                <AnimatedView 
                  key={index}
                  entering={FadeInDown.delay(400 + index * 50)}
                  style={styles.featureCard}
                >
                  <View style={styles.featureIcon}>
                    <feature.icon size={24} color={theme.colors.primary} />
                  </View>
                  <View style={styles.featureContent}>
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                </AnimatedView>
              ))}
            </View>
          </AnimatedView>
        )}

        {/* Beneficios */}
        {funcionalidad.benefits && (
          <AnimatedView entering={FadeInDown.delay(600)} style={styles.section}>
            <Text style={styles.sectionTitle}>Beneficios</Text>
            <View style={styles.benefitsContainer}>
              {funcionalidad.benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitItem}>
                  <View style={styles.benefitDot} />
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </View>
          </AnimatedView>
        )}

        {/* Uso Práctico */}
        {funcionalidad.usage && (
          <AnimatedView entering={FadeInDown.delay(800)} style={styles.section}>
            <Text style={styles.sectionTitle}>Uso Práctico</Text>
            <View style={styles.usageCard}>
              <Text style={styles.usageText}>{funcionalidad.usage}</Text>
            </View>
          </AnimatedView>
        )}

        {/* Caso Práctico */}
        {funcionalidad.casePractice && funcionalidad.casePractice.image && (
          <AnimatedView entering={FadeInDown.delay(900)} style={styles.section}>
            <Text style={styles.sectionTitle}>Caso Práctico</Text>
            <View style={styles.practiceImageContainer}>
              <Image
                source={funcionalidad.casePractice.image}
                style={styles.practiceImage}
                resizeMode="contain"
              />
            </View>
          </AnimatedView>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>

      <DownloadButton />
    </SafeAreaView>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  practiceImageContainer: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: theme.colors.card,
    padding: 16,
    maxWidth: Platform.OS === 'web' ? 800 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  practiceImage: {
    width: '100%',
    height: Platform.OS === 'web' ? 400 : 200,
    borderRadius: 12,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 4,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  heroSection: {
    position: 'relative',
    height: 250,
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
  featuresContainer: {
    gap: 16,
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  benefitsContainer: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  benefitDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  benefitText: {
    fontSize: 16,
    color: theme.colors.text,
    flex: 1,
    lineHeight: 22,
  },
  usageCard: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  usageText: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 20,
  },
  bottomPadding: {
    height: 20,
  },
});
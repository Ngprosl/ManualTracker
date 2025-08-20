import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { 
  FadeInDown, 
  FadeIn,
  SlideInRight,
  withSpring, 
  useAnimatedScrollHandler, 
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  interpolate,
  Extrapolate 
} from 'react-native-reanimated';
import { HeaderWithDrawer } from '@/components/HeaderWithDrawer';
import { DownloadButton } from '@/components/DownloadButton';
import { useTheme } from '@/hooks/useTheme';
import { MessageCircle, MapPin, User, Gauge, Battery, Route, Bluetooth, Download, ChartArea as AreaChart, CloudRain, Leaf, Tractor, MapIcon as Map } from 'lucide-react-native';
import { router } from 'expo-router';

const AnimatedView = Animated.createAnimatedComponent(View);
const WINDOW_HEIGHT = Dimensions.get('window').height;

interface AnimatedOnScrollProps {
  children: React.ReactNode;
  scrollY: Animated.SharedValue<number>;
  startPosition: number;
  style?: any;
}

function AnimatedOnScroll({ children, scrollY, startPosition, style }: AnimatedOnScrollProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const triggerPosition = startPosition - WINDOW_HEIGHT * 0.8;
    const animationRange = 300;
    
    const progress = interpolate(
      scrollY.value,
      [triggerPosition, triggerPosition + animationRange],
      [0, 1],
      Extrapolate.CLAMP
    );

    const opacity = withSpring(progress, {
      mass: 0.5,
      damping: 30,
      stiffness: 100,
    });

    const translateY = interpolate(
      progress,
      [0, 1],
      [50, 0],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      progress,
      [0, 1],
      [0.9, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [
        { translateY: withSpring(translateY, {
          mass: 0.5,
          damping: 30,
          stiffness: 100,
        }) },
        { scale: withSpring(scale, {
          mass: 0.5,
          damping: 30,
          stiffness: 100,
        }) }
      ]
    };
  });

  return (
    <Animated.View style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

interface TypewriterTextProps {
  text: string;
  style?: any;
  delay?: number;
}

function TypewriterText({ text, style, delay = 50 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText('');
    setIsComplete(false);

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <Text style={style}>{isComplete ? text : displayedText}</Text>;
}

export default function InicioScreen() {
  const { theme } = useTheme();
  const scrollY = useSharedValue(0);

  const features = [
    { icon: MapPin, title: 'Posición GPS', description: 'Localización en tiempo real', slug: 'posicion-gps' },
    { icon: Route, title: 'Viajes y Paradas', description: 'Historial completo', slug: 'viajes-y-paradas' },
    { icon: Tractor, title: 'Agricultura', description: 'Gestión de labores agrícolas', slug: 'agricultura' },
    { icon: Leaf, title: 'EcoDriving', description: 'Conducción eficiente', slug: 'eco-driving' },
    { icon: Map, title: 'Geocercas', description: 'Control de zonas', slug: 'geocercas' },
    { icon: User, title: 'Control de Conductor', description: 'Gestión de conductores', slug: 'control-de-conductor' },
    { icon: Gauge, title: 'Velocidad', description: 'Monitoreo de velocidad', slug: 'velocidad' },
    { icon: Battery, title: 'Batería', description: 'Estado de la batería', slug: 'estado-bateria' },
    { icon: Bluetooth, title: 'Detección Bluetooth', description: 'Conductores y aperos', slug: 'deteccion-bluetooth' },
    { icon: Download, title: 'Exportación', description: 'Datos exportables', slug: 'exportacion-datos' },
    { icon: AreaChart, title: 'Medición de Áreas', description: 'Cálculo de superficies', slug: 'medicion-de-areas' },
    { icon: CloudRain, title: 'Info Meteorológica', description: 'Datos del clima', slug: 'info-meteorologica' },
  ];

  const styles = createStyles(theme);

  const navigateToFuncionalidad = (slug: string) => {
    router.push({
      pathname: "/funcionalidad/[slug]",
      params: { slug }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDrawer title="Tracker NGPRO" />
      
      <Animated.ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        onScroll={useAnimatedScrollHandler((event) => {
          scrollY.value = event.contentOffset.y;
        })}
        scrollEventThrottle={16}>
        {/* Hero Section */}
        <AnimatedOnScroll scrollY={scrollY} startPosition={0} style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <AnimatedOnScroll scrollY={scrollY} startPosition={50}>
              <Text style={styles.heroTitle}>Tracker NGPRO</Text>
            </AnimatedOnScroll>
            <AnimatedOnScroll scrollY={scrollY} startPosition={100}>
              <Text style={styles.heroSubtitle}>
                Sistema integral de seguimiento y gestión de todo tipo de vehículos y flotas
              </Text>
            </AnimatedOnScroll>
          </View>
        </AnimatedOnScroll>

        {/* Introducción */}
        <AnimatedOnScroll scrollY={scrollY} startPosition={WINDOW_HEIGHT * 0.3} style={styles.section}>
          <Text style={styles.sectionTitle}>Bienvenido a Tracker NGPRO</Text>
          <TypewriterText
            text="La solución completa para el seguimiento, control y gestión de todo tipo de vehículos y flotas. Monitorea en tiempo real la ubicación, estado y rendimiento de todos tus vehículos desde cualquier dispositivo."
            style={styles.description}
            delay={50}
          />
        </AnimatedOnScroll>

        {/* Funcionalidades Clave */}
        <AnimatedOnScroll scrollY={scrollY} startPosition={WINDOW_HEIGHT * 0.5} style={styles.section}>
          <Text style={styles.sectionTitle}>Funcionalidades Principales</Text>
          
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <AnimatedOnScroll 
                key={index}
                scrollY={scrollY}
                startPosition={WINDOW_HEIGHT * 0.5 + index * (WINDOW_HEIGHT * 0.15)}
              >
                <TouchableOpacity 
                  style={[styles.featureCard, { marginBottom: 16 }]}
                  onPress={() => navigateToFuncionalidad(feature.slug)}
                >
                  <View style={styles.featureIcon}>
                    <feature.icon size={24} color={theme.colors.primary} />
                  </View>
                  <View style={styles.featureContent}>
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                </TouchableOpacity>
              </AnimatedOnScroll>
            ))}
          </View>
        </AnimatedOnScroll>

        {/* Llamada a la Acción */}
        <AnimatedOnScroll scrollY={scrollY} startPosition={WINDOW_HEIGHT * 2.2} style={styles.section}>
          <View style={styles.ctaContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.ctaImage}
            />
            <View style={styles.ctaContent}>
              <Text style={styles.ctaTitle}>¿Tienes dudas?</Text>
              <Text style={styles.ctaDescription}>
                Utiliza nuestro chat inteligente para resolver cualquier pregunta sobre Tracker NGPRO
              </Text>
              <TouchableOpacity 
                style={styles.ctaButton}
                onPress={() => router.push('/(tabs)/ayuda')}
              >
                <MessageCircle size={20} color="#fff" />
                <Text style={styles.ctaButtonText}>Abrir Chat de Ayuda</Text>
              </TouchableOpacity>
            </View>
          </View>
        </AnimatedOnScroll>

        {/* Información de la Empresa */}
        <AnimatedOnScroll scrollY={scrollY} startPosition={WINDOW_HEIGHT * 1.8} style={styles.section}>
          <Text style={styles.sectionTitle}>Nueva Generación de Programas S.L.</Text>
          
          <View style={styles.companyContainer}>
            <Image
              source={require('../../assets/images/logongpro.png')}
              style={styles.companyLogo}
              resizeMode="contain"
            />
            <View style={styles.companyContent}>
              <Text style={styles.description}>
                NGPRO es una empresa especializada en soluciones tecnológicas de seguimiento vehicular, 
                comprometida con la innovación y la excelencia en el servicio al cliente.
              </Text>
            </View>
          </View>
        </AnimatedOnScroll>

        <View style={styles.bottomPadding} />
      </Animated.ScrollView>

      <DownloadButton />
    </SafeAreaView>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    lineHeight: 22,
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
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    width: '100%',
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  featureIcon: {
    width: 56,
    height: 56,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 28,
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
  ctaContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  ctaContent: {
    padding: 20,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  ctaDescription: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  ctaButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 8,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  companyContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  companyLogo: {
    width: 80,
    height: 80,
  },
  companyContent: {
    flex: 1,
  },
  bottomPadding: {
    height: 20,
  },
});
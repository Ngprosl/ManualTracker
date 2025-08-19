import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { HeaderWithDrawer } from '@/components/HeaderWithDrawer';
import { DownloadButton } from '@/components/DownloadButton';
import { useTheme } from '@/hooks/useTheme';
import { Globe, Monitor, Smartphone, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';
import { funcionalidadesData } from '@/data/funcionalidadesData';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function FuncionalidadesScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const navigateToFuncionalidad = (slug: string) => {
    router.push(`/funcionalidad/${slug}` as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDrawer title="Cómo Funciona" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <AnimatedView entering={FadeInDown.delay(100)} style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Acceso Multiplataforma</Text>
            <Text style={styles.heroSubtitle}>
              Disponible desde web, escritorio y dispositivos móviles
            </Text>
          </View>
        </AnimatedView>

        {/* Acceso */}
        <AnimatedView entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Formas de Acceso</Text>
          
          <View style={styles.accessCard}>
            <View style={styles.accessIcon}>
              <Globe size={28} color={theme.colors.primary} />
            </View>
            <View style={styles.accessContent}>
              <Text style={styles.accessTitle}>Navegador Web</Text>
              <Text style={styles.accessDescription}>
                Accede desde cualquier navegador moderno con tu usuario y contraseña
              </Text>
            </View>
          </View>

          <View style={styles.accessCard}>
            <View style={styles.accessIcon}>
              <Monitor size={28} color={theme.colors.primary} />
            </View>
            <View style={styles.accessContent}>
              <Text style={styles.accessTitle}>Aplicación de Escritorio</Text>
              <Text style={styles.accessDescription}>
                Versión optimizada para Windows, Mac y Linux con todas las funcionalidades
              </Text>
            </View>
          </View>

          <View style={styles.accessCard}>
            <View style={styles.accessIcon}>
              <Smartphone size={28} color={theme.colors.primary} />
            </View>
            <View style={styles.accessContent}>
              <Text style={styles.accessTitle}>App Móvil</Text>
              <Text style={styles.accessDescription}>
                Disponible en iOS y Android para monitoreo sobre la marcha
              </Text>
            </View>
          </View>
        </AnimatedView>

        {/* Inicio de Sesión */}
        <AnimatedView entering={FadeInDown.delay(400)} style={styles.section}>
          <Text style={styles.sectionTitle}>Inicio de Sesión</Text>
          <View style={styles.loginCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.loginImage}
            />
            <View style={styles.loginContent}>
              <Text style={styles.loginStep}>1. Email y Contraseña</Text>
              <Text style={styles.loginDescription}>
                Utiliza las credenciales proporcionadas por NGPRO para acceder a tu cuenta
              </Text>
              
              <Text style={styles.loginStep}>2. Selección de Perfil</Text>
              <Text style={styles.loginDescription}>
                Si tienes múltiples perfiles, selecciona el adecuado para tu rol
              </Text>
              
              <Text style={styles.loginStep}>3. Dashboard Principal</Text>
              <Text style={styles.loginDescription}>
                Accede inmediatamente al mapa principal con todas tus unidades
              </Text>
            </View>
          </View>
        </AnimatedView>

        {/* Instalación */}
        <AnimatedView entering={FadeInDown.delay(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Instalación Inicial</Text>
          <View style={styles.installCard}>
            <Text style={styles.installTitle}>Asistencia Técnica Incluida</Text>
            <Text style={styles.installDescription}>
              Nuestros técnicos de NGPRO se encargan de la instalación completa:
            </Text>
            
            <View style={styles.installList}>
              <Text style={styles.installItem}>• Instalación de dispositivos GPS en vehículos</Text>
              <Text style={styles.installItem}>• Configuración inicial del sistema</Text>
              <Text style={styles.installItem}>• Creación de cuentas de usuario</Text>
              <Text style={styles.installItem}>• Capacitación básica del personal</Text>
              <Text style={styles.installItem}>• Verificación de funcionamiento</Text>
            </View>
          </View>
        </AnimatedView>

        {/* Ventajas */}

        <View style={styles.bottomPadding} />
      </ScrollView>

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
    height: 200,
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
  accessCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  accessIcon: {
    width: 56,
    height: 56,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  accessContent: {
    flex: 1,
  },
  accessTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  accessDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  loginCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  loginImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  loginContent: {
    padding: 20,
  },
  loginStep: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
    marginTop: 12,
  },
  loginDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  installCard: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  installTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  installDescription: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  installList: {
    paddingLeft: 8,
  },
  installItem: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 22,
    marginBottom: 4,
  },
  funcionalidadesList: {
    gap: 12,
  },
  bottomPadding: {
    height: 20,
  },
});
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { HeaderWithDrawer } from '@/components/HeaderWithDrawer';
import { DownloadButton } from '@/components/DownloadButton';
import { useTheme } from '@/hooks/useTheme';
import { Monitor, Smartphone, Route, MapPin, ChartBar as BarChart3, TrendingUp, RotateCcw, Cloud, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';
import { reportesData } from '@/data/reportesData';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function ReportesScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const navigateToReporte = (slug: string) => {
    router.push(`/reporte/${slug}` as any);
  };

  const mobileReports = [
    { title: 'Lista ↔ Mapa', description: 'Alternar entre vista lista y mapa' },
    { title: 'Reportes Adaptados', description: 'Versiones móviles optimizadas' },
    { title: 'Ubicación Actual', description: 'Posición en tiempo real' },
    { title: 'Historial Reciente', description: 'Últimas actividades registradas' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDrawer title="Reportes" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <AnimatedView entering={FadeInDown.delay(100)} style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Sistema de Reportes</Text>
            <Text style={styles.heroSubtitle}>
              Información detallada y análisis completo de tu flota
            </Text>
          </View>
        </AnimatedView>

        {/* Escritorio */}
        <AnimatedView entering={FadeInDown.delay(200)} style={styles.section}>
          <View style={styles.platformHeader}>
            <Monitor size={24} color={theme.colors.primary} />
            <Text style={styles.sectionTitle}>Reportes de Escritorio</Text>
          </View>
          
          <Text style={styles.description}>
            La versión de escritorio ofrece el conjunto completo de reportes y herramientas de análisis:
          </Text>

          <View style={styles.reportsList}>
            {reportesData.map((report, index) => (
              <AnimatedView 
                key={index}
                entering={FadeInDown.delay(300 + index * 50)}
              >
                <TouchableOpacity 
                  style={styles.reportCard}
                  onPress={() => navigateToReporte(report.slug)}
                >
                  <View style={styles.reportContent}>
                    <Text style={styles.reportTitle}>{report.title}</Text>
                    <Text style={styles.reportDescription}>{report.subtitle}</Text>
                  </View>
                  <ChevronRight size={20} color={theme.colors.textSecondary} />
                </TouchableOpacity>
              </AnimatedView>
            ))}
          </View>

          {/* Dashboard */}
          <AnimatedView entering={FadeInDown.delay(600)} style={styles.dashboardCard}>
            <Text style={styles.dashboardTitle}>Dashboard Principal</Text>
            <Text style={styles.dashboardDescription}>
              Panel de control con métricas clave:
            </Text>
            <View style={styles.metricsList}>
              <Text style={styles.metric}>• Kilometraje total y por período</Text>
              <Text style={styles.metric}>• Velocidades promedio y máximas</Text>
              <Text style={styles.metric}>• Tiempo de actividad vs inactividad</Text>
            </View>
          </AnimatedView>
        </AnimatedView>

        {/* Móvil */}
        <AnimatedView entering={FadeInDown.delay(700)} style={styles.section}>
          <View style={styles.platformHeader}>
            <Smartphone size={24} color={theme.colors.secondary} />
            <Text style={styles.sectionTitle}>Reportes Móviles</Text>
          </View>
          
          <Text style={styles.description}>
            La app móvil se centra en la información esencial para monitoreo sobre la marcha:
          </Text>

          <View style={styles.mobileCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.mobileImage}
            />
            <View style={styles.mobileContent}>
              {mobileReports.map((report, index) => (
                <View key={index} style={styles.mobileReportItem}>
                  <Text style={styles.mobileReportTitle}>{report.title}</Text>
                  <Text style={styles.mobileReportDescription}>{report.description}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Características Móviles */}
          <AnimatedView entering={FadeInDown.delay(900)} style={styles.featuresCard}>
            <Text style={styles.featuresTitle}>Características Móviles</Text>
            
            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <Text style={styles.featureLabel}>📱 Interfaz Táctil</Text>
                <Text style={styles.featureText}>Optimizada para pantallas táctiles</Text>
              </View>
              
              <View style={styles.featureItem}>
                <Text style={styles.featureLabel}>🔄 Sincronización</Text>
                <Text style={styles.featureText}>Actualización automática de datos</Text>
              </View>
              
              <View style={styles.featureItem}>
                <Text style={styles.featureLabel}>📍 GPS Integrado</Text>
                <Text style={styles.featureText}>Utiliza la ubicación del dispositivo</Text>
              </View>
              
              <View style={styles.featureItem}>
                <Text style={styles.featureLabel}>⚡ Modo Offline</Text>
                <Text style={styles.featureText}>Funcionalidad básica sin conexión</Text>
              </View>
            </View>
          </AnimatedView>
        </AnimatedView>

        {/* Exportación */}
        <AnimatedView entering={FadeInDown.delay(1000)} style={styles.section}>
          <Text style={styles.sectionTitle}>Exportación de Datos</Text>
          
          <View style={styles.exportCard}>
            <Text style={styles.exportTitle}>Formatos Disponibles</Text>
            <Text style={styles.exportDescription}>
              Todos los reportes pueden exportarse en múltiples formatos:
            </Text>
            
            <View style={styles.formatGrid}>
              <View style={styles.formatItem}>
                <Text style={styles.formatName}>PDF</Text>
                <Text style={styles.formatDesc}>Documentos listos para imprimir</Text>
              </View>
              <View style={styles.formatItem}>
                <Text style={styles.formatName}>Excel</Text>
                <Text style={styles.formatDesc}>Para análisis y cálculos</Text>
              </View>
              <View style={styles.formatItem}>
                <Text style={styles.formatName}>CSV</Text>
                <Text style={styles.formatDesc}>Compatible con cualquier sistema</Text>
              </View>
            </View>
          </View>
        </AnimatedView>

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
  platformHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  description: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 24,
    marginBottom: 16,
  },
  reportsList: {
    gap: 12,
  },
  reportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reportContent: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  reportDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  dashboardCard: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dashboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  dashboardDescription: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: 12,
  },
  metricsList: {
    paddingLeft: 8,
  },
  metric: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: 4,
  },
  mobileCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  mobileImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  mobileContent: {
    padding: 20,
  },
  mobileReportItem: {
    marginBottom: 16,
  },
  mobileReportTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  mobileReportDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  featuresCard: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    minWidth: 120,
  },
  featureText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    flex: 1,
  },
  exportCard: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  exportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  exportDescription: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: 16,
  },
  formatGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  formatItem: {
    width: '48%',
    backgroundColor: theme.colors.background,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  formatName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  formatDesc: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  bottomPadding: {
    height: 20,
  },
});
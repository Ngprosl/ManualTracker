import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { router } from 'expo-router';
import { X, Chrome as Home, Settings, ChartBar as BarChart3, Smartphone, CircleHelp as HelpCircle, Shield, ChevronRight, Book, MapPin, Users, Wrench, Download, Phone } from 'lucide-react-native';

interface DrawerMenuProps {
  visible: boolean;
  onClose: () => void;
}

export function DrawerMenu({ visible, onClose }: DrawerMenuProps) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const mainSections = [
    { icon: Home, title: 'Inicio', route: '/(tabs)/' },
    { icon: Settings, title: 'Funcionamiento', route: '/(tabs)/funcionalidades' },
    { icon: BarChart3, title: 'Reportes', route: '/(tabs)/reportes' },
    { icon: HelpCircle, title: 'Ayuda', route: '/(tabs)/ayuda' },
    { icon: Shield, title: 'Privacidad', route: '/(tabs)/privacidad' },
  ];

  const manualSections = [
    {
      title: 'Introducción',
      items: [
        'Características principales',
        'Beneficios del sistema',
        'Requisitos técnicos'
      ]
    },
    {
      title: 'Acceso al Sistema',
      items: [
        'Navegador web',
        'Aplicación móvil',
        'Aplicación de escritorio',
        'Credenciales de acceso'
      ]
    },
    {
      title: 'Funcionalidades',
      items: [
        'Seguimiento GPS',
        'Control de conductores',
        'Gestión de velocidad',
        'Estado de batería',
        'Viajes y paradas',
        'Detección Bluetooth',
        'Medición de áreas',
        'Información meteorológica'
      ]
    },
    {
      title: 'Reportes',
      items: [
        'Reporte de ruta',
        'Viajes y paradas',
        'Resumen de actividad',
        'Gráficas de rendimiento',
        'Repetición de ruta',
        'Información climática',
        'Exportación de datos'
      ]
    },
    {
      title: 'Dispositivos GPS',
      items: [
        'FMC230 / FMC234',
        'TAT240',
        'Especificaciones técnicas',
        'Instalación y configuración'
      ]
    },
    {
      title: 'Soporte',
      items: [
        'Preguntas frecuentes',
        'Contacto técnico',
        'Manual PDF',
        'Actualizaciones'
      ]
    }
  ];

  const navigateToSection = (route: string) => {
    onClose();
    router.push(route as any);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Índice del Manual</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Secciones Principales */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Navegación Principal</Text>
            {mainSections.map((section, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => navigateToSection(section.route)}
              >
                <View style={styles.menuItemLeft}>
                  <View style={styles.menuIcon}>
                    <section.icon size={20} color={theme.colors.primary} />
                  </View>
                  <Text style={styles.menuItemText}>{section.title}</Text>
                </View>
                <ChevronRight size={16} color={theme.colors.textSecondary} />
              </TouchableOpacity>
            ))}
          </View>

          {/* Índice del Manual */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contenido del Manual</Text>
            {manualSections.map((section, sectionIndex) => (
              <View key={sectionIndex} style={styles.manualSection}>
                <View style={styles.manualSectionHeader}>
                  <Book size={18} color={theme.colors.secondary} />
                  <Text style={styles.manualSectionTitle}>{section.title}</Text>
                </View>
                {section.items.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    style={styles.manualItem}
                    onPress={() => {
                      // En una implementación completa, esto navegaría a la sección específica
                      onClose();
                    }}
                  >
                    <View style={styles.manualItemDot} />
                    <Text style={styles.manualItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>

          {/* Acciones Rápidas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
            
            <TouchableOpacity style={styles.actionItem}>
              <Download size={20} color={theme.colors.accent} />
              <TouchableOpacity 
                style={styles.actionItem}
                onPress={() => {
                  const pdfUrl = '/MANUAL TRACCAR_Cliente.pdf';
                  if (typeof window !== 'undefined') {
                    window.open(pdfUrl, '_blank');
                  }
                }}
              >
                <Download size={20} color={theme.colors.accent} />
                <Text style={styles.actionText}>Descargar Manual PDF</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <Phone size={20} color={theme.colors.secondary} />
              <Text style={styles.actionText}>Contactar Soporte</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomPadding} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  closeButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 36,
    height: 36,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: '500',
  },
  manualSection: {
    marginBottom: 16,
  },
  manualSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  manualSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  manualItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 26,
    gap: 12,
  },
  manualItemDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.textSecondary,
  },
  manualItemText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    flex: 1,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  actionText: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: '500',
  },
  bottomPadding: {
    height: 20,
  },
});
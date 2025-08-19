import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { HeaderWithDrawer } from '@/components/HeaderWithDrawer';
import { DownloadButton } from '@/components/DownloadButton';
import { useTheme } from '@/hooks/useTheme';
import { Shield, Lock, Eye, FileText, Mail, Calendar } from 'lucide-react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function PrivacidadScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Protección de Datos',
      description: 'Cumplimiento total con RGPD/GDPR y normativas españolas de protección de datos'
    },
    {
      icon: Lock,
      title: 'Seguridad',
      description: 'Encriptación de datos en tránsito y reposo con servidores seguros en la UE'
    },
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Información clara sobre qué datos recopilamos y cómo los utilizamos'
    },
    {
      icon: FileText,
      title: 'Derechos del Usuario',
      description: 'Acceso, rectificación, supresión y portabilidad de tus datos personales'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDrawer title="Políticas de Privacidad" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <AnimatedView entering={FadeInDown.delay(100)} style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Shield size={48} color={theme.colors.primary} />
            <Text style={styles.heroTitle}>Tu Privacidad es Nuestra Prioridad</Text>
            <Text style={styles.heroSubtitle}>
              En NGPRO protegemos tus datos con los más altos estándares de seguridad
            </Text>
          </View>
        </AnimatedView>

        {/* Principios */}
        <AnimatedView entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Nuestros Principios</Text>
          
          <View style={styles.principlesGrid}>
            {privacyPrinciples.map((principle, index) => (
              <AnimatedView 
                key={index}
                entering={FadeInDown.delay(300 + index * 100)}
                style={styles.principleCard}
              >
                <View style={styles.principleIcon}>
                  <principle.icon size={24} color={theme.colors.primary} />
                </View>
                <Text style={styles.principleTitle}>{principle.title}</Text>
                <Text style={styles.principleDescription}>{principle.description}</Text>
              </AnimatedView>
            ))}
          </View>
        </AnimatedView>

        {/* Información que Recopilamos */}
        <AnimatedView entering={FadeInDown.delay(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Información que Recopilamos</Text>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Datos de Ubicación GPS</Text>
            <Text style={styles.infoDescription}>
              • Coordenadas GPS de vehículos y maquinaria{'\n'}
              • Rutas y trayectorias de desplazamiento{'\n'}
              • Velocidades y tiempos de actividad{'\n'}
              • Paradas y ubicaciones de trabajo
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Datos de Usuario</Text>
            <Text style={styles.infoDescription}>
              • Email y credenciales de acceso{'\n'}
              • Información de contacto empresarial{'\n'}
              • Preferencias de configuración{'\n'}
              • Historial de uso de la plataforma
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Datos Técnicos</Text>
            <Text style={styles.infoDescription}>
              • Estado de dispositivos GPS{'\n'}
              • Información de conectividad{'\n'}
              • Datos de rendimiento del sistema{'\n'}
              • Logs de actividad técnica
            </Text>
          </View>
        </AnimatedView>

        {/* Uso de la Información */}
        <AnimatedView entering={FadeInDown.delay(800)} style={styles.section}>
          <Text style={styles.sectionTitle}>Cómo Utilizamos tu Información</Text>
          
          <View style={styles.usageCard}>
            <Text style={styles.usageTitle}>Servicios de Seguimiento</Text>
            <Text style={styles.usageText}>
              Utilizamos los datos GPS exclusivamente para proporcionar servicios de seguimiento 
              y gestión de flotas contratados por el cliente.
            </Text>
          </View>

          <View style={styles.usageCard}>
            <Text style={styles.usageTitle}>Mejora del Servicio</Text>
            <Text style={styles.usageText}>
              Analizamos datos agregados y anonimizados para mejorar la funcionalidad 
              y rendimiento de nuestros sistemas.
            </Text>
          </View>

          <View style={styles.usageCard}>
            <Text style={styles.usageTitle}>Soporte Técnico</Text>
            <Text style={styles.usageText}>
              Accedemos a datos técnicos únicamente para resolver incidencias y 
              proporcionar asistencia técnica autorizada.
            </Text>
          </View>
        </AnimatedView>

        {/* Derechos del Usuario */}
        <AnimatedView entering={FadeInDown.delay(1000)} style={styles.section}>
          <Text style={styles.sectionTitle}>Tus Derechos</Text>
          
          <View style={styles.rightsContainer}>
            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Derecho de Acceso</Text>
              <Text style={styles.rightDescription}>
                Puedes solicitar información sobre qué datos personales tenemos sobre ti
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Derecho de Rectificación</Text>
              <Text style={styles.rightDescription}>
                Puedes solicitar la corrección de datos inexactos o incompletos
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Derecho de Supresión</Text>
              <Text style={styles.rightDescription}>
                Puedes solicitar la eliminación de tus datos personales
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Derecho de Portabilidad</Text>
              <Text style={styles.rightDescription}>
                Puedes solicitar una copia de tus datos en formato estructurado
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Derecho de Oposición</Text>
              <Text style={styles.rightDescription}>
                Puedes oponerte al tratamiento de tus datos en determinadas circunstancias
              </Text>
            </View>
          </View>
        </AnimatedView>

        {/* Seguridad */}
        <AnimatedView entering={FadeInDown.delay(1200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Medidas de Seguridad</Text>
          
          <View style={styles.securityCard}>
            <Text style={styles.securityTitle}>Protección Técnica</Text>
            <View style={styles.securityList}>
              <Text style={styles.securityItem}>• Encriptación SSL/TLS para transmisión de datos</Text>
              <Text style={styles.securityItem}>• Encriptación AES-256 para almacenamiento</Text>
              <Text style={styles.securityItem}>• Servidores seguros en centros de datos certificados</Text>
              <Text style={styles.securityItem}>• Copias de seguridad automáticas y cifradas</Text>
              <Text style={styles.securityItem}>• Monitoreo 24/7 de sistemas de seguridad</Text>
            </View>
          </View>

          <View style={styles.securityCard}>
            <Text style={styles.securityTitle}>Protección Organizativa</Text>
            <View style={styles.securityList}>
              <Text style={styles.securityItem}>• Acceso restringido solo a personal autorizado</Text>
              <Text style={styles.securityItem}>• Formación regular en protección de datos</Text>
              <Text style={styles.securityItem}>• Auditorías de seguridad periódicas</Text>
              <Text style={styles.securityItem}>• Políticas internas de confidencialidad</Text>
              <Text style={styles.securityItem}>• Procedimientos de respuesta a incidentes</Text>
            </View>
          </View>
        </AnimatedView>

        {/* Retención de Datos */}
        <AnimatedView entering={FadeInDown.delay(1400)} style={styles.section}>
          <Text style={styles.sectionTitle}>Retención de Datos</Text>
          
          <View style={styles.retentionCard}>
            <View style={styles.retentionItem}>
              <Calendar size={20} color={theme.colors.primary} />
              <View style={styles.retentionContent}>
                <Text style={styles.retentionTitle}>Datos de Seguimiento</Text>
                <Text style={styles.retentionDescription}>
                  Se conservan durante la vigencia del contrato más 6 años para cumplimiento legal
                </Text>
              </View>
            </View>

            <View style={styles.retentionItem}>
              <Calendar size={20} color={theme.colors.primary} />
              <View style={styles.retentionContent}>
                <Text style={styles.retentionTitle}>Datos de Usuario</Text>
                <Text style={styles.retentionDescription}>
                  Se eliminan automáticamente tras la finalización del servicio
                </Text>
              </View>
            </View>

            <View style={styles.retentionItem}>
              <Calendar size={20} color={theme.colors.primary} />
              <View style={styles.retentionContent}>
                <Text style={styles.retentionTitle}>Logs Técnicos</Text>
                <Text style={styles.retentionDescription}>
                  Se conservan 12 meses para mantenimiento y soporte técnico
                </Text>
              </View>
            </View>
          </View>
        </AnimatedView>

        {/* Contacto */}
        <AnimatedView entering={FadeInDown.delay(1600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Contacto para Privacidad</Text>
          
          <View style={styles.contactCard}>
            <Mail size={24} color={theme.colors.primary} />
            <View style={styles.contactContent}>
              <Text style={styles.contactTitle}>Delegado de Protección de Datos</Text>
              <Text style={styles.contactEmail}>info@ngpro.es</Text>
              <Text style={styles.contactDescription}>
                Para ejercer tus derechos o resolver dudas sobre privacidad
              </Text>
            </View>
          </View>

          <View style={styles.legalNote}>
            <Text style={styles.legalText}>
              Esta política de privacidad se actualiza periódicamente. 
              La versión vigente siempre estará disponible en nuestra aplicación y sitio web.
            </Text>
            <Text style={styles.legalDate}>
              Última actualización: Enero 2025
            </Text>
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
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: 300,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
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
  principlesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  principleCard: {
    width: '48%',
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  principleIcon: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  principleTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  principleDescription: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 16,
  },
  infoCard: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 8,
  },
  infoDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  usageCard: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  usageTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 8,
  },
  usageText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  rightsContainer: {
    gap: 16,
  },
  rightItem: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  rightDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  securityCard: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  securityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 12,
  },
  securityList: {
    gap: 4,
  },
  securityItem: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  retentionCard: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  retentionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 16,
  },
  retentionContent: {
    flex: 1,
  },
  retentionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  retentionDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  contactContent: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  contactEmail: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  contactDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  legalNote: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  legalText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  legalDate: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
  },
  bottomPadding: {
    height: 20,
  },
});
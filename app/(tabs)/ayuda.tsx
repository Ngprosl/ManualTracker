import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Modal, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { HeaderWithDrawer } from '@/components/HeaderWithDrawer';
import { DownloadButton } from '@/components/DownloadButton';
import { ChatBot } from '@/components/ChatBot';
import { useTheme } from '@/hooks/useTheme';
import { MessageCircle, Phone, Mail, CircleHelp as HelpCircle, Book, ExternalLink } from 'lucide-react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function AyudaScreen() {
  const { theme } = useTheme();
  const [chatVisible, setChatVisible] = useState(false);
  const styles = createStyles(theme);

  const faqItems = [
    {
      question: '¿Cómo puedo acceder a Tracker NGPRO?',
      answer: 'Puedes acceder a través del navegador web, aplicación de escritorio o app móvil usando tu email y contraseña proporcionados por NGPRO.'
    },
    {
      question: '¿Qué dispositivos GPS son compatibles?',
      answer: 'Trabajamos principalmente con dispositivos FMC230, FMC234 y TAT240, todos instalados y configurados por nuestros técnicos.'
    },
    {
      question: '¿Con qué frecuencia se actualiza la ubicación?',
      answer: 'La información se actualiza cada minuto cuando el vehículo está en movimiento, y con mayor frecuencia durante la actividad.'
    },
    {
      question: '¿Puedo exportar los reportes?',
      answer: 'Sí, todos los reportes pueden exportarse en formato PDF, Excel, CSV y KML para análisis externos.'
    },
    {
      question: '¿Funciona sin conexión a internet?',
      answer: 'La app móvil tiene funcionalidad básica offline, pero requiere conexión para sincronizar datos y obtener información actualizada.'
    },
    {
      question: '¿Qué pasa si se agota la batería del dispositivo?',
      answer: 'Los dispositivos FMC se alimentan del vehículo. Los TAT240 tienen baterías de 3-5 años y envían avisos de batería baja.'
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Teléfono',
      description: 'Soporte técnico directo',
      action: 'Llamar',
      color: theme.colors.secondary,
      onPress: () => Linking.openURL('tel:+34900000000'), // Reemplaza con el número real
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'soporte@ngpro.es',
      action: 'Enviar Email',
      color: theme.colors.primary,
      onPress: () => Linking.openURL('mailto:soporte@ngpro.es?subject=Consulta sobre Tracker NGPRO'),
    },
    {
      icon: ExternalLink,
      title: 'Sitio Web',
      description: 'www.ngpro.es',
      action: 'Visitar',
      color: theme.colors.accent,
      onPress: () => Linking.openURL('https://www.ngpro.es'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDrawer title="Ayuda y Soporte" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Chat Button */}
        <AnimatedView entering={FadeInDown.delay(100)} style={styles.chatSection}>
          <View style={styles.chatCard}>
            <MessageCircle size={32} color={theme.colors.primary} />
            <View style={styles.chatContent}>
              <Text style={styles.chatTitle}>Chat Inteligente</Text>
              <Text style={styles.chatDescription}>
                Obtén respuestas inmediatas sobre el manual de Tracker NGPRO
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.chatButton}
              onPress={() => setChatVisible(true)}
            >
              <Text style={styles.chatButtonText}>Abrir Chat</Text>
            </TouchableOpacity>
          </View>
        </AnimatedView>

        {/* FAQ */}
        <AnimatedView entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Preguntas Frecuentes</Text>
          
          <View style={styles.faqContainer}>
            {faqItems.map((faq, index) => (
              <AnimatedView 
                key={index}
                entering={FadeInDown.delay(300 + index * 50)}
                style={styles.faqItem}
              >
                <View style={styles.faqHeader}>
                  <HelpCircle size={20} color={theme.colors.primary} />
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                </View>
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              </AnimatedView>
            ))}
          </View>
        </AnimatedView>

        {/* Contacto */}
        <AnimatedView entering={FadeInDown.delay(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Contactar Soporte</Text>
          
          <View style={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <AnimatedView 
                key={index}
                entering={FadeInDown.delay(700 + index * 100)}
                style={styles.contactCard}
              >
                <View style={[styles.contactIcon, { backgroundColor: method.color }]}>
                  <method.icon size={24} color="#fff" />
                </View>
                <Text style={styles.contactTitle}>{method.title}</Text>
                <Text style={styles.contactDescription}>{method.description}</Text>
                <TouchableOpacity 
                  style={[styles.contactButton, { borderColor: method.color }]}
                  onPress={method.onPress}
                >
                  <Text style={[styles.contactButtonText, { color: method.color }]}>
                    {method.action}
                  </Text>
                </TouchableOpacity>
              </AnimatedView>
            ))}
          </View>
        </AnimatedView>

        {/* Manual */}
        <AnimatedView entering={FadeInDown.delay(900)} style={styles.section}>
          <Text style={styles.sectionTitle}>Manual Completo</Text>
          
          <TouchableOpacity 
            style={styles.manualCard}
            onPress={() => {
              const pdfUrl = '/MANUAL TRACCAR_Cliente.pdf';
              Linking.openURL(pdfUrl).catch(err => console.error('Error opening PDF:', err));
            }}
          >
            <View style={styles.manualIcon}>
              <Book size={28} color={theme.colors.primary} />
            </View>
            <View style={styles.manualContent}>
              <Text style={styles.manualTitle}>Manual Oficial PDF</Text>
              <Text style={styles.manualDescription}>
                Descarga la versión completa del manual con toda la información detallada sobre Tracker NGPRO.
              </Text>
            </View>
          </TouchableOpacity>
        </AnimatedView>

        {/* Información Adicional */}
        <AnimatedView entering={FadeInDown.delay(1000)} style={styles.section}>
          <Text style={styles.sectionTitle}>Información Adicional</Text>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Horarios de Soporte</Text>
            <Text style={styles.infoText}>• Lunes a Viernes: 9:00 - 18:30</Text>
            
            <Text style={styles.infoTitle}>Tiempo de Respuesta</Text>
            <Text style={styles.infoText}>• Chat y Teléfono: Inmediato</Text>
            <Text style={styles.infoText}>• Email: Máximo 4 horas laborables</Text>
            
            <Text style={styles.infoTitle}>Idiomas Disponibles</Text>
            <Text style={styles.infoText}>• Español (principal)</Text>
            <Text style={styles.infoText}>• Inglés (disponible)</Text>
          </View>
        </AnimatedView>

        <View style={styles.bottomPadding} />
      </ScrollView>

      <DownloadButton />

      {/* Chat Modal */}
      <Modal
        visible={chatVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setChatVisible(false)}
      >
        <ChatBot onClose={() => setChatVisible(false)} />
      </Modal>
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
  chatSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
    marginTop: 20,
  },
  chatCard: {
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
  chatContent: {
    flex: 1,
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  chatDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  chatButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
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
  faqContainer: {
    gap: 16,
  },
  faqItem: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    flex: 1,
  },
  faqAnswer: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 22,
    paddingLeft: 32,
  },
  contactGrid: {
    gap: 16,
  },
  contactCard: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  contactIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  contactDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  contactButton: {
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  contactButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  manualCard: {
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
  manualIcon: {
    width: 56,
    height: 56,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manualContent: {
    flex: 1,
  },
  manualTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  manualDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  infoCard: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 8,
    marginTop: 12,
  },
  infoText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: 4,
  },
  bottomPadding: {
    height: 20,
  },
});
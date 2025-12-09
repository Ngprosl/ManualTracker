import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking, View, Modal } from 'react-native';
import { Download, Bot } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { ChatBot } from '@/components/ChatBot';

export function DownloadButton() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [showChat, setShowChat] = useState(false);

  const handleDownload = () => {
    // Descargar el PDF del manual desde la carpeta public
    const pdfUrl = '/MANUAL TRACCAR_Cliente.pdf';
    Linking.openURL(pdfUrl).catch(err => console.error('Error opening PDF:', err));
  };

  const openChat = () => setShowChat(true);
  const closeChat = () => setShowChat(false);

  return (
    <>
      <View style={styles.floatingContainer} pointerEvents="box-none">
        <TouchableOpacity style={styles.chatButton} onPress={openChat} accessibilityLabel="Abrir chat">
          <Bot size={18} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDownload} accessibilityLabel="Descargar manual PDF">
          <Download size={20} color="#fff" />
          <Text style={styles.text}>Manual PDF</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showChat} animationType="slide" onRequestClose={closeChat}>
        <ChatBot onClose={closeChat} />
      </Modal>
    </>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 8,
  },
  chatButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  button: {
    backgroundColor: theme.colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
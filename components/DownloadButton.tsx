import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import { Download } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

export function DownloadButton() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleDownload = () => {
    // Descargar el PDF del manual desde la carpeta public
    const pdfUrl = '/MANUAL TRACCAR_Cliente.pdf';
    Linking.openURL(pdfUrl).catch(err => console.error('Error opening PDF:', err));
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleDownload}>
      <Download size={20} color="#fff" />
      <Text style={styles.text}>Descargar Manual PDF</Text>
    </TouchableOpacity>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
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
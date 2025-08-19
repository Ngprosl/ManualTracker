import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Sun, Moon } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { router } from 'expo-router';

interface HeaderWithDrawerProps {
  title: string;
}

export function HeaderWithDrawer({ title }: HeaderWithDrawerProps) {
  const { theme, toggleTheme, isDark } = useTheme();
  
  const styles = createStyles(theme);

  const navigateToHome = () => {
    router.push('/(tabs)/');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoContainer} onPress={navigateToHome}>
        <Image
          source={require('../assets/images/icono.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.logoText}>
          <Text style={styles.companyName}>NGPRO</Text>
          <Text style={styles.appName}>Tracker</Text>
        </View>
      </TouchableOpacity>
      
      <View style={styles.centerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.themeButton}
        onPress={toggleTheme}
      >
        {isDark ? (
          <Sun size={24} color={theme.colors.text} />
        ) : (
          <Moon size={24} color={theme.colors.text} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logoText: {
    alignItems: 'flex-start',
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    lineHeight: 18,
  },
  appName: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    lineHeight: 14,
  },
  centerTitle: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
  },
  themeButton: {
    padding: 4,
  },
});
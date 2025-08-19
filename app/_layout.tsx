import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { ThemeProvider, useTheme } from '@/hooks/useTheme';

function Layout() {
  const { isDark } = useTheme();
  
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          title: 'Manual Tracker NGPRO',
        }}>
        <Stack.Screen 
          name="+not-found"
          options={{
            title: 'Manual Tracker NGPRO',
          }}
        />
      </Stack>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </>
  );
}

export default function RootLayout() {
  useFrameworkReady();

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

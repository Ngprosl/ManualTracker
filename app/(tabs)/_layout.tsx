import { Tabs } from 'expo-router';
import { Chrome as Home, Settings, ChartBar as BarChart3, CircleHelp as HelpCircle, Shield } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { View } from 'react-native';

export default function TabLayout() {
  const { theme } = useTheme();
  
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          title: 'Manual Tracker NGPRO',
          tabBarStyle: {
            backgroundColor: theme.colors.card,
            borderTopColor: theme.colors.border,
            height: 70,
            paddingBottom: 12,
            paddingTop: 12,
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarIconStyle: {
            marginTop: 4,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ size, color }) => (
              <Home size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="funcionalidades"
          options={{
            title: 'Funcionamiento',
            tabBarIcon: ({ size, color }) => (
              <Settings size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="reportes"
          options={{
            title: 'Reportes',
            tabBarIcon: ({ size, color }) => (
              <BarChart3 size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ayuda"
          options={{
            title: 'Ayuda',
            tabBarIcon: ({ size, color }) => (
              <HelpCircle size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="privacidad"
          options={{
            title: 'Privacidad',
            tabBarIcon: ({ size, color }) => (
              <Shield size={22} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
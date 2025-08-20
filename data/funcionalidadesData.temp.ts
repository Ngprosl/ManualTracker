import {
  MapPin,
  User,
  Gauge,
  Battery,
  Route,
  Bluetooth,
  Download,
  ChartArea as AreaChart,
  CloudRain,
  Clock,
  Shield,
  Zap,
  Target,
  Settings,
  Eye,
  Leaf,
  Fuel,
  TrendingDown,
  Tractor,
  Bell,
  Map,
  AlertCircle
} from 'lucide-react-native';

interface Feature {
  icon: any;
  title: string;
  description: string;
}

interface Funcionalidad {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: Feature[];
  benefits: string[];
  usage: string;
  casePractice?: {
    title: string;
    image: any;
  };
}

export const funcionalidadesData: Funcionalidad[] = [
  // ... (mantener las funcionalidades anteriores hasta ecodriving)

  {
    slug: 'geocercas',
    title: 'Geocercas',
    subtitle: 'Control de zonas geográficas',
    image: 'https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Sistema avanzado de Geocercas que permite definir áreas geográficas virtuales y recibir alertas automáticas cuando los vehículos entran o salen de estas zonas. Ideal para control de rutas, seguridad y optimización de operaciones.',
    features: [
      {
        icon: Map,
        title: 'Creación Intuitiva',
        description: 'Dibuja geocercas fácilmente sobre el mapa con herramientas visuales'
      },
      {
        icon: Bell,
        title: 'Alertas Instantáneas',
        description: 'Notificaciones inmediatas por entrada o salida de zonas'
      },
      {
        icon: AlertCircle,
        title: 'Monitoreo 24/7',
        description: 'Vigilancia continua de límites geográficos establecidos'
      },
      {
        icon: Settings,
        title: 'Configuración Flexible',
        description: 'Personalización de tipos de alertas y horarios de monitoreo'
      }
    ],
    benefits: [
      'Control eficiente de rutas y zonas de trabajo',
      'Mejora en la seguridad de la flota',
      'Detección temprana de desvíos no autorizados',
      'Optimización de tiempos de respuesta',
      'Reducción de uso indebido de vehículos',
      'Cumplimiento de zonas restringidas'
    ],
    usage:
      'Crea geocercas dibujando polígonos en el mapa para definir zonas permitidas o restringidas. Configura alertas personalizadas que se activarán cuando los vehículos crucen estos límites virtuales. El sistema notifica inmediatamente por email o SMS, permitiendo una respuesta rápida ante cualquier desviación. Ideal para asegurar que los vehículos operen dentro de las áreas designadas y detectar movimientos no autorizados.',
  },

  // ... (mantener el resto de funcionalidades)
];

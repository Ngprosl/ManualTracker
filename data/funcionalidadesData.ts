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
  {
    slug: 'posicion-gps',
    title: 'Posición GPS',
    subtitle: 'Localización en tiempo real',
    image: 'https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sistema de localización GPS en tiempo real que permite conocer la ubicación exacta de tus vehículos las 24 horas del día.',
    features: [
      {
        icon: MapPin,
        title: 'Ubicación Precisa',
        description: 'Localización exacta en tiempo real'
      },
      {
        icon: Clock,
        title: 'Monitoreo 24/7',
        description: 'Seguimiento continuo día y noche'
      },
      {
        icon: Eye,
        title: 'Vista en Mapa',
        description: 'Visualización intuitiva en mapa interactivo'
      }
    ],
    benefits: [
      'Control total de la flota en tiempo real',
      'Mejora en la seguridad de los vehículos',
      'Optimización de rutas y tiempos',
      'Respuesta rápida ante emergencias',
      'Reducción de uso no autorizado'
    ],
    usage: 'Accede a la plataforma web o móvil para ver la ubicación exacta de tus vehículos en tiempo real sobre un mapa interactivo. Visualiza el histórico de recorridos y recibe alertas de movimientos no autorizados.',
    casePractice: {
      title: 'Visualización en Tiempo Real',
      image: require('../assets/images/posicionGPS.png')
    }
  },
  {
    slug: 'viajes-y-paradas',
    title: 'Viajes y Paradas',
    subtitle: 'Control detallado de recorridos',
    image: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Seguimiento detallado de todos los viajes realizados, incluyendo paradas, tiempos y distancias recorridas.',
    features: [
      {
        icon: Route,
        title: 'Historial de Rutas',
        description: 'Registro completo de recorridos'
      },
      {
        icon: Clock,
        title: 'Control de Paradas',
        description: 'Monitoreo de tiempos de detención'
      },
      {
        icon: Target,
        title: 'Análisis de Viajes',
        description: 'Estadísticas y reportes detallados'
      }
    ],
    benefits: [
      'Optimización de rutas y tiempos de entrega',
      'Control de tiempos de parada',
      'Mejora en la eficiencia operativa',
      'Reducción de costos de combustible',
      'Análisis detallado de recorridos'
    ],
    usage: 'Visualiza el historial completo de viajes, con información detallada de cada parada, tiempo de conducción y distancia recorrida. Genera reportes personalizados para análisis y optimización.',
    casePractice: {
      title: 'Análisis de Rutas',
      image: require('../assets/images/funcionalidadViajesYParadas.png')
    }
  },
  {
    slug: 'agricultura',
    title: 'Agricultura',
    subtitle: 'Gestión agrícola inteligente',
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Herramientas especializadas para la gestión de labores agrícolas, optimización de recursos y control de maquinaria.',
    features: [
      {
        icon: Tractor,
        title: 'Control de Maquinaria',
        description: 'Seguimiento de equipos agrícolas'
      },
      {
        icon: Map,
        title: 'Mapeo de Campos',
        description: 'Visualización de áreas de trabajo'
      },
      {
        icon: Target,
        title: 'Gestión de Labores',
        description: 'Control de trabajos realizados'
      }
    ],
    benefits: [
      'Optimización de labores agrícolas',
      'Control preciso de áreas trabajadas',
      'Mejora en la eficiencia de recursos',
      'Seguimiento de rendimiento',
      'Planificación efectiva de tareas'
    ],
    usage: 'Monitorea el trabajo de tu maquinaria agrícola, mide áreas trabajadas y gestiona labores de campo de manera eficiente. Obtén datos precisos para la toma de decisiones.'
  },
  {
    slug: 'eco-driving',
    title: 'EcoDriving',
    subtitle: 'Conducción eficiente y sostenible',
    image: 'https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sistema de análisis de conducción que promueve hábitos más eficientes y sostenibles al volante.',
    features: [
      {
        icon: Leaf,
        title: 'Conducción Verde',
        description: 'Promoción de hábitos sostenibles'
      },
      {
        icon: Fuel,
        title: 'Ahorro de Combustible',
        description: 'Optimización de consumo'
      },
      {
        icon: TrendingDown,
        title: 'Reducción de Emisiones',
        description: 'Control de impacto ambiental'
      }
    ],
    benefits: [
      'Reducción de consumo de combustible',
      'Menor impacto ambiental',
      'Aumento de vida útil del vehículo',
      'Mejora en la seguridad',
      'Ahorro en mantenimiento'
    ],
    usage: 'Analiza los patrones de conducción y recibe recomendaciones para una conducción más eficiente. Monitorea el consumo de combustible y las emisiones de CO2.'
  },
  {
    slug: 'geocercas',
    title: 'Geocercas',
    subtitle: 'Control de zonas geográficas',
    image: 'https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sistema avanzado de Geocercas que permite definir áreas geográficas virtuales y recibir alertas automáticas cuando los vehículos entran o salen de estas zonas.',
    features: [
      {
        icon: Map,
        title: 'Creación Intuitiva',
        description: 'Dibuja geocercas fácilmente sobre el mapa'
      },
      {
        icon: Bell,
        title: 'Alertas Instantáneas',
        description: 'Notificaciones de entrada/salida'
      },
      {
        icon: AlertCircle,
        title: 'Monitoreo 24/7',
        description: 'Vigilancia continua de límites'
      }
    ],
    benefits: [
      'Control eficiente de rutas',
      'Mejora en la seguridad',
      'Detección de desvíos',
      'Optimización de respuesta',
      'Control de zonas restringidas'
    ],
    usage: 'Define zonas permitidas o restringidas dibujando áreas en el mapa. Recibe alertas instantáneas cuando los vehículos cruzan estos límites virtuales.'
  },
  {
    slug: 'control-de-conductor',
    title: 'Control de Conductor',
    subtitle: 'Gestión de conductores',
    image: 'https://images.pexels.com/photos/7433832/pexels-photo-7433832.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sistema integral para la gestión y monitoreo de conductores, incluyendo identificación, tiempos de conducción y análisis de comportamiento.',
    features: [
      {
        icon: User,
        title: 'Identificación',
        description: 'Control de acceso al vehículo'
      },
      {
        icon: Clock,
        title: 'Tiempos de Conducción',
        description: 'Monitoreo de horas al volante'
      },
      {
        icon: Shield,
        title: 'Seguridad',
        description: 'Control de accesos autorizados'
      }
    ],
    benefits: [
      'Mayor seguridad en la operación',
      'Control de tiempos de trabajo',
      'Mejora en la gestión de personal',
      'Prevención de uso no autorizado',
      'Optimización de recursos humanos'
    ],
    usage: 'Asigna conductores a vehículos, controla los tiempos de conducción y analiza el comportamiento al volante para mejorar la seguridad y eficiencia.'
  },
  {
    slug: 'velocidad',
    title: 'Velocidad',
    subtitle: 'Monitoreo de velocidad',
    image: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Control preciso de la velocidad de los vehículos con alertas en tiempo real y análisis de patrones de conducción.',
    features: [
      {
        icon: Gauge,
        title: 'Monitoreo en Tiempo Real',
        description: 'Control instantáneo de velocidad'
      },
      {
        icon: Bell,
        title: 'Alertas de Exceso',
        description: 'Notificaciones automáticas'
      },
      {
        icon: Target,
        title: 'Análisis de Patrones',
        description: 'Estudio de comportamiento'
      }
    ],
    benefits: [
      'Mayor seguridad vial',
      'Reducción de infracciones',
      'Prevención de accidentes',
      'Control de normativas',
      'Optimización de seguros'
    ],
    usage: 'Configura límites de velocidad personalizados y recibe alertas cuando se excedan. Analiza patrones de velocidad para mejorar la seguridad.'
  },
  {
    slug: 'estado-bateria',
    title: 'Estado de Batería',
    subtitle: 'Monitoreo de energía',
    image: 'https://images.pexels.com/photos/205324/pexels-photo-205324.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sistema de monitoreo del estado de la batería del vehículo, incluyendo nivel de carga y alertas de bajo voltaje.',
    features: [
      {
        icon: Battery,
        title: 'Nivel de Carga',
        description: 'Monitoreo continuo de batería'
      },
      {
        icon: Zap,
        title: 'Alertas de Voltaje',
        description: 'Notificaciones de bajo nivel'
      },
      {
        icon: Clock,
        title: 'Histórico',
        description: 'Registro de rendimiento'
      }
    ],
    benefits: [
      'Prevención de averías',
      'Mantenimiento preventivo',
      'Reducción de costos',
      'Mayor vida útil',
      'Operación continua'
    ],
    usage: 'Monitorea el estado de la batería en tiempo real y recibe alertas preventivas para evitar problemas de arranque y averías.'
  },
  {
    slug: 'deteccion-bluetooth',
    title: 'Detección Bluetooth',
    subtitle: 'Identificación automática',
    image: 'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sistema de detección automática de conductores y equipos mediante tecnología Bluetooth.',
    features: [
      {
        icon: Bluetooth,
        title: 'Conexión Automática',
        description: 'Identificación instantánea'
      },
      {
        icon: Shield,
        title: 'Seguridad',
        description: 'Control de accesos'
      },
      {
        icon: Settings,
        title: 'Configuración',
        description: 'Gestión de dispositivos'
      }
    ],
    benefits: [
      'Identificación automática',
      'Mayor seguridad',
      'Control de accesos',
      'Gestión eficiente',
      'Registro automático'
    ],
    usage: 'Los dispositivos Bluetooth autorizados son detectados automáticamente, permitiendo identificar conductores y equipos sin intervención manual.'
  },
  {
    slug: 'exportacion-datos',
    title: 'Exportación de Datos',
    subtitle: 'Gestión de información',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Herramientas para la exportación y análisis de datos de la flota en múltiples formatos.',
    features: [
      {
        icon: Download,
        title: 'Exportación Flexible',
        description: 'Múltiples formatos disponibles'
      },
      {
        icon: Target,
        title: 'Datos Personalizados',
        description: 'Selección de información'
      },
      {
        icon: Settings,
        title: 'Automatización',
        description: 'Informes programados'
      }
    ],
    benefits: [
      'Análisis detallado',
      'Reportes personalizados',
      'Integración con sistemas',
      'Toma de decisiones',
      'Control de operaciones'
    ],
    usage: 'Exporta datos en diferentes formatos, programa informes automáticos y analiza la información para optimizar tu operación.'
  },
  {
    slug: 'medicion-de-areas',
    title: 'Medición de Áreas',
    subtitle: 'Cálculo de superficies',
    image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Herramienta precisa para la medición y cálculo de áreas de trabajo, especialmente útil en agricultura.',
    features: [
      {
        icon: AreaChart,
        title: 'Medición Precisa',
        description: 'Cálculo exacto de superficies'
      },
      {
        icon: Map,
        title: 'Mapeo Visual',
        description: 'Visualización de áreas'
      },
      {
        icon: Target,
        title: 'Análisis',
        description: 'Estadísticas de cobertura'
      }
    ],
    benefits: [
      'Planificación precisa',
      'Optimización de recursos',
      'Control de trabajos',
      'Documentación exacta',
      'Gestión eficiente'
    ],
    usage: 'Dibuja y mide áreas directamente en el mapa para calcular superficies de trabajo, planificar tareas y documentar labores realizadas.',
    casePractice: {
      title: 'Medición de Campos',
      image: require('../assets/images/medicionDeArea.png')
    }
  },
  {
    slug: 'info-meteorologica',
    title: 'Información Meteorológica',
    subtitle: 'Datos del clima en tiempo real',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Acceso a información meteorológica precisa y actualizada para la planificación de operaciones.',
    features: [
      {
        icon: CloudRain,
        title: 'Clima en Tiempo Real',
        description: 'Datos meteorológicos actuales'
      },
      {
        icon: Target,
        title: 'Pronóstico',
        description: 'Previsión meteorológica'
      },
      {
        icon: Map,
        title: 'Mapas del Tiempo',
        description: 'Visualización de condiciones'
      }
    ],
    benefits: [
      'Planificación efectiva',
      'Prevención de riesgos',
      'Optimización de trabajos',
      'Mejor toma de decisiones',
      'Operaciones más seguras'
    ],
    usage: 'Consulta datos meteorológicos en tiempo real y pronósticos para planificar mejor las operaciones y garantizar la seguridad.',
    casePractice: {
      title: 'Monitoreo del Clima',
      image: require('../assets/images/funcionalidadClima.png')
    }
  }
];

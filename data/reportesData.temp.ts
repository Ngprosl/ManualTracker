import {
  Route,
  MapPin,
  ChartBar as BarChart3,
  TrendingUp,
  RotateCcw,
  Cloud,
  Clock,
  Target,
  Settings,
  Eye
} from 'lucide-react-native';

interface Feature {
  icon: any;
  title: string;
  description: string;
}

interface ExportFormat {
  name: string;
  description: string;
}

interface Reporte {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  contextImage?: {
    uri: any;
    caption: string;
  };
  description: string;
  includes: string[];
  features: Feature[];
  exportFormats: ExportFormat[];
  useCases: string;
  casePractice?: {
    title: string;
    image: any;
  };
}

export const reportesData: Reporte[] = [
  {
    slug: 'reporte-ruta',
    title: 'Reporte de Ruta',
    subtitle: 'Trazado completo de desplazamientos',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    contextImage: {
      uri: require('@/assets/images/reporteRuta.png'),
      caption: 'Ejemplo de visualización de los datos registrados durante la ruta del vehículo'
    },
    description: 'El reporte de ruta proporciona una visualización completa del trazado GPS de todos los desplazamientos realizados por tus vehículos, incluyendo mapas detallados, velocidades, paradas y análisis de eficiencia de rutas.',
    includes: [
      'Trazado GPS completo en mapa interactivo',
      'Velocidades registradas en cada punto',
      'Ubicaciones y duración de paradas',
      'Distancia total recorrida',
      'Tiempo total de viaje',
      'Consumo estimado de combustible',
      'Análisis de eficiencia de ruta'
    ],
    features: [
      {
        icon: Route,
        title: 'Visualización de Ruta',
        description: 'Mapa interactivo con el trazado completo del recorrido'
      },
      {
        icon: Target,
        title: 'Puntos de Interés',
        description: 'Marcadores automáticos en paradas y eventos importantes'
      },
      {
        icon: Clock,
        title: 'Línea de Tiempo',
        description: 'Cronología detallada de todo el recorrido'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Reporte completo con mapas para imprimir' },
      { name: 'KML', description: 'Para visualizar en Google Earth' },
      { name: 'Excel', description: 'Datos tabulados para análisis' },
      { name: 'CSV', description: 'Datos en formato universal' }
    ],
    useCases: 'Ideal para verificar el cumplimiento de rutas planificadas, analizar la eficiencia de desplazamientos, investigar incidentes específicos y optimizar futuras rutas. Especialmente útil para supervisores de flota y gerentes de logística.',
    casePractice: {
      title: 'Vista detallada de ruta en mapa',
      image: require('@/assets/images/reporteRuta.png')
    }
  },
  {
    slug: 'viajes-paradas',
    title: 'Reporte de Viajes y Paradas',
    subtitle: 'Análisis detallado de actividad',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    contextImage: {
      uri: require('@/assets/images/ReporteViajesYParadas.png'),
      caption: 'Dashboard de análisis de viajes y paradas detalladas'
    },
    description: 'Reporte detallado de todos los viajes y paradas realizadas por tus vehículos, con análisis de tiempos, distancias, velocidades y patrones de uso.',
    includes: [
      'Listado completo de viajes',
      'Duración y distancia de cada viaje',
      'Ubicación y duración de paradas',
      'Velocidades promedio y máximas',
      'Consumo de combustible',
      'Identificación de conductor'
    ],
    features: [
      {
        icon: Clock,
        title: 'Control de Tiempos',
        description: 'Análisis detallado de duración de viajes y paradas'
      },
      {
        icon: MapPin,
        title: 'Ubicaciones',
        description: 'Registro preciso de puntos de inicio, fin y paradas'
      },
      {
        icon: Settings,
        title: 'Configuración',
        description: 'Parámetros ajustables para detección de paradas'
      }
    ],
    exportFormats: [
      { name: 'Excel', description: 'Análisis detallado en hojas de cálculo' },
      { name: 'PDF', description: 'Reporte ejecutivo con gráficos' },
      { name: 'CSV', description: 'Datos para análisis personalizado' }
    ],
    useCases: 'Perfecto para analizar la productividad de conductores, identificar patrones de ineficiencia, optimizar horarios de trabajo y planificar mejor las actividades diarias. Muy útil para gerentes de operaciones y supervisores de flota.',
    casePractice: {
      title: 'Vista de análisis de viajes y paradas',
      image: require('@/assets/images/ReporteViajesYParadas.png')
    }
  },
  {
    slug: 'resumen',
    title: 'Reporte Resumen',
    subtitle: 'Métricas consolidadas del período',
    image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
    contextImage: {
      uri: require('@/assets/images/reporteResumen.png'),
      caption: 'Dashboard de análisis de viajes y paradas detalladas'
    },
    description: 'Reporte ejecutivo que consolida las métricas más importantes de tu flota en un período específico, ideal para análisis gerencial y toma de decisiones.',
    includes: [
      'Distancia total recorrida',
      'Tiempo total de operación',
      'Consumo total de combustible',
      'Número de viajes realizados',
      'Tiempo total en paradas',
      'Costos operativos',
      'Comparativas con períodos anteriores'
    ],
    features: [
      {
        icon: BarChart3,
        title: 'Gráficos Ejecutivos',
        description: 'Visualizaciones claras de métricas clave'
      },
      {
        icon: TrendingUp,
        title: 'Análisis de Tendencias',
        description: 'Comparativas y proyecciones'
      },
      {
        icon: Settings,
        title: 'Personalización',
        description: 'Métricas ajustables según necesidades'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Reporte ejecutivo profesional' },
      { name: 'Excel', description: 'Datos para análisis avanzado' },
      { name: 'CSV', description: 'Integración con sistemas ERP' }
    ],
    useCases: 'Ideal para reportes gerenciales, evaluación de rendimiento de flota, planificación presupuestaria y toma de decisiones estratégicas. Especialmente valioso para directivos que necesitan una visión general del rendimiento.',
    casePractice: {
      title: 'Vista de resumen ejecutivo',
      image: require('@/assets/images/reporteResumen.png')
    }
  },
  {
    slug: 'grafica',
    title: 'Reporte Gráfico',
    subtitle: 'Visualización de tendencias',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    contextImage: {
      uri: require('@/assets/images/reporteGrafica.png'),
      caption: 'Dashboard con gráficas interactivas de rendimiento'
    },
    description: 'Reporte visual que presenta los datos de tu flota en gráficos interactivos y fáciles de interpretar, permitiendo identificar patrones y tendencias rápidamente.',
    includes: [
      'Gráficos de uso diario',
      'Tendencias de consumo',
      'Patrones de velocidad',
      'Comparativas entre vehículos',
      'Análisis de eficiencia',
      'Distribución de tiempos',
      'Visualización de KPIs'
    ],
    features: [
      {
        icon: BarChart3,
        title: 'Gráficos Interactivos',
        description: 'Visualizaciones dinámicas y personalizables'
      },
      {
        icon: TrendingUp,
        title: 'Análisis de Patrones',
        description: 'Identificación visual de tendencias'
      },
      {
        icon: Settings,
        title: 'Configuración',
        description: 'Personalización de visualizaciones'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Gráficas en alta resolución' },
      { name: 'Excel', description: 'Datos y gráficas editables' },
      { name: 'PNG', description: 'Imágenes para presentaciones' }
    ],
    useCases: 'Perfecto para presentaciones ejecutivas, análisis de tendencias, identificación de patrones de uso y comunicación visual de resultados. Muy útil para analistas que necesitan identificar áreas de mejora.',
    casePractice: {
      title: 'Vista de análisis gráfico',
      image: require('@/assets/images/reporteGrafica.png')
    }
  },
  {
    slug: 'repeticion',
    title: 'Reporte de Repetición',
    subtitle: 'Reproducción de recorridos',
    image: 'https://images.pexels.com/photos/7516509/pexels-photo-7516509.jpeg?auto=compress&cs=tinysrgb&w=800',
    contextImage: {
      uri: require('@/assets/images/ReporteRepeticion.png'),
      caption: 'Reproducción paso a paso de un recorrido específico'
    },
    description: 'Herramienta de reproducción que permite revivir los recorridos realizados, visualizando el movimiento del vehículo paso a paso con todos sus datos asociados.',
    includes: [
      'Reproducción del recorrido',
      'Control de velocidad de reproducción',
      'Visualización de eventos',
      'Datos en tiempo real',
      'Marcadores de eventos importantes',
      'Vista satelital y de calle',
      'Línea de tiempo interactiva'
    ],
    features: [
      {
        icon: RotateCcw,
        title: 'Reproducción',
        description: 'Control total sobre la visualización'
      },
      {
        icon: Clock,
        title: 'Línea de Tiempo',
        description: 'Navegación precisa por momentos específicos'
      },
      {
        icon: Target,
        title: 'Eventos',
        description: 'Marcadores de sucesos importantes'
      }
    ],
    exportFormats: [
      { name: 'Video', description: 'Exportación como archivo de video' },
      { name: 'GIF', description: 'Animación para presentaciones' },
      { name: 'PDF', description: 'Secuencia de capturas con timestamps' }
    ],
    useCases: 'Ideal para investigación de incidentes, capacitación de conductores, demostración de trabajos realizados a clientes y análisis detallado de operaciones específicas. Especialmente útil para equipos de seguridad y capacitación.',
    casePractice: {
      title: 'Vista de repetición de recorrido',
      image: require('@/assets/images/ReporteRepeticion.png')
    }
  },
  {
    slug: 'clima',
    title: 'Reporte Meteorológico',
    subtitle: 'Análisis de condiciones climáticas',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    contextImage: {
      uri: require('@/assets/images/reporteClima.png'),
      caption: 'Análisis detallado de condiciones meteorológicas'
    },
    description: 'Reporte especializado que combina datos meteorológicos con la operación de tu flota, permitiendo analizar el impacto del clima en tus operaciones y planificar actividades.',
    includes: [
      'Condiciones meteorológicas',
      'Pronóstico detallado',
      'Temperaturas registradas',
      'Niveles de precipitación',
      'Velocidad del viento',
      'Alertas meteorológicas',
      'Impacto en operaciones'
    ],
    features: [
      {
        icon: Cloud,
        title: 'Datos Meteorológicos',
        description: 'Información climática detallada'
      },
      {
        icon: Target,
        title: 'Análisis de Impacto',
        description: 'Correlación clima-operaciones'
      },
      {
        icon: Settings,
        title: 'Configuración',
        description: 'Personalización de alertas climáticas'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Reporte con gráficas meteorológicas' },
      { name: 'Excel', description: 'Datos climáticos para análisis' },
      { name: 'CSV', description: 'Datos para sistemas agrícolas' }
    ],
    useCases: 'Esencial para planificación agrícola, optimización de actividades según condiciones climáticas, análisis de impacto del clima en la productividad y toma de decisiones basada en pronósticos. Especialmente valioso para operaciones agrícolas y de construcción.',
    casePractice: {
      title: 'Vista de análisis meteorológico',
      image: require('@/assets/images/reporteClima.png')
    }
  }
];

import { Route, MapPin, ChartBar as BarChart3, TrendingUp, RotateCcw, Cloud, FileText, Download, Clock, Target, Settings, Eye } from 'lucide-react-native';

export const reportesData = [
  {
    slug: 'reporte-ruta',
    title: 'Reporte de Ruta',
    subtitle: 'Trazado completo de desplazamientos',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      },
      {
        icon: Eye,
        title: 'Múltiples Vistas',
        description: 'Vista satelital, carreteras y híbrida disponibles'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Reporte completo con mapas para imprimir' },
      { name: 'KML', description: 'Para visualizar en Google Earth' },
      { name: 'Excel', description: 'Datos tabulados para análisis' },
      { name: 'CSV', description: 'Datos en formato universal' }
    ],
    useCases: 'Ideal para verificar el cumplimiento de rutas planificadas, analizar la eficiencia de desplazamientos, investigar incidentes específicos y optimizar futuras rutas. Especialmente útil para supervisores que necesitan documentar las actividades de campo y contratistas que deben justificar los trabajos realizados.'
  },
  {
    slug: 'viajes-paradas',
    title: 'Viajes y Paradas',
    subtitle: 'Análisis detallado de actividad',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Este reporte analiza en detalle todos los viajes realizados y las paradas efectuadas, proporcionando métricas de productividad, tiempos de actividad e inactividad, y patrones de uso de la maquinaria.',
    includes: [
      'Lista detallada de todos los viajes',
      'Duración y distancia de cada viaje',
      'Ubicación exacta de cada parada',
      'Tiempo de duración de paradas',
      'Clasificación de paradas (trabajo, descanso, combustible)',
      'Velocidad promedio por viaje',
      'Análisis de productividad'
    ],
    features: [
      {
        icon: MapPin,
        title: 'Detalle de Paradas',
        description: 'Información completa de ubicación y duración de cada parada'
      },
      {
        icon: Route,
        title: 'Segmentación de Viajes',
        description: 'Cada viaje analizado individualmente con métricas específicas'
      },
      {
        icon: Clock,
        title: 'Análisis Temporal',
        description: 'Distribución de tiempo entre actividad e inactividad'
      },
      {
        icon: BarChart3,
        title: 'Métricas de Eficiencia',
        description: 'Indicadores de productividad y uso efectivo del tiempo'
      }
    ],
    exportFormats: [
      { name: 'Excel', description: 'Análisis detallado en hojas de cálculo' },
      { name: 'PDF', description: 'Reporte ejecutivo con gráficos' },
      { name: 'CSV', description: 'Datos para análisis personalizado' }
    ],
    useCases: 'Perfecto para analizar la productividad de conductores, identificar patrones de ineficiencia, optimizar horarios de trabajo y planificar mejor las actividades diarias. Muy útil para gerentes de flota que necesitan maximizar el tiempo productivo de su maquinaria.'
  },
  {
    slug: 'resumen-actividad',
    title: 'Resumen de Actividad',
    subtitle: 'Métricas consolidadas del período',
    image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El reporte de resumen consolida todas las métricas importantes de un período específico, proporcionando una visión general del rendimiento de la flota con indicadores clave de desempeño.',
    includes: [
      'Kilometraje total del período',
      'Tiempo total de actividad',
      'Número de viajes realizados',
      'Velocidad promedio general',
      'Consumo estimado de combustible',
      'Horas de trabajo por conductor',
      'Comparativas con períodos anteriores'
    ],
    features: [
      {
        icon: BarChart3,
        title: 'Dashboard Ejecutivo',
        description: 'Métricas clave presentadas de forma visual y clara'
      },
      {
        icon: TrendingUp,
        title: 'Análisis de Tendencias',
        description: 'Comparación con períodos anteriores y tendencias'
      },
      {
        icon: Target,
        title: 'KPIs Personalizados',
        description: 'Indicadores clave configurables según necesidades'
      },
      {
        icon: Settings,
        title: 'Filtros Avanzados',
        description: 'Segmentación por vehículo, conductor o tipo de actividad'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Reporte ejecutivo profesional' },
      { name: 'Excel', description: 'Datos para análisis avanzado' },
      { name: 'CSV', description: 'Integración con sistemas ERP' }
    ],
    useCases: 'Ideal para reportes gerenciales, evaluación de rendimiento de flota, planificación presupuestaria y toma de decisiones estratégicas. Especialmente valioso para directivos que necesitan una visión consolidada del desempeño operativo.'
  },
  {
    slug: 'graficas-rendimiento',
    title: 'Gráficas de Rendimiento',
    subtitle: 'Visualización avanzada de datos',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Este reporte presenta los datos de seguimiento en formato de gráficas interactivas, facilitando la identificación de patrones, tendencias y oportunidades de mejora en el rendimiento de la flota.',
    includes: [
      'Gráficas de velocidad vs tiempo',
      'Distribución de actividad por horas',
      'Comparativas entre vehículos',
      'Tendencias de uso mensual/semanal',
      'Análisis de eficiencia de combustible',
      'Mapas de calor de actividad',
      'Gráficos de productividad por conductor'
    ],
    features: [
      {
        icon: TrendingUp,
        title: 'Gráficas Interactivas',
        description: 'Visualizaciones dinámicas con zoom y filtros'
      },
      {
        icon: BarChart3,
        title: 'Múltiples Tipos',
        description: 'Barras, líneas, áreas y gráficos circulares'
      },
      {
        icon: Target,
        title: 'Análisis Comparativo',
        description: 'Comparación entre vehículos, conductores y períodos'
      },
      {
        icon: Eye,
        title: 'Mapas de Calor',
        description: 'Visualización de zonas de mayor actividad'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Gráficas en alta resolución' },
      { name: 'Excel', description: 'Datos y gráficas editables' },
      { name: 'PNG', description: 'Imágenes para presentaciones' }
    ],
    useCases: 'Perfecto para presentaciones ejecutivas, análisis de tendencias, identificación de patrones de uso y comunicación visual de resultados. Muy útil para analistas que necesitan identificar oportunidades de optimización.'
  },
  {
    slug: 'repeticion-ruta',
    title: 'Repetición de Ruta',
    subtitle: 'Reproducción paso a paso',
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'La funcionalidad de repetición de ruta permite reproducir cualquier viaje paso a paso, como si fuera una película, mostrando el movimiento del vehículo en tiempo real o acelerado sobre el mapa.',
    includes: [
      'Reproducción animada del recorrido',
      'Control de velocidad de reproducción',
      'Información en tiempo real durante la reproducción',
      'Marcadores de eventos importantes',
      'Datos de velocidad y dirección',
      'Información de paradas y arranques',
      'Correlación con datos meteorológicos'
    ],
    features: [
      {
        icon: RotateCcw,
        title: 'Reproducción Animada',
        description: 'Visualización del movimiento como una película'
      },
      {
        icon: Settings,
        title: 'Controles Avanzados',
        description: 'Play, pausa, velocidad variable y salto a puntos específicos'
      },
      {
        icon: Clock,
        title: 'Sincronización Temporal',
        description: 'Correlación exacta con horarios reales de actividad'
      },
      {
        icon: Target,
        title: 'Eventos Destacados',
        description: 'Marcadores automáticos en eventos importantes'
      }
    ],
    exportFormats: [
      { name: 'Video', description: 'Exportación como archivo de video' },
      { name: 'GIF', description: 'Animación para presentaciones' },
      { name: 'PDF', description: 'Secuencia de capturas con timestamps' }
    ],
    useCases: 'Ideal para investigación de incidentes, capacitación de conductores, demostración de trabajos realizados a clientes y análisis detallado de operaciones específicas. Especialmente útil para resolver disputas o demostrar cumplimiento de contratos.'
  },
  {
    slug: 'reporte-clima',
    title: 'Reporte de Clima',
    subtitle: 'Condiciones meteorológicas integradas',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El reporte de clima integra información meteorológica histórica y en tiempo real con las actividades de la flota, permitiendo correlacionar el rendimiento con las condiciones climáticas.',
    includes: [
      'Condiciones meteorológicas por ubicación',
      'Temperatura, humedad y precipitaciones',
      'Velocidad y dirección del viento',
      'Presión atmosférica y visibilidad',
      'Correlación clima-actividad',
      'Alertas meteorológicas históricas',
      'Índices de condiciones de trabajo'
    ],
    features: [
      {
        icon: Cloud,
        title: 'Datos Meteorológicos',
        description: 'Información completa del clima durante las actividades'
      },
      {
        icon: BarChart3,
        title: 'Correlación de Datos',
        description: 'Análisis de impacto del clima en el rendimiento'
      },
      {
        icon: Target,
        title: 'Condiciones Óptimas',
        description: 'Identificación de condiciones ideales para cada actividad'
      },
      {
        icon: Clock,
        title: 'Historial Climático',
        description: 'Registro histórico de condiciones meteorológicas'
      }
    ],
    exportFormats: [
      { name: 'PDF', description: 'Reporte con gráficas meteorológicas' },
      { name: 'Excel', description: 'Datos climáticos para análisis' },
      { name: 'CSV', description: 'Datos para sistemas agrícolas' }
    ],
    useCases: 'Esencial para planificación agrícola, optimización de actividades según condiciones climáticas, análisis de impacto del clima en la productividad y toma de decisiones basada en pronósticos meteorológicos. Muy valioso para agricultores que necesitan optimizar sus operaciones según el clima.'
  }
];
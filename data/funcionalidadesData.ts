import { MapPin, User, Gauge, Battery, Route, Bluetooth, Download, ChartArea as AreaChart, CloudRain, Clock, Shield, Zap, Target, Settings, Eye } from 'lucide-react-native';

export const funcionalidadesData = [
  {
    slug: 'posicion-gps',
    title: 'Posición GPS',
    subtitle: 'Localización precisa en tiempo real',
    image: 'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El sistema de posicionamiento GPS de Tracker NGPRO proporciona localización precisa y en tiempo real de todos tus vehículos y maquinaria agrícola. Utilizando tecnología GPS avanzada, obtienes coordenadas exactas con una precisión de menos de 2.5 metros.',
    features: [
      {
        icon: MapPin,
        title: 'Precisión Avanzada',
        description: 'Localización con precisión menor a 2.5m CEP utilizando múltiples satélites'
      },
      {
        icon: Clock,
        title: 'Tiempo Real',
        description: 'Actualización automática cada minuto durante el movimiento'
      },
      {
        icon: Target,
        title: 'Coordenadas Exactas',
        description: 'Latitud y longitud precisas con formato decimal y grados'
      },
      {
        icon: Eye,
        title: 'Visualización Múltiple',
        description: 'Vista en mapa satelital, carreteras y híbrida'
      }
    ],
    benefits: [
      'Control total sobre la ubicación de tu flota',
      'Optimización de rutas y tiempos de desplazamiento',
      'Recuperación rápida en caso de robo',
      'Verificación de cumplimiento de rutas planificadas',
      'Historial completo de ubicaciones'
    ],
    usage: 'La funcionalidad de posición GPS se activa automáticamente cuando el dispositivo está instalado. Puedes ver la ubicación actual en el mapa principal, consultar el historial de posiciones y configurar alertas por ubicación. Es especialmente útil para supervisores que necesitan conocer la ubicación exacta de su maquinaria en tiempo real.'
  },
  {
    slug: 'control-conductor',
    title: 'Control de Conductor',
    subtitle: 'Gestión inteligente de personal',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El sistema de control de conductores permite identificar automáticamente quién está operando cada vehículo mediante tecnología Bluetooth. Cada conductor tiene un tag personal que se detecta automáticamente.',
    features: [
      {
        icon: User,
        title: 'Identificación Automática',
        description: 'Detección automática del conductor mediante tags Bluetooth personales'
      },
      {
        icon: Bluetooth,
        title: 'Tecnología Bluetooth',
        description: 'Conexión automática sin intervención manual del conductor'
      },
      {
        icon: Clock,
        title: 'Registro de Tiempos',
        description: 'Control automático de horarios de trabajo por conductor'
      },
      {
        icon: Settings,
        title: 'Gestión Personalizada',
        description: 'Notas y observaciones específicas para cada conductor'
      }
    ],
    benefits: [
      'Control preciso de horarios de trabajo',
      'Asignación automática de responsabilidades',
      'Reportes individuales por conductor',
      'Mejora en la productividad del personal',
      'Trazabilidad completa de actividades'
    ],
    usage: 'Cada conductor recibe un tag Bluetooth personal que debe llevar consigo. Al acercarse al vehículo, el sistema lo detecta automáticamente y registra el inicio de su turno. Cuando se aleja, registra el fin del turno. Los supervisores pueden ver en tiempo real quién está operando cada máquina y generar reportes de productividad individual.'
  },
  {
    slug: 'velocidad',
    title: 'Monitoreo de Velocidad',
    subtitle: 'Control y seguridad en movimiento',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El sistema de monitoreo de velocidad registra y analiza la velocidad de tus vehículos en tiempo real, permitiendo establecer límites de seguridad y generar alertas automáticas por excesos de velocidad.',
    features: [
      {
        icon: Gauge,
        title: 'Velocidad en Tiempo Real',
        description: 'Monitoreo continuo de la velocidad actual de cada vehículo'
      },
      {
        icon: Shield,
        title: 'Límites Configurables',
        description: 'Establecimiento de límites de velocidad personalizados por vehículo o zona'
      },
      {
        icon: Zap,
        title: 'Alertas Automáticas',
        description: 'Notificaciones inmediatas por excesos de velocidad'
      },
      {
        icon: AreaChart,
        title: 'Análisis Histórico',
        description: 'Gráficas y reportes de velocidades promedio y máximas'
      }
    ],
    benefits: [
      'Mayor seguridad en las operaciones',
      'Reducción de accidentes y daños',
      'Control del desgaste de maquinaria',
      'Cumplimiento de normativas de seguridad',
      'Optimización del consumo de combustible'
    ],
    usage: 'Configura límites de velocidad específicos para cada tipo de vehículo o zona de trabajo. El sistema enviará alertas automáticas cuando se superen estos límites. Puedes revisar reportes históricos para identificar patrones de conducción y tomar medidas correctivas. Es especialmente útil para flotas que operan en carreteras públicas o zonas con restricciones de velocidad.'
  },
  {
    slug: 'bateria',
    title: 'Estado de Batería',
    subtitle: 'Monitoreo energético inteligente',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El sistema de monitoreo de batería supervisa el estado energético de todos los dispositivos GPS instalados, proporcionando alertas tempranas y gestión inteligente del consumo energético.',
    features: [
      {
        icon: Battery,
        title: 'Monitoreo Continuo',
        description: 'Supervisión constante del nivel de batería de todos los dispositivos'
      },
      {
        icon: Zap,
        title: 'Alertas Tempranas',
        description: 'Notificaciones automáticas cuando la batería está baja'
      },
      {
        icon: Settings,
        title: 'Gestión Inteligente',
        description: 'Optimización automática del consumo según el uso'
      },
      {
        icon: Clock,
        title: 'Predicción de Vida Útil',
        description: 'Estimación del tiempo restante de funcionamiento'
      }
    ],
    benefits: [
      'Prevención de interrupciones del servicio',
      'Planificación proactiva del mantenimiento',
      'Maximización de la vida útil de dispositivos',
      'Reducción de costos operativos',
      'Continuidad del seguimiento GPS'
    ],
    usage: 'Para dispositivos FMC (alimentados por el vehículo), el monitoreo verifica la conexión eléctrica. Para dispositivos TAT240 (batería interna), el sistema predice cuándo necesitarán reemplazo basándose en el patrón de uso. Recibirás alertas con suficiente antelación para programar el mantenimiento sin interrumpir las operaciones.'
  },
  {
    slug: 'viajes-paradas',
    title: 'Viajes y Paradas',
    subtitle: 'Análisis completo de trayectorias',
    image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El sistema de análisis de viajes y paradas registra automáticamente todos los desplazamientos y detenciones de tus vehículos, proporcionando información detallada sobre patrones de uso y eficiencia operativa.',
    features: [
      {
        icon: Route,
        title: 'Detección Automática',
        description: 'Identificación automática de inicio y fin de viajes'
      },
      {
        icon: MapPin,
        title: 'Ubicación de Paradas',
        description: 'Registro preciso de todas las ubicaciones de parada'
      },
      {
        icon: Clock,
        title: 'Duración Detallada',
        description: 'Tiempo exacto de cada viaje y parada'
      },
      {
        icon: AreaChart,
        title: 'Análisis de Patrones',
        description: 'Identificación de rutas frecuentes y patrones de uso'
      }
    ],
    benefits: [
      'Optimización de rutas y tiempos',
      'Control de productividad operativa',
      'Identificación de ineficiencias',
      'Planificación mejorada de actividades',
      'Reducción de tiempos muertos'
    ],
    usage: 'El sistema detecta automáticamente cuando un vehículo inicia movimiento (viaje) o se detiene por más de un tiempo configurado (parada). Puedes analizar estos datos para optimizar rutas, identificar paradas innecesarias y mejorar la eficiencia operativa. Los reportes incluyen mapas de calor que muestran las zonas más frecuentadas.'
  },
  {
    slug: 'deteccion-bluetooth',
    title: 'Detección Bluetooth',
    subtitle: 'Conectividad inteligente de equipos',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'La tecnología Bluetooth integrada permite la detección automática de conductores y aperos, creando un ecosistema conectado que registra automáticamente qué equipos están siendo utilizados y por quién.',
    features: [
      {
        icon: Bluetooth,
        title: 'Conectividad Automática',
        description: 'Detección automática de dispositivos Bluetooth cercanos'
      },
      {
        icon: User,
        title: 'Identificación de Conductores',
        description: 'Reconocimiento automático de tags personales de conductores'
      },
      {
        icon: Settings,
        title: 'Gestión de Aperos',
        description: 'Detección automática de implementos y herramientas conectadas'
      },
      {
        icon: Shield,
        title: 'Seguridad Avanzada',
        description: 'Alertas por uso no autorizado de equipos'
      }
    ],
    benefits: [
      'Automatización completa del registro',
      'Eliminación de errores manuales',
      'Control de uso de equipos',
      'Trazabilidad completa de operaciones',
      'Mejora en la seguridad operativa'
    ],
    usage: 'Cada conductor y apero importante tiene un tag Bluetooth único. Cuando se acercan al vehículo principal, se registra automáticamente la conexión. Esto permite saber exactamente qué implemento está usando cada conductor y durante cuánto tiempo, sin necesidad de registro manual.'
  },
  {
    slug: 'exportacion',
    title: 'Exportación de Datos',
    subtitle: 'Datos accesibles en múltiples formatos',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El sistema de exportación permite descargar todos los datos de seguimiento en múltiples formatos, facilitando el análisis externo, la integración con otros sistemas y el cumplimiento de requisitos de documentación.',
    features: [
      {
        icon: Download,
        title: 'Múltiples Formatos',
        description: 'Exportación en PDF, Excel, CSV y KML'
      },
      {
        icon: Settings,
        title: 'Filtros Avanzados',
        description: 'Selección específica de datos por fecha, vehículo o conductor'
      },
      {
        icon: Clock,
        title: 'Exportación Programada',
        description: 'Generación automática de reportes periódicos'
      },
      {
        icon: Shield,
        title: 'Datos Seguros',
        description: 'Exportación segura con control de acceso'
      }
    ],
    benefits: [
      'Integración con sistemas empresariales',
      'Análisis avanzado en herramientas externas',
      'Cumplimiento de auditorías',
      'Respaldo completo de información',
      'Flexibilidad en el manejo de datos'
    ],
    usage: 'Selecciona el período, vehículos y tipo de información que necesitas exportar. El sistema genera archivos en el formato elegido que puedes descargar inmediatamente. Los archivos KML son especialmente útiles para visualizar rutas en Google Earth, mientras que los CSV permiten análisis avanzados en Excel o sistemas ERP.'
  },
  {
    slug: 'medicion-areas',
    title: 'Medición de Áreas',
    subtitle: 'Cálculo preciso de superficies trabajadas',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'La funcionalidad de medición de áreas calcula automáticamente las superficies trabajadas por la maquinaria agrícola, proporcionando datos precisos en hectáreas y metros cuadrados para optimizar la gestión de cultivos.',
    features: [
      {
        icon: AreaChart,
        title: 'Cálculo Automático',
        description: 'Medición automática de áreas trabajadas basada en trayectorias GPS'
      },
      {
        icon: Target,
        title: 'Precisión GPS',
        description: 'Cálculos precisos utilizando coordenadas GPS de alta calidad'
      },
      {
        icon: MapPin,
        title: 'Gestión de Parcelas',
        description: 'Definición y seguimiento de límites de parcelas específicas'
      },
      {
        icon: AreaChart,
        title: 'Reportes Detallados',
        description: 'Informes completos de superficie por parcela y período'
      }
    ],
    benefits: [
      'Control preciso de áreas trabajadas',
      'Optimización de recursos y tiempo',
      'Cálculo exacto de costos por hectárea',
      'Planificación mejorada de cultivos',
      'Verificación de cumplimiento de contratos'
    ],
    usage: 'El sistema calcula automáticamente las áreas basándose en las trayectorias GPS de la maquinaria. Puedes definir parcelas específicas y el sistema te mostrará cuánta superficie se ha trabajado en cada una. Es especialmente útil para contratistas agrícolas que necesitan facturar por hectárea trabajada o para agricultores que quieren optimizar el uso de sus campos.'
  },
  {
    slug: 'info-meteorologica',
    title: 'Información Meteorológica',
    subtitle: 'Datos climáticos integrados',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'El sistema integra información meteorológica en tiempo real y histórica, correlacionando las condiciones climáticas con las actividades de campo para optimizar la toma de decisiones agrícolas.',
    features: [
      {
        icon: CloudRain,
        title: 'Datos en Tiempo Real',
        description: 'Información meteorológica actualizada para cada ubicación'
      },
      {
        icon: AreaChart,
        title: 'Historial Climático',
        description: 'Registro histórico de condiciones meteorológicas'
      },
      {
        icon: Target,
        title: 'Correlación con Actividades',
        description: 'Vinculación de datos climáticos con trabajos realizados'
      },
      {
        icon: Zap,
        title: 'Alertas Meteorológicas',
        description: 'Notificaciones de condiciones climáticas adversas'
      }
    ],
    benefits: [
      'Planificación óptima de actividades agrícolas',
      'Prevención de daños por condiciones adversas',
      'Optimización del uso de recursos',
      'Mejora en la calidad de cultivos',
      'Reducción de riesgos operativos'
    ],
    usage: 'La información meteorológica se muestra automáticamente en los reportes de actividad, permitiendo correlacionar el rendimiento de las máquinas con las condiciones climáticas. Puedes usar estos datos para planificar mejor las actividades de campo, evitar trabajar en condiciones adversas y optimizar el uso de fertilizantes y pesticidas según las condiciones meteorológicas.'
  }
];
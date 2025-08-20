interface ChatbotResponse {
  keywords: string[];
  answer: string;
  typingSpeed?: number; // velocidad de escritura en ms por caracter
  typingDelay?: number; // retraso antes de empezar a escribir en ms
  highlightWords?: string[]; // palabras a resaltar en la respuesta
}

export const chatbotData: ChatbotResponse[] = [
  // ACCESO Y LOGIN
  {
    keywords: [
      'acceso', 'acceder', 'login', 'entrar', 'iniciar sesion', 'usuario', 'contraseña', 'credenciales',
      'como entro', 'como accedo', 'donde entro', 'registrarse', 'registro', 'iniciar', 'conectar', 'conectarse',
      'ingresar', 'ingreso', 'cuenta', 'mi cuenta', 'portal', 'acceso web'
    ],
    answer: 'Para acceder a Tracker NGPRO tienes varias opciones:\n\n📱 **App Móvil**\n• Descarga desde App Store o Google Play\n• Ingresa con tu email y contraseña\n• Acceso biométrico disponible\n\n🌐 **Navegador Web**\n• Visita portal.ngpro.es\n• Usa tus credenciales de acceso\n• Compatible con todos los navegadores\n\n💻 **Aplicación de Escritorio**\n• Disponible para Windows, Mac y Linux\n• Instalación sencilla guiada\n• Actualizaciones automáticas\n\n❓ **¿Olvidaste tu contraseña?**\n• Usa la opción "Recuperar contraseña"\n• O contacta con soporte@ngpro.es\n• Respuesta en menos de 4 horas',
    typingSpeed: 30,
    typingDelay: 500,
    highlightWords: ['App Móvil', 'Navegador Web', 'Aplicación de Escritorio']
  },

  // DISPOSITIVOS GPS
  {
    keywords: [
      'dispositivos', 'gps', 'fmc', 'tat', 'hardware', 'fmc230', 'fmc234', 'tat240',
      'aparato', 'rastreador', 'tracker', 'localizador', 'instalación', 'equipos', 'antena',
      'que dispositivo', 'cual gps', 'que equipo', 'modelos', 'tipos'
    ],
    answer: '🛰️ **Modelos de Dispositivos NGPRO**\n\n📱 **Serie FMC (Vehículos)**\n• FMC230: Estándar profesional\n• FMC234: Versión avanzada\n• Conexión directa 12V/24V\n• GPS de alta precisión\n• Bluetooth 5.0 integrado\n• Resistencia IP67\n• Consumo ultra bajo\n\n🔋 **Serie TAT (Autónomo)**\n• TAT240: Larga autonomía\n• Batería de 3-5 años\n• Sin instalación compleja\n• Resistencia IP68\n• Conexión LoRaWAN\n• Ideal para remolques\n\n💡 **¿Cuál elegir?**\n• FMC: Para vehículos con batería\n• TAT: Para equipos sin alimentación',
    typingSpeed: 25,
    typingDelay: 300,
    highlightWords: ['FMC230', 'FMC234', 'TAT240', 'Bluetooth', 'LoRaWAN']
  },

  // REPORTES Y ANÁLISIS
  {
    keywords: [
      'reportes', 'informes', 'datos', 'exportar', 'pdf', 'excel', 'csv', 'kml',
      'generar reporte', 'crear informe', 'ver datos', 'estadísticas', 'análisis',
      'información', 'métricas', 'resultados', 'descargar', 'exportación', 'generar',
      'historico', 'histórico', 'registro', 'actividad'
    ],
    answer: '📊 **Sistema de Reportes NGPRO**\n\n📑 **Tipos de Reportes**\n• Ruta GPS detallada\n• Viajes y paradas\n• Resumen de actividad\n• Gráficas de rendimiento\n• Repetición paso a paso\n• Datos meteorológicos\n• Métricas en tiempo real\n\n💾 **Formatos Disponibles**\n• PDF: Informes profesionales\n• Excel: Análisis avanzado\n• CSV: Datos universales\n• KML: Visualización GPS\n\n⚡ **Funciones Avanzadas**\n• Filtros personalizados\n• Programación automática\n• Envío por email\n• Comparativas períodos\n• Gráficos interactivos',
    typingSpeed: 35,
    typingDelay: 400,
    highlightWords: ['Tipos de Reportes', 'Formatos Disponibles', 'Funciones Avanzadas']
  },

  // TIEMPO REAL Y FRECUENCIA
  {
    keywords: [
      'frecuencia', 'actualizar', 'tiempo real', 'minuto', 'actualizacion', 'actualización',
      'cada cuanto', 'intervalo', 'periodicidad', 'refresh', 'recarga', 'datos vivos',
      'live', 'online', 'directo', 'instantáneo', 'refresco', 'tiempo'
    ],
    answer: '⚡ **Actualizaciones en Tiempo Real**\n\n🚗 **Vehículo en Movimiento**\n• Actualización cada 60 segundos\n• Posición GPS precisa\n• Velocidad actual\n• Dirección de avance\n\n⏸️ **Vehículo Detenido**\n• Actualización cada 5 minutos\n• Ahorro de batería inteligente\n• Detección de movimiento\n\n🔋 **Optimización Automática**\n• Ajuste según actividad\n• Prioridad en alertas\n• Modo ahorro nocturno\n• Balance precisión/consumo\n\n💡 **Personalización**\n• Frecuencias ajustables\n• Modos personalizados\n• Alertas instantáneas',
    typingSpeed: 20,
    typingDelay: 200,
    highlightWords: ['60 segundos', '5 minutos', 'Optimización Automática']
  },

  // BATERÍA Y ENERGÍA
  {
    keywords: [
      'bateria', 'batería', 'carga', 'duración', 'alimentación', 'energia', 'energía', 'consumo',
      'autonomia', 'autonomía', 'pila', 'pilas', 'voltaje', 'volts', 'power', 'durar',
      'dura', 'duracion', 'carga', 'cargar', 'recarga', 'recargar'
    ],
    answer: '🔋 **Gestión de Energía NGPRO**\n\n⚡ **Dispositivos FMC**\n• Conexión al vehículo\n• 12V o 24V compatible\n• Consumo mínimo: <60mA\n• Protección de batería\n• Backup interno 450mAh\n\n🔋 **Dispositivos TAT**\n• Batería integrada\n• 3-5 años de autonomía\n• Sin recarga necesaria\n• Monitoreo de nivel\n• Alertas de bajo nivel\n\n💡 **Optimización**\n• Modos de ahorro\n• Ajuste automático\n• Hibernación inteligente\n• Gestión térmica\n\n⚠️ **Alertas**\n• Nivel bajo de batería\n• Desconexión detectada\n• Consumo anormal\n• Temperatura excesiva',
    typingSpeed: 25,
    typingDelay: 300,
    highlightWords: ['3-5 años', '60mA', '450mAh']
  },

  // INSTALACIÓN
  {
    keywords: [
      'instalación', 'instalar', 'técnico', 'configurar', 'setup', 'instalacion',
      'configuracion', 'configuración', 'montar', 'montaje', 'colocar', 'poner',
      'conectar', 'preparar', 'implementar', 'implementación', 'servicio', 'empezar'
    ],
    answer: '🔧 **Instalación Profesional NGPRO**\n\n📋 **Proceso Completo**\n1. Evaluación inicial gratuita\n2. Propuesta personalizada\n3. Agenda de instalación\n4. Visita técnica profesional\n5. Configuración del sistema\n6. Pruebas completas\n7. Capacitación de uso\n\n👨‍🔧 **Servicio Técnico**\n• Personal certificado\n• Herramientas especializadas\n• Garantía de instalación\n• Soporte post-instalación\n\n📱 **Configuración**\n• Cuentas de usuario\n• Apps y accesos\n• Personalización\n• Pruebas en vivo\n\n✅ **Garantías**\n• Material certificado\n• Trabajo profesional\n• Soporte continuo\n• Satisfacción total',
    typingSpeed: 30,
    typingDelay: 400,
    highlightWords: ['Proceso Completo', 'Servicio Técnico', 'Configuración', 'Garantías']
  }
];

/**
 * Work history, newest first. Taken from the CV.
 *
 * `client` and `summary` are optional. `stack` renders as badges under the
 * bullet list.
 */
export const EXPERIENCE = [
  {
    id: 'mercado-libre',
    role: 'Java Software Engineer',
    company: 'Mercado Libre',
    period: 'Abr 2024 — May 2026',
    summary:
      'Proyecto de Gestión de Precios, centrado en la actualización y automatización de precios de las publicaciones del marketplace.',
    highlights: [
      'Desarrollé funcionalidades backend para la automatización de precios: definición de reglas, cálculo de ganancias y márgenes por producto, visualización de promociones y porcentaje de ventas automatizadas por vendedor.',
      'Construí en Go servicios expuestos a través de Mercado Libre Developers, permitiendo a integradores externos consumir información de las automatizaciones.',
      'Implementé métricas y monitoreo de las automatizaciones, mejorando la observabilidad y la detección temprana de incidentes.',
      'Desarrollé servicios backend para obtener y procesar los precios de la competencia, dando soporte a la estrategia de pricing.',
    ],
    stack: [
      'Java 17/21',
      'Go',
      'Spring Boot',
      'Microservicios',
      'JUnit 5',
      'Mockito',
      'MySQL',
      'BigQuery',
      'Datadog',
      'Kibana',
      'OpenTelemetry',
    ],
  },
  {
    id: 'softtek',
    role: 'Full Stack Software Developer',
    company: 'Softtek',
    client: 'OSDE',
    period: 'May 2022 — Abr 2024',
    summary:
      'Workflow de contacto con clientes: clasificación y distribución de consultas médicas, recetas y autorizaciones.',
    highlights: [
      'Desarrollé servicios backend para la clasificación y distribución automática de consultas recibidas por web y correo electrónico, garantizando la trazabilidad del trámite mediante registro de responsables, comentarios y archivos adjuntos.',
      'Implementé nuevas funcionalidades y brindé soporte y mantenimiento continuo, resolviendo incidencias sobre funcionalidades existentes.',
      'Migré el backend de varias aplicaciones legacy en Java hacia Quarkus y reconstruí sus frontends en React en reemplazo de JSP, mejorando el rendimiento y la mantenibilidad.',
    ],
    stack: [
      'Java 6/8/11',
      'Spring Framework',
      'Quarkus',
      'React',
      'JSP',
      'Microservicios',
      'Kubernetes',
      'Docker',
      'SQL Server',
      'DB2',
      'SOAP',
    ],
  },
  {
    id: 'eldar',
    role: 'Java Software Developer',
    company: 'Eldar',
    client: 'Fiserv',
    period: 'Ago 2021 — May 2022',
    summary: 'Procesamiento de medios de pago.',
    highlights: [
      'Desarrollé y mantuve microservicios para la gestión de transacciones de pago originadas en terminales POS, garantizando la continuidad de procesos críticos del negocio.',
    ],
    stack: [
      'Java 8',
      'Spring Boot',
      'Microservicios',
      'JUnit 4/5',
      'Apigee',
      'SQL Server',
      'MySQL',
      'Jenkins',
    ],
  },
  {
    id: 'bpmx',
    role: 'Java Software Developer',
    company: 'BPMX',
    client: 'Garbarino',
    period: 'Nov 2018 — Ago 2021',
    summary: 'Áreas de shipping y stock dentro del proceso logístico de envíos.',
    highlights: [
      'Desarrollé funcionalidades backend para la gestión y el movimiento de mercadería entre depósitos de sucursales y hacia el domicilio del cliente.',
      'Implementé validaciones de stock para determinar la sucursal de origen de cada producto, garantizando consistencia entre el inventario disponible y los envíos generados.',
      'Desarrollé páginas internas para que los empleados de sucursal pudieran seguir envíos (fechas, estados, movimientos de stock) y gestionar pedidos de clientes.',
    ],
    stack: [
      'Java 7/8',
      'Suigeneris',
      'Oracle 10/11',
      'JUnit',
      'Gradle',
      'TeamCity',
    ],
  },
]

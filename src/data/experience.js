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
      'Proyecto de Gestión de Precios: actualización y automatización de precios de publicaciones del marketplace.',
    highlights: [
      'Desarrollé funcionalidades backend para la automatización de precios: definición de reglas, cálculo de ganancias y márgenes por producto, visualización de promociones y porcentaje de ventas automatizadas por vendedor.',
      'Diseñé y desarrollé en Go las APIs públicas de automatizaciones de precios en Mercado Libre Developers, utilizadas por integradores externos y soportando picos de ~100k requests por minuto.',
      'Instrumenté las automatizaciones con OpenTelemetry y definí monitores en Datadog integrados con Opsgenie, que alertan al equipo de guardia cuando un servicio supera sus umbrales de error.',
      'Construí los servicios backend que obtienen y procesan los precios de la competencia para alimentar las sugerencias mostradas al vendedor.',
      'Cubrí la rotación de guardias del equipo y resolví incidentes de producción en procesos críticos de pricing.',
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
      'Opsgenie',
      'OpenTelemetry',
      'Fury',
    ],
  },
  {
    id: 'softtek',
    role: 'Full Stack Software Developer',
    company: 'Softtek',
    client: 'OSDE',
    period: 'May 2022 — Abr 2024',
    summary:
      'Workflow de atención al afiliado: clasificación y derivación de consultas médicas, recetas y autorizaciones.',
    highlights: [
      'Desarrollé servicios backend para automatizar la clasificación y distribución de consultas recibidas por web y correo electrónico, con trazabilidad y auditoría completa del trámite: responsables, comentarios y archivos adjuntos.',
      'Migré a Quarkus el backend de 4 aplicaciones legacy desarrolladas en Java, reduciendo el consumo de memoria en torno a un 20% y mejorando los tiempos de arranque.',
      'Reconstruí en React los frontends de las aplicaciones existentes en JSP, desacoplándolos del backend y adaptándolos a la nueva arquitectura basada en microservicios.',
      'Implementé nuevas funcionalidades y resolví incidentes de producción en las aplicaciones existentes.',
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
    summary: 'Plataforma de procesamiento de medios de pago.',
    highlights: [
      'Desarrollé y mantuve microservicios para procesar transacciones originadas en terminales POS, dentro de procesos críticos del negocio.',
      'Creé y publiqué en Apigee los proxies de API que exponen los microservicios de pago a las aplicaciones consumidoras.',
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
    summary: 'Logística de envíos: movimiento de stock entre sucursales y despacho a domicilio.',
    highlights: [
      'Desarrollé servicios backend para gestionar el movimiento de mercadería entre depósitos de sucursales y el despacho a domicilio del cliente.',
      'Implementé las validaciones de stock que determinan la sucursal de origen de cada producto para mantener la consistencia entre el inventario disponible y los envíos generados.',
      'Construí las pantallas internas utilizadas por los empleados de sucursal para consultar el estado de los envíos, movimientos de stock y gestionar pedidos de clientes.',
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

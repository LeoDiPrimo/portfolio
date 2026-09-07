/**
 * Skills grouped by category, mirroring the CV.
 * `icon` is a key of STACK_ICONS — decorative, rendered `aria-hidden`.
 */
export const SKILL_GROUPS = [
  {
    id: 'languages',
    label: 'Lenguajes',
    icon: 'coffee',
    skills: ['Java 6–21', 'Go', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: 'leaf',
    skills: ['Spring Boot', 'Spring Framework', 'Quarkus'],
  },
  {
    id: 'architecture',
    label: 'Arquitecturas',
    icon: 'landmark',
    skills: ['Microservicios', 'APIs REST', 'SOAP'],
  },
  {
    id: 'databases',
    label: 'Bases de datos',
    icon: 'database',
    skills: ['MySQL', 'SQL Server', 'Oracle', 'DB2', 'BigQuery'],
  },
  {
    id: 'testing',
    label: 'Testing',
    icon: 'flask',
    skills: ['JUnit', 'Mockito'],
  },
  {
    id: 'observability',
    label: 'Observabilidad',
    icon: 'chart',
    skills: ['Datadog', 'Kibana', 'OpenTelemetry'],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: 'gear',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'TeamCity',
      'Maven',
      'Gradle',
      'Apigee',
      'Git',
      'GCP',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'atom',
    skills: ['React'],
  },
]

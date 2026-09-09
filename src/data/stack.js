/**
 * Skills grouped by category, mirroring the CV.
 *
 * `icon` is a key of STACK_ICONS — decorative, rendered `aria-hidden`.
 * Within a group, skills are ordered by weight in the profile: the core first,
 * legacy last, keeping related tech adjacent.
 */
export const SKILL_GROUPS = [
  {
    id: 'languages',
    label: 'Lenguajes & frameworks',
    icon: 'coffee',
    skills: [
      'Java 6–21',
      'Spring Boot',
      'Spring Framework',
      'Quarkus',
      'Go',
      'SQL',
    ],
  },
  {
    id: 'architecture',
    label: 'Arquitecturas',
    icon: 'landmark',
    skills: ['Microservicios', 'APIs REST', 'Apigee', 'SOAP'],
  },
  {
    id: 'databases',
    label: 'Bases de datos',
    icon: 'database',
    skills: ['MySQL', 'SQL Server', 'Oracle', 'BigQuery', 'MongoDB', 'DB2'],
  },
  {
    id: 'quality',
    label: 'Testing & observabilidad',
    icon: 'flask',
    skills: ['JUnit', 'Mockito', 'Cypress', 'Datadog', 'Kibana', 'OpenTelemetry'],
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

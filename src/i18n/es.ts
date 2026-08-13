import type { SiteContent } from './types';

export const es: SiteContent = {
  profile: {
    title: 'Software Engineer',
    tagline:
      'Diseño, construyo y despliego APIs RESTful en producción con Golang y Node.js, y lidero migraciones cloud en AWS para una plataforma SaaS global.',
    location: 'Collipulli, Chile',
    yearsOfExperience: '5+',
    summary: [
      'Software Engineer con más de 5 años de experiencia en el diseño, desarrollo y despliegue de APIs RESTful utilizando Golang y Node.js. Especializado en arquitecturas cloud sobre AWS —incluyendo migraciones hacia EKS, ECS y Lambda— con dominio en Docker, Kubernetes, CI/CD y documentación técnica mediante Swagger y OpenAPI.',
      'He liderado migraciones de infraestructura crítica y tomado responsabilidad sobre decisiones arquitectónicas en una empresa global de SaaS que opera en más de 60 países, entregando funcionalidades y soporte en producción para múltiples mercados de Latinoamérica. Mi trabajo abarca integraciones de identidad digital nacional, flujos de verificación biométrica e integraciones con APIs gubernamentales.',
      'Tengo experiencia en monitoreo sintético con k6 y validación de calidad de software, y me interesan la mejora continua y la excelencia técnica —desde elevar la cobertura de tests hasta introducir herramientas modernas de ingeniería en los equipos.',
    ],
    focusAreas: [
      'Ingeniería Backend',
      'Diseño de APIs RESTful',
      'AWS Cloud y Kubernetes',
      'CI/CD y DevOps',
    ],
    specialties: [
      'Servicios backend en Golang y Node.js',
      'Diseño de APIs RESTful y documentación OpenAPI',
      'Migraciones en AWS (EC2 → ECS → EKS) y containerización',
      'Identidad, OAuth 2.0 / OpenID Connect y verificación biométrica',
      'Pipelines CI/CD, monitoreo sintético (k6) y validación de calidad',
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
    ],
  },

  experience: [
    {
      company: 'SOVOS Compliance',
      entity: 'E-Partners SPA',
      period: 'Oct 2022 — Actualidad',
      current: true,
      roles: [
        { title: 'Software Engineer III', period: 'Ene 2025 — Actualidad' },
        { title: 'Software Engineer II', period: 'Mar 2023 — Dic 2024' },
        { title: 'Software Engineer I', period: 'Oct 2022 — Feb 2023' },
      ],
      highlights: [
        'Liderando la migración de infraestructura de toda la compañía desde ECS y Lambda hacia un clúster EKS (Kubernetes), empaquetando en contenedores y re-desplegando los servicios existentes.',
        'Migré un servicio REST legacy de AWS EC2 a ECS, reescribiéndolo en Golang con responsabilidad completa del proceso —habilitando la integración directa con la API del Registro Civil de Chile.',
        'Desarrollé flujos de verificación biométrica para un producto Remote ID —rostro vs. chip NFC, rostro vs. base de datos y rostro vs. registro gubernamental, comparación OCR/MRZ y detección de deepfake/liveness— integrando SDKs de terceros (Acuant) de extremo a extremo.',
        'Migré la integración del servicio de autenticación ClaveÚnica (sistema nacional de identidad digital de Chile, OpenID Connect / OAuth 2.0) desde un stack legacy a Node.js, preservando la lógica funcional completa y mejorando la mantenibilidad a largo plazo.',
        'Desarrollé y mantuve APIs RESTful internas y para clientes en Golang, desplegadas en AWS ECS mediante imágenes Docker y balanceadores de carga.',
        'Entregué funcionalidades y soporte en producción para los mercados de Chile, Perú, México y Argentina.',
        'Implementé monitoreo sintético con k6 en servicios críticos, habilitando la detección proactiva de degradaciones de rendimiento antes de que impacten a los usuarios.',
        'Contribuí a una iniciativa de testing automatizado a nivel de servicios, elevando la cobertura de tests unitarios del backend hacia un objetivo del 85% y creando suites de regresión para endpoints de gestión de clientes.',
        'Estandaricé la documentación de APIs con Swagger/OpenAPI en todos los servicios del equipo, reduciendo la fricción de integración para equipos internos y clientes.',
        'Lideré la resolución de incidencias críticas en equipos transversales, incluyendo soporte y correcciones para servicios Python de otros squads.',
        'Mentoricé a desarrolladores junior mediante code reviews y guías de buenas prácticas, y configuré el escaneo de seguridad Veracode remediando vulnerabilidades de dependencias (NPM) en el pipeline.',
        'Introduje GitHub Copilot y Devin en el flujo de trabajo del equipo, acelerando la implementación, la revisión de código y la documentación técnica.',
      ],
      technologies: [
        'Golang',
        'Node.js',
        'AWS ECS',
        'AWS EKS',
        'AWS EC2',
        'AWS Lambda',
        'Docker',
        'Kubernetes',
        'OpenAPI / Swagger',
        'k6',
        'OAuth 2.0 / OIDC',
        'Python',
      ],
    },
    {
      company: 'TOC Biometrics',
      period: 'Nov 2020 — Oct 2022',
      roles: [
        { title: 'Ingeniero Backend Junior', period: 'Ago 2021 — Oct 2022' },
        { title: 'Ingeniero de Soporte Junior', period: 'May 2021 — Jul 2021' },
        { title: 'Desarrollador Trainee', period: 'Nov 2020 — Abr 2021' },
      ],
      highlights: [
        'Desarrollé y mantuve APIs REST internas y para clientes en Node.js, desplegadas mediante pipelines CI/CD automatizados en AWS Lambda.',
        'Migré servicios legacy de PHP a Node.js, mejorando la mantenibilidad, el rendimiento y la alineación con el stack moderno de la compañía.',
        'Mantuve servicios legacy en Java y PHP, asegurando la continuidad operativa en producción.',
        'Gestioné el ciclo de vida operativo de servicios en producción —activaciones, desactivaciones y escalamientos entre equipos— garantizando la continuidad del servicio a clientes.',
        'Monitoreé el rendimiento de los servicios e investigué fallos de transacciones, identificando causas raíz e impulsando mejoras de confiabilidad en producción.',
        'Desarrollé una demo front-end demostrativa en HTML/CSS/JavaScript integrando las soluciones biométricas de la compañía para presentaciones comerciales.',
        'Ejecuté planes de prueba funcional como Analista QA, validando nuevas funcionalidades antes de su despliegue a producción.',
        'Generé y mantuve documentación técnica en Confluence para equipos internos y clientes externos.',
      ],
      technologies: [
        'Node.js',
        'JavaScript',
        'PHP',
        'Java',
        'AWS Lambda',
        'CI/CD',
        'HTML / CSS',
        'Confluence',
      ],
    },
    {
      company: 'TREBOL-IT S.A.',
      period: 'Mar 2020 — Oct 2020',
      roles: [
        { title: 'Analista Jr.', period: 'Jun 2020 — Oct 2020' },
        { title: 'Desarrollador Trainee', period: 'Mar 2020 — Jun 2020' },
      ],
      highlights: [
        'Migré un servicio monolítico Oracle Tuxedo a una arquitectura de microservicios en JavaScript/TypeScript con GraphQL y TypeORM, desplegados en Jenkins CI/CD.',
        'Reescribí funciones del sistema en C a JavaScript/TypeScript, garantizando compatibilidad funcional completa en el nuevo entorno.',
        'Implementé TDD como estándar de pruebas unitarias en toda la compañía, promoviendo la calidad desde las etapas tempranas del desarrollo.',
        'Elaboré documentación técnica y guías prácticas de adopción de TDD adaptadas al stack de cada equipo.',
        'Creé cápsulas de aprendizaje y documentación técnica para estandarizar prácticas de desarrollo en el equipo.',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'GraphQL',
        'TypeORM',
        'Jenkins',
        'C',
      ],
    },
  ],

  skills: [
    {
      category: 'Lenguajes',
      items: ['Go (Golang)', 'JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
    },
    {
      category: 'Backend y APIs',
      items: [
        'Node.js',
        'APIs REST',
        'OpenAPI / Swagger',
        'GraphQL',
        'OAuth 2.0 / OpenID Connect',
      ],
    },
    {
      category: 'Cloud — AWS',
      items: ['ECS', 'EKS', 'Lambda', 'EC2', 'DynamoDB', 'SNS'],
    },
    {
      category: 'DevOps e Infraestructura',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
    },
    {
      category: 'Testing y Monitoreo',
      items: ['k6', 'TDD', 'Veracode'],
    },
    {
      category: 'Herramientas y Colaboración',
      items: ['Git', 'Jira', 'Confluence'],
    },
  ],

  education: [
    {
      degree: 'Analista Programador Computacional',
      institution: 'Instituto Profesional Duoc UC',
      period: 'Titulado 2020',
      location: 'Chile',
    },
  ],

  projects: [
    {
      title: 'Bike Rental Service API',
      description:
        'API RESTful para gestión de renta de bicicletas construida en Go con arquitectura hexagonal (puertos y adaptadores), SQLite embebido y documentación OpenAPI.',
      year: '2026',
      stack: [
        'Go',
        'SQLite',
        'Arquitectura Hexagonal',
        'JWT',
        'Swagger / OpenAPI',
        'Docker',
      ],
      highlights: [
        'Arquitectura hexagonal limpia (handlers, servicios, repositorios y modelos de dominio) con más de 80% de cobertura de tests unitarios.',
        'Autenticación JWT para usuarios y Basic Auth para administradores, además de geolocalización de bicicletas y cálculo automático de costo por minuto.',
        '18 endpoints documentados con Swagger/OpenAPI, logging estructurado (zerolog) e imagen Docker distroless (~10 MB).',
      ],
      featured: true,
      isPrivate: true,
    },
  ],

  ui: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    actions: {
      langSwitch: 'Switch to English',
      themeToggle: 'Cambiar tema de color',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      skipToContent: 'Saltar al contenido',
    },
    hero: {
      getInTouch: 'Contáctame',
      viewExperience: 'Ver experiencia',
      downloadCv: 'Descargar CV',
      focusLabel: 'Áreas de foco',
      portraitAlt: 'Retrato de Nicolas Miranda Delgado',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Ingeniería que se entrega y escala',
      asideTitle: 'En qué me enfoco',
      languagesLabel: 'Idiomas',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Dónde he generado impacto',
      lead: 'Cinco años construyendo y operando servicios backend en producción —desde integraciones de identidad digital nacional hasta migraciones cloud a nivel de toda la compañía.',
      current: 'Actual',
      technologiesLabel: 'Tecnologías',
    },
    skills: {
      eyebrow: 'Habilidades Técnicas',
      title: 'Herramientas con las que construyo',
      lead: 'Un stack pragmático y orientado a backend, centrado en Go, Node.js y el ecosistema AWS.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Trabajo seleccionado',
      lead: 'Un espacio curado con trabajo de ingeniería representativo.',
      emptyTitle: 'Casos de estudio en preparación',
      emptyText:
        'Estoy preparando descripciones de trabajo en producción —servicios backend, diseño de APIs y migraciones cloud.',
      code: 'Código',
      demo: 'Demo en vivo',
      privateLabel: 'Repositorio privado',
    },
    education: {
      eyebrow: 'Educación',
      title: 'Formación académica',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Construyamos algo',
      lead: 'Estoy abierto a roles de ingeniería backend, cloud y de plataforma —incluyendo oportunidades internacionales y remotas. La forma más rápida de contactarme es por correo.',
      emailMe: 'Escríbeme',
      downloadCv: 'Descargar CV',
      basedIn: 'Ubicado en',
      labels: {
        email: 'Correo',
        linkedin: 'LinkedIn',
        phone: 'Teléfono',
        github: 'GitHub',
      },
    },
    footer: {
      builtWith: 'Hecho con Astro.',
    },
    meta: {
      title: 'Nicolas Miranda Delgado — Software Engineer',
      description:
        'Nicolas Miranda Delgado es Software Engineer con más de 5 años de experiencia construyendo APIs RESTful en Golang y Node.js y liderando migraciones cloud en AWS (EKS, ECS, Lambda).',
    },
  },
};

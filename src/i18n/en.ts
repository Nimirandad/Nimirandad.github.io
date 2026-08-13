import type { SiteContent } from './types';

export const en: SiteContent = {
  profile: {
    title: 'Software Engineer',
    tagline:
      'I design, build and ship production RESTful APIs in Golang and Node.js, and lead cloud migrations on AWS for a global SaaS platform.',
    location: 'Collipulli, Chile',
    yearsOfExperience: '5+',
    summary: [
      'Software Engineer with 5+ years of experience designing, developing and deploying RESTful APIs in Golang and Node.js. I specialize in AWS cloud architectures — including migrations to EKS, ECS and Lambda — with strong proficiency in Docker, Kubernetes, CI/CD pipelines, and API documentation through Swagger and OpenAPI.',
      'I have led critical infrastructure migrations and owned architectural decisions at a global SaaS company operating across 60+ countries, delivering features and production support for multiple Latin American markets. My work spans national digital-identity integrations, biometric verification flows and government API integrations.',
      'I am experienced in synthetic monitoring with k6 and software-quality validation, and I care about continuous improvement and technical excellence — from raising test coverage to introducing modern engineering tooling across teams.',
    ],
    focusAreas: [
      'Backend Engineering',
      'RESTful API Design',
      'AWS Cloud & Kubernetes',
      'CI/CD & DevOps',
    ],
    specialties: [
      'Backend services in Golang & Node.js',
      'RESTful API design & OpenAPI documentation',
      'AWS migrations (EC2 → ECS → EKS) & containerization',
      'Identity, OAuth 2.0 / OpenID Connect & biometric verification',
      'CI/CD pipelines, synthetic monitoring (k6) & quality validation',
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2' },
    ],
  },

  experience: [
    {
      company: 'SOVOS Compliance',
      entity: 'E-Partners SPA',
      period: 'Oct 2022 — Present',
      current: true,
      roles: [
        { title: 'Software Engineer III', period: 'Jan 2025 — Present' },
        { title: 'Software Engineer II', period: 'Mar 2023 — Dec 2024' },
        { title: 'Software Engineer I', period: 'Oct 2022 — Feb 2023' },
      ],
      highlights: [
        'Leading the company-wide infrastructure migration from ECS and Lambda to an EKS (Kubernetes) cluster, containerizing and re-deploying existing services.',
        "Migrated a legacy REST service from AWS EC2 to ECS with a full Golang rewrite and end-to-end ownership, enabling direct integration with Chile's Registro Civil government API.",
        'Built biometric identity-verification flows for a Remote ID product — face-vs-NFC-chip, face-vs-database and face-vs-government-registry matching, document OCR/MRZ comparison, and deepfake/liveness detection — integrating third-party SDKs (Acuant) end-to-end.',
        "Migrated the ClaveÚnica authentication service (Chile's national digital-identity system, OpenID Connect / OAuth 2.0) from a legacy stack to Node.js, preserving full functional logic and improving long-term maintainability.",
        'Developed and maintained internal and client-facing RESTful APIs in Golang, deployed to AWS ECS via Docker images and load balancers.',
        'Delivered features and production support across the CL, PE, MX and AR markets.',
        'Implemented synthetic monitoring with k6 on critical services, enabling proactive detection of performance degradations before they reach end users.',
        'Contributed to a service-wide automated-testing initiative, raising backend unit-test coverage toward an 85% target and authoring regression suites for client-management endpoints.',
        'Standardized API documentation with Swagger/OpenAPI across all team services, reducing integration friction for internal teams and clients.',
        'Led critical incident resolution across cross-functional teams, including support and fixes for Python services owned by other squads.',
        'Mentored junior developers through code reviews and best-practice guidelines, and set up Veracode security scanning while remediating dependency (NPM) vulnerabilities in the delivery pipeline.',
        "Introduced GitHub Copilot and Devin into the team's workflow, accelerating implementation, code review and technical documentation cycles.",
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
        { title: 'Junior Backend Developer', period: 'Aug 2021 — Oct 2022' },
        { title: 'Junior Support Engineer', period: 'May 2021 — Jul 2021' },
        { title: 'Trainee Developer', period: 'Nov 2020 — Apr 2021' },
      ],
      highlights: [
        'Developed and maintained internal and client-facing REST APIs in Node.js, deployed via automated CI/CD pipelines to AWS Lambda.',
        "Migrated legacy PHP services to Node.js, improving maintainability, performance and alignment with the company's modern stack.",
        'Maintained legacy Java and PHP services, ensuring operational continuity in production environments.',
        'Managed the operational lifecycle of production services — activations, deactivations and cross-team escalations — ensuring continuous service delivery to clients.',
        'Monitored service performance and investigated transaction failures, identifying root causes and driving reliability improvements in production systems.',
        "Built a front-end showcase demo (HTML/CSS/JavaScript) integrating the company's biometric solutions for commercial presentations.",
        'Executed functional test plans as a QA analyst, validating new features prior to production release.',
        'Created and maintained technical documentation in Confluence for internal teams and external clients.',
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
        { title: 'Junior Analyst', period: 'Jun 2020 — Oct 2020' },
        { title: 'Trainee Developer', period: 'Mar 2020 — Jun 2020' },
      ],
      highlights: [
        'Migrated a monolithic Oracle Tuxedo service to a microservices architecture using JavaScript/TypeScript, GraphQL and TypeORM, deployed via Jenkins CI/CD.',
        'Rewrote legacy C system functions in JavaScript/TypeScript, ensuring full functional compatibility in the new environment.',
        'Implemented TDD as the unit-testing standard across the company, promoting quality-first development from the earliest stages.',
        "Authored technical documentation and practical TDD adoption guides tailored to each team's technology stack.",
        'Created internal learning capsules and technical documentation to standardize development practices across the team.',
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
      category: 'Languages',
      items: ['Go (Golang)', 'JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
    },
    {
      category: 'Backend & APIs',
      items: [
        'Node.js',
        'REST APIs',
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
      category: 'DevOps & Infrastructure',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
    },
    {
      category: 'Testing & Monitoring',
      items: ['k6', 'TDD', 'Veracode'],
    },
    {
      category: 'Tools & Collaboration',
      items: ['Git', 'Jira', 'Confluence'],
    },
  ],

  education: [
    {
      degree: 'Computer Programming Analyst',
      institution: 'Instituto Profesional Duoc UC',
      period: 'Graduated 2020',
      location: 'Chile',
    },
  ],

  projects: [
    {
      title: 'Bike Rental Service API',
      description:
        'RESTful bike-rental management API built in Go with a hexagonal (ports & adapters) architecture, embedded SQLite and OpenAPI documentation.',
      year: '2026',
      stack: [
        'Go',
        'SQLite',
        'Hexagonal Architecture',
        'JWT',
        'Swagger / OpenAPI',
        'Docker',
      ],
      highlights: [
        'Clean hexagonal architecture (handlers, services, repositories, domain models) with 80%+ unit-test coverage.',
        'JWT authentication for users and Basic Auth for admins, plus bike geolocation and automatic per-minute cost calculation.',
        '18 endpoints documented with Swagger/OpenAPI, structured logging (zerolog) and a distroless Docker image (~10 MB).',
      ],
      featured: true,
      isPrivate: true,
    },
  ],

  ui: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    actions: {
      langSwitch: 'Cambiar a español',
      themeToggle: 'Toggle color theme',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skipToContent: 'Skip to content',
    },
    hero: {
      getInTouch: 'Get in touch',
      viewExperience: 'View experience',
      downloadCv: 'Download CV',
      focusLabel: 'Focus areas',
      portraitAlt: 'Portrait of Nicolas Miranda Delgado',
    },
    about: {
      eyebrow: 'About',
      title: 'Engineering that ships and scales',
      asideTitle: 'What I focus on',
      languagesLabel: 'Languages',
    },
    experience: {
      eyebrow: 'Experience',
      title: "Where I've made an impact",
      lead: 'Five years of building and operating production backend services — from national digital-identity integrations to company-wide cloud migrations.',
      current: 'Current',
      technologiesLabel: 'Technologies',
    },
    skills: {
      eyebrow: 'Technical Skills',
      title: 'Tools I build with',
      lead: 'A pragmatic, backend-leaning toolkit centered on Go, Node.js and the AWS ecosystem.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      lead: 'A curated space for representative engineering work.',
      emptyTitle: 'Case studies in progress',
      emptyText:
        "I'm putting together write-ups of production work — backend services, API design and cloud migrations.",
      code: 'Code',
      demo: 'Live demo',
      privateLabel: 'Private repository',
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic background',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something",
      lead: "I'm open to backend, cloud and platform engineering roles — including international and remote opportunities. The fastest way to reach me is email.",
      emailMe: 'Email me',
      downloadCv: 'Download CV',
      basedIn: 'Based in',
      labels: {
        email: 'Email',
        linkedin: 'LinkedIn',
        phone: 'Phone',
        github: 'GitHub',
      },
    },
    footer: {
      builtWith: 'Built with Astro.',
    },
    meta: {
      title: 'Nicolas Miranda Delgado — Software Engineer',
      description:
        'Nicolas Miranda Delgado is a Software Engineer with 5+ years of experience building RESTful APIs in Golang and Node.js and leading AWS cloud migrations (EKS, ECS, Lambda).',
    },
  },
};

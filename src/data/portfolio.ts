export interface NavLink {
  id: string
  label: string
}

export interface Stat {
  label: string
  value: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  details?: string
}

export interface Experience {
  id: string
  period: string
  role: string
  organization: string
  description: string
  responsibilities: string[]
  type: "work" | "exposure"
}

export interface GalleryItem {
  id: string
  title: string
  description: string
  category: string
  skills: string[]
  image: string
  imageAlt: string
  /** Additional images for the same project (e.g. multiple photos in lightbox) */
  galleryImages?: string[]
  /** Original file download (e.g. DWG, PDF) */
  assetUrl?: string
  assetLabel?: string
}

export interface Certificate {
  id: string
  title: string
  organization: string
  date: string
  description: string
  /** Full certificate file (PDF or image) */
  image: string
  /** Thumbnail / lightbox preview image */
  previewImage: string
}

export interface CareerInterest {
  icon: string
  title: string
  description: string
}

export const personalInfo = {
  name: "Melbert Q. Labawan",
  title: "Registered Electrical Engineer",
  tagline:
    "Technical Problem Solving • Database Management • SQL Programming",
  phone: "09524676358",
  email: "melbertlabawan@gmail.com",
  location: "Calinan, Davao City",
  resumeUrl: "/resume/labawan-portfolio.pdf",
  profileImage: "/images/profile/profile.jpg",
  heroIntro:
    "Registered Electrical Engineer and DOST Scholar with strong analytical and problem-solving skills. Experienced in system testing, basic SQL operations, frontend bug fixing, and coordinating with stakeholders and third-party development teams. With a passion for learning and contributing to innovative engineering and technology solutions.",
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
]

export const about = {
  technicalStrengths: [
    "Electrical Engineering",
    "Electrical Design & Estimating",
    "System Testing",
    "SQL & Databases",
    "Front End Development",
    "Problem Solving",
  ],
  careerInterests: [
    {
      icon: "📊",
      title: "Technical Solutions / Systems Engineering",
      description:
        "Combining engineering knowledge, software, databases, and business processes to build solutions.",
    },
    {
      icon: "⚡",
      title: "Electrical Engineering",
      description:
        "Especially power systems, electrical systems, testing, and utility operations.",
    },
    {
      icon: "🗺️",
      title: "GIS / Geospatial Technology",
      description:
        "PostGIS, spatial databases, mapping, and GIS-based applications.",
    },
    {
      icon: "🔧",
      title: "Engineering Technology & Innovation",
      description:
        "Electronics, automation, energy harvesting, and problem-solving.",
    },
  ] satisfies CareerInterest[],
}

export const stats: Stat[] = [
  { label: "Registered Electrical Engineer", value: "REE" },
  { label: "2020 to 2025", value: "DOST-SEI Scholar" },
  { label: "Bachelor of Science in Electrical Engineering", value: "BSEE" },
  { label: "IIEE ANNUAL NSCON 2024", value: "National Quizzer" },
]

export const education: Education[] = [
  {
    institution: "University of Mindanao – Davao",
    degree: "Bachelor of Science in Electrical Engineering",
    period: "2020–2025",
    details: "GWA: 3.1",
  },
  {
    institution: "Calinan National High School",
    degree: "STEM Strand — With Honors",
    period: "2014–2020",
    details: "General Average: 92",
  },
]

export const workExperience: Experience[] = [
  {
    id: "exp-1",
    period: "Feb 2025 – Present",
    role: "GENIUS - Subject Matter Expert",
    organization: "Davao Light and Power Co.",
    description:
      "Supporting engineering and technology initiatives at Davao Light and Power Company.",
    responsibilities: [
      "Assisted in development and testing of streetlight web and mobile applications by fixing frontend bugs, performing system testing, and supporting SQL database operations.",
      "Coordinated with stakeholders and third-party web development teams to support project implementation and facilitate communication.",
      "Helped in database extractions for support in Davao Light North, optimizing data retrieval for the technical support.",
    ],
    type: "work",
  },
]

export const workExposure: Experience[] = [
  {
    id: "exposure-1",
    period: "July 2024",
    role: "On-the-Job Training (Intern)",
    organization: "Davao Light and Power Co.",
    description:
      "Engineering internship with hands-on exposure to utility operations, equipment, and technical projects.",
    responsibilities: [
      "Helped with testing of current transformers and maintenance of electric meters.",
      "Assisted in developing an AI system to account for all solar systems in Davao City.",
    ],
    type: "exposure",
  },
]

export const resumeSections = {
  licenses: [
    "Registered Electrical Engineer (August 2025)",
    "National Quizzer (National Math Wizard - IIEE ANNUAL NSCON 2024)",
    "DOST-SEI Scholarship Awardee (2020–2025)",
    "Intern — Davao Light and Power Company (July 2024)",
    "Basic Occupational Safety and Health Seminar (2023)",
  ],
  extracurricular: [],
  languages: [],
}

export const skillItems = [
  "Databases (SQL)",
  "Computer Programming",
  "Front End Development (Cursor AI)",
  "Electrical Design and Estimate",
  "AutoCAD",
  "Planswift",
  "Dialux",
  "Google Workspace",
  "Willingness to Learn",
  "Attention to Detail",
  "Critical Thinking",
  "Problem Solving",
  "Good Communication",
] as const

export const projects: GalleryItem[] = [
  {
    id: "streetlight-app",
    title: "Streetlight App",
    description:
      "A web and mobile-based streetlight management application designed to support the workflow of streetlight requests, work orders, mapping, dispatching, and monitoring. Demonstrates experience in web and mobile application development, GIS mapping, database management, workflow automation, and system design.",
    category: "Software Development / Engineering Technology",
    skills: [
      "Front End Development (Cursor AI)",
      "Databases (SQL)",
      "Computer Programming",
      "GIS / Geospatial Technology",
    ],
    image: "/images/work-samples/streetlight-app.png",
    imageAlt: "Streetlight App web and mobile management application",
  },
  {
    id: "power-factor-correction",
    title: "Power Factor Correction System",
    description:
      "An electrical engineering project focused on power factor correction, designed to improve electrical system efficiency by reducing reactive power and improving the overall power factor of the system.",
    category: "Electrical Engineering / Power Systems",
    skills: [
      "Electrical Design and Estimate",
      "Electrical Engineering",
      "Problem Solving",
    ],
    image: "/images/work-samples/power-factor-correction.jpg",
    galleryImages: [
      "/images/work-samples/power-factor-correction.jpg",
      "/images/work-samples/power-factor-correction-2.jpg",
    ],
    imageAlt: "Power factor correction system electrical engineering project",
  },
  {
    id: "arduino-hybrid-energy",
    title: "Arduino-Based Hybrid Energy System",
    description:
      "A hybrid energy project using Arduino-based control and monitoring to integrate multiple energy sources into a combined system. Demonstrates knowledge of Arduino programming, electrical systems, energy management, and automation.",
    category: "Renewable Energy / Automation / Embedded Systems",
    skills: [
      "Computer Programming",
      "Electrical Design and Estimate",
      "Critical Thinking",
    ],
    image: "/images/work-samples/arduino-hybrid-energy.jpg",
    imageAlt: "Arduino-based hybrid energy system project",
  },
]

export const technicalDrawings: GalleryItem[] = [
  {
    id: "lic-3rd-floor-power-layout",
    title: "LIC 3rd Floor — Power Layout",
    description:
      "Electrical power layout drawing for the LIC 3rd Floor project (Español, Berza, Labawan). Shows distribution and layout planning for the floor electrical design.",
    category: "Electrical Design / AutoCAD",
    skills: ["AutoCAD", "Electrical Design and Estimate", "Planswift"],
    image: "/images/technical-drawings/lic-3rd-floor-power-layout.png",
    imageAlt: "LIC 3rd Floor electrical power layout drawing",
    assetUrl: "/technical-drawings/ESPANOL-BERZA-LABAWAN_LIC-3RD-FLOOR_Power Layout.pdf",
    assetLabel: "Download Power Layout PDF",
  },
  {
    id: "lic-3rd-floor-report",
    title: "LIC 3rd Floor — Project Report",
    description:
      "Project report documentation for the LIC 3rd Floor electrical design, including engineering calculations, design details, and supporting technical information.",
    category: "Technical Documentation",
    skills: ["Electrical Design and Estimate", "Engineering Documentation"],
    image: "/images/technical-drawings/lic-3rd-floor-report.png",
    imageAlt: "LIC 3rd Floor project report cover and summary page",
    assetUrl: "/technical-drawings/ESPANOL-BERZA-LABAWAN_LIC-3RD-FLOOR_Report.pdf",
    assetLabel: "Download Project Report PDF",
  },
  {
    id: "lic-3rd-floor-autocad",
    title: "LIC 3rd Floor — AutoCAD Drawing Files",
    description:
      "AutoCAD source drawing files for the LIC 3rd Floor electrical design project. Native DWG format for editable engineering drawings and layout documentation.",
    category: "AutoCAD / Technical Drawings",
    skills: ["AutoCAD", "Electrical Design and Estimate"],
    image: "/images/technical-drawings/lic-3rd-floor-autocad-preview.svg",
    imageAlt: "AutoCAD DWG drawing files for LIC 3rd Floor project",
    assetUrl: "/technical-drawings/lic-3rd-floor-autocad.dwg",
    assetLabel: "Download AutoCAD DWG",
  },
]

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Registered Electrical Engineer",
    organization: "Professional Regulation Commission",
    date: "August 2025",
    description: "Professional license as Registered Electrical Engineer.",
    image: "/images/certificates/certificate-of-passing-prc.pdf",
    previewImage: "/images/certificates/registered-electrical-engineer.png",
  },
  {
    id: "cert-2",
    title: "DOST-SEI Scholarship Awardee",
    organization: "Department of Science and Technology — SEI",
    date: "2020–2025",
    description: "Science Education Institute scholarship for engineering studies.",
    image: "/images/certificates/scholarship.jpg",
    previewImage: "/images/certificates/scholarship-preview.jpg",
  },
  {
    id: "cert-3",
    title: "Basic Occupational Safety and Health Seminar",
    organization: "[Organization from portfolio]",
    date: "2023",
    description: "Training on occupational safety and health practices.",
    image: "/images/certificates/labawan-bosh-cert.pdf",
    previewImage: "/images/certificates/basic-occupational-safety-and-health-seminar.png",
  },
  {
    id: "cert-4",
    title: "On-the-Job Training — Davao Light and Power Co.",
    organization: "Davao Light and Power Co.",
    date: "July 2024",
    description: "Engineering internship completion at Davao Light and Power Company.",
    image: "/images/certificates/ojt-certificate.pdf",
    previewImage: "/images/certificates/on-the-job-training.png",
  },
]

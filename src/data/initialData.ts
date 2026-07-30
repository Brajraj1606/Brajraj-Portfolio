import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  contact: {
    name: "BRAJRAJSINGH RAO",
    title: "Cyber Security & Digital Forensics Specialist | IT Professional",
    email: "raobrajraj1606@gmail.com",
    phone: "+91 840123860",
    location: "Ahmedabad, GJ 382350",
    avatarUrl: "WhatsApp Image 2026-04-24 at 1.07.34 PM.jpeg",
    github: "github.com/brajraj-rao",
    linkedin: "linkedin.com/in/brajraj-rao",
    summary:
      "Motivated and detail-oriented IT professional pursuing MSc in Cyber Security & Digital Forensics at Gujarat University with strong foundational knowledge in programming languages, web technologies, and cybersecurity tools. Experienced in real-world cybersecurity investigation through a 3-month internship with the CID Cyber Crime Cell, Gujarat. Seeking opportunities in cybersecurity or digital forensics to contribute to impactful and secure projects."
      },
  socials: {
  linkedin: "https://linkedin.com/in/brajraj-rao",
  github: "https://github.com/brajraj-rao",
  instagram: "https://instagram.com/brajraj_rao",
  twitter: "https://x.com/brajraj_rao",
  tryhackme: "https://tryhackme.com/p/brajrajrao",
  hackthebox: "https://app.hackthebox.com/profile/brajrajrao"
}
  internship: {
    role: "Cyber Security Intern",
    organization: "CID State Cyber Crime Cell, Gujarat",
    location: "Gujarat, India",
    duration: "3 Months (May 2025 - July 2025)",
    startDate: "05/2025",
    endDate: "07/2025",
    bullets: [
      "Assisted in State cyber-crime investigations involving digital evidence collection and analysis.",
      "Worked with forensic tools, including Autopsy for disk image analysis and evidence recovery.",
      "Monitored dark web activities as part of cyber threat intelligence operations.",
      "Gained hands-on experience with Kali Linux tools for ethical hacking and vulnerability assessment.",
      "Participated in case analysis, documentation, and reporting of cyber incidents."
    ],
    toolsUsed: [
      "Autopsy",
      "Kali Linux",
      "Dark Web Monitoring",
      "Steganography",
      "Disk Forensics",
      "Tor Browser",
      "Incident Reporting"
    ]
  },
  skills: [
    {
      category: "Cyber Security & Forensics",
      items: [
        "Autopsy",
        "Kali Linux",
        "Steganography Tools",
        "Dark Web Monitoring",
        "VMware",
        "Digital Forensics",
        "Ethical Hacking",
        "Threat Intelligence"
      ]
    },
    {
      category: "Programming Languages",
      items: ["C", "C++", "C#", "Python", "Java", "PHP"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "HTML5", "CSS", "JavaScript"]
    },
    {
      category: "Databases & ERP",
      items: ["MySQL Workbench", "PhpMyAdmin", "Odoo ERP Platform"]
    },
    {
      category: "Tools & Environments",
      items: [
        "Visual Studio Code",
        "Code Blocks",
        "VMware Workstation",
        "GitHub",
        "Tor Browser",
        "MS Office"
      ]
    },
    {
      category: "Core Competencies",
      items: [
        "Problem Solving",
        "Software Debugging",
        "Database Design & Optimization",
        "Case Documentation"
      ]
    }
  ],
  software: [
    "Visual Studio Code",
    "Code Blocks",
    "MySQL Workbench",
    "PhpMyAdmin",
    "Odoo ERP Platform",
    "Autopsy (Digital Forensics)",
    "Kali Linux",
    "VMware Workstation",
    "GitHub (basic knowledge)",
    "Tor Browser"
  ],
  projects: [
    {
      id: "adroit-premium",
      title: "Adroit Premium",
      type: "Tech Web Project",
      badge: "Web Showcase",
      technologies: ["HTML5", "CSS", "JavaScript", "PHP"],
      description: [
        "Developed a professional tech-focused website showcasing advanced web development skills.",
        "Implemented responsive design optimised for both desktop and mobile platforms.",
        "Integrated modern UI/UX principles with seamless navigation and interactive elements."
      ],
      url: "adroit premium (local deployment)"
    },
    {
      id: "furnishwise",
      title: "FurnishWise",
      type: "Online Furniture Store",
      badge: "Final Year E-Commerce",
      technologies: ["HTML5", "CSS", "JavaScript", "PHP", "MySQL"],
      description: [
        "Developed a fully functional e-commerce website as a final year project offering seamless online furniture shopping.",
        "Implemented a secure user authentication and registration system.",
        "Designed a dynamic product catalogue with categories, detailed descriptions, and real-time pricing.",
        "Built a functional shopping cart with add/remove/update features and real-time total price display.",
        "Integrated simulated payment gateway and order summary in the checkout process.",
        "Developed an admin panel for managing inventory and tracking user orders."
      ]
    },
    {
      id: "odoo-business",
      title: "Odoo-Based Business Website",
      type: "ERP Automation & Web",
      badge: "Enterprise Solution",
      technologies: ["Python", "Odoo Framework"],
      description: [
        "Created a custom business website using the Odoo ERP platform to demonstrate integrated business process automation.",
        "Developed and configured custom Odoo modules tailored to specific business needs.",
        "Showcased ERP features such as inventory management, sales tracking, and CRM integration.",
        "Ensured responsive design optimised for both desktop and mobile devices."
      ]
    },
    {
      id: "guess-game",
      title: "GUESS Game",
      type: "C Programming Logic Project",
      badge: "CLI Application",
      technologies: ["C Language"],
      description: [
        "Built a simple number guessing game to reinforce programming logic and control structures in C.",
        "Program randomly selects a number within a defined range (1 to 100).",
        "User inputs guesses with real-time feedback (too high / too low / correct).",
        "Included an attempt counter to limit guesses and determine the game result.",
        "Practised use of loops, conditionals, and user input handling to build game logic."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science – Cyber Security & Digital Forensics",
      institution: "Department of Biochemistry & Forensic Sciences, Gujarat University",
      location: "Ahmedabad, Gujarat",
      period: "06/2025 to 04/2027",
      status: "Pursuing"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "JG Group of Colleges, Gujarat University",
      location: "Ahmedabad, Gujarat",
      period: "06/2022 to 04/2025",
      grade: "CGPA: 6.40%"
    },
    {
      degree: "HSC (12th Grade): ARTS",
      institution: "S.M. International School, GSEB",
      location: "Ahmedabad, Gujarat",
      period: "06/2021 to 04/2022",
      grade: "GPA: 65%"
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Motherland International School, GSEB",
      location: "Ahmedabad, Gujarat",
      period: "06/2019 to 04/2020",
      grade: "GPA: 60%"
    }
  ],
  certifications: [
    {
      title: "3-Month Internship Certificate",
      issuer: "CID State Cyber Crime Cell, Gujarat",
      date: "07/2025"
    },
    {
      title: "C Programming Certification",
      issuer: "Samyak Computer Classes",
      date: "09/2022"
    },
    {
      title: "C++ Programming Certification",
      issuer: "Samyak Computer Classes",
      date: "09/2022"
    },
    {
      title: "CCC (Course on Computer Concepts)",
      issuer: "Patel Web Solution",
      date: "10/2020"
    }
  ],
  languages: ["English", "Hindi", "Gujarati"],
  interests: [
    "Exploring new web technologies and frameworks",
    "Cybersecurity, digital forensics & ethical hacking",
    "Learning open-source tools and platforms",
    "Software development and debugging",
    "Database design and optimisation",
    "Attending hackathons and tech meetups"
  ]
};

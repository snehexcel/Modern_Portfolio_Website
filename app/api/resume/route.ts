import { NextResponse } from "next/server"

export async function GET() {
  const resumeData = {
    personalInfo: {
      name: "Sneha Kumari",
      phone: "+91-9304983303",
      email: "snehabaranwal5613@gmail.com",
      linkedin: "https://www.linkedin.com/in/sneha-k-9a0071252/",
      github: "https://github.com/snehexcel",
      twitter: "https://x.com/BaranSneha",
      leetcode: "leetcode.com/snehexcel",
      geeksforgeeks: "geeksforgeeks.org/user/snehexcel",
      portfolio: "sneha-portfolio.vercel.app",
    },
    workExperience: [
      {
        company: "Suthraya Startup",
        position: "Frontend Developer Intern",
        duration: "Jan 2025 – March 2025",
        location: "Remote",
        achievements: [
          "40% Engagement Boost: Migrated from CRA to Next.js 14 with SSR/ISR, optimized images (WebP/AVIF), and improved Lighthouse score from 73→95+",
          "45% Fewer Re-renders: Optimized state management using React.memo + useCallback hooks, combined with Redux Toolkit for global state (Profile page optimization)",
          "Feature Development: Delivered dark mode (82% adoption), real-time notifications (WebSocket), and 8+ features including advanced search (debounced API calls) and responsive layouts.",
        ],
      },
    ],
    projects: [
      {
        name: "E-Commerce Grocery Webapp",
        description:
          "Developed a modern online grocery shopping platform using Next.js 14 and Tailwind CSS, focusing on responsive design and performance optimization.",
        features: [
          "Implemented key features including category-specific product browsing, cart management, and wishlist functionality to enhance the user experience.",
          "Integrated a user dashboard for managing orders and account settings, with dark mode support for improved accessibility.",
        ],
        technologies: ["Next.js 14", "Tailwind CSS", "React", "TypeScript"],
      },
      {
        name: "LMS Virtual University",
        description:
          "Built a comprehensive LMS using Next.js, Tailwind CSS, and shadcn/ui to support multiple user roles: students, faculty, department administrators, and super administrators.",
        features: [
          "Developed role-based dashboards for students, faculty, and administrators, providing functionalities such as course management, grading, progress tracking, and user management.",
          "Integrated responsive design with mobile-first principles and dark mode support, ensuring accessibility and a seamless user experience across devices.",
        ],
        technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
      },
    ],
    technicalSkills: {
      languages: ["C++", "Python", "C", "JavaScript", "TypeScript"],
      computerEssentials: [
        "Data Structures and Algorithms",
        "Operating System",
        "Database Management System",
        "OOP",
        "Computer Networks",
        "Machine Learning",
      ],
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "React", "MongoDB", "Node.js", "Next.js"],
      developerTools: ["GitHub", "VS Code"],
    },
    education: [
      {
        institution: "Sharda University, Greater Noida",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        duration: "Oct 2022 - Jun 2026",
        cgpa: "8.2",
      },
      {
        institution: "Modern English School, Nawada",
        degree: "Senior Secondary (XII), Major - PCM (Science)",
        duration: "Jun 2020 - Apr 2021",
        percentage: "87%",
      },
    ],
    achievements: [
      "Awarded 3rd Prize Winner in the 6th edition of the Technovation Hackathon, competing among 2400+ students from 18 states, with a focus on developing AR/VR projects using Unity to create immersive and interactive experiences.",
      "Smart India Hackathon 2024 (Team Leader / Participants): Designed a team of 4 in the Smart India Hackathon 2023 and 2024, contributing innovative solutions to problems focusing on building a real-time solution by developing a Women Safety App.",
      "Achieved top 10 ranking at the 5th Technovation Hackathon, demonstrating strong problem solving and teamwork skills by developing an Arduino-based alarm system for the management of train traffic.",
    ],
    certifications: [
      "Database Programming with SQL",
      "Microsoft Learn Ambassadors Cloud Skill Challenge On AZURE AI Fundamentals",
    ],
  }

  // Generate PDF-like text content
  const resumeContent = `
SNEHA KUMARI
Frontend Developer & Full-Stack Enthusiast

Contact Information:
Phone: ${resumeData.personalInfo.phone}
Email: ${resumeData.personalInfo.email}
LinkedIn: ${resumeData.personalInfo.linkedin}
GitHub: ${resumeData.personalInfo.github}
Portfolio: ${resumeData.personalInfo.portfolio}

WORK EXPERIENCE
${resumeData.workExperience
  .map(
    (exp) => `
${exp.company} | ${exp.position}
${exp.duration} | ${exp.location}
${exp.achievements.map((achievement) => `• ${achievement}`).join("\n")}
`,
  )
  .join("\n")}

PROJECTS
${resumeData.projects
  .map(
    (project) => `
${project.name}
${project.description}
${project.features.map((feature) => `• ${feature}`).join("\n")}
Technologies: ${project.technologies.join(", ")}
`,
  )
  .join("\n")}

TECHNICAL SKILLS
Languages: ${resumeData.technicalSkills.languages.join(", ")}
Computer Essentials: ${resumeData.technicalSkills.computerEssentials.join(", ")}
Technologies: ${resumeData.technicalSkills.technologies.join(", ")}
Developer Tools: ${resumeData.technicalSkills.developerTools.join(", ")}

EDUCATION
${resumeData.education
  .map(
    (edu) => `
${edu.institution}
${edu.degree}
${edu.duration}
${edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
`,
  )
  .join("\n")}

ACHIEVEMENTS
${resumeData.achievements.map((achievement) => `• ${achievement}`).join("\n")}

CERTIFICATIONS
${resumeData.certifications.map((cert) => `• ${cert}`).join("\n")}
`

  return new NextResponse(resumeContent, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="Sneha_Kumari_Resume.txt"',
    },
  })
}

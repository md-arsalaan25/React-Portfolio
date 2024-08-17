import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "09/2023 - Present",
    role: "Associate Product Manager",
    company: "Convin",
    description: `I integrated Apache Superset with Row Level Security into Convin, using PostgreSQL for client-specific visualizations. I documented product guides and created demo videos, aiding the sales team in onboarding three clients in two months. I developed and launched the "Sales Script" product, securing two new clients, and improved sprint planning, increasing weekly deployments from 7 to 12. I reported to Lalitendu Bal and received a 3x internship extension.`,
    technologies: ["Apache", "Jira", "PostgreSQL", "Figma"],
  },
  {
    year: "01/2024 - 04/2024",
    role: "Digital Strategy Intern Intern",
    company: "Mailmodo",
    description: `I analyzed over 1,500 web pages on Mailmodo's mobile sites, identifying issues impacting Core Web Vitals like INP and LCP, and validated these findings in lab and user environments. I prioritized and resolved performance issues through market research, collaborated with developers for seamless integration, and improved SEO rankings. I reported to Zeeshan Akhtar, Head of Marketing, and received a Letter of Recommendation.`,
    technologies: ["React", "JavaScript", "DevTools", "SEO"],
  },
  {
    year: "06/2023 - 09/2023",
    role: "Product Management Intern",
    company: "Dubdub.ai",
    description: `I integrated Intercom to streamline feature requests and customer complaints, collaborated on the quarterly product roadmap, and implemented Mixpanel-tracked metrics, reducing churn by 12% WoW. I resolved a CPU usage bug through RCA, cutting video processing time by 75%, and optimized the conversion funnel through heatmaps and cohort analysis, doubling revenue from subscriptions. I reported to Anubhav Singh, the Founder, and received a 2x internship extension.`,
    technologies: ["Mixpanel", "Retool", "MySQL", "Miro"],
  },
];

export const PROJECTS = [
  {
    title: "Black Diamond Consulting",
    image: project1,
    description:
      "Founded a Venture Capital consulting firm that assisted early-stage startups raise $400k through angel investments and pre-seed rounds. Led a team of 40 across various domains, providing product development, digital marketing, and business development services. Bootstrapped with $300 and generated $9k in revenue within 6 months.",
    technologies: ["VC", "Consulting", "Entrepreneurship"],
  },
  {
    title: "OrganHub",
    image: project2,
    description:
      "A full stack web application, which helped us secure first place in healthcare and sixth position overall at IIT Dhanbad’s annual hackathon for 2023.Conducted market research on organ donation and transplantation, designed a responsive web application on Figma, and contributed to front-end development with hash encryption for user data protection.",
    technologies: ["CSS", "EJS", "JavaScript","MongoDB"],
  },
  {
    title: "Marico (Live Project)",
    image: project3,
    description:
      "Led a diverse team of 35+ students from IIT Dhanbad, IIT KGP, SRCC, and BITS, processing over 50,000 data points for insight extraction. By implementing advanced data tagging with Labelbox and SuperAnnotate, enhanced efficiency and accuracy of data analysis. Using Python and BigQuery, transformed complex data into compelling visual narratives, aiding in analysis and decision-making.",
    technologies: ["Advanced Excel", "Python","BigQuery"],
  },
  {
    title: "Schbang (Live Project)",
    image: project4,
    description:
      " Led a market research and new market entry project on medical scrubs, earning a Letter of Appreciation from Schbang. Conducted a survey of 500 users across 5 cities, analyzing preferences like comfort and durability using pivot tables. Drafted a presentation with visual representations of insights created on Tableau and presented findings to the Head of Strategy.",
    technologies: ["Market Research", "Tableau", "GTM"],
  },
];

export const CONTACT = {
  address: "IIT ISM Dhanbad, Jharkhand-826004",
  phoneNo: "+91 6289253227",
  email: "21je0167@iitism.ac.in",
};

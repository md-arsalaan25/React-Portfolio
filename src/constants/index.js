import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am  a final-year B.Tech student at IIT (ISM) Dhanbad. Since my first year, I've been deeply passionate about product management, working throughout all stages of both B2B and B2C product lifecycle.

In my third year, I co-founded a VC consulting firm, where I helped over 15 early-stage startups secure pre-seed funding and connect with angel investors. I also got to lead product and analytics projects for MSMEs in Dubai, India, and France through my venture.

I also led the Product Management Club of IIT Dhanbad, being the Overall Coordinator where I’ve led 20+ product based projects for MSMEs and multinational brands like Marico Ltd. I’m proud of the 500+ strong product community I’ve built, mentored by 50+ industry experts and college alumni.

Outside of work, I enjoy playing the guitar and writing Urdu shayari, with a few ghazals becoming quite popular on campus.`;

export const EXPERIENCES = [
  {
    year: "09/2023 - Present",
    role: "Product Management Intern",
    company: "Convin",
    description: `During my time at Convin, I played a key role in enhancing the product experience by creating detailed product guides and manuals, as well as producing video guides for client demos. I was responsible for drafting Product Requirement Documents (PRDs) for both major and minor features on the platform. Additionally, I created analytics charts using Apache Superset and configured B2B client domains with Row Level Security, enabling clients to securely access their data. I also designed and drafted product newsletters, keeping both clients and internal stakeholders informed and engaged. I reported to Lalitendu Bal and received a 3x internship extension.`,
    technologies: ["Apache", "Jira", "PostgreSQL", "Figma"],
  },
  {
    year: "01/2024 - 04/2024",
    role: "Digital Strategy Intern",
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

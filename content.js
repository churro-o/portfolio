// content.js
// Fill in each field below using your resume. Do not rename the keys.
// Components read these exact field names. Leave arrays empty ([])
// for sections you do not have content for yet.

export const sidebar = {
  name: "Iris Xu",
  tagline: "Product manager for enterprise software, analytics, and AI-enabled workflows",
  photo: "",
};

export const personalInfo = {
  bio:
    "I am a product management professional with a dual vantage point on enterprise software: I have helped ship and launch analytics features at SAP, and I now support implementation and adoption for Canada's first SmartRecruiters rollout at IBM. I move between product discovery, requirements, engineering constraints, analytics, and stakeholder communication, with a business and computer science foundation behind the work.",
  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "Master of Science in Computational Data Analytics",
      years: "2025-Present",
      note: "Online program focused on applied analytics and computational methods.",
    },
    {
      institution: "University of British Columbia, Sauder School of Business",
      degree:
        "Bachelor of Commerce in Business and Computer Science, Business Analytics Concentration",
      years: "2018-2024",
      note: "Combined business strategy, computer science, and analytics coursework.",
    },
  ],
};

export const experience = [
  {
    company: "IBM",
    role: "Associate Consultant",
    years: "2026-Present",
    description:
      "Drive product implementation work for Canada's first SmartRecruiters rollout by uncovering recruiting pain points, translating workflows into functional requirements and product specifications, configuring scalable solutions, validating requirements, and coordinating with engineering and client stakeholders through testing and release readiness.",
  },
  {
    company: "SAP",
    role: "Associate Product Manager Intern",
    years: "2023",
    description:
      "Translated ambiguous business and user needs into user stories and acceptance criteria for SAP Analytics Cloud, prioritized a Jira backlog of 50+ feature requests using revenue, request volume, and feasibility signals, built 10+ usage dashboards to identify adoption patterns, led UAT, and presented feature launches to 200+ stakeholders.",
  },
  {
    company: "Canadian Tire",
    role: "Data Analyst Intern, eCommerce",
    years: "2022",
    description:
      "Converted customer and operational data into recommendations using SQL, Excel, and Tableau, and designed an interim database for 10,000+ legacy records during a platform migration to close a critical data access gap.",
  },
];

export const projects = [];

export const certifications = [
  {
    name: "SmartRecruiters Certification",
    issuer: "SmartRecruiters",
    date: "2026",
    credentialURL: "",
  },
  {
    name: "SAP SuccessFactors Employee Central Certification",
    issuer: "SAP SuccessFactors",
    date: "2026",
    credentialURL: "",
  },
];

export const interests = [
  { label: "Product Discovery", icon: "PD" },
  { label: "Requirements & User Stories", icon: "RS" },
  { label: "Backlog Prioritization", icon: "BP" },
  { label: "Product Analytics", icon: "PA" },
  { label: "UAT & Release Readiness", icon: "QA" },
  { label: "Stakeholder Communication", icon: "SC" },
  { label: "SQL, Tableau & Dashboards", icon: "DA" },
  { label: "Generative AI Workflows", icon: "AI" },
];

export const nextDestination = {
  place: "AI-assisted product workflows",
  note:
    "Exploring how product managers can use LLMs to accelerate requirements analysis, documentation, research, and solution delivery without losing judgment or accountability.",
};

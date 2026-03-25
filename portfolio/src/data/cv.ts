// CV Data — Dr. Mary Abiola Adeoye

export interface Personal {
  name: string;
  surname: string;
  title: string;
  designation: string;
  role: string;
  organisation: string;
  email: string;
  orcid: string;
  phone: string[];
  address: string;
  origin: string;
  languages: string[];
  researchInterest: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  period: string;
  highlight: boolean;
}

export interface ExperienceItem {
  role: string;
  division?: string;
  organisation: string;
  period: string;
  current: boolean;
}

export interface Thesis {
  author: string;
  year: number;
  title: string;
  type: string;
  institution: string;
}

export interface Book {
  author?: string;
  authors?: string;
  year: number;
  title: string;
  publisher: string;
  location: string;
}

export interface Chapter {
  author: string;
  year: number;
  title: string;
  book: string;
  editor: string;
  publisher: string;
  location: string;
}

export interface JournalArticle {
  authors: string;
  year: number;
  title: string;
  journal: string;
  details?: string;
  doi?: string;
  month?: string;
}

export interface GenericArticle {
  author: string;
  year: number;
  title: string;
  venue: string;
  pages?: string;
  month?: string;
}

export interface Publications {
  theses: Thesis[];
  books: Book[];
  coAuthored: Book[];
  chapters: Chapter[];
  journals: JournalArticle[];
  articles: GenericArticle[];
}

export interface PeerReviewItem {
  title: string;
  journal: string;
}

export interface AwardItem {
  title: string;
  body: string;
  year: number;
}

export interface ProfCert {
  title: string;
  year: number;
}

export interface Referee {
  name: string;
  title: string;
  organisation: string;
  address: string;
  tel: string[];
  email: string;
}

export const personal: Personal = {
  name: "James Ayangunna",
  surname: "Ayangunna",
  title: "Professor",
  designation: "Professor of Social Sciences",
  role: "Professor",
  organisation: "University of Ibadan",
  email: "To be provided",
  orcid: "To be provided",
  phone: ["To be provided"],
  address: "Department of Social Sciences, University of Ibadan, Nigeria",
  origin: "Nigeria",
  languages: ["English"],
  researchInterest:
    "Research interests to be provided. Advancing knowledge through rigorous research and dedicated scholarship in the social sciences.",
};

export const education: EducationItem[] = [
  {
    degree: "To be provided",
    institution: "University of Ibadan",
    location: "Ibadan, Oyo State, Nigeria",
    period: "—",
    highlight: true,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Professor",
    division: "Department of Social Sciences",
    organisation: "University of Ibadan",
    period: "Present",
    current: true,
  },
];

export const publications: Publications = {
  theses: [],
  books: [],
  coAuthored: [],
  chapters: [],
  journals: [],
  articles: [],
};

export const peerReview: PeerReviewItem[] = [];

export const memberships: string[] = [];

export const awards: AwardItem[] = [];

export const professionalCerts: ProfCert[] = [];

export const referees: Referee[] = [];

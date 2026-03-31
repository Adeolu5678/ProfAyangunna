// CV Data — Prof. James Ayanrinde Ayangunna

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
  name: "James Ayanrinde Ayangunna",
  surname: "Ayangunna",
  title: "PhD",
  designation: "Professor of Social Work and Social Welfare",
  role: "Department of Social Work",
  organisation: "University of Ibadan",
  email: "ayangunna@yahoo.com",
  orcid: "To be provided",
  phone: ["+234 802 381 3135"],
  address: "Department of Social Work, University of Ibadan, Ibadan, Nigeria",
  origin: "Ibadan, Oyo State, Nigeria",
  languages: ["English", "Yoruba"],
  researchInterest:
    "My scholarly work focuses on social welfare, health social work, health promotion, social policy, and development studies. I investigate social determinants of wellbeing, vulnerable populations, and evidence-based social interventions that inform policy and professional social work practice.",
};

export const education: EducationItem[] = [
  {
    degree: "Doctor of Philosophy (PhD), Social Welfare",
    institution: "University of Ibadan",
    affiliation: "Department of Adult Education",
    location: "Ibadan, Nigeria",
    period: "2006",
    highlight: true,
  },
  {
    degree: "Master of Public Health (MPH), Health Promotion",
    institution: "University of Ibadan",
    affiliation: "Department of Health Promotion and Education",
    location: "Ibadan, Nigeria",
    period: "2001",
    highlight: false,
  },
  {
    degree: "Master of Social Work (MSW), Health Social Work",
    institution: "University of Ibadan",
    affiliation: "Department of Social Work",
    location: "Ibadan, Nigeria",
    period: "1994",
    highlight: false,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Professor",
    division: "Social Casework and Social Policy",
    organisation: "Department of Social Work, University of Ibadan",
    period: "2017–Present",
    current: true,
  },
  {
    role: "Lecturer II to Senior Academic Ranks",
    organisation: "Department of Social Work, University of Ibadan",
    period: "2005–2016",
    current: false,
  },
  {
    role: "External Examiner",
    organisation:
      "Universities of Lagos, Benin, Ilorin, Lafia, Tai Solarin, Lokoja, Babcock, Redeemers and York University Toronto",
    period: "Ongoing",
    current: false,
  },
  {
    role: "Consultant",
    organisation:
      "UNICEF and Federal Ministry of Women Affairs and Social Development",
    period: "Ongoing",
    current: false,
  },
  {
    role: "Professorial Assessor",
    organisation: "Multiple Nigerian Universities",
    period: "Ongoing",
    current: false,
  },
];

export const publications: Publications = {
  theses: [],
  books: [],
  coAuthored: [],
  chapters: [],
  journals: [
    {
      authors: "Ayangunna, J.A.",
      year: 2011,
      title:
        "Parental Factors as Correlates of Care of Children with Disabilities in Ibadan, Nigeria",
      journal: "Journal of Nigerian Social Work Educators",
      details: "Vol. 2, No. 1, pp. 120–131",
    },
    {
      authors: "Ayangunna, J.A.",
      year: 2012,
      title:
        "Factors Influencing Differential Gender Participation in Reproductive Behaviour among Females in Ibadan, Nigeria",
      journal: "International Journal of Educational Leadership",
      details: "Vol. 4, No. 4, pp. 139–146",
    },
    {
      authors: "Ayangunna, J.A.",
      year: 2013,
      title:
        "Parental Influence and Peer Pressure as Predictors of Delinquent Behaviours among Youth in Abeokuta, Nigeria",
      journal: "Journal of Nigerian Social Work Educators",
      details: "Vol. 4, No. 1, pp. 1–14",
    },
    {
      authors: "Ayangunna, J.A.",
      year: 2015,
      title:
        "Effects of Culture and Human Rights on Sexual Orientation in Africa",
      journal: "Nigerian Journal of Social Work Education",
      details: "Vol. 14, pp. 96–107",
    },
    {
      authors: "Ayangunna, J.A.",
      year: 2015,
      title:
        "Poverty Reduction Programmes in Nigeria: Altruistic or Pragmatic Approach, Which Works Better?",
      journal: "Jos Journal of Social Issues",
      details: "Vol. 8, No. 1, pp. 184–194",
    },
    {
      authors: "Ayangunna, J.A.",
      year: 2016,
      title:
        "School Social Work Practice: A Way Out for Victims of Human Trafficking",
      journal: "Nigerian Journal of Applied Psychology",
      details: "Vol. 18, pp. 260–270",
    },
    {
      authors: "Ayangunna, J.A.",
      year: 2017,
      title:
        "Socio-Economic Factors as Determinants of Quality of Life of Chronically-ill Patients in Selected Hospitals in Ibadan, Nigeria",
      journal: "Ibadan Journal of Educational Studies",
      details: "Vol. 14, No. 1, pp. 107–112",
      month: "January 2017",
    },
    {
      authors: "Ayangunna, J.A.",
      year: 2022,
      title:
        "The Impact of Insecurity among Affected Individuals in the Society: Implications for Medical Social Workers' Practice in Nigeria",
      journal: "Nigerian Journal of Social Work Education",
      details: "Vol. 21, pp. 220–232",
    },
    {
      authors: "Balogun, O.O. and Ayangunna, J.A.",
      year: 2023,
      title:
        "Perceiving Recidivism as Product of Inmates' Neglect and Inadequacy in Nigerian Correctional System",
      journal: "Nigerian Journal of Social Work Education",
      details: "Vol. 22, pp. 122–130",
    },
    {
      authors: "Balogun, O.O. and Ayangunna, J.A.",
      year: 2024,
      title:
        "Democratic Discourse Towards Effective Gender Equality and Security in Nigeria",
      journal: "Counselling and Behavioural Studies Journal",
      details: "Vol. 14, pp. 87–102",
    },
  ],
  articles: [],
};

export const peerReview: PeerReviewItem[] = [
  {
    title:
      "Institutional external examination and quality assurance across undergraduate and postgraduate social work programmes",
    journal:
      "Universities of Lagos, Benin, Ilorin, Lafia, Tai Solarin, Lokoja, Babcock, Redeemers and York University Toronto",
  },
  {
    title:
      "Professorial assessments and academic evaluation support for university appointment and promotion processes",
    journal: "Multiple Nigerian universities",
  },
  {
    title:
      "Policy and programme advisory reviews for child protection and social development interventions",
    journal:
      "UNICEF; Federal Ministry of Women Affairs and Social Development",
  },
];

export const memberships: string[] = [
  "Nigeria Association of Social Workers (NASoW) — Member",
  "Association of Medical Social Workers of Nigeria (AMSWON) — Member",
  "Registered Social Worker, United Kingdom",
  "International Association of Schools of Social Work — Member",
  "Society for Social Work Research — Member",
  "Nigerian Association of Social Work Educators — Member",
  "Nigerian Council for Social Work (NCW) Governing Council — National Secretary",
];

export const awards: AwardItem[] = [
  {
    title: "Professional Distinction",
    body: "Promoted to the grade of Professor, University of Ibadan",
    year: 2017,
  },
];

export const professionalCerts: ProfCert[] = [
  { title: "Registered Social Worker, United Kingdom", year: 0 },
];

export const referees: Referee[] = [
  {
    name: "Available on Request",
    title: "Referees and professional references",
    organisation: "University of Ibadan and partner institutions",
    address: "Ibadan, Nigeria",
    tel: [],
    email: "ja.ayangunna@mail.ui.edu.ng",
  },
];

export type Award = { year: string; title: string; org: string };

/** Single source of truth — keep Hero / counters in sync with this list. */
export const awards: Award[] = [
  { year: '2025', title: 'Rank 3 - CodeFest', org: 'FPT University' },
  { year: '2023', title: 'IELTS 6.0', org: 'British Council' },
  { year: '2022', title: '2nd Prize - Young Informatics Contest', org: 'Quảng Ninh Province' },
  { year: '2022', title: 'Honorable Mention - Hùng Vương Summer Camp', org: 'Regional Informatics' },
  { year: '2022', title: 'Consolation Prize - Provincial Informatics', org: 'Quảng Ninh Province' },
  { year: '2021', title: '3rd Prize - Young Informatics Contest', org: 'Quảng Ninh Province' },
  { year: '2021', title: 'Honorable Mention - Red River Delta Regional', org: 'Inter-province Contest' },
  { year: '2021', title: '3rd Prize - Provincial Informatics', org: 'Quảng Ninh Province' },
  { year: '2020', title: '2nd Prize - Provincial Informatics', org: 'Quảng Ninh Province' },
  { year: '2020', title: 'Top 2 Entrance Scorer', org: 'Ha Long High School for the Gifted' },
];

export const AWARDS_COUNT = awards.length;

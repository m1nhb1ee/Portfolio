/**
 * Portfolio voice — one thesis, one register (engineer @ HUST).
 * Import from Hero, About, Contact, Terminal, and stats consumers.
 */

import { AWARDS_COUNT } from '../data/awards';

export const PROJECT_COUNT = 6;

export const portfolioStats = {
  awardsListed: AWARDS_COUNT,
  projects: PROJECT_COUNT,
  internshipMonths: 4,
  productsCrawledMin: 100,
} as const;

/** One-line thesis (repeated in variations across the site). */
export const thesisLine =
  'AI engineering student at HUST: I ship model-backed systems end-to-end—owning data, APIs, and deploy constraints, not just notebooks.';

/** Pull-quote length thesis for About sidebar. */
export const thesisPullquote =
  'Reliability and clear ownership beat novelty for its own sake. I prototype the path from model to product.';

export const beliefs = [
  'Measured behavior in production beats leaderboard scores nobody runs in anger.',
  'I default to owning auth, storage, and failure modes—not only the forward pass.',
  'Trade-offs get written down: what we ship, what we defer, what we verify next.',
] as const;

export const heroPhrases = [
  'HUST · SoICT — ship what you can own.',
  'Backend, DL/CV, cloud — one thread from data to deploy.',
  'Constraints first: who uses it, latency, cost, and what breaks.',
  thesisLine,
] as const;

/** Hero ticker: real anchors only (no decorative city list). */
export const heroTickerText =
  'HUST · SoICT · B.Sc. IT 2023–2027 · Python · PyTorch · Django · DRF · Supabase · AWS · OpenCV · LangGraph · PostgreSQL · github.com/m1nhb1ee · ';

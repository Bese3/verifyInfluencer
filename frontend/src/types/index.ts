export interface Influencer {
  id: string;
  name: string;
  category: string;
  trustScore: number;
  trend: 'up' | 'down';
  followers: string;
  verifiedClaims: number;
  avatarUrl: string;
}

export interface ResearchConfig {
  timeRange: 'week' | 'month' | 'year' | 'all';
  influencerName: string;
  claimsToAnalyze: number;
  includeRevenue: boolean;
  verifyWithJournals: boolean;
  selectedJournals: string[];
  notes: string;
}

export interface Claim {
  id: string;
  influencerId: string;
  content: string;
  category: string;
  verificationStatus: 'verified' | 'questionable' | 'debunked';
  confidenceScore: number;
  source: string;
  journalReferences: string[];
  createdAt: string;
}
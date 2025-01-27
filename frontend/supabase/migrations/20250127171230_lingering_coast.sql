/*
  # Initial Schema Setup for VerifyInfluencers

  1. New Tables
    - `users`
      - Standard user authentication and profile data
    - `influencers`
      - Stores influencer profiles and metrics
    - `claims`
      - Stores health claims made by influencers
    - `verifications`
      - Stores verification results for claims
    - `journals`
      - Stores scientific journal references
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create influencers table
CREATE TABLE IF NOT EXISTS influencers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  trust_score numeric DEFAULT 0,
  trend text DEFAULT 'neutral',
  followers_count numeric DEFAULT 0,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create claims table
CREATE TABLE IF NOT EXISTS claims (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  influencer_id uuid REFERENCES influencers(id) ON DELETE CASCADE,
  content text NOT NULL,
  category text NOT NULL,
  verification_status text DEFAULT 'pending',
  confidence_score numeric DEFAULT 0,
  source_url text,
  source_type text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create verifications table
CREATE TABLE IF NOT EXISTS verifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  claim_id uuid REFERENCES claims(id) ON DELETE CASCADE,
  journal_id uuid REFERENCES journals(id),
  status text NOT NULL,
  confidence_score numeric DEFAULT 0,
  verification_date timestamptz DEFAULT now(),
  verified_by uuid REFERENCES users(id),
  notes text
);

-- Create journals table
CREATE TABLE IF NOT EXISTS journals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  impact_factor numeric DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE influencers ENABLE ROW LEVEL SECURITY;
ALTER TABLE claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE journals ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Public can read influencers"
  ON influencers
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can read claims"
  ON claims
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read verifications"
  ON verifications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public can read journals"
  ON journals
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_claims_influencer ON claims(influencer_id);
CREATE INDEX IF NOT EXISTS idx_verifications_claim ON verifications(claim_id);
CREATE INDEX IF NOT EXISTS idx_influencers_category ON influencers(category);
CREATE INDEX IF NOT EXISTS idx_claims_verification_status ON claims(verification_status);
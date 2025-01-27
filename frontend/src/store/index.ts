import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { Influencer, Claim } from '../types';

interface Store {
  influencers: Influencer[];
  claims: Claim[];
  loading: boolean;
  error: string | null;
  fetchInfluencers: () => Promise<void>;
  fetchClaims: (influencerId: string) => Promise<void>;
  startResearch: (config: any) => Promise<void>;
}

export const useStore = create<Store>((set, get) => ({
  influencers: [],
  claims: [],
  loading: false,
  error: null,

  fetchInfluencers: async () => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('influencers')
        .select('*')
        .order('trust_score', { ascending: false });

      if (error) throw error;
      set({ influencers: data as Influencer[] });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  fetchClaims: async (influencerId: string) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('claims')
        .select(`
          *,
          verifications (*)
        `)
        .eq('influencer_id', influencerId);

      if (error) throw error;
      set({ claims: data as Claim[] });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  startResearch: async (config: any) => {
    set({ loading: true });
    try {
      // TODO: Implement research logic with Perplexity API
      console.log('Starting research with config:', config);
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));
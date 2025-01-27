import React, { useState } from 'react';
import { Users, CheckCircle, TrendingUp } from 'lucide-react';
import type { Influencer } from '../types';

const mockInfluencers: Influencer[] = [
  {
    id: '1',
    name: 'Dr. Peter Attia',
    category: 'Medicine',
    trustScore: 94,
    trend: 'up',
    followers: '1.2M+',
    verifiedClaims: 203,
    avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop'
  },
  {
    id: '2',
    name: 'Dr. Rhonda Patrick',
    category: 'Nutrition',
    trustScore: 91,
    trend: 'up',
    followers: '980K+',
    verifiedClaims: 156,
    avatarUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop'
  },
  {
    id: '3',
    name: 'Dr. Chris Palmer',
    category: 'Mental_health',
    trustScore: 90,
    trend: 'up',
    followers: '180K+',
    verifiedClaims: 76,
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&h=150&fit=crop'
  }
];

const categories = ['All', 'Nutrition', 'Fitness', 'Medicine', 'Mental Health'];

const Leaderboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredInfluencers = mockInfluencers.filter(
    influencer => selectedCategory === 'All' || influencer.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Influencer Trust Leaderboard</h1>
        <p className="text-gray-400">
          Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency.
          Updated daily using AI-powered analysis.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#1A1F26] rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-emerald-500" />
            <div>
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-sm text-gray-400">Active Influencers</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F26] rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-emerald-500" />
            <div>
              <div className="text-2xl font-bold">25,431</div>
              <div className="text-sm text-gray-400">Claims Verified</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1F26] rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-emerald-500" />
            <div>
              <div className="text-2xl font-bold">85.7%</div>
              <div className="text-sm text-gray-400">Average Trust Score</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#1A1F26] text-gray-400 hover:bg-[#2A2F36]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <button
          onClick={() => setSortOrder(order => (order === 'asc' ? 'desc' : 'asc'))}
          className="flex items-center space-x-2 px-4 py-2 bg-[#1A1F26] rounded-lg text-gray-400 hover:bg-[#2A2F36]"
        >
          <TrendingUp className="w-4 h-4" />
          <span>Highest First</span>
        </button>
      </div>

      <div className="bg-[#1A1F26] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">RANK</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">INFLUENCER</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">CATEGORY</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">TRUST SCORE</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">TREND</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">FOLLOWERS</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">VERIFIED CLAIMS</th>
            </tr>
          </thead>
          <tbody>
            {filteredInfluencers.map((influencer, index) => (
              <tr key={influencer.id} className="border-b border-gray-800">
                <td className="px-6 py-4">#{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={influencer.avatarUrl}
                      alt={influencer.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{influencer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{influencer.category}</td>
                <td className="px-6 py-4">
                  <span className="text-emerald-500">{influencer.trustScore}%</span>
                </td>
                <td className="px-6 py-4">
                  <TrendingUp className={`w-4 h-4 ${
                    influencer.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                  }`} />
                </td>
                <td className="px-6 py-4">{influencer.followers}</td>
                <td className="px-6 py-4">{influencer.verifiedClaims}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
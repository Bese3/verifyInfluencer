import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, AlertTriangle, XCircle, TrendingUp, Users, Link } from 'lucide-react';
import type { Claim } from '../types';

const mockClaims: Claim[] = [
  {
    id: '1',
    influencerId: '1',
    content: 'Regular exercise can improve cognitive function and memory.',
    category: 'Fitness',
    verificationStatus: 'verified',
    confidenceScore: 95,
    source: 'Twitter Post - Feb 15, 2024',
    journalReferences: ['Nature Neuroscience', 'Journal of Clinical Medicine'],
    createdAt: '2024-02-15T10:00:00Z'
  },
  {
    id: '2',
    influencerId: '1',
    content: 'Vitamin D supplementation can prevent all types of cancer.',
    category: 'Nutrition',
    verificationStatus: 'debunked',
    confidenceScore: 20,
    source: 'Instagram Post - Feb 10, 2024',
    journalReferences: ['The Lancet', 'Cancer Research'],
    createdAt: '2024-02-10T15:30:00Z'
  }
];

const InfluencerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'questionable':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'debunked':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-[#1A1F26] rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop"
            alt="Influencer"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Dr. Peter Attia</h1>
            <div className="flex items-center space-x-2 text-gray-400">
              <Users className="w-4 h-4" />
              <span>1.2M+ followers</span>
              <span>•</span>
              <span>Medicine</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#0F1218] rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-500">94%</div>
            <div className="text-sm text-gray-400">Trust Score</div>
          </div>
          <div className="bg-[#0F1218] rounded-lg p-4">
            <div className="text-2xl font-bold">203</div>
            <div className="text-sm text-gray-400">Verified Claims</div>
          </div>
          <div className="bg-[#0F1218] rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-500">
              <TrendingUp className="w-6 h-6 inline-block" />
            </div>
            <div className="text-sm text-gray-400">Trending Up</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Recent Claims</h2>
        {mockClaims.map(claim => (
          <div key={claim.id} className="bg-[#1A1F26] rounded-lg p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getStatusIcon(claim.verificationStatus)}
                <div>
                  <p className="font-medium">{claim.content}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                    <Link className="w-4 h-4" />
                    <span>{claim.source}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${
                  claim.confidenceScore >= 80 ? 'text-emerald-500' :
                  claim.confidenceScore >= 50 ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {claim.confidenceScore}%
                </div>
                <div className="text-sm text-gray-400">Confidence</div>
              </div>
            </div>

            <div className="bg-[#0F1218] rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Journal References</div>
              <div className="space-y-2">
                {claim.journalReferences.map((journal, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>{journal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerDetails;
import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import type { ResearchConfig } from '../types';

interface ResearchConfigProps {
  onSubmit: (config: ResearchConfig) => void;
}

const ResearchConfig: React.FC<ResearchConfigProps> = ({ onSubmit }) => {
  const [config, setConfig] = useState<ResearchConfig>({
    timeRange: 'month',
    influencerName: '',
    claimsToAnalyze: 50,
    includeRevenue: true,
    verifyWithJournals: true,
    selectedJournals: ['PubMed Central', 'Nature', 'Science', 'The Lancet', 'JAMA Network'],
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(config);
  };

  return (
    <div className="bg-[#1A1F26] rounded-lg p-8">
      <div className="flex items-center space-x-2 mb-8">
        <div className="h-6 w-6 text-emerald-500">⚙️</div>
        <h2 className="text-xl font-semibold">Research Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-[#0F1218] rounded-lg">
            <h3 className="font-medium mb-2">Specific Influencer</h3>
            <p className="text-sm text-gray-400 mb-4">Research a known health influencer by name</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Enter influencer name"
                className="w-full bg-[#1A1F26] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-emerald-500"
                value={config.influencerName}
                onChange={(e) => setConfig({ ...config, influencerName: e.target.value })}
              />
            </div>
          </div>

          <div className="p-4 bg-[#0F1218] rounded-lg opacity-50">
            <h3 className="font-medium mb-2">Discover New</h3>
            <p className="text-sm text-gray-400">Find and analyze new health influencers</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <button
            type="button"
            className={`p-4 rounded-lg text-center ${
              config.timeRange === 'week' ? 'bg-emerald-500' : 'bg-[#0F1218]'
            }`}
            onClick={() => setConfig({ ...config, timeRange: 'week' })}
          >
            Last Week
          </button>
          <button
            type="button"
            className={`p-4 rounded-lg text-center ${
              config.timeRange === 'month' ? 'bg-emerald-500' : 'bg-[#0F1218]'
            }`}
            onClick={() => setConfig({ ...config, timeRange: 'month' })}
          >
            Last Month
          </button>
          <button
            type="button"
            className={`p-4 rounded-lg text-center ${
              config.timeRange === 'year' ? 'bg-emerald-500' : 'bg-[#0F1218]'
            }`}
            onClick={() => setConfig({ ...config, timeRange: 'year' })}
          >
            Last Year
          </button>
          <button
            type="button"
            className={`p-4 rounded-lg text-center ${
              config.timeRange === 'all' ? 'bg-emerald-500' : 'bg-[#0F1218]'
            }`}
            onClick={() => setConfig({ ...config, timeRange: 'all' })}
          >
            All Time
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Claims to Analyze Per Influencer</label>
            <input
              type="number"
              value={config.claimsToAnalyze}
              onChange={(e) => setConfig({ ...config, claimsToAnalyze: parseInt(e.target.value) })}
              className="w-full bg-[#0F1218] border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-emerald-500"
            />
            <p className="text-sm text-gray-400 mt-1">Recommended: 50-100 claims for comprehensive analysis</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Include Revenue Analysis</h3>
              <p className="text-sm text-gray-400">Analyze monetization methods and estimate earnings</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={config.includeRevenue}
                onChange={(e) => setConfig({ ...config, includeRevenue: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Verify with Scientific Journals</h3>
              <p className="text-sm text-gray-400">Cross-reference claims with scientific literature</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={config.verifyWithJournals}
                onChange={(e) => setConfig({ ...config, verifyWithJournals: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Scientific Journals</h3>
            <div className="space-x-2">
              <button type="button" className="text-sm text-emerald-500 hover:underline">
                Select All
              </button>
              <button type="button" className="text-sm text-gray-400 hover:underline">
                Deselect All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {config.selectedJournals.map((journal) => (
              <div
                key={journal}
                className="flex items-center justify-between p-4 bg-[#0F1218] rounded-lg"
              >
                <span>{journal}</span>
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              </div>
            ))}
            <button
              type="button"
              className="flex items-center justify-center p-4 bg-[#0F1218] rounded-lg border border-dashed border-gray-700 text-gray-400 hover:border-emerald-500 hover:text-emerald-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Journal
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Notes for Research Assistant</label>
          <textarea
            value={config.notes}
            onChange={(e) => setConfig({ ...config, notes: e.target.value })}
            placeholder="Add any specific instructions or focus areas..."
            className="w-full h-32 bg-[#0F1218] border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Start Research</span>
        </button>
      </form>
    </div>
  );
};

export default ResearchConfig;
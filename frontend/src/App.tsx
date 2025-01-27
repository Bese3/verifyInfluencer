import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ResearchConfig from './components/ResearchConfig';
import Leaderboard from './components/Leaderboard';
import InfluencerDetails from './components/InfluencerDetails';

function App() {
  const handleResearchSubmit = (config: any) => {
    console.log('Research config:', config);
    // TODO: Implement research submission
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ResearchConfig onSubmit={handleResearchSubmit} />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="influencer/:id" element={<InfluencerDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
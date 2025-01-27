import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Shield, BarChart2, DollarSign, Info, Mail, Settings, LogOut } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F1218] text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-semibold">VerifyInfluencers</span>
          </Link>
          <nav className="flex items-center space-x-8">
            <Link to="/leaderboard" className="hover:text-emerald-500">Leaderboard</Link>
            <Link to="/products" className="hover:text-emerald-500">Products</Link>
            <Link to="/monetization" className="hover:text-emerald-500">Monetization</Link>
            <Link to="/about" className="hover:text-emerald-500">About</Link>
            <Link to="/contact" className="hover:text-emerald-500">Contact</Link>
            <Link to="/admin" className="hover:text-emerald-500">Admin</Link>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
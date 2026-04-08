import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, LogIn, Briefcase, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-nav sticky top-0 z-50 border-b border-white/[0.06]">
      {/* Inner container — same width as .page-container */}
      <div className="max-w-[1280px] mx-auto px-10 h-[4.25rem] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <div className="w-[2.375rem] h-[2.375rem] bg-indigo-500 rounded-[0.625rem] flex items-center justify-center shadow-[0_4px_16px_rgba(99,102,241,0.35)]">
            <Briefcase size={18} className="text-white" />
          </div>
          <span className="font-extrabold text-[1.1rem] text-white tracking-tight">
            Recruit<span className="text-indigo-400">Hub</span>
          </span>
        </Link>

        {/* Nav links + actions */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-7">
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `flex items-center gap-1.5 no-underline font-semibold text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`
              }
            >
              <Search size={15} /> Browse Jobs
            </NavLink>
            <NavLink
              to="/user-dashboard"
              className={({ isActive }) =>
                `flex items-center gap-1.5 no-underline font-semibold text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`
              }
            >
              <LayoutDashboard size={15} /> Dashboard
            </NavLink>
          </div>

          <div className="w-px h-5 bg-white/10" />

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white hover:bg-white/[0.06] no-underline font-semibold text-sm px-3 py-2 rounded-[0.625rem] transition-all"
            >
              <LogIn size={16} /> Sign In
            </Link>
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-sm px-5 py-2 rounded-[0.625rem] shadow-[0_4px_14px_rgba(99,102,241,0.30)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.38)] transition-all active:scale-95 no-underline"
            >
              Join Platform
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import {
  LayoutDashboard, Users, Briefcase, FilePlus, BarChart3,
  TrendingUp, Search, Clock, Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../components/DashboardSidebar';

const RecruiterDashboard = () => {
  const stats = [
    { label: 'Active Job Listings', count: 8,   icon: <Briefcase size={20} />,  color: 'bg-indigo-500',  shadow: 'shadow-indigo-500/25'  },
    { label: 'Total Applicants',    count: 156,  icon: <Users size={20} />,       color: 'bg-purple-500',  shadow: 'shadow-purple-500/25'  },
    { label: 'New this week',       count: 24,   icon: <TrendingUp size={20} />,  color: 'bg-emerald-500', shadow: 'shadow-emerald-500/25' },
    { label: 'Interviews Booked',   count: 12,   icon: <Clock size={20} />,       color: 'bg-amber-500',   shadow: 'shadow-amber-500/25'   },
  ];

  const navItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Overview'    },
    { icon: <Briefcase size={18} />,       label: 'My Listings' },
    { icon: <Users size={18} />,           label: 'Candidates'  },
    { icon: <FilePlus size={18} />,        label: 'Post a Job'  },
    { icon: <BarChart3 size={18} />,       label: 'Analytics'   },
  ];

  const sidebarLabel = 'Talent Acquisition';

  const candidates = [
    { name: 'Andrei Popescu', role: 'Sr. Frontend Eng.',  score: '94%', date: 'Applied 4h ago',  status: 'New'          },
    { name: 'Maria Ionescu',  role: 'Product Designer',   score: '88%', date: 'Applied 12h ago', status: 'Interviewing' },
    { name: 'Ionut Radu',     role: 'Growth Marketer',    score: '82%', date: 'Applied 1d ago',  status: 'New'          },
  ];

  const listings = [
    { title: 'React Dev',    applicants: 42, views: 1200 },
    { title: 'UX Designer',  applicants: 15, views: 450  },
    { title: 'Backend Lead', applicants: 28, views: 890  },
  ];

  return (
    <div className="flex gap-8 pt-8 pb-16">
      {/* ── Sidebar ────────────────────────────────────────── */}
      <DashboardSidebar label={sidebarLabel} items={navItems} />

      {/* ── Main ───────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col gap-8 min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-[1.75rem] font-black flex items-center gap-2.5 tracking-tight">
              <LayoutDashboard size={24} className="text-indigo-500" /> Recruiter Workspace
            </h1>
            <p className="text-slate-400 mt-1 text-[0.9rem]">
              Hello, Sarah! Manage your talent pipeline and active listings.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="input-icon-wrap w-[220px]">
              <span className="input-icon"><Search size={16} /></span>
              <input
                type="text"
                placeholder="Search candidates..."
                className="!py-[0.65rem] !px-3.5 !pl-11 !text-[0.85rem] !rounded-xl"
                style={{ padding: '0.65rem 0.875rem 0.65rem 2.75rem', fontSize: '0.85rem', borderRadius: '0.75rem' }}
              />
            </div>
            <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-[0.65rem] px-5 rounded-xl text-sm shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-95 flex-shrink-0">
              <FilePlus size={16} /> Post New Job
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass p-6 relative overflow-hidden hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all cursor-default"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={`w-11 h-11 ${stat.color} rounded-[0.875rem] flex items-center justify-center text-white mb-4 shadow-xl ${stat.shadow}`}>
                {stat.icon}
              </div>
              <div className="text-[2rem] font-black">{stat.count}</div>
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400 mt-1.5">{stat.label}</div>
              <div className="glow-orb w-20 h-20 bg-indigo-500/10 -bottom-5 -right-5 blur-3xl" />
            </motion.div>
          ))}
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
          {/* Candidates */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-[1.05rem] flex items-center gap-2">
                <TrendingUp size={17} className="text-indigo-500" /> Top Pipeline Talent
              </h3>
              <button className="text-[0.78rem] font-bold text-indigo-400 bg-transparent border-none cursor-pointer hover:underline">
                View all talent
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {candidates.map((cand, i) => (
                <div
                  key={i}
                  className="glass flex items-center justify-between gap-4 px-5 py-4 rounded-2xl cursor-pointer flex-wrap hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 flex-shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center font-extrabold text-[0.8rem] text-indigo-400">
                      {cand.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-[0.9rem]">{cand.name}</div>
                      <div className="text-[0.72rem] text-slate-400 font-semibold uppercase tracking-[0.04em] mt-0.5">
                        {cand.role} · {cand.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-center">
                      <div className="text-[0.875rem] font-extrabold text-emerald-400">{cand.score}</div>
                      <div className="text-[0.62rem] text-slate-400 font-bold uppercase tracking-[0.06em]">Match</div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.04em] border ${
                      cand.status === 'New'
                        ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300'
                        : 'bg-white/[0.05] border-white/10 text-slate-400'
                    }`}>
                      {cand.status}
                    </span>
                    <div className="flex gap-1.5">
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                        <Mail size={14} />
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                        <Briefcase size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Metrics */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-[1.05rem]">Job Metrics</h3>
            <div className="glass p-7 flex flex-col gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400">Conversion Rate</span>
                  <span className="text-[0.85rem] font-extrabold text-indigo-400">22.4%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '22.4%' }} />
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div className="flex flex-col gap-3.5">
                <div className="text-[0.8rem] font-bold text-slate-400 uppercase tracking-[0.07em]">Active Listings</div>
                {listings.map((l, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <div className="text-[0.85rem] font-bold text-slate-200">{l.title}</div>
                      <div className="text-[0.72rem] text-slate-400 mt-0.5">{l.views} views</div>
                    </div>
                    <span className="text-[0.75rem] font-bold px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] rounded-lg text-slate-400">
                      {l.applicants} apps
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl text-[0.82rem] shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-95">
                Generate Weekly Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecruiterDashboard;

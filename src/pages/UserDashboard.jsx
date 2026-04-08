import React from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Briefcase, FileText, CheckCircle,
  Clock, Calendar, Search, TrendingUp, UserCheck, Inbox,
} from 'lucide-react';

const UserDashboard = () => {
  const stats = [
    { label: 'Active Applications', count: 12, icon: <Briefcase size={20} />,  color: 'bg-blue-500',   shadow: 'shadow-blue-500/25'   },
    { label: 'Interviews Booked',   count: 3,  icon: <Calendar size={20} />,   color: 'bg-purple-500', shadow: 'shadow-purple-500/25' },
    { label: 'Potential Offers',    count: 1,  icon: <CheckCircle size={20} />,color: 'bg-emerald-500',shadow: 'shadow-emerald-500/25'},
    { label: 'Direct Inquiries',    count: 5,  icon: <Inbox size={20} />,      color: 'bg-indigo-500', shadow: 'shadow-indigo-500/25' },
  ];

  const recentApps = [
    { title: 'Senior Product Designer',  company: 'DesignCo',  date: 'Applied 2 days ago', status: 'In Review'  },
    { title: 'Lead Frontend Engineer',   company: 'TechScale', date: 'Applied 4 days ago', status: 'Interview'  },
    { title: 'Marketing Strategist',     company: 'GrowthX',   date: 'Applied 1 week ago', status: 'Rejected'   },
  ];

  const statusClass = {
    Interview: 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300',
    Rejected:  'bg-red-500/10   border-red-500/30   text-red-400',
    default:   'bg-white/[0.05] border-white/10     text-slate-400',
  };

  const getBadge = (status) =>
    `inline-flex items-center px-3 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.04em] border flex-shrink-0 ${
      statusClass[status] || statusClass.default
    }`;

  return (
    <div className="flex gap-8 pt-8 pb-16">
      <Sidebar />

      <main className="flex-1 flex flex-col gap-8 min-w-0">
        {/* ── Header ───────────────────────────────────────── */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-[1.75rem] font-black flex items-center gap-2.5 tracking-tight">
              <LayoutDashboard size={24} className="text-indigo-500" />
              Dashboard Overview
            </h1>
            <p className="text-slate-400 mt-1 text-[0.9rem]">
              Hello, Andrei! Welcome back to your career hub.
            </p>
          </div>

          <div className="flex gap-2.5 items-center">
            <button className="flex items-center justify-center w-11 h-11 bg-white/[0.05] border border-white/[0.08] rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-all">
              <Search size={18} />
            </button>
            <button className="flex items-center justify-center w-11 h-11 bg-white/[0.05] border border-white/[0.08] rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-all">
              <Clock size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-[0.65rem] px-5 rounded-xl text-sm shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-95">
              Update Status
            </button>
          </div>
        </div>

        {/* ── Stat Cards ────────────────────────────────────── */}
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
              <div className="text-[2rem] font-black leading-none">{stat.count}</div>
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400 mt-1.5">
                {stat.label}
              </div>
              <div className="glow-orb w-20 h-20 bg-indigo-500/10 -bottom-5 -right-5 blur-3xl" />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
          {/* Recent Applications */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-[1.05rem] flex items-center gap-2">
                <TrendingUp size={17} className="text-indigo-500" /> Recent Applications
              </h3>
              <button className="text-[0.78rem] font-bold text-indigo-400 bg-transparent border-none cursor-pointer hover:underline">
                View all
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {recentApps.map((app, i) => (
                <div
                  key={i}
                  className="glass flex items-center justify-between gap-4 px-5 py-4 rounded-2xl cursor-pointer hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-[2.375rem] h-[2.375rem] flex-shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-[0.625rem] flex items-center justify-center">
                      <Briefcase size={16} className="text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-[0.9rem] truncate">{app.title}</div>
                      <div className="text-[0.72rem] text-slate-400 font-semibold uppercase tracking-[0.04em] mt-0.5">
                        {app.company} · {app.date}
                      </div>
                    </div>
                  </div>
                  <span className={getBadge(app.status)}>{app.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Stats */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-[1.05rem]">Profile Stats</h3>
            <div className="glass p-7 flex flex-col gap-7">
              {/* Search appearances */}
              <div>
                <div className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400 mb-2">
                  Search Appearances
                </div>
                <div className="flex items-end justify-between mb-2.5">
                  <div className="text-[2.25rem] font-black leading-none">42</div>
                  <div className="flex items-center gap-1 text-emerald-400 text-[0.78rem] font-bold mb-0.5">
                    <TrendingUp size={13} /> +12%
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '66%' }} />
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Next Actions */}
              <div className="flex flex-col gap-3.5">
                <div className="font-bold text-[0.85rem] text-slate-200">Next Action Steps</div>
                {[
                  { icon: <UserCheck size={15} />, label: 'Add your portfolio URL' },
                  { icon: <FileText size={15} />,  label: 'Upload latest Resume'   },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[0.82rem] text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-white/[0.06] text-white font-semibold text-[0.82rem] py-3 rounded-xl border border-white/10 hover:bg-white/[0.11] transition-all">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;

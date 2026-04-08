import React from 'react';
import {
  LayoutDashboard, Users, Building2, Briefcase, Cog,
  ShieldAlert, Activity, PieChart, ShieldCheck, TrendingUp, Mail,
  UserCheck, Trash2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../components/DashboardSidebar';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Registered Users', count: '14,250', icon: <Users size={20} />,     color: 'bg-indigo-500',  shadow: 'shadow-indigo-500/25'  },
    { label: 'Active Companies',        count: '890',    icon: <Building2 size={20} />,  color: 'bg-purple-500',  shadow: 'shadow-purple-500/25'  },
    { label: 'System Jobs',             count: '4,320',  icon: <Briefcase size={20} />,  color: 'bg-emerald-500', shadow: 'shadow-emerald-500/25' },
    { label: 'Platform Uptime',         count: '99.98%', icon: <Activity size={20} />,   color: 'bg-amber-500',   shadow: 'shadow-amber-500/25'   },
  ];

  const navItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Platform Health'      },
    { icon: <Users size={18} />,           label: 'User Management'      },
    { icon: <Building2 size={18} />,       label: 'Company Verification' },
    { icon: <ShieldAlert size={18} />,     label: 'Audit Logs'           },
    { icon: <PieChart size={18} />,        label: 'Revenue Analytics'    },
    { icon: <Cog size={18} />,             label: 'Core Config'          },
  ];

  const sidebarLabel = 'System Governance';

  const companies = [
    { name: 'DevFlow Inc.',      sector: 'SaaS / DevTools',        country: 'United States', date: '12h ago', status: 'Review'  },
    { name: 'CloudPeak AI',      sector: 'Artificial Intelligence', country: 'Canada',        date: '1d ago',  status: 'Flagged' },
    { name: 'Global Talent Co.', sector: 'Recruiting',             country: 'Europe',         date: '2d ago',  status: 'Review'  },
  ];

  const metrics = [
    { label: 'DB Query Latency', val: '14ms', pct: 10,  color: 'bg-emerald-500' },
    { label: 'CPU Load',          val: '32%',  pct: 32,  color: 'bg-indigo-500'  },
    { label: 'Memory Usage',      val: '54%',  pct: 54,  color: 'bg-amber-500'   },
  ];

  return (
    <div className="flex gap-8 pt-8 pb-16">
      {/* ── Admin Sidebar ──────────────────────────────────── */}
      <DashboardSidebar label={sidebarLabel} items={navItems} />

      {/* ── Main content ───────────────────────────────────── */}
      <main className="flex-1 flex flex-col gap-8 min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-[1.75rem] font-black flex items-center gap-2.5 tracking-tight">
              <ShieldCheck size={24} className="text-indigo-500" /> Administrative Control
            </h1>
            <p className="text-slate-400 mt-1 text-[0.9rem]">
              Status:{' '}
              <span className="text-emerald-400 font-bold">Encrypted & Secure</span> · System health is optimal.
            </p>
          </div>
          <div className="flex gap-2.5 items-center">
            <button className="flex items-center justify-center w-11 h-11 bg-white/[0.05] border border-white/[0.08] rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-all">
              <Activity size={18} />
            </button>
            <button className="flex items-center gap-2 bg-red-500/[0.08] text-red-400 font-bold text-sm py-[0.65rem] px-5 border border-red-500/22 rounded-xl cursor-pointer hover:bg-red-500/15 transition-colors">
              <ShieldAlert size={16} /> Emergency Mode
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
          {/* Company Verifications */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-[1.05rem] flex items-center gap-2">
                <Users size={17} className="text-indigo-500" /> Pending Company Verifications
              </h3>
              <button className="text-[0.78rem] font-bold text-indigo-400 bg-transparent border-none cursor-pointer hover:underline">
                View all
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {companies.map((comp, i) => (
                <div
                  key={i}
                  className="glass flex items-center justify-between gap-4 px-5 py-4 rounded-2xl cursor-pointer flex-wrap hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 flex-shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center">
                      <Building2 size={20} className="text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-[0.9rem]">{comp.name}</div>
                      <div className="text-[0.72rem] text-slate-400 font-semibold uppercase tracking-[0.04em] mt-0.5">
                        {comp.sector} · {comp.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <div className={`text-[0.78rem] font-bold ${comp.status === 'Flagged' ? 'text-red-400' : 'text-indigo-400'}`}>
                        {comp.status}
                      </div>
                      <div className="text-[0.65rem] text-slate-400 font-semibold mt-0.5">{comp.date}</div>
                    </div>
                    <div className="flex gap-1.5">
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500/[0.08] border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/18 transition-colors">
                        <UserCheck size={14} />
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500/[0.08] border border-red-500/25 text-red-400 hover:bg-red-500/18 transition-colors">
                        <Trash2 size={14} />
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                        <Mail size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Node Performance */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-[1.05rem]">Node Performance</h3>
            <div className="glass p-7 flex flex-col gap-6">
              {metrics.map(m => (
                <div key={m.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400">{m.label}</span>
                    <span className={`text-[0.78rem] font-bold ${m.label === 'DB Query Latency' ? 'text-emerald-400' : m.label === 'CPU Load' ? 'text-indigo-400' : 'text-amber-400'}`}>
                      {m.val}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div className={`h-full rounded-full ${m.color} transition-all`} style={{ width: `${m.pct}%` }} />
                  </div>
                </div>
              ))}

              <div className="h-px bg-white/[0.06]" />

              <div className="flex flex-col gap-2.5">
                <div className="text-[0.8rem] font-bold text-slate-400 uppercase tracking-[0.07em]">Primary Incidents</div>
                {[
                  { dot: 'bg-emerald-500', text: 'Auth service restored (2h ago)' },
                  { dot: 'bg-amber-500',   text: 'CDN latency peak (12h ago)'     },
                ].map((inc, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[0.82rem] text-slate-400">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${inc.dot}`} />
                    <span>{inc.text}</span>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-white/[0.06] text-white font-semibold text-[0.82rem] py-3 rounded-xl border border-white/10 hover:bg-white/[0.11] transition-all uppercase tracking-[0.06em]">
                Server Logs
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

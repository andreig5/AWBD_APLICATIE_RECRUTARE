import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Briefcase, FileText, Cog, LogOut, Heart } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Overview',        path: '/user-dashboard' },
    { icon: <Briefcase size={18} />,       label: 'Applications',    path: '/applications'   },
    { icon: <Heart size={18} />,           label: 'Saved Jobs',      path: '/saved'          },
    { icon: <FileText size={18} />,        label: 'CV Editor',       path: '/cv-edit'        },
    { icon: <Cog size={18} />,             label: 'Account Settings',path: '/settings'       },
  ];

  return (
    <aside className="w-[17rem] flex-shrink-0 glass flex flex-col gap-6 p-4 sticky top-[5.5rem] h-[calc(100vh-7rem)] hidden lg:flex">
      {/* Nav items */}
      <div className="flex flex-col gap-1">
        <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-slate-400 px-2 mb-2">
          Profile Focus
        </span>
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3.5 px-4 py-3 rounded-xl font-semibold text-sm transition-all no-underline ${
                isActive
                  ? 'bg-indigo-500 text-white shadow-[0_4px_16px_rgba(99,102,241,0.30)]'
                  : 'text-slate-400 hover:bg-white/[0.06] hover:text-white'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="h-px bg-white/[0.06]" />

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-3">
        {/* Completion card */}
        <div className="bg-indigo-500/[0.08] border border-indigo-500/20 rounded-xl px-5 py-4">
          <div className="font-bold text-xs text-slate-200 mb-2">Profile Completion</div>
          <div className="progress-bar mb-1.5">
            <div className="progress-fill" style={{ width: '75%' }} />
          </div>
          <div className="text-[0.72rem] text-slate-400">
            75% complete ·{' '}
            <a href="/cv-edit" className="text-indigo-400 font-semibold hover:underline">
              Complete profile
            </a>
          </div>
        </div>

        <button className="flex items-center gap-3.5 px-4 py-3 rounded-xl font-semibold text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all w-full bg-transparent border-none cursor-pointer">
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

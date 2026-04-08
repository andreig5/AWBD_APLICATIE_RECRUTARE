import React from 'react';
import { LogOut } from 'lucide-react';

/**
 * Generic sidebar for role-specific dashboards (Admin, Recruiter).
 *
 * Props:
 *  - label  {string}        Section label shown above nav items
 *  - items  {Array<{ icon: ReactNode, label: string }>}  Nav items
 *  - activeIndex {number}   Which item is currently active (default 0)
 */
const DashboardSidebar = ({ label = 'Navigation', items = [], activeIndex = 0 }) => {
  return (
    <aside className="w-[17rem] flex-shrink-0 glass hidden lg:flex flex-col gap-6 p-4 sticky top-[5.5rem] h-[calc(100vh-7rem)]">
      <div className="flex flex-col gap-1">
        <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-slate-400 px-2 mb-2">
          {label}
        </span>
        {items.map((item, i) => (
          <button
            key={i}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer border-none ${
              i === activeIndex
                ? 'bg-indigo-500 text-white shadow-[0_4px_16px_rgba(99,102,241,0.30)]'
                : 'text-slate-400 hover:bg-white/[0.06] hover:text-white bg-transparent'
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      <div className="h-px bg-white/[0.06]" />

      <div className="mt-auto">
        <button className="flex items-center gap-3.5 px-4 py-3 rounded-xl font-semibold text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all w-full bg-transparent border-none cursor-pointer">
          <LogOut size={18} /> Exit Dashboard
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

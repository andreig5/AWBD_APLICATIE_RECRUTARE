import React from 'react';
import { INITIAL_JOBS } from '../data/jobs';
import { Search, MapPin, DollarSign, Clock, Briefcase, Filter, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Jobs = () => {
  return (
    <div className="pt-8 pb-16">
      {/* Glow decoration */}
      <div className="glow-orb w-[400px] h-[400px] bg-indigo-500/[0.05] -top-24 -right-24 -z-10" />

      {/* ── Header + Search ──────────────────────────────────── */}
      <div className="flex items-center justify-between gap-6 mb-10 flex-wrap">
        <div>
          <h1 className="text-[2.25rem] font-black tracking-tight">
            Explore <span className="text-indigo-400">Jobs</span>
          </h1>
          <p className="text-slate-400 mt-1.5 text-[0.95rem]">
            Find your next career move among 2,400+ active roles.
          </p>
        </div>

        <div className="input-icon-wrap w-[320px] flex-shrink-0">
          <span className="input-icon"><Search size={17} /></span>
          <input
            type="text"
            placeholder="Search by title, skills, or company..."
          />
        </div>
      </div>

      {/* ── Body: Filters + Cards ────────────────────────────── */}
      <div className="flex gap-7 items-start">

        {/* Filter Sidebar */}
        <aside className="w-[220px] flex-shrink-0 sticky top-[5.5rem]">
          <div className="glass p-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-[0.9rem] flex items-center gap-2 text-slate-200">
                <Filter size={15} className="text-indigo-500" /> Filters
              </h3>
              <button className="text-[0.72rem] font-bold text-indigo-400 bg-transparent border-none cursor-pointer hover:bg-indigo-500/10 px-2 py-1 rounded-md transition-colors">
                Clear all
              </button>
            </div>

            {/* Job Type */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-slate-400">Job Type</span>
              {['Full-time', 'Contract', 'Freelance', 'Remote'].map(type => (
                <label key={type} className="filter-item">
                  <div className="filter-check" />
                  {type}
                </label>
              ))}
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-slate-400">Categories</span>
              {['Engineering', 'Design', 'Marketing', 'Sales', 'Finance'].map(cat => (
                <label key={cat} className="filter-item">
                  <div className="filter-radio" />
                  {cat}
                </label>
              ))}
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl text-[0.82rem] shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-95">
              Update Results
            </button>
          </div>
        </aside>

        {/* Jobs Grid — 2 col on md+ */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
          {INITIAL_JOBS.map((job, i) => (
            <motion.div
              key={job.id}
              className="glass p-7 flex flex-col gap-5 relative overflow-hidden hover:border-indigo-500/20 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              {/* Top row */}
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-[0.875rem] flex items-center justify-center flex-shrink-0">
                  <Briefcase size={22} className="text-indigo-400" />
                </div>
                <span className="text-[0.72rem] font-bold px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-lg text-slate-400">
                  {job.posted}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-[1.2rem] font-extrabold text-slate-100 tracking-tight">
                  {job.title}
                </h3>
                <p className="text-indigo-400 text-[0.75rem] font-bold uppercase tracking-[0.07em] mt-1">
                  {job.company}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-slate-400 text-[0.82rem] font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-indigo-500 flex-shrink-0" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign size={14} className="text-indigo-500 flex-shrink-0" /> {job.salary}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-indigo-500 flex-shrink-0" /> {job.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-[0.85rem] text-slate-400 leading-relaxed line-clamp-2 border-t border-white/[0.06] pt-4">
                {job.description}
              </p>

              {/* Actions */}
              <div className="flex gap-3 items-stretch">
                <Link
                  to={`/jobs/${job.id}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 text-[0.875rem] rounded-xl shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-95 no-underline"
                >
                  View Details
                </Link>
                <button className="flex items-center justify-center w-11 h-11 bg-white/[0.05] border border-white/[0.08] rounded-xl text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/[0.15] transition-all">
                  <Bookmark size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

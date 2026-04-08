import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_JOBS } from '../data/jobs';
import { MapPin, DollarSign, Clock, Briefcase, ChevronLeft, GitBranch, Globe, Send, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const JobDetail = () => {
  const { id } = useParams();
  const job = INITIAL_JOBS.find(j => j.id === parseInt(id)) || INITIAL_JOBS[0];

  const metaItems = [
    { label: 'Global Location',   icon: <MapPin size={15} />,    val: job.location   },
    { label: 'Base Salary Range', icon: <DollarSign size={15} />,val: job.salary     },
    { label: 'Contract Type',     icon: <Clock size={15} />,     val: job.type       },
    { label: 'Experience Level',  icon: <Users size={15} />,     val: job.experience },
  ];

  const techStack = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Framer Motion', 'Vite', 'Turborepo'];
  const responsibilities = ['Lead design iterations', 'Architect backend systems', 'Collaborate with stakeholders', 'Mentor junior developers', 'Drive code quality standards', 'Implement CI/CD workflows'];

  return (
    <div className="pt-8 pb-16 flex flex-col gap-8">
      {/* Back link */}
      <Link
        to="/jobs"
        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white no-underline font-semibold text-sm transition-colors w-fit"
      >
        <ChevronLeft size={18} /> Back to listings
      </Link>

      <div className="flex gap-8 items-start flex-wrap">
        {/* ── Main content ────────────────────────────────── */}
        <div className="flex-[2_1_500px] flex flex-col gap-6">
          {/* Header card */}
          <div className="glass p-8 relative overflow-hidden">
            <div className="glow-orb w-[200px] h-[200px] bg-indigo-500/[0.08] -top-14 -right-14" />

            <div className="flex justify-between items-start gap-4 relative z-10">
              <div className="flex gap-5 items-center">
                <div className="w-[3.75rem] h-[3.75rem] flex-shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center">
                  <Briefcase size={28} className="text-indigo-400" />
                </div>
                <div>
                  <h1 className="text-[1.9rem] font-black tracking-tight">{job.title}</h1>
                  <div className="flex items-center gap-2 mt-1.5 text-slate-400 text-[0.75rem] font-bold uppercase tracking-[0.07em]">
                    <span className="text-indigo-400">{job.company}</span> · {job.posted}
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 bg-white/[0.06] text-white font-bold text-sm py-[0.65rem] px-5 rounded-xl border border-white/10 hover:bg-white/[0.11] transition-all flex-shrink-0">
                Save Job
              </button>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 bg-white/[0.02] border border-white/[0.06] rounded-[0.875rem] p-5 relative z-10">
              {metaItems.map(m => (
                <div key={m.label}>
                  <div className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400 mb-1.5">{m.label}</div>
                  <div className="flex items-center gap-1.5 font-semibold text-[0.9rem] text-slate-100">
                    <span className="text-indigo-500 flex-shrink-0">{m.icon}</span>
                    {m.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description card */}
          <div className="glass p-8 flex flex-col gap-8">
            {/* Role Overview */}
            <div>
              <h2 className="text-[1.2rem] font-extrabold flex items-center gap-3 mb-4">
                <div className="section-accent" /> Role Overview
              </h2>
              <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                We are looking for a highly skilled {job.title} to join our growing team. {job.description}
                {' '}This is a unique opportunity to shape the future of our product from the ground up.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h2 className="text-[1.2rem] font-extrabold flex items-center gap-3 mb-4">
                <div className="section-accent" /> Key Responsibilities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                {responsibilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-400 text-[0.9rem]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-[1.2rem] font-extrabold flex items-center gap-3 mb-4">
                <div className="section-accent" /> Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((s, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[0.8rem] font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/45 hover:text-indigo-200 transition-all"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Action sidebar ─────────────────────────────── */}
        <motion.div
          className="glass flex-[0_0_280px] p-7 sticky top-[5.5rem] flex flex-col gap-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <h3 className="font-extrabold text-[1.1rem] mb-1.5">Fast Application</h3>
            <p className="text-slate-400 text-[0.85rem] leading-relaxed">
              Apply in under 30 seconds with your RecruitHub profile.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <button className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-[0.9rem] rounded-xl text-[0.9rem] shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-95">
              Apply Now <Send size={16} />
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white/[0.06] text-white font-bold py-[0.8rem] rounded-xl border border-white/10 hover:bg-white/[0.11] transition-all text-[0.875rem]">
              <GitBranch size={17} /> Apply with GitHub
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white/[0.06] text-white font-bold py-[0.8rem] rounded-xl border border-white/10 hover:bg-white/[0.11] transition-all text-[0.875rem]">
              <Globe size={17} /> Apply with Google
            </button>
          </div>

          <div className="h-px bg-white/[0.06]" />

          <div className="flex flex-col gap-3.5">
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400">
              About the Company
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-[0.625rem] flex items-center justify-center font-extrabold text-indigo-400">
                {job.company?.[0] ?? 'C'}
              </div>
              <div>
                <div className="font-bold text-[0.9rem]">{job.company}</div>
                <div className="text-[0.75rem] text-slate-400 mt-0.5">Hiring since 2021</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-2 text-[0.85rem] text-slate-400 hover:text-indigo-400 no-underline transition-colors">
                <Globe size={14} /> companywebsite.ai
              </a>
              <a href="#" className="flex items-center gap-2 text-[0.85rem] text-slate-400 hover:text-indigo-400 no-underline transition-colors">
                <Briefcase size={14} /> 42 open positions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetail;

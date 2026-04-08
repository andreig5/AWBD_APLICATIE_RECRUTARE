import React, { useState } from 'react';
import {
  FileText, Save, Plus, Trash2, Eye,
  User, Briefcase, Mail, Phone, MapPin,
} from 'lucide-react';

const CVEdit = () => {
  const [profile, setProfile] = useState({
    name:     'Andrei Popescu',
    role:     'Senior Frontend Engineer',
    email:    'andrei@example.com',
    phone:    '+40 720 000 000',
    location: 'Bucharest, RO',
    summary:  'Senior Frontend Engineer with 7+ years of experience building mission-critical web applications. Expert in React, TypeScript, and modern UI/UX design.',
    skills:   ['React', 'TypeScript', 'Node.js', 'Vite', 'Framer Motion', 'TailwindCSS'],
    experience: [
      { id: 1, company: 'TechScale', role: 'Lead Dev',        period: '2021 - Present', desc: 'Leading the frontend evolution of our SaaS platform.' },
      { id: 2, company: 'DesignCo',  role: 'Senior Engineer', period: '2018 - 2021',    desc: 'Built design systems for scale.' },
    ],
  });

  const updateProfile = (key, val) => setProfile(p => ({ ...p, [key]: val }));

  const fields = [
    { label: 'Full Name',             key: 'name',     icon: <User size={16} />,     type: 'text'  },
    { label: 'Professional Headline', key: 'role',     icon: <Briefcase size={16} />,type: 'text'  },
    { label: 'Email Address',         key: 'email',    icon: <Mail size={16} />,     type: 'email' },
    { label: 'Current Location',      key: 'location', icon: <MapPin size={16} />,   type: 'text'  },
  ];

  return (
    <div className="pt-8 pb-16 flex flex-col gap-8">
      {/* ── Page Header ─────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-[1.9rem] font-black flex items-center gap-3 tracking-tight">
            <FileText size={26} className="text-indigo-500" /> Interactive CV Editor
          </h1>
          <p className="text-slate-400 mt-1 text-[0.9rem]">
            Refine your professional profile for better match scores.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white/[0.06] text-white font-semibold text-sm py-[0.875rem] px-6 rounded-xl border border-white/10 hover:bg-white/[0.11] transition-all">
            <Eye size={16} className="text-slate-400" /> Preview PDF
          </button>
          <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-sm py-[0.875rem] px-6 rounded-xl shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-95">
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      {/* ── Two-column layout ────────────────────────────────── */}
      <div className="flex gap-8 items-start flex-wrap">

        {/* ── Editor Column ────────────────────────────────── */}
        <div className="flex-1 min-w-[360px] flex flex-col gap-6">

          {/* Personal Information */}
          <div className="glass p-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="section-accent" />
              <h3 className="font-extrabold text-[1.05rem] text-slate-100">Personal Information</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {fields.map(f => (
                <div key={f.key}>
                  <label className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400 block mb-1.5">
                    {f.label}
                  </label>
                  <div className="input-icon-wrap">
                    <span className="input-icon">{f.icon}</span>
                    <input
                      type={f.type}
                      value={profile[f.key]}
                      onChange={e => updateProfile(f.key, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label className="text-[0.72rem] font-bold uppercase tracking-[0.07em] text-slate-400 block mb-1.5">
                Professional Summary
              </label>
              <div className="input-icon-wrap">
                <textarea
                  rows={4}
                  value={profile.summary}
                  onChange={e => updateProfile('summary', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="glass p-7 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="section-accent" />
                <h3 className="font-extrabold text-[1.05rem] text-slate-100">Professional Experience</h3>
              </div>
              <button className="w-9 h-9 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                <Plus size={16} />
              </button>
            </div>

            {profile.experience.map((exp, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 relative flex flex-col gap-3"
              >
                {/* Delete button */}
                <button className="absolute top-3.5 right-3.5 w-[1.875rem] h-[1.875rem] flex items-center justify-center bg-red-500/[0.08] border border-red-500/20 rounded-lg text-red-400 cursor-pointer hover:bg-red-500/[0.15] transition-colors opacity-70">
                  <Trash2 size={13} />
                </button>

                {/* Company + Period */}
                <div className="flex gap-3 pr-9">
                  <input
                    value={exp.company}
                    className="cv-input font-bold text-[0.9rem] flex-1"
                    placeholder="Company"
                    readOnly
                  />
                  <input
                    value={exp.period}
                    className="cv-input text-slate-400 text-[0.8rem] text-right w-32 flex-shrink-0"
                    placeholder="Period"
                    readOnly
                  />
                </div>

                {/* Role */}
                <input
                  value={exp.role}
                  className="cv-input text-indigo-400 text-[0.75rem] font-bold uppercase tracking-[0.06em]"
                  placeholder="Role"
                  readOnly
                />

                {/* Description */}
                <textarea
                  rows={2}
                  value={exp.desc}
                  className="cv-textarea text-slate-400 text-[0.82rem]"
                  readOnly
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CV Preview Column ─────────────────────────────── */}
        <div className="flex-1 min-w-[360px] flex flex-col gap-3">
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-slate-400 pl-1">
            Real-time Visualization
          </span>

          <div className="bg-white rounded-[1.25rem] p-14 min-h-[750px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden font-[Inter,sans-serif]">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-100 rounded-bl-[5rem]" />

            {/* Name & Role */}
            <div className="relative z-10 pr-16">
              <h1 className="text-[2rem] font-black tracking-[-0.03em] uppercase text-slate-900">
                {profile.name}
              </h1>
              <div className="inline-block mt-2 bg-indigo-600 text-white text-[0.65rem] font-black px-3 py-1 tracking-[0.15em] uppercase">
                {profile.role}
              </div>

              {/* Contact info */}
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  { icon: <Mail size={10} />,   val: profile.email    },
                  { icon: <MapPin size={10} />, val: profile.location },
                  { icon: <Phone size={10} />,  val: profile.phone    },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-1 text-[0.65rem] font-bold uppercase text-slate-500">
                    {c.icon} {c.val}
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-[1fr_2fr] gap-8 border-t-2 border-slate-200 pt-6 mt-6 relative z-10">
              {/* Left column */}
              <div className="flex flex-col gap-6">
                {[
                  { title: 'Core Skills',  items: profile.skills                                     },
                  { title: 'Tech Stack',   items: ['Node.JS / Express','PostgreSQL / Prisma','Docker / AWS'] },
                ].map(section => (
                  <div key={section.title}>
                    <h4 className="text-[0.6rem] font-black uppercase tracking-[0.12em] text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-2.5 inline-block">
                      {section.title}
                    </h4>
                    <div className="flex flex-col gap-1">
                      {section.items.map(s => (
                        <div key={s} className="text-[0.7rem] font-medium text-slate-500">• {s}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-[0.6rem] font-black uppercase tracking-[0.12em] text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-2.5 inline-block">
                    Mission Summary
                  </h4>
                  <p className="text-[0.7rem] leading-relaxed text-slate-500 font-medium">{profile.summary}</p>
                </div>

                <div>
                  <h4 className="text-[0.6rem] font-black uppercase tracking-[0.12em] text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-2.5 inline-block">
                    Experience Timeline
                  </h4>
                  <div className="flex flex-col gap-4">
                    {profile.experience.map(exp => (
                      <div key={exp.id}>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-[0.7rem] font-black uppercase tracking-[0.03em] text-slate-900">
                            {exp.role}
                          </span>
                          <span className="text-[0.62rem] font-bold text-slate-400 whitespace-nowrap flex-shrink-0">
                            {exp.period}
                          </span>
                        </div>
                        <div className="text-[0.62rem] font-black uppercase text-indigo-600 mt-0.5">
                          {exp.company}
                        </div>
                        <p className="text-[0.68rem] text-slate-500 mt-1 leading-relaxed">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-14 right-14 flex justify-between border-t border-slate-200 pt-3">
              <span className="text-[0.55rem] font-black uppercase tracking-[0.1em] text-slate-300">
                Verified by RecruitHub PRO · 2026
              </span>
              <span className="text-[0.55rem] font-black uppercase tracking-[0.1em] text-slate-300">
                Page 1/1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVEdit;

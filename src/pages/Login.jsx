import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, GitBranch, Globe } from 'lucide-react';

const Login = () => {
  const avatarColors = ['#4f46e5', '#7c3aed', '#2563eb', '#0891b2'];

  return (
    /* Centre content vertically in remaining viewport */
    <div className="flex items-center justify-center min-h-[calc(100vh-4.25rem)] py-12">
      <div className="w-full flex flex-row items-center justify-between gap-16 max-w-[1100px]">

        {/* ── Hero Content ──────────────────────────────────── */}
        <motion.div
          className="flex-1 flex flex-col gap-8 min-w-0"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/25 rounded-full text-[0.72rem] font-extrabold tracking-[0.10em] uppercase text-indigo-300 w-fit">
            Next-Gen Hiring Platform
          </span>

          {/* Headline */}
          <div>
            <h1 className="text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-[1.08] tracking-tight">
              The Smartest Way to{' '}
              <span className="text-indigo-400">Hire</span>
              {' '}&amp;{' '}
              Get <span className="text-indigo-400">Hired</span>.
            </h1>
            <p className="text-slate-400 text-[1.05rem] mt-4 leading-relaxed max-w-[440px]">
              Connect with premium companies, streamline your recruitment process, and build your career in a few clicks.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/jobs"
              className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-[0.95rem] px-7 py-[0.875rem] rounded-xl shadow-[0_6px_20px_rgba(99,102,241,0.28)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.38)] transition-all active:scale-[0.97] no-underline"
            >
              Explore Open Jobs <ArrowRight size={17} />
            </Link>
            <button className="flex items-center justify-center gap-2 bg-white/[0.06] text-white font-semibold text-[0.95rem] px-6 py-[0.875rem] rounded-xl border border-white/10 hover:bg-white/[0.11] hover:border-white/[0.18] transition-all active:scale-[0.97]">
              Learn More
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3.5 text-slate-400 text-sm">
            <div className="flex flex-row-reverse">
              {avatarColors.map((c, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#06070f] flex items-center justify-center text-[0.65rem] font-extrabold text-white"
                  style={{ background: c, marginLeft: i === avatarColors.length - 1 ? 0 : '-0.6rem' }}
                >
                  U{i + 1}
                </div>
              ))}
            </div>
            <p>
              <strong className="text-white">2,500+</strong> professionals joined this week
            </p>
          </div>
        </motion.div>

        {/* ── Login Card ─────────────────────────────────────── */}
        <motion.div
          className="glass w-full max-w-[400px] p-9 flex flex-col gap-5 relative overflow-hidden flex-shrink-0"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <div className="glow-orb w-28 h-28 bg-indigo-500/20 -top-8 -right-8" />

          <div className="text-center">
            <h2 className="text-[1.5rem] font-extrabold text-white">Welcome Back</h2>
            <p className="text-slate-400 text-sm mt-1.5">Sign in to your RecruitHub account</p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[0.8rem] font-bold text-slate-300 tracking-[0.02em]">Email Address</label>
            <div className="input-icon-wrap">
              <span className="input-icon"><Mail size={17} /></span>
              <input type="email" placeholder="name@company.com" />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-[0.8rem] font-bold text-slate-300 tracking-[0.02em]">Password</label>
              <a href="#" className="text-indigo-400 font-semibold text-[0.78rem] hover:underline no-underline">
                Forgot password?
              </a>
            </div>
            <div className="input-icon-wrap">
              <span className="input-icon"><Lock size={17} /></span>
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <Link
            to="/user-dashboard"
            className="flex items-center justify-center w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-[0.875rem] rounded-[0.875rem] text-[0.95rem] shadow-[0_6px_20px_rgba(99,102,241,0.28)] transition-all active:scale-[0.97] no-underline"
          >
            Access your account
          </Link>

          <div className="flex items-center gap-4 text-slate-400 text-[0.72rem] font-bold uppercase tracking-[0.1em]">
            <span className="flex-1 h-px bg-white/[0.07]" />
            Or continue with
            <span className="flex-1 h-px bg-white/[0.07]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2.5 py-3 px-4 bg-white/[0.04] border border-white/10 rounded-xl font-bold text-sm text-white hover:bg-white/[0.09] hover:border-white/[0.18] transition-all">
              <GitBranch size={18} className="text-slate-400" /> GitHub
            </button>
            <button className="flex items-center justify-center gap-2.5 py-3 px-4 bg-white/[0.04] border border-white/10 rounded-xl font-bold text-sm text-white hover:bg-white/[0.09] hover:border-white/[0.18] transition-all">
              <Globe size={18} className="text-indigo-400" /> Google
            </button>
          </div>

          <p className="text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <Link to="/login" className="text-indigo-400 font-semibold hover:underline">Create one</Link>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Login;

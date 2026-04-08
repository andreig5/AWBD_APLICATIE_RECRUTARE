import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Page Imports
import Login from './pages/Login';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import UserDashboard from './pages/UserDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CVEdit from './pages/CVEdit';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="page-container pb-20">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/applications" element={<UserDashboard />} />
            <Route path="/saved" element={<UserDashboard />} />
            <Route path="/settings" element={<UserDashboard />} />
            <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/cv-edit" element={<CVEdit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

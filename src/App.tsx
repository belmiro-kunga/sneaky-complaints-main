import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import AppLayout from '@/components/layout/AppLayout';
import PageTransition from '@/components/layout/PageTransition';
import CookieConsent from '@/components/CookieConsent';
import Home from '@/pages/Home';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import EnterpriseAdminDashboard from '@/pages/EnterpriseAdminDashboard';
import ContentManagement from '@/pages/ContentManagement';
import ReportForm from '@/pages/ReportForm';
import ReportDetails from '@/pages/ReportDetails';
import CheckStatus from '@/pages/CheckStatus';
import NotFound from '@/pages/NotFound';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import UseCases from '@/pages/UseCases';
import Testimonials from '@/pages/Testimonials';
import Features from '@/pages/Features';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Cookies from '@/pages/Cookies';
import DataProtection from '@/pages/DataProtection';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
        <Route path="/admin-dashboard" element={<PageTransition><AdminDashboard /></PageTransition>} />
        <Route path="/enterprise-admin" element={<PageTransition><EnterpriseAdminDashboard /></PageTransition>} />
        <Route path="/content-management" element={<PageTransition><ContentManagement /></PageTransition>} />
        <Route path="/report" element={<PageTransition><ReportForm /></PageTransition>} />
        <Route path="/reports" element={<Navigate to="/report" replace />} />
        <Route path="/report/:id" element={<PageTransition><ReportDetails /></PageTransition>} />
        <Route path="/check-status" element={<PageTransition><CheckStatus /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/use-cases" element={<PageTransition><UseCases /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/features" element={<PageTransition><Features /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><Cookies /></PageTransition>} />
        <Route path="/data-protection" element={<PageTransition><DataProtection /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
      </Routes>
      <Toaster />
      <CookieConsent />
    </AppLayout>
  );
}

export default App;

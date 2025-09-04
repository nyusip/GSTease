import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import RegistrationWizard from './components/RegistrationWizard';
import SupportPage from './components/SupportPage';
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import RemindersPage from './components/RemindersPage';
import DocumentRepositoryPage from './components/DocumentRepositoryPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'landing' | 'wizard' | 'support' | 'about' | 'profile' | 'login' | 'reminders' | 'document-repository'>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleStartRegistration = () => {
    setCurrentView('wizard');
  };

  const handleShowReminders = () => {
    setCurrentView('reminders');
  };

  const handleShowDocumentRepository = () => {
    setCurrentView('document-repository');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('home');
  };

  const handleNavigation = (view: 'home' | 'landing' | 'support' | 'about' | 'profile' | 'login' | 'reminders' | 'document-repository') => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onStartRegistration={handleStartRegistration} onShowReminders={handleShowReminders} onShowDocumentRepository={handleShowDocumentRepository} />;
      case 'landing':
        return <LandingPage onStartRegistration={handleStartRegistration} />;
      case 'wizard':
        return <RegistrationWizard onBackToHome={handleBackToHome} />;
      case 'reminders':
        return <RemindersPage />;
      case 'document-repository':
        return <DocumentRepositoryPage />;
      case 'support':
        return <SupportPage />;
      case 'about':
        return <AboutPage />;
      case 'profile':
        return <ProfilePage />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      default:
        return <HomePage onStartRegistration={handleStartRegistration} onShowReminders={handleShowReminders} onShowDocumentRepository={handleShowDocumentRepository} />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          {currentView !== 'wizard' && (
            <Navbar
              currentView={currentView}
              onNavigate={handleNavigation}
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />
          )}
          {renderCurrentView()}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

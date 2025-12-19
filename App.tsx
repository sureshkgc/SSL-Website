import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Telecom from './pages/Telecom';
import Aviation from './pages/Aviation';
import DigitalServices from './pages/DigitalServices';
import Advisory from './pages/Advisory';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home navigateTo={navigateTo} />;
      case Page.About:
        return <About />;
      case Page.Telecom:
        return <Telecom />;
      case Page.Aviation:
        return <Aviation />;
      case Page.DigitalServices:
        return <DigitalServices />;
      case Page.Advisory:
        return <Advisory />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-bg text-text min-h-screen flex flex-col">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
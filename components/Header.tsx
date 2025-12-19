
import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; navigateTo: (page: Page) => void; children: React.ReactNode; className?: string }> = ({ page, currentPage, navigateTo, children, className }) => {
    const isActive = currentPage === page;
    return (
        <button
            onClick={() => navigateTo(page)}
            className={`transition-all duration-200 ${
                isActive ? 'text-primary font-semibold' : 'text-text hover:text-primary hover:bg-slate-100'
            } ${className}`}
        >
            {children}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState<string>('/logo.svg');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const savedLogo = localStorage.getItem('customLogo');
        if (savedLogo) {
            setLogoSrc(savedLogo);
        }
    }, []);

    const scrollToSection = (sectionId: string) => {
        navigateTo(Page.Aviation);
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        setMobileMenuOpen(false);
    };

    const handleMobileNavClick = (page: Page) => {
        navigateTo(page);
        setMobileMenuOpen(false);
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                localStorage.setItem('customLogo', base64String);
                setLogoSrc(base64String);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
        }
    };

    const handleResetLogo = () => {
        localStorage.removeItem('customLogo');
        setLogoSrc('/logo.svg');
    };

  return (
    <header className="bg-surface/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="relative group">
                <button 
                  onClick={() => navigateTo(Page.Home)} 
                  className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md p-1"
                  aria-label="Stratowave Solutions Home"
                >
                  <img src={logoSrc} alt="Stratowave Solutions Logo" className="h-10 w-auto bg-white rounded" />
                </button>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <button onClick={handleUploadClick} className="text-white text-xs bg-black/70 px-2 py-1 rounded hover:bg-black">Change</button>
                    <button onClick={handleResetLogo} className="text-white text-xs bg-black/70 px-2 py-1 rounded hover:bg-black">Reset</button>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/png, image/jpeg, image/svg+xml, image/gif"
                />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink page={Page.Home} currentPage={currentPage} navigateTo={navigateTo} className={`px-4 py-2 rounded-md text-sm font-medium ${currentPage === Page.Home ? 'border-b-2 border-primary' : ''}`}>Home</NavLink>
            <NavLink page={Page.About} currentPage={currentPage} navigateTo={navigateTo} className={`px-4 py-2 rounded-md text-sm font-medium ${currentPage === Page.About ? 'border-b-2 border-primary' : ''}`}>About Us</NavLink>
            <NavLink page={Page.Telecom} currentPage={currentPage} navigateTo={navigateTo} className={`px-4 py-2 rounded-md text-sm font-medium ${currentPage === Page.Telecom ? 'border-b-2 border-primary' : ''}`}>Telecom</NavLink>
            <NavLink page={Page.Aviation} currentPage={currentPage} navigateTo={navigateTo} className={`px-4 py-2 rounded-md text-sm font-medium ${currentPage === Page.Aviation ? 'border-b-2 border-primary' : ''}`}>Aviation</NavLink>
            <NavLink page={Page.DigitalServices} currentPage={currentPage} navigateTo={navigateTo} className={`px-4 py-2 rounded-md text-sm font-medium ${currentPage === Page.DigitalServices ? 'border-b-2 border-primary' : ''}`}>Digital Services</NavLink>
            <NavLink page={Page.Advisory} currentPage={currentPage} navigateTo={navigateTo} className={`px-4 py-2 rounded-md text-sm font-medium ${currentPage === Page.Advisory ? 'border-b-2 border-primary' : ''}`}>Advisory</NavLink>
          </nav>
          <div className="hidden md:block">
            <button onClick={() => navigateTo(Page.Contact)} className="bg-primary text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink page={Page.Home} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
            <NavLink page={Page.About} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block px-3 py-2 rounded-md text-base font-medium">About Us</NavLink>
            <NavLink page={Page.Telecom} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block px-3 py-2 rounded-md text-base font-medium">Telecom</NavLink>
            <details className="group">
                <summary className="px-3 py-2 list-none text-base font-medium text-text cursor-pointer hover:text-primary" onClick={() => navigateTo(Page.Aviation)}>Aviation</summary>
                <div className="pl-6">
                    <a onClick={() => scrollToSection('airports')} className="block px-3 py-2 text-base text-muted hover:text-primary cursor-pointer">Airports</a>
                    <a onClick={() => scrollToSection('cargo')} className="block px-3 py-2 text-base text-muted hover:text-primary cursor-pointer">Cargo</a>
                    <a onClick={() => scrollToSection('daas')} className="block px-3 py-2 text-base text-muted hover:text-primary cursor-pointer">DaaS</a>
                </div>
            </details>
            <NavLink page={Page.DigitalServices} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block px-3 py-2 rounded-md text-base font-medium">Digital Services</NavLink>
            <NavLink page={Page.Advisory} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block px-3 py-2 rounded-md text-base font-medium">Advisory</NavLink>
            <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

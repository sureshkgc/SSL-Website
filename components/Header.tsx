import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; navigateTo: (page: Page) => void; children: React.ReactNode; className?: string }> = ({ page, currentPage, navigateTo, children, className }) => {
    const isActive = currentPage === page;
    
    const activeClasses = 'bg-accent text-white';
    const inactiveClasses = 'text-headerFooterText hover:bg-white/20 hover:text-accent';

    return (
        <button
            onClick={() => navigateTo(page)}
            className={`transition-all duration-300 ease-in-out ${isActive ? activeClasses : inactiveClasses} ${className}`}
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

    const goToAviationSection = (sectionId: string) => {
        navigateTo(Page.Aviation);
        window.location.hash = sectionId;
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
    <header className="bg-headerFooterBg/90 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          
          {/* Logo */}
          <div className="relative z-20 bg-white rounded md:-translate-y-4 transition-transform duration-300 ease-in-out">
            <div className="relative group rounded">
                <button 
                  onClick={() => navigateTo(Page.Home)} 
                  className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded"
                  aria-label="Stratowave Solutions Home"
                >
                  <img src={logoSrc} alt="Stratowave Solutions Logo" className="h-16 md:h-20 w-auto rounded" />
                </button>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                    <button onClick={handleUploadClick} className="text-white text-lg bg-black/70 px-3 py-1.5 rounded hover:bg-black">Change</button>
                    <button onClick={handleResetLogo} className="text-white text-lg bg-black/70 px-3 py-1.5 rounded hover:bg-black">Reset</button>
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

          {/* Desktop Nav & Mobile Menu Button */}
          <div className="">
            <nav className="hidden md:flex items-center space-x-2">
              <NavLink page={Page.Home} currentPage={currentPage} navigateTo={navigateTo} className="px-4 py-2 rounded-md text-lg font-medium">Home</NavLink>
              <NavLink page={Page.About} currentPage={currentPage} navigateTo={navigateTo} className="px-4 py-2 rounded-md text-lg font-medium">About Us</NavLink>
              <NavLink page={Page.Telecom} currentPage={currentPage} navigateTo={navigateTo} className="px-4 py-2 rounded-md text-lg font-medium">Telecom</NavLink>
              <button
                onClick={() => goToAviationSection('airports')}
                className={`transition-all duration-300 ease-in-out px-4 py-2 rounded-md text-lg font-medium ${currentPage === Page.Aviation ? 'bg-accent text-white' : 'text-headerFooterText hover:bg-white/20 hover:text-accent'}`}
              >
                Aviation
              </button>
              <NavLink page={Page.DigitalServices} currentPage={currentPage} navigateTo={navigateTo} className="px-4 py-2 rounded-md text-lg font-medium">Digital Services</NavLink>
              <NavLink page={Page.Advisory} currentPage={currentPage} navigateTo={navigateTo} className="px-4 py-2 rounded-md text-lg font-medium">Advisory</NavLink>
              <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={navigateTo} className="px-4 py-2 rounded-md text-lg font-medium">Contact</NavLink>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-headerFooterText hover:text-primary focus:outline-none">
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
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-28 left-0 w-full bg-headerFooterBg/95 backdrop-blur-md shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink page={Page.Home} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium">Home</NavLink>
            <NavLink page={Page.About} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium">About Us</NavLink>
            <NavLink page={Page.Telecom} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium">Telecom</NavLink>
            <details className="group" open={currentPage === Page.Aviation}>
                <summary
                    onClick={(e) => { e.preventDefault(); goToAviationSection('airports'); }}
                    className={`list-none w-full text-left px-3 py-2 rounded-md text-lg font-medium cursor-pointer transition-all duration-300 ease-in-out ${currentPage === Page.Aviation ? 'bg-accent text-white' : 'text-headerFooterText hover:bg-white/20 hover:text-accent'}`}>
                    Aviation
                </summary>
                <div className="pl-6 mt-1">
                    <a onClick={() => goToAviationSection('airports')} className="block px-3 py-2 text-lg rounded-md text-headerFooterMuted hover:text-primary cursor-pointer">Airports</a>
                    <a onClick={() => goToAviationSection('cargo')} className="block px-3 py-2 text-lg rounded-md text-headerFooterMuted hover:text-primary cursor-pointer">Cargo</a>
                    <a onClick={() => goToAviationSection('daas')} className="block px-3 py-2 text-lg rounded-md text-headerFooterMuted hover:text-primary cursor-pointer">DaaS</a>
                </div>
            </details>
            <NavLink page={Page.DigitalServices} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium">Digital Services</NavLink>
            <NavLink page={Page.Advisory} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium">Advisory</NavLink>
            <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={handleMobileNavClick} className="block w-full text-left px-3 py-2 rounded-md text-lg font-medium">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
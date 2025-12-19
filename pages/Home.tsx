import React from 'react';
import { Page } from '../types';
import ImageUpload from '../components/ImageUpload';

// --- Icon components defined locally for the new Focus Area cards ---
const TelecomIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10 text-white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.008z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.872 12.126a12 12 0 0114.256 0M12 4.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V4.75z" />
  </svg>
);

const AviationIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10 text-white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const DigitalServicesIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10 text-white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const AdvisoryIcon: React.FC<{ className?: string }> = ({ className = 'h-10 w-10 text-white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-6-6h6a6 6 0 006 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);
// --- End Icon Components ---

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const FocusAreaCard: React.FC<{
    title: string;
    description: string;
    page: Page;
    navigateTo: (page: Page) => void;
    icon: React.ReactNode;
    storageKey: string;
}> = ({ title, description, page, navigateTo, icon, storageKey }) => {
    return (
        <div 
            className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-surface overflow-hidden border border-slate-200 flex flex-col"
        >
            {/* Image Area for editing, not for navigation */}
            <div className="h-72 relative">
                <ImageUpload
                    storageKey={storageKey}
                    placeholderText={`Image for ${title}`}
                    recommendedSize="600x450px"
                    className="w-full h-full"
                />
            </div>
            
            {/* Content Box for navigation */}
            <div 
                onClick={() => navigateTo(page)}
                className="p-6 pt-12 text-center bg-surface relative flex-grow cursor-pointer"
            >
                 <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center border-4 border-surface shadow-lg pointer-events-none">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-text">{title}</h3>
                <p className="mt-2 text-muted text-lg">{description}</p>
            </div>
        </div>
    );
};

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
            <h1 className="text-4xl font-semibold font-heading text-text sm:text-5xl">
                Bridging Strategy and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Connectivity</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted">
                We deliver comprehensive infrastructure and digital solutions across telecom, aviation, and emerging digital ecosystems to build resilient, future-ready systems.
            </p>
        </div>
      
        <div className="mt-12 sm:mt-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold font-heading text-text">Our Focus Areas</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">We provide specialized expertise at the intersection of infrastructure and technology.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                <FocusAreaCard 
                    title="Telecom"
                    description="Engineering robust fiber, IP/MPLS, and access networks for national-scale connectivity."
                    page={Page.Telecom}
                    navigateTo={navigateTo}
                    icon={<TelecomIcon />}
                    storageKey="focus-area-telecom-image"
                />
                <FocusAreaCard 
                    title="Aviation"
                    description="Integrating advanced IT, communication, and automation systems for airports, drones, and cargo terminals."
                    page={Page.Aviation}
                    navigateTo={navigateTo}
                    icon={<AviationIcon />}
                    storageKey="focus-area-aviation-image"
                />
                 <FocusAreaCard 
                    title="Digital Services"
                    description="Building custom digital platforms, AI/ML solutions, and deep-tech applications to drive operational intelligence."
                    page={Page.DigitalServices}
                    navigateTo={navigateTo}
                    icon={<DigitalServicesIcon />}
                    storageKey="focus-area-digital-services-image"
                />
                 <FocusAreaCard 
                    title="Advisory"
                    description="Providing strategic guidance, program governance, and project management for large-scale deployments."
                    page={Page.Advisory}
                    navigateTo={navigateTo}
                    icon={<AdvisoryIcon />}
                    storageKey="focus-area-advisory-image"
                />
            </div>
        </div>
    </div>
  );
};

export default Home;
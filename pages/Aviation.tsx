import React, { useState, useEffect } from 'react';
import CheckIcon from '../components/icons/CheckIcon';
import ImageUpload from '../components/ImageUpload';

type AviationTab = 'airports' | 'cargo' | 'daas';

const CapabilityListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0 mt-1">
            <CheckIcon className="h-5 w-5 text-primary" />
        </div>
        <p className="ml-3 text-lg text-muted">{children}</p>
    </li>
);

interface SectionProps {
    title: string;
    description: string;
    children: React.ReactNode;
    imageComment: string;
    storageKey: string;
    imagePosition?: 'left' | 'right';
}

const AviationSection: React.FC<SectionProps> = ({ title, description, children, imageComment, storageKey, imagePosition = 'right' }) => (
    <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`md:order-${imagePosition === 'right' ? '1' : '2'}`}>
                <h2 className="text-3xl font-medium font-heading text-primary">{title}</h2>
                <p className="mt-4 text-xl text-muted">{description}</p>
                <div className="mt-8">
                    {children}
                </div>
            </div>
            <div className={`relative mt-8 md:mt-0 md:order-${imagePosition === 'right' ? '2' : '1'}`}>
                <ImageUpload
                    storageKey={storageKey}
                    placeholderText={imageComment}
                    recommendedSize="800x800px"
                    className="w-full h-[32rem]"
                />
            </div>
        </div>
    </section>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="mt-8">
        <h4 className="font-semibold text-text text-xl">{title}</h4>
        <ul className="mt-4 space-y-3">{children}</ul>
    </div>
);

const SubNavButton: React.FC<{
  tabId: AviationTab;
  activeTab: AviationTab;
  setActiveTab: (tab: AviationTab) => void;
  children: React.ReactNode;
}> = ({ tabId, activeTab, setActiveTab, children }) => {
  const isActive = tabId === activeTab;
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(tabId);
    window.location.hash = tabId;
  };

  return (
    <a
      href={`#${tabId}`}
      onClick={handleClick}
      className={`flex-1 p-4 text-center text-lg font-bold transition-colors duration-300 ease-in-out focus:outline-none focus:relative focus:z-10 focus:ring-2 focus:ring-offset-black focus:ring-white ${
        isActive
          ? 'bg-white text-primary'
          : 'text-headerFooterText hover:bg-white/20'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
};


const Aviation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<AviationTab>('airports');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash === 'airports' || hash === 'cargo' || hash === 'daas') {
                setActiveTab(hash as AviationTab);
            } else {
                setActiveTab('airports');
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange, false);

        return () => {
            window.removeEventListener('hashchange', handleHashChange, false);
        };
    }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold font-heading text-text sm:text-5xl">
          Integrating Digital Systems for Modern Aviation
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-muted">
          We provide specialized digital infrastructure and aerial intelligence solutions for airports, cargo logistics, and critical asset monitoring.
        </p>
      </div>

       <div className="mt-12 sm:mt-16">
            <div className="max-w-4xl mx-auto bg-headerFooterBg rounded-2xl shadow-lg overflow-hidden border-2 border-accent">
                <nav className="flex flex-col md:flex-row" aria-label="Aviation Sections">
                    <SubNavButton tabId="airports" activeTab={activeTab} setActiveTab={setActiveTab}>
                        Airport Systems
                    </SubNavButton>
                    <div className="w-full h-[2px] md:w-[2px] md:h-auto bg-slate-600"></div>
                    <SubNavButton tabId="cargo" activeTab={activeTab} setActiveTab={setActiveTab}>
                        Cargo & Logistics
                    </SubNavButton>
                    <div className="w-full h-[2px] md:w-[2px] md:h-auto bg-slate-600"></div>
                    <SubNavButton tabId="daas" activeTab={activeTab} setActiveTab={setActiveTab}>
                        Drone as a Service
                    </SubNavButton>
                </nav>
            </div>
        </div>
      
      <div className="mt-2">
        {activeTab === 'airports' && (
            <AviationSection 
                title="Airport Digital Systems"
                description="Deployment and management of core ICT infrastructure for modern airport operations."
                imageComment="Image of modern airport terminal or control tower"
                storageKey="aviation-airports-image"
                imagePosition="right"
            >
                <SubSection title="Capabilities">
                    <CapabilityListItem>Airport ICT infrastructure deployment</CapabilityListItem>
                    <CapabilityListItem>Structured cabling & fiber backbone</CapabilityListItem>
                    <CapabilityListItem>Surveillance & communication systems</CapabilityListItem>
                    <CapabilityListItem>Terminal IT & operational networks</CapabilityListItem>
                    <CapabilityListItem>Command & control centers</CapabilityListItem>
                    <CapabilityListItem>System integration across stakeholders</CapabilityListItem>
                    <CapabilityListItem>O&M of airport digital infrastructure</CapabilityListItem>
                </SubSection>
                <SubSection title="Embedded Supply">
                    <CapabilityListItem>Networking hardware</CapabilityListItem>
                    <CapabilityListItem>Surveillance systems</CapabilityListItem>
                    <CapabilityListItem>Servers & storage</CapabilityListItem>
                    <CapabilityListItem>Airport IT software platforms</CapabilityListItem>
                </SubSection>
            </AviationSection>
        )}
        
        {activeTab === 'cargo' && (
            <AviationSection 
                title="Cargo & Logistics Systems"
                description="Automation and IT systems for efficient and transparent air cargo operations."
                imageComment="Image of automated cargo terminal or logistics"
                storageKey="aviation-cargo-image"
                imagePosition="left"
            >
                <SubSection title="Capabilities">
                    <CapabilityListItem>Cargo terminal automation systems</CapabilityListItem>
                    <CapabilityListItem>Warehouse & yard management integration</CapabilityListItem>
                    <CapabilityListItem>Cargo tracking & visibility platforms</CapabilityListItem>
                    <CapabilityListItem>Automated data capture & reporting</CapabilityListItem>
                    <CapabilityListItem>Integration with customs & regulatory systems</CapabilityListItem>
                    <CapabilityListItem>IT infrastructure for air cargo operations</CapabilityListItem>
                    <CapabilityListItem>Operations & maintenance of cargo digital systems</CapabilityListItem>
                </SubSection>
            </AviationSection>
        )}
        
        {activeTab === 'daas' && (
            <AviationSection 
                title="Drone as a Service (DaaS)"
                description="Managed drone operations focused on safety, efficiency, and affordability—delivering intelligence-ready data powered by AI and computer vision for enterprises and infrastructure owners."
                imageComment="Image of drone inspecting power lines or infrastructure"
                storageKey="aviation-daas-image"
                imagePosition="right"
            >
                 <SubSection title="Use Cases: Energy & Infrastructure">
                    <CapabilityListItem>Transmission line inspection & solar/wind asset monitoring</CapabilityListItem>
                    <CapabilityListItem>Roads, bridges, corridors, rail & metro inspections</CapabilityListItem>
                    <CapabilityListItem>Construction progress tracking & site surveys</CapabilityListItem>
                </SubSection>
                <SubSection title="Use Cases: Telecom & Mining">
                    <CapabilityListItem>Telecom tower and fiber route surveys</CapabilityListItem>
                    <CapabilityListItem>Telecom asset health inspection</CapabilityListItem>
                    <CapabilityListItem>Mine surveys, volumetric analysis, and stockpile management</CapabilityListItem>
                </SubSection>
                <SubSection title="Use Cases: Urban, Industrial & Emergency">
                    <CapabilityListItem>Smart city mapping & industrial plant inspections</CapabilityListItem>
                    <CapabilityListItem>Safety & compliance audits</CapabilityListItem>
                    <CapabilityListItem>Disaster damage assessment & rapid mapping</CapabilityListItem>
                </SubSection>
            </AviationSection>
        )}
      </div>
    </div>
  );
};

export default Aviation;
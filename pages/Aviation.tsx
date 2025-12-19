import React from 'react';
import PageContainer from '../components/PageContainer';
import CheckIcon from '../components/icons/CheckIcon';
import ImageUpload from '../components/ImageUpload';

const CapabilityListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0 mt-1">
            <CheckIcon className="h-5 w-5 text-secondary" />
        </div>
        <p className="ml-3 text-lg text-muted">{children}</p>
    </li>
);

interface SectionProps {
    id: string;
    title: string;
    description: string;
    children: React.ReactNode;
    imageComment: string;
    storageKey: string;
    imagePosition?: 'left' | 'right';
}

const AviationSection: React.FC<SectionProps> = ({ id, title, description, children, imageComment, storageKey, imagePosition = 'right' }) => (
    <section id={id} className="py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`md:order-${imagePosition === 'right' ? '1' : '2'}`}>
                <h2 className="text-3xl font-medium font-heading text-primary">{title}</h2>
                <p className="mt-4 text-lg text-muted">{description}</p>
                <div className="mt-8">
                    {children}
                </div>
            </div>
            <div className={`relative mt-8 md:mt-0 md:order-${imagePosition === 'right' ? '2' : '1'}`}>
                <ImageUpload
                    storageKey={storageKey}
                    placeholderText={imageComment}
                    recommendedSize="800x600px"
                    className="w-full h-96"
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
)

const Aviation: React.FC = () => {
  return (
    <PageContainer>
      <div className="text-center">
        <p className="text-base font-semibold text-secondary tracking-wide uppercase">Aviation Solutions</p>
        <h1 className="mt-2 text-4xl font-semibold font-heading text-text sm:text-5xl">
          Integrating Digital Systems for Modern Aviation
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted">
          We provide specialized digital infrastructure and aerial intelligence solutions for airports, cargo logistics, and critical asset monitoring.
        </p>
      </div>

      <div className="mt-10 divide-y divide-slate-200">
        <AviationSection 
            id="airports" 
            title="Airport Digital Systems"
            description="Deployment and management of core ICT infrastructure for modern airport operations."
            imageComment="Insert image of modern airport terminal / control tower here"
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
        
        <AviationSection 
            id="cargo" 
            title="Cargo & Logistics Systems"
            description="Automation and IT systems for efficient and transparent air cargo operations."
            imageComment="Insert image of automated cargo terminal or logistics here"
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
        
        <AviationSection 
            id="daas" 
            title="Drone as a Service (DaaS)"
            description="Managed drone operations focused on safety, efficiency, and affordability—delivering intelligence-ready data powered by AI and computer vision for enterprises and infrastructure owners."
            imageComment="Insert image of drone inspecting power lines or infrastructure here"
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
      </div>
    </PageContainer>
  );
};

export default Aviation;
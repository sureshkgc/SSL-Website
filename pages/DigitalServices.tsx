
import React from 'react';
import PageContainer from '../components/PageContainer';

const ServiceCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 h-full flex flex-col">
        <h3 className="text-xl font-medium font-heading text-primary">{title}</h3>
        <p className="mt-3 text-lg text-muted flex-grow">{description}</p>
    </div>
);

const DigitalServices: React.FC = () => {
  const offerings = [
    {
        title: "OSS/BSS Systems",
        description: "Comprehensive operational and business support systems to manage networks, services, and customers efficiently."
    },
    {
        title: "Network Monitoring Dashboards",
        description: "Real-time, intuitive dashboards for complete visibility into network performance and health."
    },
    {
        title: "CRM",
        description: "Custom CRM solutions to manage customer relationships, sales pipelines, and service delivery."
    },
    {
        title: "GIS Based Asset Mapping",
        description: "Geospatial platforms for mapping, tracking, and managing critical infrastructure assets."
    },
     {
        title: "Staff Monitoring & Payroll Automation",
        description: "Integrated systems for workforce management, performance tracking, and automated payroll processing."
    },
    {
        title: "Web & Mobile Applications",
        description: "Bespoke applications designed to enhance operational control and user engagement."
    },
    {
        title: "Automation & Orchestration Platforms",
        description: "Powerful platforms to automate complex workflows and orchestrate services across diverse systems."
    },
    {
        title: "Cloud-Native Architectures",
        description: "Designing and implementing scalable, resilient solutions using modern cloud-native principles."
    }
  ];
    
  return (
    <PageContainer>
        <div className="text-center">
            <p className="text-base font-semibold text-secondary tracking-wide uppercase">Digital Services</p>
            <h1 className="mt-2 text-4xl font-semibold font-heading text-text sm:text-5xl">
                Operational & Automation Platforms
            </h1>
            <p className="mt-6 text-xl text-muted max-w-4xl mx-auto">
                We build operational and automation-centric digital platforms that provide visibility, control, and efficiency for complex infrastructure environments.
            </p>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {offerings.map((offering) => (
                <ServiceCard key={offering.title} title={offering.title} description={offering.description} />
            ))}
        </div>
    </PageContainer>
  );
};

export default DigitalServices;

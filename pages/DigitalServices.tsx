import React from 'react';
import ImageUpload from '../components/ImageUpload';

const ServiceCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-surface p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-primary transition-all duration-300 ease-in-out h-full flex flex-col transform hover:-translate-y-1.5">
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
        title: "Call Center Automation",
        description: "Enhance customer support with AI-powered voice agents, intelligent chatbots, and streamlined workflows for human agents."
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
            <h1 className="text-4xl font-semibold font-heading text-text sm:text-5xl">
                Operational & Automation Platforms
            </h1>
            <p className="mt-6 text-xl text-muted max-w-4xl mx-auto">
                We build operational and automation-centric digital platforms that provide visibility, control, and efficiency for complex infrastructure environments.
            </p>
        </div>
        
        <div className="mt-12">
            <ImageUpload
                storageKey="digital-services-main-image"
                placeholderText="Image representing digital platforms or automation"
                recommendedSize="1200x400px"
                className="w-full h-64 md:h-80 lg:h-96 rounded-2xl"
            />
        </div>

        <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offerings.map((offering) => (
                    <ServiceCard key={offering.title} title={offering.title} description={offering.description} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default DigitalServices;
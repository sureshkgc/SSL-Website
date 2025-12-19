import React from 'react';
import ImageUpload from '../components/ImageUpload';

const AdvisoryCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-surface p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-primary transition-all duration-300 ease-in-out h-full flex flex-col transform hover:-translate-y-1.5">
        <h3 className="text-xl font-medium font-heading text-primary">{title}</h3>
        <p className="mt-3 text-lg text-muted flex-grow">{description}</p>
    </div>
);

const Advisory: React.FC = () => {
    const services = [
        {
            title: "Feasibility & DPR Preparation",
            description: "Conducting comprehensive feasibility studies and preparing Detailed Project Reports (DPR) to establish project viability and support funding proposals."
        },
        {
            title: "Regulatory & Compliance",
            description: "Providing expert guidance to navigate complex regulatory landscapes and ensure full compliance with telecom, aviation, and government policies."
        },
        {
            title: "Technology & Solution Design",
            description: "Performing in-depth technology evaluations and creating vendor-agnostic solution designs to build optimal, future-ready infrastructure."
        },
        {
            title: "Bid & Tender Management",
            description: "Managing the end-to-end bid process, from drafting RFPs and tenders to evaluating proposals to secure the best partners."
        },
        {
            title: "Technical Staffing & Resource Deployment",
            description: "Deploying skilled technical professionals and subject matter experts to augment your teams and accelerate project execution."
        },
        {
            title: "Project & Program Management",
            description: "Delivering robust PMO services to oversee large-scale deployments, manage risks, and ensure projects are delivered on time and within budget."
        },
        {
            title: "Contracts Management",
            description: "Expert management of the entire contract lifecycle, from drafting and negotiation to execution and compliance, ensuring risk mitigation and value optimization."
        },
        {
            title: "Revenue Management",
            description: "Implementing comprehensive revenue assurance, billing, and financial management frameworks to prevent leakage, optimize pricing, and maximize profitability."
        },
        {
            title: "Government & PSU Engagement",
            description: "Facilitating strategic engagement with government bodies and Public Sector Undertakings (PSUs) to streamline approvals and foster collaboration."
        }
    ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
            <h1 className="text-4xl font-semibold font-heading text-text sm:text-5xl">
            Execution-Enabling Advisory Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted">
            We provide execution-enabling advisory and program support services to navigate complex project landscapes and ensure successful outcomes.
            </p>
        </div>

        <div className="mt-12">
            <ImageUpload
                storageKey="advisory-main-image"
                placeholderText="Image representing strategic advisory or planning"
                recommendedSize="1200x400px"
                className="w-full h-64 md:h-80 lg:h-96 rounded-2xl"
            />
        </div>

        <div className="mt-16">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                    <AdvisoryCard key={service.title} title={service.title} description={service.description} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Advisory;
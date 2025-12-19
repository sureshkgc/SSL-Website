import React from 'react';
import CheckIcon from '../components/icons/CheckIcon';
import ImageUpload from '../components/ImageUpload';

// --- Icon Components for Capability Cards ---
const NetworkDesignIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
);

const DeploymentIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-3.142 0-6.108 2.06-7.447 5.053M19.447 8.053C18.108 5.06 15.142 3 12 3m0 18c-3.142 0-6.108-2.06-7.447-5.053m14.894 0C18.108 18.94 15.142 21 12 21m-7.447-5.053h14.894" />
    </svg>
);

const ServiceDeliveryIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5-4.5h13.5m-13.5-4.5h13.5m3 9V5.25A2.25 2.25 0 0016.5 3H7.5A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h8.25a2.25 2.25 0 002.25-2.25V18.75" />
    </svg>
);

const StrategyIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" />
    </svg>
);
// --- End Icon Components ---


const TelecomFocusCard: React.FC<{ title: string; points: string[]; icon: React.ReactNode; storageKey: string; }> = ({ title, points, icon, storageKey }) => (
    <div className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-surface overflow-hidden border border-slate-200">
        <div className="relative">
            <div className="h-56 bg-slate-200">
                <ImageUpload
                    storageKey={storageKey}
                    placeholderText={`Image for ${title}`}
                    recommendedSize="600x400px"
                    className="w-full h-full"
                />
            </div>
            
            <div className="p-6 pt-16 bg-surface relative min-h-[22rem] flex flex-col">
                <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center border-4 border-surface shadow-lg">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-text text-center">{title}</h3>
                <ul className="mt-4 space-y-3 flex-grow">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <p className="ml-3 text-muted text-lg">{point}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);


const TechLogo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-surface px-4 py-2 rounded-lg text-center text-muted text-lg border border-slate-200 hover:border-primary transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
        {children}
    </div>
)

const Telecom: React.FC = () => {
  const capabilities = [
    {
      title: "Network Design & Engineering",
      icon: <NetworkDesignIcon className="h-10 w-10 text-white" />,
      points: [
        "IP/MPLS backbone & advanced routing (BGP, OSPF)",
        "GPON-based fiber access networks (FTTx)",
        "DWDM long-haul & metro transmission",
        "MPLS L2/L3 VPN & traffic engineering"
      ],
      storageKey: "telecom-design-image"
    },
    {
      title: "Deployment & Operations",
      icon: <DeploymentIcon className="h-10 w-10 text-white" />,
      points: [
        "Nationwide optical fiber deployment (metro & rural)",
        "Comprehensive survey, planning, and execution",
        "Last-mile connectivity solutions",
        "24/7 Network Operations Center (NOC) setup & management"
      ],
      storageKey: "telecom-deployment-image"
    },
    {
      title: "Service Delivery & Platforms",
      icon: <ServiceDeliveryIcon className="h-10 w-10 text-white" />,
      points: [
        "IPTV, Triple Play & CDN service delivery",
        "Subscriber management platforms (BNG, CGNAT)",
        "Core network services (DNS, DHCP, RADIUS)",
        "Content protection & DRM integration"
      ],
      storageKey: "telecom-service-image"
    },
    {
      title: "Strategic Infrastructure & Supply",
      icon: <StrategyIcon className="h-10 w-10 text-white" />,
      points: [
        "Data center & disaster recovery site builds",
        "Go-To-Market (GTM) strategy & business modelling",
        "Turnkey supply of carrier-grade network equipment",
        "Partnerships with leading OEMs"
      ],
      storageKey: "telecom-strategy-image"
    }
  ];
    
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
            <h1 className="text-4xl font-semibold font-heading text-text sm:text-5xl">
              Carrier-Grade Execution and Integration
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted">
              We focus on carrier-grade execution, integration, and operations for robust, scalable, and high-performance telecommunication networks.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
                <TelecomFocusCard
                    key={cap.title}
                    title={cap.title}
                    points={cap.points}
                    icon={cap.icon}
                    storageKey={cap.storageKey}
                />
            ))}
        </div>
    </div>
    <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="text-center">
                <h2 className="text-3xl font-medium font-heading text-primary">Our Technology Expertise</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
                    We leverage our deep industry expertise to deploy and integrate carrier-grade equipment from leading global telecom OEMs.
                </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
                <TechLogo>Cisco</TechLogo>
                <TechLogo>Juniper</TechLogo>
                <TechLogo>Nokia</TechLogo>
                <TechLogo>Huawei</TechLogo>
                <TechLogo>Ciena</TechLogo>
                <TechLogo>Fortinet</TechLogo>
                <TechLogo>MikroTik</TechLogo>
                <TechLogo>Ubiquiti</TechLogo>
            </div>
        </div>
    </div>
     <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="text-center">
                <h2 className="text-3xl font-medium font-heading text-primary">Embedded Supply (Telecom)</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
                    We provide end-to-end supply of carrier-grade hardware and components to build and maintain robust network infrastructure.
                </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
                <TechLogo>Routers, switches, servers</TechLogo>
                <TechLogo>Optical fiber & accessories</TechLogo>
                <TechLogo>DWDM & transmission equipment</TechLogo>
                <TechLogo>Network security appliances</TechLogo>
            </div>
        </div>
    </div>
    </>
  );
};

export default Telecom;
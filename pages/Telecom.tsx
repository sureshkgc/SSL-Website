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

const SubSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="mt-8">
        <h4 className="font-semibold text-text text-xl">{title}</h4>
        <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-4">{children}</ul>
    </div>
)

const TelecomSection: React.FC<{ title: string, description: string, children: React.ReactNode, imageComment: string, storageKey: string, imagePosition?: 'left' | 'right' }> = ({ title, description, children, imageComment, storageKey, imagePosition = 'right' }) => (
    <section className="py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`md:order-${imagePosition === 'right' ? '1' : '2'}`}>
                <h2 className="text-3xl font-medium font-heading text-primary">{title}</h2>
                <p className="mt-4 text-lg text-muted">{description}</p>
                {children}
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


const TechLogo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-surface px-4 py-2 rounded-md text-center text-muted text-sm border">
        {children}
    </div>
)

const Telecom: React.FC = () => {
  return (
    <>
    <PageContainer>
        <div className="text-center">
            <p className="text-base font-semibold text-secondary tracking-wide uppercase">Telecom Infrastructure</p>
            <h1 className="mt-2 text-4xl font-semibold font-heading text-text sm:text-5xl">
              Carrier-Grade Execution and Integration
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted">
              We focus on carrier-grade execution, integration, and operations for robust, scalable, and high-performance telecommunication networks.
            </p>
        </div>

        <div className="mt-10 divide-y divide-slate-200">
            <TelecomSection
                title="Core Capabilities"
                description="End-to-end design, deployment, and management of core network infrastructure."
                imageComment="Fiber optic cables being laid in a trench or a data center rack with flashing lights"
                storageKey="telecom-core-capabilities-image"
                imagePosition="right"
            >
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                    <CapabilityListItem>IP/MPLS backbone engineering</CapabilityListItem>
                    <CapabilityListItem>GPON-based fiber access networks</CapabilityListItem>
                    <CapabilityListItem>DWDM long-haul transmission</CapabilityListItem>
                    <CapabilityListItem>Metro and rural fiber deployment</CapabilityListItem>
                    <CapabilityListItem>Survey, planning and laying of Optical Fiber Cable</CapabilityListItem>
                    <CapabilityListItem>Last-mile connectivity solutions</CapabilityListItem>
                    <CapabilityListItem>IPTV & Triple Play service delivery</CapabilityListItem>
                    <CapabilityListItem>NOC setup & management</CapabilityListItem>
                    <CapabilityListItem>Data center & DR infrastructure</CapabilityListItem>
                    <CapabilityListItem>Go-To-Market (GTM) Strategy and Business Modelling</CapabilityListItem>
                </ul>
            </TelecomSection>

            <TelecomSection
                title="Advanced Network & Service Platforms"
                description="Expertise in complex routing protocols and the platforms that manage subscriber services."
                imageComment="Abstract network topology diagram or a network engineer at a console"
                storageKey="telecom-advanced-networking-image"
                imagePosition="left"
            >
                <SubSection title="Advanced Networking">
                    <CapabilityListItem>BGP, OSPF, IS-IS</CapabilityListItem>
                    <CapabilityListItem>MPLS L2/L3 VPNs</CapabilityListItem>
                    <CapabilityListItem>MP-BGP for multicast</CapabilityListItem>
                    <CapabilityListItem>PIM (Sparse & Dense)</CapabilityListItem>
                    <CapabilityListItem>Traffic engineering</CapabilityListItem>
                </SubSection>
                 <SubSection title="Service Platforms">
                    <CapabilityListItem>BNG / CGNAT</CapabilityListItem>
                    <CapabilityListItem>CDN content acceleration</CapabilityListItem>
                    <CapabilityListItem>DNS/DHCP/RADIUS/AAA</CapabilityListItem>
                    <CapabilityListItem>DRM & content protection</CapabilityListItem>
                </SubSection>
            </TelecomSection>
        </div>
    </PageContainer>
    <div className="bg-slate-50">
        <PageContainer>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h3 className="text-3xl font-medium font-heading text-primary">Embedded Supply & Technology Partners</h3>
                     <p className="mt-4 text-lg text-muted">
                        We leverage our deep industry partnerships to supply and integrate carrier-grade equipment from leading global OEMs.
                    </p>
                    <div className="mt-8 bg-surface p-8 rounded-lg">
                        <h4 className="font-semibold text-text text-xl">Key Equipment Supplied</h4>
                        <ul className="mt-4 space-y-3">
                            <CapabilityListItem>Routers, switches, servers</CapabilityListItem>
                            <CapabilityListItem>Optical fiber & accessories</CapabilityListItem>
                            <CapabilityListItem>DWDM & transmission equipment</CapabilityListItem>
                            <CapabilityListItem>Network security appliances</CapabilityListItem>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className="text-center text-lg font-medium text-text mb-6">Technology Experience</h4>
                    <div className="flex flex-wrap justify-center gap-4">
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
        </PageContainer>
    </div>
    </>
  );
};

export default Telecom;
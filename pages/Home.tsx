import React from 'react';
import { Page } from '../types';
import PageContainer from '../components/PageContainer';
import ImageSlideshow from '../components/ImageSlideshow';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const ServiceHighlight: React.FC<{ title: string; description: string; page: Page; navigateTo: (page: Page) => void; }> = ({ title, description, page, navigateTo }) => (
    <div className="bg-surface p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-slate-200">
        <h3 className="text-2xl font-medium font-heading text-primary">{title}</h3>
        <p className="mt-4 text-muted flex-grow">{description}</p>
        <button onClick={() => navigateTo(page)} className="mt-6 text-secondary font-semibold hover:text-secondary/80 transition-colors self-start">
            Learn More &rarr;
        </button>
    </div>
);

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <>
      <PageContainer>
        <div className="text-center">
          <h1 className="text-5xl font-semibold font-heading text-text leading-tight md:text-6xl">
            Bridging Strategy and <span className="text-primary">Connectivity</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted">
            We deliver comprehensive infrastructure and digital solutions across telecom, aviation, and emerging digital ecosystems to build resilient, future-ready systems.
          </p>
        </div>
      </PageContainer>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <ImageSlideshow />
      </div>

      <div className="bg-slate-50">
        <PageContainer>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold font-heading text-text">Our Core Domains</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">We provide specialized expertise at the intersection of infrastructure and technology.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <ServiceHighlight 
                    title="Telecom"
                    description="Engineering robust fiber, IP/MPLS, and access networks for national-scale connectivity."
                    page={Page.Telecom}
                    navigateTo={navigateTo}
                />
                <ServiceHighlight 
                    title="Aviation"
                    description="Integrating advanced IT, communication, and automation systems for airports, drones, and cargo terminals."
                    page={Page.Aviation}
                    navigateTo={navigateTo}
                />
                 <ServiceHighlight 
                    title="Digital Services"
                    description="Building custom digital platforms, AI/ML solutions, and deep-tech applications to drive operational intelligence."
                    page={Page.DigitalServices}
                    navigateTo={navigateTo}
                />
                 <ServiceHighlight 
                    title="Advisory"
                    description="Providing strategic guidance, program governance, and project management for large-scale deployments."
                    page={Page.Advisory}
                    navigateTo={navigateTo}
                />
            </div>
        </PageContainer>
      </div>
    </>
  );
};

export default Home;

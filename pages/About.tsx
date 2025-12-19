import React from 'react';
import PageContainer from '../components/PageContainer';

const About: React.FC = () => {
  return (
    <PageContainer>
      <div className="text-center">
        <h1 className="text-4xl font-semibold font-heading text-text sm:text-5xl">
          Pioneering Infrastructure Solutions
        </h1>
      </div>
      
      <div className="mt-10 text-xl text-muted max-w-4xl mx-auto space-y-6 text-center">
        <p>
          Stratowave Solutions LLP delivers comprehensive infrastructure and digital
          solutions across telecom, aviation, drones, and digital ecosystems,
          building resilient systems through seamless strategy and technical execution.
        </p>
        <p>
          We operate at the intersection of policy, regulation, technology,
          and on-ground execution, enabling public and private sector clients
          to build scalable, secure, and future-ready infrastructure.
        </p>
      </div>
    </PageContainer>
  );
};

export default About;
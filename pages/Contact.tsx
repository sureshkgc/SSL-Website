import React from 'react';
import PageContainer from '../components/PageContainer';

const ContactInfoCard: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-surface p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-medium font-heading text-primary">{title}</h3>
        <div className="mt-4 text-muted space-y-2 text-lg">
            {children}
        </div>
    </div>
);

const Contact: React.FC = () => {
  return (
    <PageContainer>
      <div className="text-center">
        <h1 className="text-4xl font-semibold font-heading text-text sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-muted">
          Your vision, our expertise. Let’s collaborate and create something extraordinary together.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="mb-8">
            <ContactInfoCard title="Address">
                <p className="font-semibold text-text">Stratowave Solutions LLP</p>
                <p>
                    D.No. 9-110-39/4, Flat No.501,<br />
                    N-Breeze Towers-1, Sujatha Nagar,<br />
                    Pendurthi, Visakhapatnam – 530051,<br />
                    Andhra Pradesh, India.
                </p>
            </ContactInfoCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfoCard title="Email">
                <a href="mailto:sureshg@stratowavesolutions.com" className="block text-primary hover:underline hover:brightness-110 transition-all">sureshg@stratowavesolutions.com</a>
                <a href="mailto:satyap@stratowavesolutions.com" className="block text-primary hover:underline hover:brightness-110 transition-all">satyap@stratowavesolutions.com</a>
            </ContactInfoCard>

            <ContactInfoCard title="Phone">
                <a href="tel:+919866664451" className="block hover:text-primary transition-colors">+91 9866664451</a>
                <a href="tel:+917022893653" className="block hover:text-primary transition-colors">+91 7022893653</a>
            </ContactInfoCard>
        </div>
      </div>

    </PageContainer>
  );
};

export default Contact;
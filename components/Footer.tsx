
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Stratowave Solutions LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

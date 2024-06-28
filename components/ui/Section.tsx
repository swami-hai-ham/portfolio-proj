import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      {children}
    </div>
  );
};

export default Section;

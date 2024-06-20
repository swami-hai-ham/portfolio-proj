import React from 'react';

interface StepIndicatorProps {
  stepNumber: number;
  title: string;
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ stepNumber, title, currentStep }) => {
  return (
    <div className={`flex justify-start items-center space-x-2 m-2 mx-10 ${currentStep == stepNumber ? "" : ""} p-2`}>
      <div className={`flex items-center justify-center w-8 h-8 border ${currentStep == stepNumber ? "border-blue-400" : "border-gray-300"} rounded`}>
        <span>{stepNumber}</span>
      </div>
      <div className="font-semibold">
        {title}
      </div>
    </div>
  );
};

export default StepIndicator;

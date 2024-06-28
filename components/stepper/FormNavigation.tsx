import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormContext } from 'react-hook-form';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  steps: Steps[]
}

type Steps = {
    title: string;
    stepNumber: number;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  setCurrentStep,
  steps
}) => {

    const { trigger } = useFormContext();
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };



const validateStepFields = async (stepNumber: number) => {

  switch (stepNumber) {
    case 1:
      return await trigger(['basics.name', 'basics.current_role', 'basics.image']);
    case 2:
      return await trigger("work");
    case 3:
      return await trigger("education");
    case 4:
      return await trigger("projects");
    default:
      return false;
  }
};

const onNext = async () => {
  const isStepValid = await validateStepFields(currentStep);
  console.log(isStepValid)
  if (isStepValid) {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  } else {
    console.log(`Step ${currentStep} validation failed. Cannot proceed.`);
  }
};


  return (
    <div className="flex justify-between items-center w-full">
      <Button
        type="button"
        className="bg-black text-white"
        onClick={handleBack}
        disabled={currentStep === 1}
      >
        Back
      </Button>
      <Button
        type="button"
        className="bg-black text-white"
        onClick={onNext}
        disabled={currentStep === totalSteps}
      >
        Next
      </Button>
      
    </div>
  );
};

export default FormNavigation;

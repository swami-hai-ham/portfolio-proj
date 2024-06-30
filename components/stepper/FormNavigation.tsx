import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useFormContext } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

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
  const [notExp, setNotExp] = useState(false);
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
      return await trigger("basics");
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

  if (isStepValid) {
    if(notExp && currentStep == 2){
      setCurrentStep(currentStep + 1);
    }
    else if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  } else {
    console.log(`Step ${currentStep} validation failed. Cannot proceed.`);
  }
};


  return (
    <div className='flex flex-col items-center w-full'>
      {currentStep == 2 && <div className="flex justify-center items-center w-full m-4">
      <Checkbox id="terms" onCheckedChange={(checked) => {
        console.log(checked)
        setNotExp(Boolean(checked))
        console.log(notExp)
      }}/>
      <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {"I've no Experience yet"}
      </Label>
    </div>}
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
    </div>
  );
};

export default FormNavigation;

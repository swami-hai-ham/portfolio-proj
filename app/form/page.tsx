"use client"
import React, { useState } from 'react';
import StepIndicator from '@/components/steps/StepsIndicator';
import { useForm, FormProvider } from 'react-hook-form';
import Step1Form from '@/components/steps/Step1Form';
import Step2Form from '@/components/steps/Step2Form';
import Step3Form from '@/components/steps/Step3Form';
import Step4Form from '@/components/steps/Step4Form';
import Step5Form from '@/components/steps/Step5Form';

type Step = {
  title: string;
  stepNumber: number;
};

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    defaultValues: {
      technologies: [],
      skills: []
    }
  });
  const onSubmit = (data: any) => console.log(data);

  const steps: Step[] = [{
    title: "User Details",
    stepNumber: 1
  },{
    title: "Education",
    stepNumber: 2
  },{
    title: "Projects",
    stepNumber: 3
  }, {
    title: "Work Experience",
    stepNumber: 4
  },{
    title: "Skills",
    stepNumber: 5
  }]

  const stepForms = [
    <Step1Form key={1}/>,
    <Step2Form key={2}/>,
    <Step3Form key={3}/>,
    <Step4Form key={4}/>,
    <Step5Form key={5}/>
  ]

  return (
    <div className='flex justify-start items-center flex-col w-full h-screen bg-slate-500'>
        <div className='flex justify-start items-center pl-10 text-2xl font-bold w-full h-14'>
            Portfolio
        </div>
        <div className='flex items-start bg-white flex-grow w-full'>
            <div className='hidden md:flex flex-col items-start justify-center h-full w-1/3'>
              {steps.map((step) => (
                <StepIndicator title={step.title} currentStep={currentStep + 1} stepNumber={step.stepNumber} key={step.stepNumber} />))}
            </div>
            <div className='flex flex-col justify-center items-center h-full w-full md:w-2/3 bg-blue-500'>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {stepForms[currentStep]}
                <button type="button" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>Back</button>
                <button type="button" onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep === steps.length - 1}>Next</button>
                {currentStep === steps.length - 1 && <button type="submit">Submit</button>}
              </form>
            </FormProvider>
            </div>
        </div>
    </div>
  )
}

export default Page;
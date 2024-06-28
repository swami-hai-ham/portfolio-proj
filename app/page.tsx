"use client"
import React, { useState } from 'react';
import StepIndicator from './../components/stepper/StepIndicator';
import Step1Form from '@/components/stepper/Step1Form';
import {UserSchema} from '@/lib/schema';
import {z} from 'zod'
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Step2Form from '@/components/stepper/Step2Form';
import Step3Form from '@/components/stepper/Step3Form';
import Step4Form from '@/components/stepper/Step4Form';
import { Button } from '@/components/ui/button';
import { useFormContext } from 'react-hook-form';
import FormNavigation from '@/components/stepper/FormNavigation';
import { UseFormHandleSubmit } from 'react-hook-form';


// type FormData = z.infer<typeof UserSchema>

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm<FormData>({
    resolver: zodResolver(UserSchema),
    mode: "all",
  });
  const steps = [
    { title: "User Details", stepNumber: 1 },
    { title: "Work", stepNumber: 2 },
    { title: "Education & Certifications", stepNumber: 3 },
    { title: "Projects & Skills", stepNumber: 4 }
  ];


  const stepForms = [
    <Step1Form key={1}/>,
    <Step2Form key={2}/>,
    <Step3Form key={3}/>,
    <Step4Form key={4}/>
  ]


  const onSubmit = async (data: FormData) => {
    console.log(data)
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-screen">
        <div className="flex justify-between items-center w-full h-[60px] bg-black text-white px-5 font-bold text-xl">
          <div>Logo</div>
          <div>Profile pic</div>
        </div>
        <div className="flex justify-center items-start w-full flex-grow py-4">
          <StepIndicator steps={steps} currentStep={currentStep}/>
        </div>
        
        <div className='flex justify-center items-start flex-grow py-4'>
        <FormProvider {...methods} >
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {stepForms[currentStep -1]}
                <FormNavigation currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={steps.length} steps={steps}/>
                {currentStep === steps.length && <Button type="submit" className='bg-black text-white'>Submit</Button>}
              </form>
            </FormProvider>
        </div>
    </div>
  );
}

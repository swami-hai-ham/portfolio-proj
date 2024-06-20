import React from 'react'
import TechnologiesInput from '../ui/TechnologiesInput'
import { useFormContext } from 'react-hook-form';

const Step5Form = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className='flex flex-col justify-center items-center w-96'>
      <div className='text-2xl font-bold'>Skills</div>
      <div className='m-4'>
        <TechnologiesInput />
        {errors.technologies && 
          <p>{typeof errors.technologies.message === 'string' ? errors.technologies.message : ''}</p>
        }
      </div>
    </div>
  )
}

export default Step5Form
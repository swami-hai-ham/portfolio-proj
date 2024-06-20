import React from 'react';
import { useFormContext } from 'react-hook-form';
import TechnologiesInput from '../ui/TechnologiesInput';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';


const Step3Form = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className='flex flex-col justify-center items-center w-96'>
      <div className='text-2xl font-bold'>Project Details</div>
      <div className='m-4'>
        <label>Project Name</label>
        <Input {...register('projectName', { required: 'Project name is required' })} placeholder='Netflix clone' />
        {errors.projectName && 
          <p>{typeof errors.projectName.message === 'string' ? errors.projectName.message : ''}</p>
        }
      </div>
      <div className='m-4'>
        <label>Project Link</label>
        <Input {...register('url', { required: 'Project Link is required' })} type="url"/>
        {errors.url && 
          <p>
            {typeof errors.url.message === 'string' ? errors.url.message : ''}
          </p>
        }
    </div>
      <div className='m-4'>
        <TechnologiesInput />
        {errors.technologies && 
          <p>{typeof errors.technologies.message === 'string' ? errors.technologies.message : ''}</p>
        }
      </div>
      <div className='m-4'>
        <label>Description</label>
        <Textarea
          placeholder="Tell us a little bit about your Project"
          className="w-60"
          {...register('project_description', { required: 'Project description is required' })}
        />
        {errors.project_description && 
          <p>
            {typeof errors.project_description.message === 'string' ? errors.project_description.message : ''}
          </p>
        }
      </div>
    </div>
  )
}

export default Step3Form
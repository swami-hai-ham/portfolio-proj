import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from "@/components/ui/input"

const Step1Form = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className='flex flex-col justify-center items-center w-96'>
      <div className='text-2xl font-bold'>User Details</div>
      <div className='m-4'>
        <label>Username</label>
        <Input {...register('username', { required: 'Username is required' })} placeholder='johndoe'/>
        {errors.username && 
          <p>
            {typeof errors.username.message === 'string' ? errors.username.message : ''}
          </p>
        }
    </div>
    <div className='m-4'>
        <label>Email</label>
        <Input {...register('email', { required: 'Email is required' })} type="email" placeholder="johndoe@gmail.com"/>
        {errors.email && 
          <p>
            {typeof errors.email.message === 'string' ? errors.email.message : ''}
          </p>
        }
    </div>
    <div className='m-4'>
        <label>Password</label>
        <Input {...register('password', { required: 'Password is required' })} type="password"/>
        {errors.password && 
          <p>
            {typeof errors.password.message === 'string' ? errors.password.message : ''}
          </p>
        }
    </div>
    <div className='m-4'>
        <label>Image Link</label>
        <Input {...register('imageLink', { required: 'Image link is required' })} type="url"/>
        {errors.imageLink && 
          <p>
            {typeof errors.imageLink.message === 'string' ? errors.imageLink.message : ''}
          </p>
        }
    </div>
  </div>
  )
}

export default Step1Form;

// components/steps/Step1Form.tsx
import React from 'react';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input"; 
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"; 
import {UserSchema} from '@/lib/schema';
import { z } from 'zod';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

type FormData = z.infer<typeof UserSchema>;


const Step1Form = () => {
  const { control, formState: { errors }, trigger } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "basics.profiles",
  });



  const handleAddField = () => {
    append({ username: "", url: "", network: ""});
  };

  const handleRemoveField = (index: number) => {
    remove(index);
  };


  return (
    <div className='flex flex-col w-full my-6'>
      <div className='text-2xl font-bold my-4'>User Details</div>
        <div className='grid grid-cols-3 w-full'>
        <FormItem className='m-2'>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Controller
              name="basics.name"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder='John dvivedi' />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.name?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Role</FormLabel>
          <FormControl>
            <Controller
              name="basics.current_role"
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Software engineer" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.current_role?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Image Url</FormLabel>
          <FormControl>
            <Controller
              name="basics.image"
              control={control}
              render={({ field }) => (
                <Input {...field} type="url" placeholder="URL" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.image?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Controller
              name="basics.email"
              control={control}
              render={({ field }) => (
                <Input {...field} type="email" placeholder="johndvivedi@gmail.com" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.email?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Phone</FormLabel>
          <FormControl>
            <Controller
              name="basics.phone"
              control={control}
              render={({ field }) => (
                <Input {...field} type="text" placeholder="1234567890" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.phone?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Portfolio link</FormLabel>
          <FormControl>
            <Controller
              name="basics.url"
              control={control}
              render={({ field }) => (
                <Input {...field} type="url" placeholder="URL" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.url?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Tell us about yourself</FormLabel>
          <FormControl>
            <Controller
              name="basics.summary"
              control={control}
              render={({ field }) => (
                <Textarea {...field} placeholder="I'm currently unemployed. I apply to jobs for a living." />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.summary?.message}</FormMessage>
        </FormItem>
        </div>
        <div className='text-2xl font-bold my-4'>Address</div>
        <div className='grid grid-cols-3 w-full'>
        <FormItem className='m-2'>
          <FormLabel>Address</FormLabel>
          <FormControl>
            <Controller
              name="basics.location.address"
              control={control}
              render={({ field }) => (
                <Input {...field} type='text' placeholder="Bengaluru streets" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.location?.address?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Postal code</FormLabel>
          <FormControl>
            <Controller
              name="basics.location.postalCode"
              control={control}
              render={({ field }) => (
                <Input {...field} type='text' placeholder="800900" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.location?.postalCode?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>City</FormLabel>
          <FormControl>
            <Controller
              name="basics.location.city"
              control={control}
              render={({ field }) => (
                <Input {...field} type='text' placeholder="Bengaluru" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.location?.city?.message}</FormMessage>
        </FormItem>
        <FormItem className='m-2'>
          <FormLabel>Country code</FormLabel>
          <FormControl>
            <Controller
              name="basics.location.countryCode"
              control={control}
              render={({ field }) => (
                <Input {...field} type='text' placeholder="IN" />
              )}
            />
          </FormControl>
          <FormMessage className='text-red-500'>{errors.basics?.location?.countryCode?.message}</FormMessage>
        </FormItem>
        </div>
        <div className='text-2xl font-bold my-4'>User Profiles</div>
        <div className='w-full'>
        {fields.map((item, index) => (
          <div key={item.id} className='my-2'>
          <div className="grid grid-cols-3 mb-4">
            <FormItem className='m-2'>
              <FormLabel>Platform</FormLabel>
              <FormControl>
                <Controller
                  name={`basics.profiles.${index}.network`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder='Linkedin' />
                  )}
                />
              </FormControl>
              <FormMessage className='text-red-500'>{errors?.basics?.profiles?.[index]?.network?.message}</FormMessage>
            </FormItem>
            <FormItem className='m-2'>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Controller
                  name={`basics.profiles.${index}.username`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder='johndvivedi101' type='text' />
                  )}
                />
              </FormControl>
              <FormMessage className='text-red-500'>{errors?.basics?.profiles?.[index]?.username?.message}</FormMessage>
            </FormItem>
            <FormItem className='m-2'>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Controller
                  name={`basics.profiles.${index}.url`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder='https://linkedin.com/in/janesmith' type='url' />
                  )}
                />
              </FormControl>
              <FormMessage className='text-red-500'>{errors?.basics?.profiles?.[index]?.url?.message}</FormMessage>
            </FormItem>
          </div>
            <Button type="button" onClick={() => handleRemoveField(index)} className="mt-2">Remove</Button>
        </div>
      ))}
      <Button type="button" onClick={handleAddField} className="mt-2">Add Profile</Button>
        </div>
    </div>
  );
};

export default Step1Form;

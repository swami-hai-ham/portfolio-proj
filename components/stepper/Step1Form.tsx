// components/steps/Step1Form.tsx
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input"; 
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"; 
import {UserSchema} from '@/lib/schema';
import { z } from 'zod';

type FormData = z.infer<typeof UserSchema>;


const Step1Form = () => {
  const { control, formState: { errors }, trigger } = useFormContext<FormData>();

  return (
    <div className='flex flex-col w-full'>
      <div className='text-2xl font-bold mb-4'>User Details</div>
        <FormItem>
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
          <FormMessage>{errors.basics?.name?.message}</FormMessage>
        </FormItem>
        <FormItem>
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
          <FormMessage>{errors.basics?.current_role?.message}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel>URL</FormLabel>
          <FormControl>
            <Controller
              name="basics.image"
              control={control}
              render={({ field }) => (
                <Input {...field} type="url" placeholder="URL" />
              )}
            />
          </FormControl>
          <FormMessage>{errors.basics?.image?.message}</FormMessage>
        </FormItem>
        
    </div>
  );
};

export default Step1Form;

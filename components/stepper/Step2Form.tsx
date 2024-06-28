import React, { useEffect } from 'react';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { z } from 'zod';
import { UserSchema } from '@/lib/schema';

type FormData = z.infer<typeof UserSchema>;

const Step2Form = () => {
  const { control, formState: { errors }, trigger } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "work",
  });

  useEffect(() => {
    console.log("Errors:", errors);
  }, [errors]);

  // Check if there are no fields and add one initially
  if (fields.length === 0) {
    append({ name: "", position: "" });
  }

  const validateFields = async () => {
    await trigger('work'); // Trigger validation for all fields in 'work' array
  };

  const handleAddField = () => {
    append({ name: "", position: "" });
  };

  const handleRemoveField = (index: number) => {
    remove(index);
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='text-2xl font-bold mb-4'>Work Experience</div>
      {fields.map((item, index) => (
        <div key={item.id} className="mb-4">
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Controller
                name={`work.${index}.name`}
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder='Company Name' />
                )}
              />
            </FormControl>
            <FormMessage>{errors?.work?.[index]?.name?.message}</FormMessage>
          </FormItem>
          <FormItem>
            <FormLabel>Position</FormLabel>
            <FormControl>
              <Controller
                name={`work.${index}.position`}
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder='Position' />
                )}
              />
            </FormControl>
            <FormMessage>{errors?.work?.[index]?.position?.message}</FormMessage>
          </FormItem>
          <Button type="button" onClick={() => handleRemoveField(index)} className="mt-2">Remove</Button>
        </div>
      ))}
      <Button type="button" onClick={handleAddField} className="mt-2">Add Work Experience</Button>
      <Button type="button" onClick={validateFields} className="mt-2">Validate Fields</Button>
    </div>
  );
};

export default Step2Form;

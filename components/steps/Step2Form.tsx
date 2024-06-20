import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from "@/lib/utils";
import { Button } from '../ui/button';
import { Textarea } from "@/components/ui/textarea";

const Step2Form = () => {
  const { register, control, formState: { errors } } = useFormContext();
  return (
    <div className='flex flex-col justify-center items-center w-96'>
      <div className='text-2xl font-bold'>Education</div>
      <div className='m-4'>
        <label>Name of the Institution</label>
        <Input {...register('institution', { required: 'Institution name is required' })} placeholder='IITB'/>
        {errors.institution && 
          <p>
            {typeof errors.institution.message === 'string' ? errors.institution.message : ''}
          </p>
        }
      </div>
      <div className='m-4'>
        <label>Highest Qualification</label>
        <Input {...register('degree', { required: 'Highest Qualification is required' })} placeholder="B.Tech"/>
        {errors.degree && 
          <p>
            {typeof errors.degree.message === 'string' ? errors.degree.message : ''}
          </p>
        }
      </div>
      <div className='m-4'>
        <label>Start Date</label>
        <Controller
          name="start_date"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date ? date.toISOString() : '')}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage>
                {typeof errors.start_date?.message === 'string' ? errors.start_date.message : ''}
              </FormMessage>
            </FormItem>
          )}
        />
      </div>
      <div className='m-4'>
        <label>End Date</label>
        <Controller
          name="end_date"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date ? date.toISOString() : '')}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage>
                {typeof errors.end_date?.message === 'string' ? errors.end_date.message : ''}
              </FormMessage>
            </FormItem>
          )}
        />
      </div>
      <div className='m-4'>
        <label>Description</label>
        <Textarea
          placeholder="Tell us a little bit about your Education"
          className="w-60"
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && 
          <p>
            {typeof errors.description.message === 'string' ? errors.description.message : ''}
          </p>
        }
      </div>
    </div>
  )
}

export default Step2Form;

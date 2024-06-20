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

const Step4Form = () => {
  const { register, control, formState: { errors } } = useFormContext();
  return (
    <div className='flex flex-col justify-center items-center w-96'>
      <div className='text-2xl font-bold'>Work Experience</div>
      <div className='m-4'>
        <label>Company Name</label>
        <Input {...register('company_name', { required: 'Company Name name is required' })} placeholder='Amazon'/>
        {errors.company_name && 
          <p>
            {typeof errors.company_name.message === 'string' ? errors.company_name.message : ''}
          </p>
        }
      </div>
      <div className='m-4'>
        <label>Role</label>
        <Input {...register('role', { required: 'Role is required' })} placeholder="Sweeper"/>
        {errors.role && 
          <p>
            {typeof errors.role.message === 'string' ? errors.role.message : ''}
          </p>
        }
      </div>
      <div className='m-4'>
        <label>Start Date</label>
        <Controller
          name="work_start_date"
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
                {typeof errors.work_start_date?.message === 'string' ? errors.work_start_date.message : ''}
              </FormMessage>
            </FormItem>
          )}
        />
      </div>
      <div className='m-4'>
        <label>End Date</label>
        <Controller
          name="work_end_date"
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
                {typeof errors.work_end_date?.message === 'string' ? errors.work_end_date.message : ''}
              </FormMessage>
            </FormItem>
          )}
        />
      </div>
      <div className='m-4'>
        <label>Description</label>
        <Textarea
          placeholder="Tell us a little bit about your Work Experience"
          className="w-60"
          {...register('work_description', { required: 'Work description is required' })}
        />
        {errors.work_description && 
          <p>
            {typeof errors.work_description.message === 'string' ? errors.work_description.message : ''}
          </p>
        }
      </div>
    </div>
  )
}

export default Step4Form
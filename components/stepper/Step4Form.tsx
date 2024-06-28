import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from "@/components/ui/input"
import {UserSchema} from '@/lib/schema';
import { z } from 'zod';
import Section from '../ui/Section';

type FormData = z.infer<typeof UserSchema>;

const Step4Form = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();


  return (
    <div>
      <Section>
          <div>Hello4</div>
      </Section>
    </div>  )
}

export default Step4Form;

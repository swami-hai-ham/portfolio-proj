import { z } from 'zod'
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const educationSchema = z.object({
    institution: z.string().min(1, { message: 'Enter Name of Institution' }),
    degree: z.string().min(1),
    start_date: z.string().datetime(),
    end_date: z.string().datetime(),
    description: z.string(),
});

const projectSchema = z.object({
    title: z.string().min(1),
    description: z.string(),
    start_date: z.string().datetime(),
    end_date: z.string().datetime(),
    technologies: z.array(z.string()),
    url: z.string().url(),
});

const workExperienceSchema = z.object({
    company_name: z.string(),
    role: z.string(),
    start_date: z.string().datetime(),
    end_date: z.string().datetime(),
    description: z.string(),
});

const skillSchema = z.object({
    name: z.string(),
    level: z.string(),
});

const userSchema = z.object({
    username: z.string().min(1, { message: 'username is required' }),
    email: z.string().email('Enter valid email'),
    password: z.string().min(8, 'Password must be at least 8 character')
        .regex(
            passwordRegex,
            'Password must be contains at least one uppercase and one lowercase and one digit and one special character'
        ),
    profile_pic: z.any().refine(file => ['image/jpeg', 'image/png'].includes(file.type), { message: 'Image must be a jpeg or png format' }),
});

const formDataSchema = z.object({
    user: userSchema,
    education: z.array(educationSchema),
    projects: z.array(projectSchema),
    work_experience: z.array(workExperienceSchema),
    skills: z.array(skillSchema),
});

export default formDataSchema;
import {z} from 'zod';

export const passwordScreenSchema = z.object({
  password: z
    .string()
    .min(8, {message: 'A senha deve possuir no mínimo 8 caracteres!'}),
});

export type PasswordScreenSchema = z.infer<typeof passwordScreenSchema>;

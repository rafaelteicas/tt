import {z} from 'zod';

export const accountDataSchema = z.object({
  email: z.string().email({message: 'Por favor, insira um e-mail válido!'}),
  birthday: z.string(),
  name: z.string(),
});

export type AccountDataSchema = z.infer<typeof accountDataSchema>;

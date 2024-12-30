import { z } from 'zod';

const supportZodSchema = z.object({
      body: z.object({
            phone: z.string({ required_error: 'Phone is required' }),
            email: z.string({ required_error: 'Email is required' }),
            address: z.string({ required_error: 'Address is required' }),
      }),
});

export const SupportValidation = {
      supportZodSchema,
};

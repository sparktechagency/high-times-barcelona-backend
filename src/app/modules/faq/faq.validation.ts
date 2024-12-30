import { z } from 'zod';

const createFaqZodSchema = z.object({
      body: z.object({
            question: z.string().max(200, 'Question must not exceed 200 characters'),
            answer: z.string().max(1000, 'Answer must not exceed 1000 characters'),
      }),
});

export const FaqValidation = {
      createFaqZodSchema,
};

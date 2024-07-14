import { z } from 'zod';

const socialLinksSchema = z.object({
  aboutLabel: z.string().nonempty(),
  instagram: z.string().url().nonempty(),
  facebook: z.string().url().nonempty(),
  twitter: z.string().url().nonempty(),
  linkedin: z.string().url().nonempty(),
  youtube: z.string().url().nonempty(),
});

export default socialLinksSchema;

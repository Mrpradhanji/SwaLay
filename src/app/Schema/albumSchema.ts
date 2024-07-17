import * as z from 'zod';

const albumSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  releaseDate: z.string().nonempty({ message: "Release Date is required" }),
  artist: z.string().nonempty({ message: "Artist is required" }),
  genre: z.string().nonempty({ message: "Genre is required" }),
  label: z.string().nonempty({ message: "Label is required" }),
  language: z.string().nonempty({ message: "Language is required" }),
  producer: z.string().nonempty({ message: "Producer is required" }),
  duration: z.string().nonempty({ message: "Duration is required" }),
  artwork: z.any().nullable().optional(),
  cloudLink: z.string().url().optional(),
  pLine: z.string().nonempty({ message: "P Line is required" }),
  cLine: z.string().nonempty({ message: "C Line is required" }),
});

export default albumSchema;

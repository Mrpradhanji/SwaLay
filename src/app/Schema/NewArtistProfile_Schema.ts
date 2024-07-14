import { z } from 'zod';

// Define the Zod schema for form validation
const ArtistProfileSchema = z.object({
  labelName: z.string().min(1, "Label name is required"),
  songName: z.string().min(1, "Song name is required"),
  isrc: z.string().min(1, "ISRC is required"),
  artistName: z.string().min(1, "Artist name is required"),
  platforms: z.array(z.string()).min(1, "At least one music platform must be selected"),
});

export default ArtistProfileSchema;
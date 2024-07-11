import { z, ZodError } from 'zod';

interface Lyricist {
  name: string;
  ipi?: string;
  iprs: 'Yes' | 'No';
  role: string;
}

interface Composer {
  name: string;
  ipi?: string;
  iprs: 'Yes' | 'No';
  role: string;
}

export const TrackSchema = z.object({
  title: z.string().min(1, "Track title is required"),
  category: z.string().min(1, "Track category is required"),
  audioFile: z.any().refine((file: File) => file.size <= 134217728, "File size should be less than 128MB"),
  callerTuneTime: z.string().regex(/^(\d{2}):(\d{2}):(\d{2})$/, "Invalid time format"),
  trackType: z.string().min(1, "Track type is required"),
  version: z.string().min(1, "Version is required"),
  primaryArtists: z.array(z.string().min(1, "Artist name is required")),
  producers: z.array(z.string().min(1, "Producer name is required")),
  lyricists: z.array(z.object({
    name: z.string().min(1, "Lyricist name is required"),
    ipi: z.string().optional(),
    iprs: z.enum(['Yes', 'No']),
    role: z.string().min(1, "Role is required"),
  })),
  composers: z.array(z.object({
    name: z.string().min(1, "Composer name is required"),
    ipi: z.string().optional(),
    iprs: z.enum(['Yes', 'No']),
    role: z.string().min(1, "Role is required"),
  })),
});

// Define a function to validate a track object against TrackSchema
export function validateTrack(track: any): { success: boolean; error?: ZodError } {
  try {
    TrackSchema.parse(track);
    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, error };
    }
    throw error;
  }
}

// Schema/signupSchema.ts
import { z } from "zod";

const SignupSchema = z.object({
  firstname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid contact format, expected XXX-XXX-XXXX"),
  recordLabel: z.string().min(1, "Record Label is required"),
  userType: z.enum(["Normal Client", "Super Client"]),
}).refine((data) => ["Normal Client", "Super Client"].includes(data.userType), {
  path: ["userType"],
  message: "Invalid user type",
});

export default SignupSchema;

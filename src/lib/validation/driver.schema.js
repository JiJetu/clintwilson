import { z } from "zod";

export const driverSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters").optional().or(z.literal('')),
  status: z.enum(["Online", "Offline"], {
    errorMap: () => ({ message: "Please select a valid status" }),
  }),
  assignedShuttle: z.string().min(1, "Please assign a shuttle"),
  shiftStarts: z.string().min(1, "Shift start time is required"),
  shiftEnds: z.string().min(1, "Shift end time is required"),
});

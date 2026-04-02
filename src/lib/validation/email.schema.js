import { z } from "zod";

export const emailSchema = z.object({
  title: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message content is required"),
});

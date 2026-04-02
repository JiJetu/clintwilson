import { z } from "zod";

export const notificationSchema = z.object({
  title: z.string().min(1, "Notification title is required"),
  message: z.string().min(1, "Message content is required"),
});

import { z } from "zod";

export const scheduleSchema = z.object({
  name: z.string().min(1, "Route name is required"),
  distance: z.string().min(1, "Distance is required"),
  duration: z.string().min(1, "Duration is required"),
  status: z.enum(["Active", "Inactive"], {
    errorMap: () => ({ message: "Please select a valid status" }),
  }),
  shuttlesAssigned: z.preprocess((val) => Number(val), z.number().min(0, "Shuttles must be at least 0")),
  pickup: z.string().min(1, "Pickup location is required"),
  dropoff: z.string().min(1, "Dropoff location is required"),
});

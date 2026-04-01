import { z } from "zod";

export const shuttleSchema = z.object({
  name: z.string().min(1, "Shuttle name is required"),
  plate: z.string().min(1, "Plate number is required"),
  status: z.enum(["Active", "Idle", "Maintenance"], {
    errorMap: () => ({ message: "Please select a valid status" }),
  }),
  capacityMax: z.preprocess((val) => Number(val), z.number().min(1, "Capacity must be at least 1 seat")),
  driver: z.string().min(1, "Please assign a driver"),
  route: z.string().min(1, "Please select a route"),
});

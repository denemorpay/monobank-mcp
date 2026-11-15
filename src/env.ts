import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  MONOBANK_API_TOKEN: z.string().optional(),
  MONOBANK_ALLOW_WEBHOOK_WRITE: z
    .string()
    .optional()
    .transform((v) => v === "true"),
});

export const env = envSchema.parse(process.env);

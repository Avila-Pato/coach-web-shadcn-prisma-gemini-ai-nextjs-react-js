import { z } from "zod";

export const onboardingSchema = z.object({
  industry: z.string({
    required_error: "Porfavor seleccione una industria",
  }),
  subIndustry: z.string({
    required_error: "Porfavor seleccione una especialidad",
  }),
  bio: z.string().max(500).optional(),
  experience: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(
      z
        .number()
        .min(0, "Experiencia no puede ser menos a 0")
        .max(50, "Experiencia no puede ser mayor a 50")
    ),
  skills: z.string().transform((val) =>
    val
      ? val
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean)
      : undefined
  ),
});

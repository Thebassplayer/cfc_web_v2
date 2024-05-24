import { z } from "zod";

export const authFormValidationSchema = z.object({
  email: z
    .string({
      message: "El email no es válido",
    })
    .email(),
  password: z
    .string({
      message: "La contraseña no es válida",
    })
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(24, "La contraseña no puede tener más de 24 caracteres"),
});

export type AuthFormValues = z.infer<typeof authFormValidationSchema>;

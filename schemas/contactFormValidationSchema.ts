import { z } from "zod";

export const contactFormValidationSchema = z.object({
  name: z
    .string({
      message: "Por favor, introduce tu nombre",
    })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(20, "El nombre no puede tener más de 20 caracteres"),
  email: z
    .string({
      message: "El email no es válido",
    })
    .email(),
  message: z
    .string({
      message: "El mensaje no puede estar vacío",
    })
    .max(300, "El mensaje no puede tener más de 300 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactFormValidationSchema>;

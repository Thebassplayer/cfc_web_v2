import { z } from "zod";

export const contactFormValidationSchema = z.object({
  name: z.string({
    message: "El nombre no puede estar vacío",
  }),
  email: z
    .string({
      message: "El email no es válido",
    })
    .email(),
  message: z
    .string({
      message: "El mensaje no puede estar vacío",
    })
    .max(200),
});

export type ContactFormValues = z.infer<typeof contactFormValidationSchema>;

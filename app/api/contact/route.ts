import { contactFormValidationSchema } from "@/schemas/contactFormValidationSchema";
import { NextResponse } from "next/server";
import { Resend } from "resend";

if (!process.env.RESEND) {
  console.error("RESEND is not set");
}
if (!process.env.CFC_EMAIL) {
  console.error("CFC_EMAIL is not set");
}

const RESEND = process.env.RESEND as string;
const CFC_EMAIL = process.env.CFC_EMAIL as string;

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    console.log("body", body);

    const validBody = contactFormValidationSchema.safeParse(body);

    if (!validBody.success) {
      throw new Error(validBody.error.errors[0].message);
    }

    const { name, email, message } = validBody.data;

    const resend = new Resend(RESEND);
    await resend.emails.send({
      from: CFC_EMAIL,
      to: CFC_EMAIL,
      subject: "Nuevo mensaje de contacto",
      html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Mensaje: ${message}</p>`,
    });
    // await resend.emails.send({
    //   from: "info@cfcmethod.com",
    //   to: email,
    //   subject: `Hola ${name}!`,
    //   html: "<p>Gracias por contactarte con nosotr@s</p>",
    // });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};

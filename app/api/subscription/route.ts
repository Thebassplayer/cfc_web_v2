import { Resend } from "resend";

if (!process.env.RESEND) {
  console.error("RESEND is not set");
}

const RESEND = process.env.RESEND as string;

export const POST = async (req: Request) => {
  const body = await req.json();

  console.log("body", body);

  // const resend = new Resend(RESEND);

  // resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: "lynx.silver6849@eagereverest.com",
  //   subject: "Hello World",
  //   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  // });
};

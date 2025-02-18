import { NextResponse } from "next/server";
import axios from "axios";

if (!process.env.GOOGLE_RECAPTCHA_SECRET_KEY) {
  console.error("GOOGLE_RECAPTCHA_SECRET_KEY is not set");
}

if (!process.env.GOOGLE_RECAPTCHA_API_URL) {
  console.error("GOOGLE_RECAPTCHA_API_URL is not set");
}

export const POST = async (req: Request, res: Response) => {
  const secreteKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
  const googleRecaptchaUrl = process.env.GOOGLE_RECAPTCHA_API_URL;

  const postData = await req.json();

  const { googleRecaptchaToken } = postData;

  let response;

  const verifyUrl = `${googleRecaptchaUrl}?secret=${secreteKey}&response=${googleRecaptchaToken}`;

  try {
    response = await axios.post(verifyUrl);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }

  if (response.data.success && response.data.score > 0.5) {
    console.log("response.data.score", response.data.score);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } else {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};

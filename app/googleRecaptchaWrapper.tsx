"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

if (!process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY) {
  throw new Error("NEXT_PUBLIC_RECAPCHA_SITE_KEY is not defined");
}

export default function GoogleRecaptchaWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY as string}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}

"use client";
import {
  contactFormValidationSchema,
  ContactFormValues,
} from "@/schemas/contactFormValidationSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SubmitButton } from "../SubmitButton/submit-button";
import { toFormikValidationSchema } from "zod-formik-adapter";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";
import { cm } from "@/utils/classMerge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [feedback, setFeedback] = useState("");

  const pathname = usePathname();

  const handleSubmit = async (values: ContactFormValues) => {
    if (!executeRecaptcha) {
      console.error("executeRecaptcha is not defined");
      return;
    }
    setSuccess(false);
    setFeedback("Enviando...");
    setLoading(true);

    // Generate reCAPTCHA token
    const reCaptchaToken = await executeRecaptcha("contact_form");

    try {
      // Send form data and reCAPTCHA token to a single endpoint
      const response = await axios.post("/api/contact", {
        ...values,
        googleRecaptchaToken: reCaptchaToken,
      });

      if (response.data.message === "Success") {
        setSuccess(true);
        setFeedback("¡Mensaje enviado correctamente!");
      } else {
        setSuccess(false);
        setFeedback("Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setFeedback("Error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className="flex h-full w-full items-center justify-center px-4 lg:px-0"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(
            contactFormValidationSchema,
          )}
          onSubmit={handleSubmit}
        >
          <Form className="animate-in text-foreground row-start-4 flex h-min w-full flex-col justify-center gap-2 rounded-md border bg-white p-4 lg:w-[800px]">
            <div className="flex justify-end">
              <Link href={pathname}>
                <p className="text-xl">x</p>
              </Link>
            </div>
            <div className="mb-2 flex flex-col">
              <label className="lg:text-md text-sm" htmlFor="name">
                Nombre
              </label>
              <Field
                name="name"
                type="text"
                placeholder="Tu nombre"
                className="rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
                disabled={loading || success}
              />
              <ErrorMessage
                name="name"
                render={(errorMsg) => (
                  <p className="font-lexend text-xxs text-red-600 lg:text-xs">
                    {errorMsg}
                  </p>
                )}
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label className="lg:text-md text-sm" htmlFor="email">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="soy@flexible.com"
                className="rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
                disabled={loading || success}
              />
              <ErrorMessage
                name="email"
                render={(errorMsg) => (
                  <p className="font-lexend text-xxs text-red-600 lg:text-xs">
                    {errorMsg}
                  </p>
                )}
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label className="lg:text-md text-sm" htmlFor="message">
                Mensaje
              </label>
              <Field
                name="message"
                as="textarea"
                placeholder="Escribe tu mensaje"
                className="rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
                disabled={loading || success}
              />
              <ErrorMessage
                name="message"
                render={(errorMsg) => (
                  <p className="font-lexend text-xxs text-red-600 lg:text-xs">
                    {errorMsg}
                  </p>
                )}
              />
            </div>
            <SubmitButton
              className={cm(
                "text-foreground mb-2 rounded-md bg-primary-yellow px-4 py-2 font-roboto text-purple-primary transition-transform ",
                loading || success
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:bg-purple-primary hover:text-primary-yellow active:scale-95 active:bg-purple-primary active:text-primary-yellow",
              )}
              text={feedback ? feedback : "Enviar"}
              disabled={loading || success}
            >
              Enviar
            </SubmitButton>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;

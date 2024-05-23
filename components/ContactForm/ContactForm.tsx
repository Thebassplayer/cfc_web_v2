"use client";
import {
  contactFormValidationSchema,
  ContactFormValues,
} from "@/schemas/contactFormValidationSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SubmitButton } from "../SubmitButton/submit-button";
import { toFormikValidationSchema } from "zod-formik-adapter";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const handleSubmit = async (values: ContactFormValues) => {
    console.log("values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(contactFormValidationSchema)}
      onSubmit={handleSubmit}
    >
      <Form className="animate-in text-foreground row-start-4 flex h-min w-full flex-col justify-center gap-2 rounded-md border p-4">
        <div className="mb-6 flex flex-col">
          <label className="text-md" htmlFor="name">
            Nombre
          </label>
          <Field
            name="name"
            type="text"
            className="rounded-md border bg-inherit px-4 py-2"
          />
          <ErrorMessage
            name={"name"}
            render={(errorMsg) => (
              <p className="font-lexend text-xxs text-red-600 lg:text-xs">
                {errorMsg}
              </p>
            )}
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <Field
            name="email"
            type="email"
            className="rounded-md border bg-inherit px-4 py-2"
          />
          <ErrorMessage
            name={"email"}
            render={(errorMsg) => (
              <p className="font-lexend text-xxs text-red-600 lg:text-xs">
                {errorMsg}
              </p>
            )}
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-md" htmlFor="message">
            Mensaje
          </label>
          <Field
            name="message"
            as="textarea"
            className="rounded-md border bg-inherit px-4 py-2"
          />
          <ErrorMessage
            name={"message"}
            render={(errorMsg) => (
              <p className="font-lexend text-xxs text-red-600 lg:text-xs">
                {errorMsg}
              </p>
            )}
          />
        </div>
        <SubmitButton
          className="text-foreground mb-2 rounded-md bg-purple-extralight px-4 py-2 hover:bg-black hover:text-white hover:ring-2 hover:ring-purple-extralight"
          pendingText="Enviando..."
        >
          Enviar
        </SubmitButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;

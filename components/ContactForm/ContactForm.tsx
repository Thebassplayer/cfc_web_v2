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
      <div className="flex h-full w-full items-center justify-center">
        <Form
          className="animate-in text-foreground row-start-4 flex h-min w-[800px] flex-col justify-center gap-2 rounded-md border bg-white p-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="mb-2 flex flex-col">
            <label className="lg:text-md text-sm" htmlFor="name">
              Nombre
            </label>
            <Field
              name="name"
              type="text"
              placeholder="Tu nombre"
              className="rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
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
          <div className="mb-2 flex flex-col">
            <label className="lg:text-md text-sm" htmlFor="email">
              Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="soy@flexible.com"
              className="rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
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
          <div className="mb-2 flex flex-col">
            <label className="lg:text-md text-sm" htmlFor="message">
              Mensaje
            </label>
            <Field
              name="message"
              as="textarea"
              placeholder="Escribe tu mensaje"
              className="rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
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
            className="text-foreground mb-2 rounded-md bg-primary-yellow px-4 py-2 font-roboto text-purple-primary transition-transform hover:bg-purple-primary hover:text-primary-yellow active:scale-95 active:bg-purple-primary active:text-primary-yellow"
            pendingText="Enviando..."
          >
            Enviar
          </SubmitButton>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;

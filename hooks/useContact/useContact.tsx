"use client";
import { ContactFormValues } from "@/schemas/contactFormValidationSchema";
import { useState } from "react";

if (!process.env.NEXT_PUBLIC_CONTACT_API) {
  throw new Error("NEXT_PUBLIC_CONTACT_API is not defined");
}

const contactApi = process.env.NEXT_PUBLIC_CONTACT_API;

const useContact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const contact = async (data: ContactFormValues) => {
    try {
      setLoading(true);
      const response = await fetch(contactApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setError(true);
        setSuccess(false);
      } else {
        setSuccess(true);
      }
    } catch (error) {
      setError(true);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const contactButtonValue = ({
    loading,
    success,
    error,
  }: {
    loading: boolean;
    success: boolean;
    error: boolean;
  }) => {
    if (loading) {
      return "Enviando...";
    } else if (success) {
      return "Enviado!";
    } else if (error) {
      return "Error al enviar tu mensaje";
    } else {
      return "Enviar";
    }
  };

  return { contact, contactButtonValue, loading, error, success };
};

export default useContact;

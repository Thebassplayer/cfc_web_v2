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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setLoading(false);
        setSuccess(false);
        setError(true);
        const error = await response.json();
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setError(true);
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
      return "Loading...";
    } else if (success) {
      return "Subscribed!";
    } else if (error) {
      return "Failed to subscribe";
    } else {
      return "Subscribe";
    }
  };

  return { contact, contactButtonValue, loading, error, success };
};

export default useContact;

"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { cm } from "@/utils/classMerge";
import { useFormikContext } from "formik";

type Props = ComponentProps<"button"> & {
  text?: string;
  className?: string;
};

export function SubmitButton({ children, text, className, ...props }: Props) {
  const { submitForm } = useFormikContext();
  return (
    <button
      {...props}
      className={cm(className, "text-sm lg:text-base")}
      type="button"
      onClick={submitForm}
      disabled={text === "Enviando..." || text === "Enviado"}
    >
      {text}
    </button>
  );
}

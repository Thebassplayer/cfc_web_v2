"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { cm } from "@/utils/classMerge";

type Props = ComponentProps<"button"> & {
  text?: string;
  className?: string;
};

export function SubmitButton({ children, text, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={cm(className, "text-sm lg:text-base")}
      type="submit"
      disabled={text === "Enviando..." || text === "Enviado"}
    >
      {text}
    </button>
  );
}

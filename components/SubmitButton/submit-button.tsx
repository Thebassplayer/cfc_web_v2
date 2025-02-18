"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { cm } from "@/utils/classMerge";
import { useFormikContext } from "formik";

type Props = ComponentProps<"button"> & {
  text?: string;
  className?: string;
  disabled?: boolean;
};

export function SubmitButton({
  children,
  text,
  disabled,
  className,
  ...props
}: Props) {
  const { submitForm } = useFormikContext();
  return (
    <button
      {...props}
      className={cm(className, "text-sm disabled:opacity-50 lg:text-base")}
      type="button"
      onClick={submitForm}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { cm } from "@/utils/classMerge";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
  className?: string;
};

export function SubmitButton({
  children,
  pendingText,
  className,
  ...props
}: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button
      {...props}
      className={cm(className, "text-sm lg:text-base")}
      type="submit"
      aria-disabled={pending}
    >
      {isPending ? pendingText : children}
    </button>
  );
}

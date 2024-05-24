import { SubmitButton } from "@/components/SubmitButton/submit-button";
import React from "react";
import Link from "next/link";
import FormError from "@/components/FormError/FormError";
import { signIn, signUp } from "@/utils/authHandlers";

const AuthForm = ({ searchParams }: { searchParams: { message: string } }) => {
  return (
    <form className="animate-in text-foreground row-start-4 flex h-min w-full flex-col justify-center gap-2 rounded-md border p-4">
      <label className="text-md" htmlFor="email">
        Email
      </label>
      <input
        className="mb-6 rounded-md border bg-inherit px-4 py-2"
        name="email"
        placeholder="soy@flexible.com"
        required
      />
      <label className="text-md" htmlFor="password">
        Contraseña
      </label>
      <input
        className="mb-6 rounded-md border bg-inherit px-4 py-2"
        type="password"
        name="password"
        placeholder="••••••••"
        required
      />
      <SubmitButton
        formAction={signIn}
        className="text-foreground mb-2 rounded-md bg-purple-extralight px-4 py-2 hover:bg-black hover:text-white hover:ring-2 hover:ring-purple-extralight"
        pendingText="Autenticando tu Usuario..."
      >
        Ingresar
      </SubmitButton>
      <SubmitButton
        formAction={signUp}
        className="border-foreground/20 text-foreground mb-2 rounded-md border px-4 py-2 hover:bg-black hover:text-white hover:ring-2 hover:ring-purple-extralight"
        pendingText="Registrandote..."
      >
        Registrate
      </SubmitButton>
      <Link className="text-center text-sm hover:underline" href={"/forgot"}>
        Olvide mi contraseña
      </Link>
      {searchParams?.message && <FormError searchParams={searchParams} />}
    </form>
  );
};

export default AuthForm;

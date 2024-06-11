import { SubmitButton } from "@/components/SubmitButton/submit-button";
import React from "react";
import Link from "next/link";
import FormMessage from "@/components/FormError/FormError";
import { signIn, signUp } from "@/utils/authHandlers";
import { APP_ROUTES } from "@/constants/routes";
import { SearchParamsMessage } from "@/types";
import SignInWithGoogleButton from "../LoginWithGoogle/LoginWithGoogle";

type AuthFormProps = {
  searchParamsMessage: SearchParamsMessage;
};

const AuthForm = ({ searchParamsMessage }: AuthFormProps) => {
  return (
    <div className="row-start-4 flex h-min flex-col rounded-md border p-4">
      <form className="text-foreground flex w-full flex-col justify-center gap-2">
        <label className="lg:text-md text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
          name="email"
          placeholder="soy@flexible.com"
          required
        />
        <label className="lg:text-md text-sm" htmlFor="password">
          Contraseña
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2 text-sm lg:text-base"
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
      </form>
      <Link
        className="text-center text-sm hover:underline"
        href={APP_ROUTES.FORGOT.ROOT}
      >
        Olvide mi contraseña
      </Link>
      <FormMessage searchParamsMessage={searchParamsMessage} />
      <div className="flex flex-col items-center justify-center gap-4 bg-slate-100 p-8">
        <h2>Ingresar con Red Social</h2>
        <SignInWithGoogleButton />
      </div>
    </div>
  );
};

export default AuthForm;

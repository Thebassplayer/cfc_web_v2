import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../../components/SubmitButton/submit-button";
import Link from "next/link";
import FormError from "@/components/FormError/FormError";
import generateErrorMessageURI from "@/utils/generateErrorMessageURI";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Error @ SignIn", error);

    if (error) {
      return redirect(
        "/login?message=Hubo un error al intentar autenticar tu usuario, intentalo mas tarde",
      );
    }

    return redirect("/dashboard");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    console.log("Error @ SignUp", error);

    if (error) {
      const message = generateErrorMessageURI(
        "Hubo un error al intentar registrarte, intentalo mas tarde",
      );
      const url = `/login?message=${message}`;
      return redirect(url);
    }

    const message = generateErrorMessageURI(
      "Revisa tu correo para continuar con el registro",
    );

    const url = `/login?message=${message}`;

    return redirect(url);
  };

  return (
    <div className="m-auto grid h-full grid-rows-12 gap-2 px-8 sm:max-w-md lg:max-w-2xl">
      <h1 className="row-span-1 row-start-2 text-center font-sifonn text-4xl">
        Ingresa a tu panel de usuario!
      </h1>
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
    </div>
  );
}

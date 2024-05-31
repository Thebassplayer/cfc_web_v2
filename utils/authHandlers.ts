import { APP_ROUTES } from "@/constants/routes";
import generateErrorMessageURI from "@/utils/generateErrorMessageURI";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const signIn = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error: loginError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // 400: Invalid credentials
  if (loginError?.status === 400) {
    return redirect(
      `${APP_ROUTES.LOGIN}?error=Credenciales incorrectas, por favor intenta de nuevo`,
    );
  }

  // Generic error
  if (loginError) {
    return redirect(
      `${APP_ROUTES.LOGIN}?error=Hubo un error al intentar autenticar tu usuario, intentalo mas tarde`,
    );
  }

  return redirect(APP_ROUTES.DASHBOARD.ROOT);
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
    const errorMessage = generateErrorMessageURI(
      "Hubo un error al intentar registrarte, intentalo mas tarde",
    );
    const url = `/login?error=${errorMessage}`;
    return redirect(url);
  }

  const successMessage = generateErrorMessageURI(
    "Revisa tu correo para continuar con el registro",
  );

  const url = `${APP_ROUTES.LOGIN}?message=${successMessage}`;

  return redirect(url);
};

const signOut = async () => {
  "use server";

  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect(APP_ROUTES.HOME);
};

export { signIn, signUp, signOut };

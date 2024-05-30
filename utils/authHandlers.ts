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

  if (loginError) {
    return redirect(
      "/login?message=Hubo un error al intentar autenticar tu usuario, intentalo mas tarde",
    );
  }

  let { data: role, error: getRoleError } = await supabase
    .from("profiles")
    .select("role");

  if (getRoleError) {
    return redirect("/error");
  }

  if (!!role && role[0].role === "admin") {
    return redirect("/admin");
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

const signOut = async () => {
  "use server";

  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/");
};

export { signIn, signUp, signOut };

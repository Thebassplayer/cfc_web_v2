import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/SubmitButton/submit-button";
import FormMessage from "@/components/FormError/FormError";
import generateErrorMessageURI from "@/utils/generateErrorMessageURI";
import { APP_ROUTES } from "@/constants/routes";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default function UpdatePassword({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const updatePass = async (formData: FormData) => {
    "use server";

    const new_password = formData.get("password") as string;
    const supabase = createClient();

    const { data, error } = await supabase.auth.updateUser({
      password: new_password,
    });
    console.log(data, error);

    if (error) {
      const errorMessage = generateErrorMessageURI(
        "Hubo un error al intentar actualizar tu contraseña, intentalo mas tarde",
      );
      const url = `${APP_ROUTES.LOGIN}?error=${errorMessage}`;
      return redirect(url);
    }

    return redirect(APP_ROUTES.LOGIN);
  };

  return (
    <div className="m-auto flex h-full w-full flex-1 flex-col items-center justify-center gap-2 px-8 sm:max-w-md">
      <form className="animate-in text-foreground flex w-full flex-col justify-center gap-2 rounded-md border p-4">
        <label className="text-md" htmlFor="password">
          Nueva contraseña
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="password"
          type="password"
          placeholder="soy@flexible.com"
          required
        />

        <SubmitButton
          formAction={updatePass}
          className="text-foreground mb-2 rounded-md bg-purple-extralight px-4 py-2 hover:bg-black hover:text-white hover:ring-2 hover:ring-purple-extralight"
          pendingText="Autenticando tu Usuario..."
        >
          Recuperar Contraseña
        </SubmitButton>

        <FormMessage searchParamsMessage={searchParams} />
      </form>
    </div>
  );
}

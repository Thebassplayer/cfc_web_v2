import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/SubmitButton/submit-button";
import FormMessage from "@/components/FormError/FormError";
import generateErrorMessageURI from "@/utils/generateErrorMessageURI";
import { APP_ROUTES } from "@/constants/routes";
import { BASE_URL } from "@/constants/baseUrl";
import { SearchParamsMessage } from "@/types";

type LoginProps = {
  searchParams: SearchParamsMessage;
};

export default function Login({ searchParams }: LoginProps) {
  const forgot = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const supabase = createClient();

    let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${BASE_URL}/forgot/update`,
    });
    console.log(data, error);

    if (error) {
      const message = generateErrorMessageURI(
        "Hubo un error al intentar recuperar tu contraseña",
      );
      const url = `${APP_ROUTES.FORGOT.ROOT}?error=${message}`;
      return redirect(url);
    }

    return redirect(APP_ROUTES.FORGOT.SUCCESS);
  };

  return (
    <div className="m-auto flex h-full w-full flex-1 flex-col items-center justify-center gap-2 px-8 sm:max-w-md">
      <form className="animate-in text-foreground flex w-full flex-col justify-center gap-2 rounded-md border p-4">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="soy@flexible.com"
          required
        />

        <SubmitButton
          formAction={forgot}
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

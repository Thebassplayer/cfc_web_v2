import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("role, username");

  if (!user) {
    return redirect("/login");
  }

  if (!profiles) {
    return redirect("/login");
  }

  const { role, username } = profiles[0];

  if (role && role !== "admin") {
    return redirect("/dashboard");
  }

  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center gap-20">
      {!!username ? (
        <h1 className="font-sifonn text-lg lg:text-4xl">
          Hola {username} - Bienvenid@ a tu panel de Administrador!
        </h1>
      ) : (
        <h1 className="font-sifonn text-lg lg:text-4xl">
          Bienvenid@ a tu panel de Administrador!
        </h1>
      )}
    </div>
  );
}

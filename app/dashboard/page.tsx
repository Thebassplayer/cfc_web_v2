import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
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
    return redirect("/error");
  }

  const { username } = profiles[0];

  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center gap-20">
      {!!username ? (
        <h1 className="font-sifonn text-lg lg:text-4xl">
          Hola {username} - Bienvenid@ a tu panel de usuario!
        </h1>
      ) : (
        <h1 className="font-sifonn text-lg lg:text-4xl">
          Bienvenid@ a tu panel de usuario!
        </h1>
      )}
    </div>
  );
}

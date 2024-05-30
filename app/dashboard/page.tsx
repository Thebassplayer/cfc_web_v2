import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import type { Database } from "@/types/supabase";

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
    // Handle the case when profiles is null or undefined
    // For example, you might want to redirect to an error page
    return redirect("/error");
  }

  const { role, username } = profiles[0];

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

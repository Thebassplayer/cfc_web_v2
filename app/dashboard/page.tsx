import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center gap-20">
      <h1 className="font-sifonn text-lg lg:text-4xl">
        Bienvenid@ a tu panel de usuario!
      </h1>
    </div>
  );
}

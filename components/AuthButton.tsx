import { cm } from "@/utils/classMerge";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import Avatar from "./Avatar/Avatar";
import { signOut } from "@/utils/authHandlers";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex-ro flex items-center gap-4">
      <form action={signOut}>
        <button
          className={cm(
            "font-sifonn text-xl uppercase text-white decoration-2 hover:underline",
          )}
        >
          Salir
        </button>
      </form>
      <Link href={"/dashboard"} className="size-14">
        <Avatar />
      </Link>
    </div>
  ) : (
    <Link
      href="/login"
      className={cm(
        "font-sifonn text-xl uppercase text-white decoration-2 hover:underline",
      )}
    >
      ingresar
    </Link>
  );
}

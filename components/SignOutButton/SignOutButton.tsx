import { cm } from "@/utils/classMerge";
import { signOut } from "@/utils/authHandlers";

export default async function SignOutButton() {
  return (
    <form action={signOut}>
      <button
        className={cm(
          "w-full px-6 py-2 text-center hover:bg-black hover:text-white",
        )}
      >
        Salir
      </button>
    </form>
  );
}

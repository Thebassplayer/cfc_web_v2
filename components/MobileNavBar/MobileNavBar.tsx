import Logo from "@/assets/Logo1.svg";
import Image from "next/image";
import Link from "next/link";
import { cm } from "@/utils/classMerge";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { createClient } from "@/utils/supabase/server";
import SignOutButton from "../SignOutButton/SignOutButton";
import getUserRole from "@/utils/supabase/getUserRole";

type MobileNavBarProps = {
  className?: string;
};

export default async function MobileNavBar({ className }: MobileNavBarProps) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { role } = await getUserRole();

  return (
    <nav
      className={cm(
        "flex h-full w-full flex-row items-center justify-between border-b-2 border-black bg-purple-extralight px-4 py-2 shadow-xl lg:hidden",
        className,
      )}
    >
      <div className="flex items-start">
        <Link href={"/"}>
          <Image src={Logo} alt="LOGO" height={40} />
        </Link>
      </div>
      <HamburgerMenu user={Boolean(user)} role={role}>
        <SignOutButton />
      </HamburgerMenu>
    </nav>
  );
}

import { cm } from "@/utils/classMerge";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import defaultUserImg from "../../assets/seo.jpg";

export default async function Avatar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userImage = user?.user_metadata?.avatar_url || defaultUserImg;
  return (
    <Image
      src={userImage}
      alt="User Image"
      width={50}
      height={50}
      className="rounded-full border-2 border-white"
    />
  );
}

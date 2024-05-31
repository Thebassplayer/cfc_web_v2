import { createClient } from "./server";

export default async function getUserRole() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let { data: profiles, error: getRoleError } = await supabase
    .from("profiles")
    .select("role, username");

  if (!user || getRoleError || !profiles) {
    return {
      role: null,
    };
  }

  return {
    role: profiles[0].role,
  };
}

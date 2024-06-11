import { signInWithGoogle } from "@/utils/authHandlers";
import Image from "next/image";

import googleLogo from "@/assets/google.svg";

const SignInWithGoogleButton = () => {
  return (
    <form action={signInWithGoogle}>
      <button
        type="submit"
        className="hover:scale-105"
        title="Sign in with Google"
      >
        <Image src={googleLogo} alt="LOGO" height={30} />
      </button>
    </form>
  );
};

export default SignInWithGoogleButton;

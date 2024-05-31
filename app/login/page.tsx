import AuthForm from "@/components/AuthForm/AuthForm";
import { SearchParamsMessage } from "@/types";

type LoginProps = {
  searchParams: SearchParamsMessage;
};

export default function Login({ searchParams }: LoginProps) {
  return (
    <div className="m-auto grid h-full grid-rows-12 gap-2 px-8 sm:max-w-md lg:max-w-2xl">
      <h1 className="row-span-1 row-start-2 text-center font-sifonn text-2xl lg:text-4xl">
        Ingresa a tu panel de usuario!
      </h1>
      <AuthForm searchParamsMessage={searchParams} />
    </div>
  );
}

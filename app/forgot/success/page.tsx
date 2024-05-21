export default function ForgotSuccess() {
  return (
    <div className="m-auto flex h-full w-full flex-1 flex-col items-center justify-center gap-2 px-8 sm:max-w-md">
      <div className="animate-in text-foreground flex w-full flex-col justify-center gap-2 rounded-md border p-4">
        <p className="text-foreground text-center">
          Hemos enviado un correo a tu dirección de email con instrucciones para
          recuperar tu contraseña.
        </p>
      </div>
    </div>
  );
}

const FormError = ({ searchParams }: { searchParams: { message: string } }) => {
  return (
    <p className="bg-foreground/10 text-foreground mt-4 rounded-md bg-red-300 p-4 text-center text-sm">
      {searchParams.message}
    </p>
  );
};

export default FormError;

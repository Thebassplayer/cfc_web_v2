import { SearchParamsMessage } from "@/types";

type FormErrorProps = {
  searchParamsMessage: SearchParamsMessage;
};

const FormMessage = ({ searchParamsMessage }: FormErrorProps) => {
  const hasError = searchParamsMessage.error;
  const hasMessage = searchParamsMessage.message;

  if (!hasError && !hasMessage) return null;

  if (hasError)
    return (
      <p className="bg-foreground/10 text-foreground mt-4 rounded-md bg-red-300 p-4 text-center text-sm">
        {searchParamsMessage.error}
      </p>
    );

  return (
    <p className="bg-foreground/10 text-foreground mt-4 rounded-md bg-green-300 p-4 text-center text-sm">
      {searchParamsMessage.message}
    </p>
  );
};

export default FormMessage;

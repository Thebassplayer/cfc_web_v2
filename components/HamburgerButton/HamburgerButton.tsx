import { cm } from "@/utils/classMerge";

type HamburgerButtonProps = {
  buttonRef?: React.RefObject<HTMLButtonElement>;
  toggleNavMenu: () => void;
  color?: "black" | "white";
};

const HamburgerButton = ({
  buttonRef,
  toggleNavMenu,
  color = "white",
}: HamburgerButtonProps) => {
  return (
    <button
      ref={buttonRef}
      title="Abrir menú de navegación"
      onClick={toggleNavMenu}
      className={cm(
        "focus:ring-primary inline-flex items-center justify-center p-2 focus:outline-none",
        color === "white"
          ? "text-black hover:bg-white hover:text-black hover:ring-2 hover:ring-black"
          : "text-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;

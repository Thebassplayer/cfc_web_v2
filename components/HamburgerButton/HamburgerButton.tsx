import { cm } from "@/utils/classMerge";

type HamburgerButtonProps = {
  buttonRef?: React.RefObject<HTMLButtonElement>;
  toggleNavMenu: () => void;
};

const HamburgerButton = ({
  buttonRef,
  toggleNavMenu,
}: HamburgerButtonProps) => {
  return (
    <button
      ref={buttonRef}
      title="Abrir menú de navegación"
      onClick={toggleNavMenu}
      className={cm(
        "inline-flex items-center justify-center p-2 text-black focus:outline-none",
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

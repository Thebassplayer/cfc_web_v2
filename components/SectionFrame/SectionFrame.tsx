import { cm } from "@/utils/classMerge";
import React from "react";

type SectionFrameProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionFrame = ({ children, className }: SectionFrameProps) => {
  return (
    <section
      className={cm("h-full w-full px-4 py-8 lg:px-28 lg:py-14", className)}
    >
      {children}
    </section>
  );
};

export default SectionFrame;

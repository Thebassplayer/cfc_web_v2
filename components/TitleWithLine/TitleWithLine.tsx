import { cm } from "@/utils/classMerge";
import React from "react";

type TitleWithLineProps = {
  text: string;
  className?: string;
};

const TitleWithLine = ({ text, className }: TitleWithLineProps) => {
  return (
    <div className={cm("mx-auto w-fit", className)}>
      <h1 className="col-span-2 text-center font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
        {text}
      </h1>
      <div className="mx-auto mb-8 h-2 w-full bg-primary-yellow"></div>
    </div>
  );
};

export default TitleWithLine;

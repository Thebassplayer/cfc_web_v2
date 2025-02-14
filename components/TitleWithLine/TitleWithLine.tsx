import React from "react";

type TitleWithLineProps = {
  text: string;
};

const TitleWithLine = ({ text }: TitleWithLineProps) => {
  return (
    <div className="mx-auto w-fit">
      <h1 className="col-span-2 mt-8 text-center font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
        {text}
      </h1>
      <div className="mx-auto mb-8 h-2 w-full bg-primary-yellow"></div>
    </div>
  );
};

export default TitleWithLine;

import React from "react";
import DirectionsBox from "./DirectionsBox";
import AnswerBox from "./AnswerBox";
import Field from "./Field";

const LevelPage = ({ level }: { level: number }) => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="flex flex-col items-center w-1/2">
        <DirectionsBox level={level} />
        <AnswerBox level={level} />
      </div>
      <div className="bg-green-400 w-1/2">
        <Field level={level} />
      </div>
    </div>
  );
};

export default LevelPage;

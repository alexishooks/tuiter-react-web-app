import ConditionalOutputIfElse from "./conditional-output-if-else";
import ConditionalOutputInline from "./conditional-output-inline";
import React from "react";

const ConditionalOutput = () => {
  return (
      <div>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
      </div>
  );
};
export default ConditionalOutput;
import React from "react";

import { BgBubbles, BgBubblesLi } from "./style";

export const Background = () => {
  return (
    <BgBubbles>
      {[...Array(10)].map((ele, i) => (
        <BgBubblesLi key={i} />
      ))}
    </BgBubbles>
  );
};

import React, { forwardRef, useRef } from "react";

//syntax
const Forward = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default Forward;

import React from "react";
// eslint-disable-next-line react/prop-types
const Button = ({ children, handler }) => {
  console.log(`rendering button ${children}`);
  return <button onClick={handler}>{children}</button>;
};

// export default Button;

export default React.memo(Button);
/**
 * After using memo second button also rerender after state changin
 *
 */

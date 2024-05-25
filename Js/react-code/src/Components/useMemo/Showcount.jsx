import React from "react";
// eslint-disable-next-line react/prop-types
const Showcount = ({ title, count }) => {
  console.log(`rendering ${title}`);
  return <div>{`Title:${title}---${count}`}</div>;
};

export default React.memo(Showcount);

import { useState } from "react";

const Checkbox = () => {
  const [check, setcheck] = useState(false);
  const checkHandler = (e) => {
    setcheck(e.target.checked);
  };
  return (
    <div>
      <input type="checkbox" name="" id="" onClick={(e) => checkHandler(e)} />
      {check ? "You Agree With this term" : "you disagree this term"}
    </div>
  );
};

export default Checkbox;

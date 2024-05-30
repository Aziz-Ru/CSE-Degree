import { useState } from "react";
import Welcome from "./Welcome";

const Trigger = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Remove" : "Show"}
      </button>
      {show && <Welcome />}
    </div>
  );
};

export default Trigger;

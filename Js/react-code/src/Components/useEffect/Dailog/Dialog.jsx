import { useState } from "react";
import ModalDialog from "./ModalDialog";

const Dialog = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Dialog</button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
    </>
  );
};

export default Dialog;

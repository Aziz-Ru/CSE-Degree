import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const ModalDialog = ({ children, isOpen }) => {
  const ref = useRef();
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);
  return (
    <dialog
      style={{
        width: 300,
        borderWidth: 1,
        height: 100,
        textAlign: "center",
      }}
      ref={ref}
    >
      {children}
    </dialog>
  );
};

export default ModalDialog;

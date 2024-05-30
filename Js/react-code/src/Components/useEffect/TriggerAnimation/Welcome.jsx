import { useEffect, useRef } from "react";
import { FadeInAnimation } from "./Animation";

const Welcome = () => {
  const ref = useRef(null);
  useEffect(() => {
    const anim = new FadeInAnimation(ref.current);
    anim.start(1000);
    return () => {
      anim.stop();
    };
  });
  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      Welcome
    </h1>
  );
};

export default Welcome;

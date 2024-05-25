import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Showcount from "./Showcount";

const Countermemo = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const count1Handler = useCallback(() => {
    setcount1((prev) => prev + 1);
  }, []);
  const count2Handler = useCallback(() => {
    setcount2((prev) => prev + 5);
  }, []);
  const isEvenOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2;
  }, [count1]);
  return (
    <div>
      <h1>useMemo</h1>
      <Showcount title={"Counter-1"} count={count1} />
      <span>{isEvenOdd ? "odd" : "even"}</span>
      <Button handler={count1Handler}>IncrementByOne</Button>
      <hr />
      <Showcount title={"Counter-2"} count={count2} />
      <Button handler={count2Handler}>IncrementByFive</Button>
    </div>
  );
};

export default Countermemo;

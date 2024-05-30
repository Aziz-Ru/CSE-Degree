import { useState } from "react";
import Counter from "./Counter";

const CounterObj = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

const Context = () => {
  // eslint-disable-next-line no-unused-vars
  const [counters, setCounters] = useState(CounterObj);

  const incrementHandler = (id) => {
    const updateCounter = counters.map((counter) => {
      if (counter.id == id) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });

    setCounters(updateCounter);
  };

  const handleDecrement = (counterId) => {
    const updateCounters = counters.map((counter) => {
      if (counter.id == counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updateCounters);
  };

  const totalSum = counters.reduce((sum, cur) => sum + cur.value, 0);

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          onIncrement={() => incrementHandler(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <div>{totalSum}</div>
    </div>
  );
};

export default Context;

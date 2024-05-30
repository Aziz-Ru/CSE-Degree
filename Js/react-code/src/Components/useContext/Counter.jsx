import Button from "./Button";
import Showcount from "./Showcount";

// eslint-disable-next-line react/prop-types
const Counter = ({ count, onIncrement, onDecrement }) => {
  //   console.log(count);
  return (
    <div>
      <Showcount count={count} />
      <Button handler={onIncrement}>Increment</Button>
      <Button handler={onDecrement}>Decrement</Button>
    </div>
  );
};

export default Counter;

import "./App.css";
import Checkbox from "./Components/UseState/Checkbox";
import Counter from "./Components/UseState/Counter";
import InitFunction from "./Components/UseState/InitFunction";
import Inputform from "./Components/UseState/Inputform";

function App() {
  return (
    <>
      <div>
        <Counter />
        <Inputform />
        <Checkbox />
        <InitFunction />
      </div>
    </>
  );
}

export default App;

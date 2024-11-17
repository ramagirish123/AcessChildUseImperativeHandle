import { useRef, useState } from "react";
import Input from "./input";
import InputWithHook from "./inputWithHook";

function Parent() {
  const [inputValue, setInputValue] = useState("Hello World!!!");

  const onChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Input
        label={"Name"}
        isControlled={true}
        onChange={onChange}
        value={inputValue}
      />
    </>
  );
}

const ParentWithUseImperativeHook = () => {
  const ref = useRef();
  const resetInput = () => {
    ref.current.updateInput("Hello Hooks!!!");
  };
  return (
    <>
      <InputWithHook label={"Name"} isControlled={true} ref={ref} />
      <button onClick={resetInput}>reset</button>
    </>
  );
};

const App = () => {
  return (
    <div>
      <>
        <h5>Conventional way of accessing child properties</h5>
        <Parent />
      </>
      <br />
      <>
        <h5>Accessing child using useImperativeHandle hook</h5>
        <ParentWithUseImperativeHook />
      </>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, Setbill] = useState("");
  const [percentage, Setpercentage] = useState(0);
  const [percentage1, Setpercentage1] = useState(0);

  function Resetall() {
    Setbill("");
    Setpercentage(0);
    Setpercentage1(0);
  }

  return (
    <div>
      <Billinput bill={bill} Setbill={Setbill} />
      <Selectpercentage percentage={percentage} Setpercentage={Setpercentage}>
        How did you like the service?
      </Selectpercentage>
      <Selectpercentage percentage={percentage1} Setpercentage={Setpercentage1}>
        How did your friend like the service?
      </Selectpercentage>
      {bill > 0 && (
        <div>
          <Output
            bill={bill}
            percentage={percentage}
            percentage1={percentage1}
          />
          <Reset reset={Resetall} />
        </div>
      )}
    </div>
  );
}

function Billinput({ bill, Setbill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        placeholder="0"
        onChange={(e) => Setbill(Number(e.target.value))}
        type="text"
        value={bill}
      />
    </div>
  );
}

function Selectpercentage({ percentage, Setpercentage, children }) {
  return (
    <div onChange={(e) => Setpercentage(Number(e.target.value))}>
      <label>{children}</label>
      <select value={percentage}>
        <option value="0">Dissatisfied (0%) </option>
        <option value="5">it was okay (5%) </option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, percentage, percentage1 }) {
  let percentage3;
  percentage3 = (percentage + percentage1) / 2;
  let sum;
  sum = bill + (bill * percentage3) / 100;

  return (
    <h3>
      {`You pay $${sum} ($${bill} + $${(bill * percentage3) / 100} tip)`}{" "}
    </h3>
  );
}

function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}

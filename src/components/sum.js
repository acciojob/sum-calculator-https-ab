import React, { useState } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    const parsed = Number(input);
    if (!isNaN(parsed)) {
      const newNumbers = [...numbers, parsed];
      setNumbers(newNumbers);
      setSum(newNumbers.reduce((acc, curr) => acc + curr, 0));
      setInput("");
    }
  }

  return (
    <div>
      <h1 data-cy="title">Sum Calculator</h1>

      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Enter a number"
        data-cy="input"
      />
      <button onClick={handleAdd} data-cy="add-btn">Add</button>

      <div data-cy="numbers-section">
        <h3>Numbers:</h3>
        <p data-cy="numbers">{numbers.join(", ")}</p>
      </div>

      <div data-cy="sum-section">
        <h3>Total Sum:</h3>
        <p data-cy="sum">Sum: {sum}</p>
      </div>
    </div>
  );
}

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
      setNumbers(prev => {
        const newNumbers = [...prev, parsed];
        setSum(newNumbers.reduce((acc, curr) => acc + curr, 0));
        return newNumbers;
      });
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

      <h3 data-cy="numbers-title">Numbers:</h3>
      <p data-cy="numbers">{numbers.join(", ")}</p>

      <h3 data-cy="sum-title">Total Sum:</h3>
      <p data-cy="sum">Sum: {sum}</p>
    </div>
  );
}

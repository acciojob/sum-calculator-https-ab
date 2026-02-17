import React, { useState, useEffect } from "react";

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
      setNumbers(prev => [...prev, parsed]);
      setInput("");
    }
  }

  useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

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

      <h3>Numbers:</h3>
      <p data-cy="numbers">{numbers.join(", ")}</p>

      <h3>Total Sum:</h3>
      <p data-cy="sum">Sum: {sum}</p>
    </div>
  );
}

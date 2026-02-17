import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    const parsed = Number(input); // safer
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
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAdd}>Add</button>

      <h3>Numbers:</h3>
      <p>{numbers.join(", ") || "-"}</p>

      <h3>Total Sum:</h3>
      <p>Sum: {sum}</p>
    </div>
  );
}

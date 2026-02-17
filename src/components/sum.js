import React from "react";
import { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  // Handle input change
  function handleChange(e) {
    setInput(e.target.value);
  }

  // Add number to array
  function handleAdd() {
    const parsed = parseInt(input, 10);

    if (!isNaN(parsed)) {
      setNumbers(prev => [...prev, parsed]);
      setInput("");
    }
  }

  // Recalculate sum asynchronously whenever numbers change
  useEffect(() => {
    let isMounted = true;

    async function calculateSum() {
      // Simulate async work (like heavy calculation or API)
      await new Promise(resolve => setTimeout(resolve, 0));

      const total = numbers.reduce((acc, curr) => acc + curr, 0);

      if (isMounted) {
        setSum(total);
      }
    }

    calculateSum();

    return () => {
      isMounted = false;
    };
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

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
      <p>{sum}</p>
    </div>
  );
}

"use client"; // This directive marks the component as a Client Component

import { useState } from 'react';

export default function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Display the current count */}
      <h1 className="text-2xl">Counter: {count}</h1>
      <div className="mt-4">
        {/* Button to increment the count */}
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
          Increment
        </button>
        {/* Button to decrement the count */}
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">
          Decrement
        </button>
      </div>
    </div>
  );
}
// 
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex  flex-col items-center gap-4 p-5">
      <div className="bg-green-600 h-20 w-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
        {count}
      </div>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}

export default App;
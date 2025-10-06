// import React from "react";

// function CheckUser({ name, age, isOnline }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{age ? `${age} years old` : "Age not available"}</p>
//       <p>{isOnline ? "Online" : "Offline"}</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <CheckUser name="Aman" age={21} isOnline={true} />
//       <CheckUser name="Krishna" age={null} isOnline={false} />
//     </div>
//   );
// }

import { useState } from "react";

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div>
      <h2>Numbers: {numbers.join(", ")}</h2>
      <button onClick={addNumber}>Add Number</button>
    </div>
  );
}

import { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} kali diklik `;
  });
  return (
    <div>
      <p>kamu klik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default Counter;

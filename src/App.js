import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}

export default App;

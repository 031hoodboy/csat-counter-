import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <Time>
      {time.toLocaleDateString()}&nbsp;
      {time.toLocaleTimeString()}
    </Time>
  );
};

const Time = styled.div`
  margin-top: 10px;
  font-size: 20px;
  @media screen and (max-width: 630px) {
    font-size: 16px;
  }
`;

export default Clock;

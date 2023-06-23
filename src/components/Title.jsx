import React from "react";
import { useState } from "react";

const Title = ({ title }) => {
  const [mensaje, setMensaje] = useState(" ");
  return (
    <div>
      <h1>
        Hello {title} {mensaje}
      </h1>
      <button onClick={() => setMensaje("(from changed state)!")}>Click me</button>
    </div>
  );
};

export default Title;

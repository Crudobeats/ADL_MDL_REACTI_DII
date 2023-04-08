import React from "react";

import Login from "../src/components/Login";

import { useState } from "react";
import { Alert } from "bootstrap";

function App() {
  const [result, setResult] = useState({
    isShown: false,
    msg: "",
    variant: "",
  });

  return (
    <div className="container">
      <Login setResult={setResult} />
      {result.isShown ? (
        <div className="mt-3">
          <Alert key={result.variant} variant={result.variant}>
            {result.msg}
          </Alert>
        </div>
      ) : null}
    </div>
  );
}

export default App;

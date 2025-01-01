import React, { useState } from "react";

function UseInputText() {
  const [text, setText] = useState("");
  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return { text, updateText };
}

export default UseInputText;

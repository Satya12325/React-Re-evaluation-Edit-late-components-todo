import { useState } from "react";

export default function TodoInput({ onTask }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text === "") {
      return false;
    }
    onTask(text);
    setText("");
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          background: "green",
          height: "30px",
          width: "30px",
          borderRadius: "5px 0 0 5px",
          borderRight: "0px"
        }}
      >
        +
      </button>
      <input
        type="text"
        placeholder="Add something"
        onChange={handleChange}
        value={text}
        style={{
          background: "green",
          height: "24px",
          borderRadius: "0px 5px 5px 0px",
          borderLeft: "0px",
          color: "white",
          width: "300px",
          padding: "0 1.3rem"
        }}
        className="input"
      />
    </div>
  );
}

import { useState } from "react";

export default function TodoList({
  id,
  status,
  title,
  handleDelete,
  handleToggle,
  handleChanged,
  checked,
  editValue,
  handleEdit,
  value,
  handleChanges
}) {
  const [showComplet, setShowComplet] = useState(false);

  var listNumber = id;

  if (listNumber === 1) {
    return "";
  }
  if (status === true) {
    var Style = {
      color: "green",
      textDecoration: "line-through"
    };
  }

  return (
    <div
      style={{
        Maxwidth: "300px",
        background: "transparent",
        border: "1px solid black",
        margin: "1rem",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1rem"
      }}
    >
      <div onClick={() => handleToggle(id)} style={Style}>
        <input
          type="checkbox"
          style={{ width: "30px", height: "15px" }}
          checked={checked}
          onChange={handleChanged}
          value={editValue}
        />

        {title}
      </div>
      <button onClick={() => setShowComplet(!showComplet)}>Edit</button>
      <div>
        {showComplet && (
          <div>
            <input
              type="text"
              placeholder="edit hear"
              onChange={handleChanges}
              value={value}
            />
            <button onClick={() => handleEdit(id)}>→</button>
          </div>
        )}
      </div>
      <button onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}

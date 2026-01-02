import React from "react";
import { useState } from "react";

const Page = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addList = () => {
    // Functionality to add a todo item will go here
    setList([...list, { item: input, status: "pending" }]);
  };

  const deleteList = (index) => {
    // Functionality to add a todo item will go here
    const newList = list.filter((_item, i) => i !== index);
    setList(newList);
    console.log(list);
  };

  const changeStatus = (index) => {
    // Functionality to change status of a todo item will go here
    const newList = list.map((item, i) => {
      if (i === index) {
        return { ...item, status: "completed" };
      }
      return item;
    });
    setList(newList);
  };

  const filteredList = list.filter((item) => {
    if (filter === "completed") return item.status === "completed";
    if (filter === "pending") return item.status === "pending";
    return true;
  });

  return (
 <div style={{ padding: "20px", maxWidth: "400px" }}>
      {/* Input */}
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          value={input}
          placeholder="Add todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addList}>Add</button>
      </div>

      {/* Filter */}
      <div style={{ marginTop: "10px" }}>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* List */}
      <div style={{ marginTop: "15px" }}>
        {filteredList.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span>
              {item.item} ({item.status})
            </span>

            <div>
              <button onClick={() => changeStatus(index)}>✔</button>
              <button onClick={() => deleteList(index)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

import React, { useState, useEffect } from "react";

const getInitialList = () => {
  const stored = localStorage.getItem("myItem");
  return stored ? JSON.parse(stored) : [];
};

const Page = () => {
  const [list, setList] = useState(getInitialList);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // Save to localStorage when list changes
  useEffect(() => {
    localStorage.setItem("myItem", JSON.stringify(list));
  }, [list]);

  const addList = () => {
    if (!input.trim()) return;

    setList(prev => [...prev,{id: Date.now(),item: input.trim(),status: "pending",},]);
    setInput("");
  };

  const deleteList = (id) => {
    setList(prev => prev.filter(item => item.id !== id));
  };

  const changeStatus = (id) => {
    setList(prev =>prev.map(item =>item.id === id ? { ...item, status: item.status === "pending" ? "completed" : "pending" }: item
      )
    );
  };

  const filteredList = list.filter(item => {
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
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* List */}
      <div style={{ marginTop: "15px" }}>
        {filteredList.map(item => (
          <div
            key={item.id}
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
              <button onClick={() => changeStatus(item.id)}>✔</button>
              <button onClick={() => deleteList(item.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

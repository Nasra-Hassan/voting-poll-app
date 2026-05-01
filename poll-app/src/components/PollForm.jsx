import React, { useState } from "react";

const PollForm = ({ addOption }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addOption(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter poll option"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg">
        Add
      </button>
    </form>
  );
};

export default PollForm;
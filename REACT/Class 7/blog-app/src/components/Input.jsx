import React from "react";

function Input({ type, placeholder, onChange, value }) {
  return (
    <input
      type="text"
      placeholder="Email"
      className="py-2 px-3 outline-none border-none ring-1 ring-sky-300 rounded-md w-lg max-w-xl"
      onChange={() => {}}
    />
  );
}

export default Input;

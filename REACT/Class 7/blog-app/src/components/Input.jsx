import React from "react";

function Input({ 
  type = "text", 
  placeholder, 
  onChange, 
  value, 
  icon, 
  required = false,
  className = "" 
}) {
  return (
    <div className={`flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 ${className}`}>
      {icon && (
        <div className="flex-shrink-0">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
      />
    </div>
  );
}

export default Input;

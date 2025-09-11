// src/components/Input.jsx
export default function Input({ type, name, placeholder, value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full rounded-lg border border-gray-500 bg-transparent px-3 pt-5 pb-2 text-white placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        required
      />
      <label
        htmlFor={name}
        className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-400 peer-focus:text-sm"
      >
        {placeholder}
      </label>
    </div>
  )
}

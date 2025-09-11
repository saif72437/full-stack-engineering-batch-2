// src/components/Button.jsx
export default function Button({ children, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                  px-4 py-2 text-white font-semibold shadow-lg 
                  transition-all duration-300 ease-in-out 
                  hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                  disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  )
}

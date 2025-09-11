// src/pages/Login.jsx
import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-md bg-gradient-to-br from-gray-950 via-slate-600 to-black">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Login</h2>

      {error && (
        <div className="w-full p-3 mb-4 rounded-lg bg-red-100 border border-red-300 text-red-600 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-100">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

import { useState } from "react"
import { useNavigate, Link } from "react-router"
import toast from "react-hot-toast"

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      toast.error("Please fill all fields")
      return
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }

    // check if user already exists
    const existingUser = localStorage.getItem("user")
    if (existingUser) {
      const parsed = JSON.parse(existingUser)
      if (parsed.email === email) {
        toast.error("User already exists")
        return
      }
    }

    // save user
    localStorage.setItem("user", JSON.stringify({ name, email, password }))
    toast.success("Account created successfully")
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center">Create Account</h1>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black/10"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black/10"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black/10"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
import { useState } from "react"
import { useNavigate,Link,NavLink } from "react-router"
import toast from "react-hot-toast"
import Signup from "./Signup";

function Login() {
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = (e) =>{
  e.preventdefault();

  if(email === "" || password === ""){
    toast.error("All fields are required")
    return
  }
  localStorage.setItem("user",JSON.stringify({email}))
  toast.success("logged in Successfully")
  navigate("/")
}

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div  className="border rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center"> Login</h1>

        <form onSubmit ={handleLogin} className="flex flex-col gap-4">
          <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
          className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black/10"
           />
          <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
          className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black/10"
           />

           <button type="submit" className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Login

           </button>
          <p className="text-center text-sm text-gray-500">
         Dont have an Account{" "}
          <Link to="/Signup" className="text-black font-medium underline">
            Signup
          </Link></p>
        </form>
      </div>
     
    </div>
  )
}

export default Login

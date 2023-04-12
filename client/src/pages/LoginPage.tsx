import { loginRequest, userRequest } from "../api/auth"
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  
  const navigate = useNavigate()
  const setToken = useAuthStore(state => state.setToken)
  const setUser = useAuthStore(state => state.setUser)
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const email = (e.currentTarget.elements[0] as HTMLInputElement).value
      const password = (e.currentTarget.elements[1] as HTMLInputElement).value
      const resLogin = await loginRequest(email, password)
      setToken(resLogin.data.token)
      const resUser = await userRequest()
      console.log(resUser)
      setUser(resUser.data)
      navigate('/profile')  
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder='email@email.com' />
        <input type="password" placeholder='******' />
        <button>
            Login
        </button>
    </form>
  )
}

export default LoginPage
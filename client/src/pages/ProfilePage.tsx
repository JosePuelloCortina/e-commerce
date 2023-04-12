import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth"

function ProfilePage() {
  
  const logout = useAuthStore(state => state.logout)
  const user = useAuthStore(state => state.user)
  const navigate = useNavigate()
  return (
    <div>Profile

      <button onClick={() => {
        logout()
        navigate('/login')
      }}>
        Logout
      </button>
    </div>
  )
}

export default ProfilePage
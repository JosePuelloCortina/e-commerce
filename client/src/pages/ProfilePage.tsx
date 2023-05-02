import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth"

function ProfilePage() {
  
  const logout = useAuthStore(state => state.logout)
  const user = useAuthStore(state => state.user)
  const navigate = useNavigate()
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        Profile         
      </div>
    </div>
        
  )
}

export default ProfilePage
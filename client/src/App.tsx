import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import Navigation from './components/Navigation'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuthStore } from './store/auth'
import ErrorPage from './pages/ErrorPage'

function App() {
  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><HomePage/> <Navigation/></>}  /> 
        <Route path='/login' element={<LoginPage/>}  /> 
        <Route path='/register' element={<RegisterPage/>}  />  
        <Route element={<ProtectedRoute isAllowed={isAuth}/> } >
          <Route path='/profile' element={<><ProfilePage/><Navigation/></>}  /> 
        </Route>
        <Route path='/Error' element={<ErrorPage/>} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App
import { Link } from "react-router-dom"
function Navigation() {
  return (
    
    <nav className="bg-white shadow">
      <div className="mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-16 w-auto" src="/shopall-4.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-10 rounded-md text-sm font-medium">
                Inicio
              </a>
              <a href="/profile" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Profile
              </a>
              <a href="/login" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </a>
              <a href="/register" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
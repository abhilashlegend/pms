import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Root from './pages/Root'
import Users from './pages/users/Users'

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/', element: <Root />, children: [
      { path: '/dashboard', element: <Dashboard />,  },
      { path: '/users', element: <Users />}
    ]},
    
    { path: '/register', element: <Register />},
    
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App

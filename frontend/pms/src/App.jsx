import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Root from './pages/Root'
import Users from './pages/users/Users'
import NewUser from './pages/users/newuser/NewUser'

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/', element: <Root />, children: [
      { path: '/dashboard', element: <Dashboard />,  },
      { path: 'users', children: [
          { index: true, element: <Users /> },
          { path: 'new-user', element: <NewUser /> }
      ]}
    ]},
    
    { path: '/register', element: <Register />},
    
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App

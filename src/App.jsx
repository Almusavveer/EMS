import React, { useContext, useState } from 'react'
import './App.css'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password == 123){
      setUser('admin')
      // console.log(user)
    }else if(email === 'user@me.com' && password == 123){
      setUser('employee')
      // console.log(user)
    }else{
    alert('Invalid Credentials')
    }
  }

  const data = useContext(AuthContext)
  console.log(data)
  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ''}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App

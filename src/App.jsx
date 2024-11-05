import { useContext, useEffect, useState } from 'react'
import './App.css'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Login from './components/Auth/Login'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(
  //   () => {
  //     if(authData){
  //       const loggedInUser = localStorage.getItem('loggedInUser')
  //       if(loggedInUser)
  //         setUser(loggedInUser.role)
  //     }
  //   }, [authData]
  // )

  const handleLogin = (email, password) => {
    if(authData && authData.admin.find((e) => e.email == email && e.password == password)){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role : 'admin'}))
      // console.log(user)
    }else if(authData){
      const employee = authData.employees.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role : 'employee'}))
      }
      // console.log(user)
    }else{
    alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ''}
      {user === 'admin' ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : '')}
    </>
  )
}

export default App

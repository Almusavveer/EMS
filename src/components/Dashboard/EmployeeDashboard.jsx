// import React from 'react'

import Header from "../others/header"
import TaskListNumbers from "../others/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = () => {
  return (
    <div className="h-screen font-semibold p-10 bg-[#1c1c1c]">
            <Header />
            <TaskListNumbers />
            <TaskList />
    </div>
  )
}

export default EmployeeDashboard
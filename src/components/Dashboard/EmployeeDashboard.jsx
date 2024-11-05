// import React from 'react'

import Header from "../others/header"
import TaskListNumbers from "../others/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({data}) => {
  // console.log(data)
  return (
    <div className="h-screen font-semibold p-10 bg-[#1c1c1c]">
            <Header data={data}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
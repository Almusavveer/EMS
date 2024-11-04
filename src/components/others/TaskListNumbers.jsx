// import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 screen justify-between gap-5 ">
        <div className="w-[45%] py-9 px-6 bg-teal-400 rounded-xl">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">new Task</h3>
        </div>
        <div className="w-[45%] py-9 px-6 bg-blue-400 rounded-xl">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">new Task</h3>
        </div>
        <div className="w-[45%] py-9 px-6 bg-green-400 rounded-xl">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">new Task</h3>
        </div>
        <div className="w-[45%] py-9 px-6 bg-violet-400 rounded-xl">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">new Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
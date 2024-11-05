// import React from 'react'

import Login from "../Auth/Login"

const Header = ({data}) => {
  return (
    <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">Hello<br /> <span className="text-3xl font-semibold">{data.firstName}👋</span></h1>
        <button onSubmit={() => {
          console.log('logged out')
        }} className="bg-red-600 text-lg  text-white px-5 py-3 rounded-md">Log Out</button>
    </div>
  )
}

export default Header
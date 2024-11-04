// import React from 'react'
import { useState } from 'react'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
        console.log('Form submitted')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20' >
            <form className='flex flex-col items-center justify-center'
            onSubmit={(e) => submitHandler(e)}
            >
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }} 
                required 
                className='text-white font-semibold border-2 border-emerald-600 rounded-full px-5 py-3 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter email' />
                <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }} 
                required 
                className='text-whit font-semibold border-2 border-emerald-600 rounded-full px-5 py-3 text-xl outline-none mt-4 bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter password'/>
                <button className='mt-7 text-white border-none font-semibold hover:bg-emerald-700 bg-emerald-600 rounded-full px-8 py-2 text-xl outline-none placeholder:text-white w-full'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
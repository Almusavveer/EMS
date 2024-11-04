// import React from 'react'
// This is a Login component
// It is a form with email and password fields
import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../Utils/localStorage'

const Login = ({handleLogin}) => {

    // useEffect(() => {
    //     setLocalStorage()
    //     getLocalStorage()
    // })

    // State for email and password
    // Default values are empty strings
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Function to handle form submission
    const submitHandler = (e) => {
        // Prevent default form submission
        e.preventDefault()
        handleLogin(email, password)
        // Log the email and password
        setEmail('')
        setPassword('')
        // console.log('Form submitted')
    }
    return (
        // Its a main div with flexbox properties
        <div className='flex h-screen w-screen items-center justify-center'>
            {/* A div with border, padding, and rounded corners */}
            <div className='border-2 rounded-xl border-emerald-600 p-20' >
                {/* A form with flexbox properties */}
                <form 
                    className='flex flex-col items-center justify-center'
                    onSubmit={(e) => submitHandler(e)}
                >
                    {/* An input field for email */}
                    {/* It has a placeholder, value, and onChange event */}
                    <input
                        value={email}
                        onChange={
                            (e) => {
                            setEmail(e.target.value)
                            }
                        }
                        required
                        className='text-white font-semibold border-2 border-emerald-600 rounded-full px-5 py-3 text-xl outline-none bg-transparent placeholder:text-gray-400' 
                        type="email" 
                        placeholder='Enter email' 
                    />
                    {/* An input field for password */}
                    {/* It has a placeholder, value, and onChange event */}
                    <input
                        value={password}
                        onChange={
                            (e) => {
                            setPassword(e.target.value)
                            }
                        }
                        required
                        className='text-whit font-semibold border-2 border-emerald-600 rounded-full px-5 py-3 text-xl 
                        outline-none mt-4 bg-transparent placeholder:text-gray-400' 
                        type="password" 
                        placeholder='Enter password'
                    />
                    {/* It's a Login Button */}
                    <button 
                    className='mt-7 text-white border-none font-semibold hover:bg-emerald-700 bg-emerald-600 rounded-full      px-8 py-2 text-xl outline-none placeholder:text-white w-full'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
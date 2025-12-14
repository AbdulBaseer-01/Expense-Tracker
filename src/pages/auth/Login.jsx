import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const handleToggle = () => {
        setIsSignIn(!isSignIn);
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
            {!isSignIn ? (
                <div className="w-full max-w-md pt-6 pr-8 pl-8 shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 rounded-2xl">
                    <form >
                        <h2 className="text-[2.4rem] text-center text-black font-bold mb-2">Sign In</h2>
                        <div className="w-full flex justify-center items-center"><hr className="h-[1px] w-[55%] bg-teal-400"/></div>
                        <div className="flex flex-col text-left mt-6 mb-2">
                            <label htmlFor="mail" className="text-black/40 text-xl">Email</label>
                            <input type="email"  id="mail" placeholder="m.@example.com" className="text-blue-900 border-teal-300 border-2 rounded-lg mb-2 focus:outline-none focus:border-teal-500 placeholder:text-teal-400 p-2 bg-white/60"/>
                        </div>
                        <div className="flex flex-col text-left mt-2 mb-2">
                            <label htmlFor="password" className="text-black/40 text-xl">Password</label>
                            <input type="password"  id="password" className="text-black border-teal-300 border-2 rounded-lg mb-2 focus:outline-none focus:border-teal-500 p-2 bg-white/60"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button type="submit">Sign In</Button>
                        </div>
                        <div><p className="text-black text-lg text-center mt-2">Don't have an account? <span onClick={handleToggle} className="text-teal-600 font-semibold cursor-pointer">Sign Up</span></p></div>
                        <h3 className="syncopate-bold text-right mt-4 text-black">EXP<span className="text-teal-400 syncopate-bold">ensio </span></h3>
                    </form>
                </div>
            ) : (
                <div className="w-full max-w-md pt-6 pr-8 pl-8 shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 rounded-2xl">
                    <form >
                        <h2 className="text-[2.4rem] text-center text-black font-bold mb-2">Sign Up</h2>
                        <div className="flex flex-col text-left mt-6 mb-2">
                            <label htmlFor="userName" className="text-black/40 text-xl">User Name</label>
                            <input type="text"  id="userName" placeholder="username" className="text-black border-teal-300 border-2 rounded-lg mb-2 focus:outline-none focus:border-teal-500 placeholder:text-teal-400 p-2 bg-white/60"/>
                        </div>
                        <div className="flex flex-col text-left mt-2 mb-2">
                            <label htmlFor="email" className="text-black/40 text-xl">Email</label>
                            <input type="email"  id="email" placeholder="m.@example.com" className="text-black border-teal-300 border-2 rounded-lg mb-2 focus:outline-none focus:border-teal-500 placeholder:text-teal-400 p-2 bg-white/60"/>
                        </div>
                        <div className="flex flex-col text-left mt-2 mb-2">
                            <label htmlFor="password" className="text-black/40 text-xl">Password</label>
                            <input type="password"  id="password" className="text-black border-teal-300 border-2 rounded-lg mb-2 focus:outline-none focus:border-teal-500 p-2 bg-white/60"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button type="submit" className="cursor-pointer">Sign Up</Button>
                        </div>
                        <div><p className="text-black text-lg text-center mt-2">Already have an account? <span onClick={handleToggle} className="text-teal-600 font-semibold cursor-pointer">Sign In</span></p></div>
                        <h3 className="syncopate-bold text-right mt-4 text-purple-900">EXP<span className="text-teal-400 syncopate-bold">ensio </span></h3>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Login

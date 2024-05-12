"use client"

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '@/contexts/AuthContext';

import { CiMail } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const router = useRouter();

  const [focused, setFocused] = useState(false);
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);
  const [focused4, setFocused4] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const [password3, setPassword3] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [account, setAccount] = useState(true)

  const submitForm1 = async (event) => {
    event.preventDefault()
    if (email.trim() !== '' && password.trim() !== '') {
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
      }
      const response = await fetch('http://127.0.0.1:5000/login', options);
      const data = await response.json()
      if (response.ok) {
          login({ username: email });
          router.push('/home');
      } else {
          setErrorMsg(data.message)
      }
    }
  };

  if (user) {
    router.push('/home');
    return null;
  }

  const submitForm2 = async (event) => {
    event.preventDefault()
    if (email1.trim() !== '' && password1.trim() !== '') {
      if (password1 !== password3) {
          setErrorMsg('Passwords do not match')
      } else {
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email1, password1 }),
          }
          const response = await fetch('http://127.0.0.1:5000/register', options);
          const data = await response.json()
          if (response.ok) {
              login({ username: email1 });
              router.push('/home');
          } else {
              setErrorMsg(data.message)
          }
        }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {account ? (
          <div className='bg-white flex flex-col justify-center items-center p-8 rounded-2xl w-full max-w-[430px]'>
            <h1 className="text-gray-900 text-lg font-bold font-poppins mt-0 pt-0">character.ai</h1>
            <p className="text-2xl my-6">Sign in</p>
            <button className="flex items-center justify-start bg-gray-200 w-72 py-3 px-4 rounded-3xl mb-2 hover:text-gray-600 active:bg-gray-400">
                <img src='google.png' className='w-4 mr-10' alt='' />
                <p className="text-sm text-center">Continue with Google</p>
            </button>
            <button className="flex items-center justify-start bg-gray-200 w-72 py-3 px-4 rounded-3xl mt-1 hover:text-gray-600 active:bg-gray-400">
                <img src='apple.png' className='w-4 mr-10' alt='' />
                <p className="text-sm text-center">Continue with Apple</p>
            </button>
            <div className="text-center flex items-center mt-2 mb-2">
                <span className="inline-block border-b border-gray-400 w-32"></span>
                <span className="mx-4 text-xs text-gray-900 font-base">OR</span>
                <span className="inline-block border-b border-gray-400 w-32"></span>
            </div>
            <form onSubmit={submitForm1}>
                <div className="flex items-center w-72 border border-gray-300 rounded-3xl px-4 py-1 mb-2">
                  <CiMail size={24} className='text-gray-500' />
                  <div className="relative w-72 flex items-center">
                      <input
                          type="email"
                          className="w-full px-3 py-2 rounded-md focus:outline-none bg-transparent"
                          onFocus={() => {setFocused(true); setErrorMsg('');}}
                          onBlur={(e) => setFocused(e.target.value !== '')}
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                      />
                      <label
                      className={`absolute left-3 transition-all duration-300 ${
                          focused ? 'top-0 text-gray-500 text-xs' : 'top-2 text-gray-500 text-base'
                      }`}
                      >
                          Email
                      </label>
                  </div>
                </div>
                <div className="flex items-center w-72 border border-gray-300 rounded-3xl px-4 py-1">
                  <RiLockPasswordFill size={24} className='text-gray-500' />
                  <div className="relative w-72 flex items-center">
                      <input
                          type={showPassword1 ? "text" : "password"}
                          className="w-full px-3 py-2 rounded-md focus:outline-none bg-transparent"
                          onFocus={() => {setFocused1(true); setErrorMsg('');}}
                          onBlur={(e) => setFocused1(e.target.value !== '')}
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                      />
                      <label
                      className={`absolute left-3 transition-all duration-300 ${
                          focused1 ? 'top-0 text-gray-500 text-xs' : 'top-2 text-gray-500 text-base'
                      }`}
                      >
                      Password
                      </label>
                  </div>
                  {showPassword1 ? <button size={24} className='text-gray-500' onClick={() => setShowPassword1(false)}><FaEye /></button> : <button size={24} className='text-gray-500' onClick={() => setShowPassword1(true)}><FaEyeSlash /></button>}
                </div>
                <div className="flex items-center">
                    {email.length !== 0 &&<button type='submit' className="bg-black text-white w-full py-2 px-4 rounded-3xl mt-2 hover:bg-gray-800 active:bg-gray-400">
                        Continue
                    </button>}
                </div>
                {errorMsg && <p className="text-red-500">*{errorMsg}</p>}
            </form>
            <button className="mt-6 text-gray-600 hover:text-gray-900" onClick={() => {setEmail(''); setPassword('')}}>Trouble signing in?</button>
            <button className="self-end text-gray text-sm" onClick={() => setAccount(false)}>Create Account</button>
          </div>
      ) : (
        <div className="bg-white flex flex-col justify-center items-center p-8 rounded-2xl w-full max-w-[460px] h-4/5">
          <h1 className="text-gray-900 text-lg font-bold font-poppins mt-0 pt-0">character.ai</h1>
          <p className="text-2xl my-6">Create an account</p>
          <button className="flex items-center justify-start bg-gray-100 w-72 py-3 px-4 rounded-3xl mb-2 hover:text-gray-600 active:bg-gray-400">
              <img src='google.png' className='w-4 mr-10' alt='' />
              <p className="text-sm text-center">Continue with Google</p>
          </button>
          <button className="flex items-center justify-start bg-gray-100 w-72 py-3 px-4 rounded-3xl mt-1 hover:text-gray-600 active:bg-gray-400">
              <img src='apple.png' className='w-4 mr-10' alt='' />
              <p className="text-sm text-center">Continue with Apple</p>
          </button>
          <div className="text-center flex items-center mt-2 mb-2">
              <span className="inline-block border-b border-gray-400 w-32"></span>
              <span className="mx-4 text-xs text-gray-900 font-base">OR</span>
              <span className="inline-block border-b border-gray-400 w-32"></span>
          </div>
          <form onSubmit={submitForm2}>
            <div className="flex items-center w-72 border border-gray-300 rounded-3xl px-4 py-1">
              <CiMail size={24} className='text-gray-500' />
              <div className="relative w-72 flex items-center">
                <input
                    type="email"
                    className="w-full px-3 py-2 rounded-md focus:outline-none bg-transparent"
                    onFocus={() => {setFocused2(true); setErrorMsg('')}}
                    onBlur={(e) => setFocused2(e.target.value !== '')}
                    onChange={(e) => setEmail1(e.target.value)}
                    value={email1}
                />
                <label
                    className={`absolute left-3 transition-all duration-300 ${
                        focused2 ? 'top-0 text-gray-500 text-xs' : 'top-2 text-gray-500 text-base'
                }`}
                >
                    Email
                </label>
              </div>
            </div>
              <div className="flex items-center w-72 border border-gray-300 rounded-3xl px-4 py-1 mt-2">
                <RiLockPasswordFill size={24} className='text-gray-500' />
                <div className="relative w-72 flex items-center">
                    <input
                        type="password"
                        className="w-full px-3 py-2 rounded-md focus:outline-none bg-transparent"
                        onFocus={() => {setFocused3(true); setErrorMsg('')}}
                        onBlur={(e) => setFocused3(e.target.value !== '')}
                        onChange={(e) => setPassword1(e.target.value)}
                        value={password1}
                    />
                    <label
                    className={`absolute left-3 transition-all duration-300 ${
                        focused3 ? 'top-0 text-gray-500 text-xs' : 'top-2 text-gray-500 text-base'
                    }`}
                    >
                        Password
                    </label>
                </div>
              </div>    
              <div className="flex items-center w-72 border border-gray-300 rounded-3xl px-4 py-1 mt-2">
                <RiLockPasswordFill size={24} className='text-gray-500' />
                <div className="relative w-72 flex items-center">
                  <input
                      type="password"
                      className="w-full px-3 py-2 rounded-md focus:outline-none bg-transparent"
                      onFocus={() => {setFocused4(true); setErrorMsg('')}}
                      onBlur={(e) => setFocused4(e.target.value !== '')}
                      onChange={(e) => setPassword3(e.target.value)}
                      value={password3}
                  />
                  <label
                      className={`absolute left-3 transition-all duration-300 ${
                          focused4 ? 'top-0 text-gray-500 text-xs' : 'top-2 text-gray-500 text-base'
                  }`}
                  >
                      Confirm Password
                  </label>
                </div>
              </div>                  
            <div className='flex items-center'>
                {email1.length !== 0 && <button className="bg-black text-white w-full py-2 px-4 rounded-3xl mt-2 hover:bg-gray-800 active:bg-gray-400">
                    Continue
                </button>}
            </div>
            {errorMsg && <p className="text-red-500">*{errorMsg} </p>}
          </form>
          <button className="mt-6 text-gray-600 hover:text-gray-900">Trouble signing in?</button>
          <p className="text-xs text-center w-80 mt-6 mb-4">By continuing, you agree to the Terms of Service and Privacy Policy</p>
          <button className="self-end text-gray text-sm" onClick={() => setAccount(true)}>Create Account</button>
        </div>
      )}
    </div>
    
  );
};

export default Login;

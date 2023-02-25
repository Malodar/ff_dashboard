import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { Link, redirect } from 'react-router-dom'
import { useCreateUserMutation } from '../store/auth/auth.api'

function Register() {
  const [createUser, { isLoading }] = useCreateUserMutation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    re_password: '',
  })

  const {
    name,
    email,
    password,
    re_password,
  } = formData

  const onChange = (e: React.FormEvent<HTMLInputElement>) => (
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value})
  )

  const onSubmit = (e: React.FormEvent)=> {
    e.preventDefault();
    createUser(formData).then((u) => {
      console.log(u);
      setFormData({
        name: '',
        email: '',
        password: '',
        re_password: '',
      });
      // redirect('/activate/:uid/:token')
    })
    // if (dispatch && dispatch != null && dispatch != 'undefined') {
    //   dispatch(login(username, password));
    // }
  }

  return (
    <div className='justify-center p-2 bg-slate-300 w-full h-screen text-center'>
      <h1 className='text-center font-bold text-3xl'>Register Your Account</h1>
      <h5 className='text-center mt-1'>
        or <Link to='/login' className='text-red-500 underline'>log in</Link> if you already have your account
      </h5>
      <div className=" flex justify-center mt-2">
        <form onSubmit={onSubmit}>
          <div className="mt-8">
            <div className="grid gap-6">
              <label className="block" htmlFor='name'>
                <strong className="text-gray-700">Name</strong>
                <input
                  type="text"
                  name='name'
                  className="
                    p-2
                    mt-1
                    block
                    w-full
                    h-10
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    shadow-lg 
                    shadow-gray-300
                  "
                  placeholder="Your name"
                  onChange={onChange} 
                  value={name}
                  required
                />
              </label>
              <label className="block" htmlFor='email'>
                <strong className="text-gray-700">Email</strong>
                <input
                  type="email"
                  name='email'
                  className="
                    p-2
                    mt-1
                    block
                    w-full
                    h-10
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    shadow-lg 
                    shadow-gray-300
                  "
                  placeholder="Your email"
                  onChange={onChange} 
                  value={email}
                  required
                />
              </label>
              <label className="block" htmlFor='password'>
                <strong className="text-gray-700">Password</strong>
                <input
                  type="password"
                  name='password'
                  className="
                    p-2
                    mt-1
                    block
                    w-full
                    h-10
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    shadow-lg 
                    shadow-gray-300
                  "
                  placeholder="password"
                  onChange={onChange} 
                  value={password}
                  required 
                  minLength={6}
                />
              </label>
              <label className="block" htmlFor='re_password'>
                <strong className="text-gray-700">Retype Password</strong>
                <input
                  type="password"
                  name='re_password'
                  className="
                    p-2
                    mt-1
                    block
                    w-full
                    h-10
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    shadow-lg 
                    shadow-gray-300
                  "
                  placeholder="password"
                  onChange={onChange} 
                  value={re_password}
                  required 
                  minLength={6}
                />
              </label>
            </div>
            {
              isLoading ? (
                <div className='items-center justify-center flex mt-5'>
                  <Oval color='#00bfff' width={50} height={50}/>
                </div>
              ) : (<button type='submit' className='w-full mt-6 h-12 hover:scale-105 duration-300'>Register</button>)
            }
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Register
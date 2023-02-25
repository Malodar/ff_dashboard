import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import { connect } from 'react-redux'

function Login() {
  const loading = false

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const {
    username,
    password,
  } = formData

  const onChange = (e: React.ChangeEvent) => (
    setFormData({...formData, [e.target.nodeName]: e.target.nodeValue})
  )

  const onSubmit = (e: React.FormEvent)=> {
    e.preventDefault();
    console.log('form', username, password)

    // login()
    // if (dispatch && dispatch != null && dispatch != 'undefined') {
    //   dispatch(login(username, password));
    // }

    // is the user authenicated?
    // Redirect to HomePage
  }

  return (
    <div className='justify-center p-2 bg-slate-300 w-full h-screen text-center'>
      <h1 className='text-center font-bold text-3xl'>Log Into Your Account</h1>
      <h5 className='text-center mt-1'>
        or <Link to='/register' className='text-red-500 underline'>register here</Link>
      </h5>
      <h5>Forgot you password? <Link to='/reset-password' className='text-red-500 underline'>Restore</Link> it!</h5>
      <div className=" flex justify-center mt-2">
        <form onSubmit={onSubmit}>
          <div className="mt-8">
            <div className="grid gap-6">
              <label className="block" htmlFor='username'>
                <strong className="text-gray-700">Username</strong>
                <input
                  type="text"
                  name='username'
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
                  placeholder="Your username"
                  onChange={onChange} 
                  value={username}
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
                  minLength={8}
                />
              </label>
            </div>
            {
              loading ? (
                <div className='items-center justify-center flex mt-5'>
                  <Oval color='#00bfff' width={50} height={50}/>
                </div>
              ) : (<button type='submit' className='w-full mt-6 h-12 hover:scale-105 duration-300'>Log in</button>)
            }
          </div>
        </form>
        
      </div>
    </div>
  )
}

// const mapStateToProps = state => ({
  // is authenticated?
// })
export default connect(null, {  })(Login)
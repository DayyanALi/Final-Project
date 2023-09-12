/** @format */

import React, { useEffect, useState } from 'react';

// Getting local storage data
const getlocalData = () => {
  const list = localStorage.getItem('Users-List');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function SignUp({ register, setLoginVerified }) {
  const [userLocalStore, setUserLocalStore] = useState(getlocalData);
  // console.log(userLocalStore);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (register.title === 'Sign Up') {
      // For Sign Up
      setUserLocalStore([...userLocalStore, user]);
      setUser({ username: '', email: '', password: '' });
    } // For Login
    else {
      let email_verified = userLocalStore.filter((curr) => {
        return curr.email === user.email && curr.password === user.password;
      });
      if (email_verified.length) {
        setLoginVerified(true);
      } else {
        alert('Wrong Email or Password');
      }
      setUser({ username: '', email: '', password: '' });
    }
  };
  useEffect(() => {
    localStorage.setItem('Users-List', JSON.stringify(userLocalStore));
  }, [userLocalStore]);

  return (
    <>
      <div className='container mt-5 float-end me-5'>
        <div className='row'>
          <div className='col'></div>
          <div className='col border border-secondary p-4'>
            <h4 className={`text-${register.color}`} key={register.title}>
              {register.title}
            </h4>
            <form onSubmit={handleSubmit}>
              {register.check ? (
                <div className='mb-3 text-white'>
                  <label htmlFor='username' className='form-label'>
                    Username
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    aria-describedby='emailHelp'
                    required
                    name='username'
                    value={user.username}
                    onChange={handleInput}
                    style={{backgroundColor:'#223344', color: 'white'}}
                  />
                </div>
              ) : (
                <div className=''></div>
              )}
              <div className='mb-3 text-white'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  required
                  name='email'
                  value={user.email}
                  onChange={handleInput}
                  style={{backgroundColor:'#223344', color: 'white'}}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleInputPassword1'
                  className='form-label text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  required
                  name='password'
                  value={user.password}
                  onChange={handleInput}
                  style={{backgroundColor:'#223344', color: 'white'}}
                />
              </div>
              <div className='mb-3 form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                  required
                />
                <label
                  className='form-check-label text-white'
                  htmlFor='exampleCheck1'
                >
                  Agree to terms and Conditions
                </label>
              </div>
              <button type='submit' className={`btn btn-${register.color}`}>
                Submit
              </button>
            </form>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

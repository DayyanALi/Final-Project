/** @format */

import React, { useEffect, useState } from 'react';
import './NavStyle.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar({ setRegister, loginVerified, setLoginVerified }) {
  const changeCheck = (type) => {
    // Used to change the Sign up / Login layout at Sign Up component
    if (type === 'signup') {
      setRegister({
        title: 'Sign Up',
        color: 'warning',
        check: true,
      });
    } else if (type === 'login') {
      setRegister({
        title: 'Login',
        color: 'primary',
        check: false,
      });
    }
  };
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  const date = new Date().getDate();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const LogOut = () => {
    setLoginVerified(false);
  }

  const month = new Date().getMonth();
  let monthName = months[month];
  return (
    <div>
      <div className='conatiner mt-5'></div>
      <nav className='navbar navbar-expand-lg bg-black p-0 fixed-top'>
        <div className='container-fluid d-flex justify-content-between'>
          {/* Left Side of Navbar */}
          <div className='left-nav p-0'>
            <Link className='navbar-brand text-white' to='/'>
              <i className='fa-solid fa-newspaper me-2'></i>
              <b className='bg-white text-danger fw5 p-1 px-2 me-2'>E</b>
              <b className='bg-white text-success fw5 p-1 me-2'>N</b>
              <b className='bg-white text-primary fw5 p-1'>N</b>
            </Link>
          </div>
          {/* Right Side of Navbar */}
          <div className='right-nav'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                {loginVerified ? (
                  <li className='nav-item'>
                    <Link
                      className='nav-link active'
                      aria-current='page'
                      to='/SignUp'
                    >
                      <button
                        className='btn btn-danger'
                        onClick={() => LogOut()}
                      >
                        LogOut
                      </button>
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className='nav-item'>
                      <Link
                        className='nav-link active'
                        aria-current='page'
                        to='/SignUp'
                      >
                        <button
                          className='btn btn-primary'
                          onClick={() => changeCheck('login')}
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        className='nav-link active'
                        aria-current='page'
                        to='/SignUp'
                      >
                        <button
                          type='button'
                          className='btn btn-warning'
                          onClick={() => changeCheck('signup')}
                        >
                          Sign Up
                        </button>
                      </Link>
                    </li>
                  </>
                )}

                <li className='d-flex align-items-center nav-item ms-2'>
                  <Link
                    className='nav-link active text-secondary'
                    aria-current='page'
                    to='/'
                  >
                    {day}, {date} {monthName}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

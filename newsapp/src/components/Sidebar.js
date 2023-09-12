/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Sidebar({ SideBarItems, setNewsCategories }) {
  const updateNewsCategories = (Name) => {
    if (Name === 'Home') {
      setNewsCategories([
        'Technology',
        'Sport',
        'Music',
        'Entertainment',
        'Education',
        'Video Game',
      ]);
    } else {
      setNewsCategories([Name]);
    }
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth >= 1050 ? (
        <div
          className='float-start position-fixed flex-row flex-shrink-0 bg-body-tertiary mt-2'
          style={{ backgroundColor: '#223344'}}
        >
          <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
            {SideBarItems.map((currElem) => {
              return (
                <>
                  <li className='nav-item m-0 p-0' key={currElem.Name}>
                    <Link
                      to={currElem.src}
                      className='nav-link py-3 rounded-0 m-0 p-0'
                      aria-current='page'
                      data-bs-toggle='tooltip'
                      data-bs-placement='top'
                      aria-label={`${currElem.Icon}`}
                      data-bs-original-title={`${currElem.Icon}`}
                      style={{ backgroundColor: '#223344' }}
                      onClick={() => {
                        updateNewsCategories(currElem.Name);
                      }}
                    >
                      <i
                        className={`fa-solid fa-${currElem.Icon} me-2 text-secondary`}
                      ></i>
                      <p
                        className='p-0 m-0'
                        style={{ fontSize: '12px', color: 'white' }}
                      >
                        {currElem.Name}
                      </p>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <div
            className='dropdown border-top'
            style={{ backgroundColor: '#223344' }}
          >
            <a
              href='#'
              className='d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <img
                src='https://github.com/mdo.png'
                alt='mdo'
                width='24'
                height='24'
                className='rounded-circle'
              />
            </a>
            <ul className='dropdown-menu text-small shadow'>
              <li>
                <a className='dropdown-item' href='#'>
                  New project...
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Settings
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Profile
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;

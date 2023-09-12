import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer({ SideBarItems }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth <= 1050 ? ( // Only render the footer if screen width is greater than or equal to 800px
        <footer className='footer mt-auto py-3 fixed-bottom' style={{ backgroundColor: 'black' }}>
          <ul className='nav nav-pills nav-flush flex-row mb-auto text-center justify-content-around'>
            {SideBarItems.map((currElem) => (
              <li className='nav-item m-0 p-0' key={currElem.Name}>
                <Link
                  to={currElem.src}
                  className='nav-link rounded-0 m-0 p-0'
                  aria-current='page'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  aria-label={`${currElem.Icon}`}
                  data-bs-original-title={`${currElem.Icon}`}
                  style={{ backgroundColor: 'black' }}
                >
                  <i className={`fa-solid fa-${currElem.Icon} me-2 text-secondary`}></i>
                  <p className='p-0 m-0' style={{ fontSize: '12px', color: 'white' }}>
                    {currElem.Name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      ) : null}
    </>
  );
}

export default Footer;

import Button from '@mui/material/Button';
import './topbar.scss';
import { useState, useEffect } from 'react';

function Topbar() {

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);


  return (
    <div className={`topbar ${top ? '' : 'topBarOnScroll'}`}>
      <div className="main">
        <div className="left">

          <img src="assets/logoLorem.png" alt="Logo" />

        </div>
        <div className="center">
          <p>Home</p>
          <p>What we do</p>
          <p>Get in touch</p>
        </div>
        <div className="right">
          <div className="buttonDiv">
          <button>Login</button>
          </div>
          {/* <Button variant='contained' color='error'>Get in touch</Button> */}
         
        </div>

      </div>


    </div>
  );
}

export default Topbar;
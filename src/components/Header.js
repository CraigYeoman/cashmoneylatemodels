import Header1 from "../images/header.jpg"
import Header2 from "../images/header2.jpg"
import Header3 from "../images/header3.jpg"
import Header4 from "../images/header4.jpg"
import Header5 from "../images/header5.jpg"
import { useState, useEffect } from 'react';


const Header = () => {

  let number = 0
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 768;

  if(isMobile) {
    return <div className="header w-100">
        
        <img src={Header1}></img>
  </div>
  }

    return (
      <div className="header w-100">
        
        <img src={Header2}></img>
        <img src={Header3}></img>
        <img src={Header1}></img>
        <img src={Header4}></img>
        <img src={Header5}></img>
      </div>
    );
  };
  
  export default Header;

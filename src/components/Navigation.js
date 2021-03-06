import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <div className='nav'>
          <Link className='nav-item' to="components/">Home</Link>
          <Link className='nav-item' to="components/About">About</Link>
          <Link className='nav-item' to="components/Contact">Contact</Link>
        </div>
        <h1>React Router Mini</h1>
        <div>
          <img className='img' src='data:image/png;base64,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' alt='React Router logo'/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

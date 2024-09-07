import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <header>
        <div className="centered" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <br></br><br></br>
          <h1 style={{ textAlign: 'center' }}>โรงพยาบาลสัตว์บุญคุ้ม</h1>
          <br></br><br></br>
      
        </div>
      </header>
    </div>
  );
};
export default Header;

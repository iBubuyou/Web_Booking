// First.js
import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';
import Services from '../bookQ/Services';
import './Carousel.css';
import BodyContent from './BodyContent';  // นำเข้า BodyContent
import Header from '../Header/Header';
import ServicePage from '../bookQ/ServicesPage';
const First = () => {
  return (
    <div>
    <Header />
        {/* เพิ่ม Tab bar ด้านล่าง */}
        <ul className="tab-bar">
          <li><Link to="/">home</Link></li>
          <li><Link to="/ServicePage">book</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>

      {/* เพิ่มเนื้อหาของ body ที่นี่ */}
      <div className="body-content">
        {/* ตัวอย่าง: */}
        <br></br><h2 style={{ textAlign: 'center' }} >ยินดีต้อนรับสู่โรงพยาบาลสัตว์บุญคุ้ม</h2><br></br>
        <BodyContent />
      </div>
    </div>
  );
};

export default First;

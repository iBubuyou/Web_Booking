import React from "react";
import Header from "../Header/Header";
import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Confirming = () => {
    return (
        <div>
            <Header />
            
            {/* เพิ่ม Tab bar ด้านล่าง */}
            <ul className="tab-bar">
                <li><Link to="/">home</Link></li>
                <li><Link to="/ServicePage">book</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
            <div className="card-container">
            {/* นำส่วน Contact Us ไปใส่ใน Card แล้วจัดให้ตรงกลาง */}
            <div className='myElement'>
    <div className="card">
    <section className="contact-section">
            <h2>We have received your information successfully</h2> <br></br>
            <p>Thank you</p> <br></br>
            </section>
<br></br><br></br>
    </div>
    </div>
</div>
</div>
)
};

export default Confirming;
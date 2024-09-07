import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../../App.css";
import { useState } from "react";

const Contacter = () => {
    return (
        <div>
            <Header />
            
            {/* เพิ่ม Tab bar ด้านล่าง */}
            <ul className="tab-bar">
                <li><Link to="/">home</Link></li>
                <li><Link to="/ServicePage">book</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>

            {/* นำส่วน Contact Us ไปใส่ใน Card แล้วจัดให้ตรงกลาง */}
            <div className='myElement'>
    <div className="card">
        <section className="contact-section">
            <h2>Contact Us</h2> <br></br>
            <p>Have questions? We'd love to hear from you.</p> <br></br>
            
            {/* ส่วนแบบฟอร์มติดต่อ */}
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required />
                <br /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />
                <br /><br />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <br /><br />

                <button type="submit">Send Message</button>
            </form>
        </section>
    </div>
<br></br><br></br>
    {/* Create another card here */}
    <div className="card">
        <section className="contact-section">
            <h2>Contact Info</h2> <br></br> <br></br>
            <p>บุญคุ้มสัตวแพทย์ BoonKhum Veterinary Clinic.</p><br></br>
            <p>รักษาสัตว์ ผ่าตัด ทำหมัน ฉีดวัคซีน ขูดหินปูน เอ็กซเรย์ดิจิทัล</p> <br></br>
            <p>49 Chomthong Rd. Chomthong District , Bangkok, Thailand, Bangkok</p> <br></br>
            <p>Call : 063 532 3936 Email : PrasaiVet1962@gmail.com</p>
        </section>
    </div>
</div>
</div>
    )
};

export default Contacter;

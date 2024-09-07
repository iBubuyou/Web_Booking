// Services.js
import React, { useState } from 'react';
import './eslintrc.js';
import { Link } from 'react-router-dom';

export default function ServicesForm(props) {


  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Get values from state
    const formData = {
      fname: fname,
      lname: lname,
      tel: tel,
      animal: animal,
      ptype: ptype,
      pname: pname,
      petage: petage,
      Service: Service,
      date: date,
      time: document.getElementById("time").value,

    };
  
    fetch("http://localhost:3001/api/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        if (result.status === "ok") {
          window.location.href = "/confirm";
        }
      })
      .catch((error) => console.error(error));
  };

const [fname, setFName] = useState("");
const [lname, setLName] = useState("");  
const [tel, setTel] = useState("");
const [animal, setAnimal] = useState("");
const [ptype, setPtype] = useState("");
const [pname, setPname] = useState("");
const [petage, setPetage] = useState("");
const [Service, setService] = useState("");
const [date, setDate] = useState("");
const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <div className='service-form'>
  <h2 className='header'>จองคิว</h2>
  <ul className="tab-bar" style={{ marginBottom: '20px' }}>
    <li><Link to="/">home</Link></li>
    <li><Link to="/ServicePage">book</Link></li>
    <li><Link to="/contact">contact</Link></li>
  </ul>
  <div className='myElement'>
    {/* Add a form with 9 text input fields */}
    {/* Modified input fields with required asterisk */}
    
    <form className='text-form'>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
          <label htmlFor="name" style={{ marginBottom: '5px', color: 'red' }}>First Name</label>
          <input
            type="text"
            id="name"
            placeholder="กรุณากรอกชื่อจริง"
            required
            style={{ padding: '10px', margin: '5px' }}
            value={fname}
            onChange={(e) => setFName(e.target.value)}/>
        </div>

          {/* Repeat the structure for other input fields with required asterisk */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
              <label htmlFor="lastname" style={{ marginBottom: '5px', color: 'red' }}>Last Name</label>
              <input
                type="text"
                id="lastname"
                placeholder="กรุณากรอกนามสกุล"
                required
                style={{ padding: '10px', margin: '5px' }}
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <label htmlFor="phone" style={{ marginBottom: '5px', color: 'red' }}>Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="กรุณากรอกเบอร์โทร"
              required
              style={{ padding: '10px', margin: '5px' }}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <label htmlFor="pettype" style={{ marginBottom: '5px', color: 'red' }}>Breed</label>
            <input
              type="text"
              id="pettype"
              placeholder="กรุณากรอกประเภทสัตว์เลี้ยง"
              required
              style={{ padding: '10px', margin: '5px' }}
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <label htmlFor="type" style={{ marginBottom: '5px', color: 'red' }}>Pet Type</label>
            <input
              type="text"
              id="type"
              placeholder="กรุณากรอกสายพันธุ์"
              required
              style={{ padding: '10px', margin: '5px' }}
              value={ptype}
              onChange={(e) => setPtype(e.target.value)}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <label htmlFor="petname" style={{ marginBottom: '5px', color: 'red' }}>Name of Pet</label>
            <input
              type="text"
              id="petname"
              placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"
              required
              style={{ padding: '10px', margin: '5px' }}
              value={pname}
              onChange={(e) => setPname(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <label htmlFor="age" style={{ marginBottom: '5px', color: 'red' }}>Age of Pet</label>
            <input
              type="text"
              id="age"
              placeholder="กรุณากรอกอายุสัตว์เลี้ยง"
              required
              style={{ padding: '10px', margin: '5px' }}
              value={petage}
              onChange={(e) => setPetage(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
                      <label htmlFor="service" style={{ marginBottom: '5px', color: 'red' }}>Service</label>
                      <select
                        id="service"
                        style={{ padding: '10px', margin: '5px' }}
                        value={Service}
                        onChange={(e) => setService(e.target.value)}
                      >
                      
                        <option>ตรวจรักษาอาการทั่วไป</option>
                        <option>ฉีดวัคซีน</option>
                        <option>ทำหมัน</option>
                        <option>อัลตร้าซาวด์</option>
                        <option>อื่น ๆ</option>
                      </select>

                      
                    </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <label htmlFor="date" style={{ marginBottom: '5px', color: 'red' }}>Date</label>
            <input
              type="date"
              id="date"
              placeholder="กรุณากรอกวันที่"
              required
              style={{ padding: '10px', margin: '5px' }}
              value={date}
              onChange={ handleDateChange }
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <label htmlFor="time" style={{ marginBottom: '5px', color: 'red' }}>Time</label>
            <select id="time"  required >
              {finalTime}
            </select>
          </div>

          

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
            <button type="button" onClick={handleSubmit} style={{ padding: '10px', width: '150px' }}>
              ยืนยัน
            </button>
          </div>
          </form>
        </div>
    </div>
  );



}
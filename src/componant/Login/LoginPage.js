import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate()
  // const MySwal = withReactContent(Swal)
  const [inputs, setInputs] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // เพิ่มสถานะ isLoggedIn

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": inputs.username,
      "password": inputs.password,
      "expiresIn": 60000
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result); // แสดงผลลัพธ์จากการเรียก API ในคอนโซล
        
        // เพิ่มการตรวจสอบผลลัพธ์และแสดง SweetAlert2 ตามเงื่อนไข
        if (result.status === 'ok') {
          Swal.fire({
            icon: "success",
            title: "Login Success",
          }).then((value) => {
            localStorage.setItem('token', result.accessToken)
            setIsLoggedIn(true); // ตั้งค่าเป็น true เมื่อล็อกอินสำเร็จ
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login Fail",
          });
        }
      })
      .catch(error => console.log('error', error));

    console.log(inputs);
  }

  // ตรวจสอบ isLoggedIn เพื่อเปลี่ยนเส้นทาง
  if (isLoggedIn) {
    navigate('/First');
    return null; // หยุดการทำงานของ component นี้หลังจากเปลี่ยนเส้นทาง
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
      </label>
      <label>Enter your password:
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
      </label>
      <input type="submit" className="login-form-button" />
    </form>
  );
}
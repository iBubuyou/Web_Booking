const cors = require('cors'); // เพิ่มไลบรารี cors
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3001;

// เชื่อมต่อกับฐานข้อมูล MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678', // รหัสผ่านของคุณ
  database: 'pjsk'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware
app.use(express.json());

app.use(cors());

app.post('/api/reserve', (req, res) => {
  // รับข้อมูลจากฟอร์มการจอง
  const { fname, lname, tel, animal, ptype, pname, petage, Service, date, time } = req.body;

  // หาค่า reservationid ที่มากที่สุดในฐานข้อมูล
  connection.query('SELECT MAX(reserveID) AS maxId FROM book', (err, results) => {
    if (err) {
      console.error('Error retrieving max reserveID from MySQL: ', err);
      res.status(500).json({ status: 'error', message: 'Failed to submit book' });
      return;
    }

    // หาค่า reservationid ที่มากที่สุดและเพิ่มด้วย 1 เพื่อให้เป็นค่าใหม่
    const newreserveID = results[0].maxId ? results[0].maxId + 1 : 1;

    // บันทึกข้อมูลลงในฐานข้อมูล MySQL พร้อมกับการกำหนดค่า reservationid
    const query = `INSERT INTO book (reserveID, fname, lname, tel, animal, ptype, pname, petage, service, date, time) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
connection.query(query, [newreserveID, fname, lname, tel, animal, ptype, pname, petage, Service, date, time], (err, results) => {
      if (err) {
        console.error('Error inserting data into MySQL: ', err);
        res.status(500).json({ status: 'error', message: 'Failed to submit book' });
        return;
      }
      console.log('book submitted successfully');
      res.json({ status: 'ok', message: `book submitted successfully.` });
    });
  });
});

// เพิ่มเส้นทางสำหรับ GET request เพื่อรับข้อมูลการจองทั้งหมด

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
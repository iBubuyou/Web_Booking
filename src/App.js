// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // เปลี่ยนจาก Switch เป็น Routes
import First from './componant/Main/First.js';
// import Services from './bookQ/Services.js';
// import Update from './upQ/update.js';
// import Login from './Login/LoginPage.js';
import Routing from './componant/Routing.js';

const App = () => {
  return (
    <>
    <Routing/>
    </>
  );
};

export default App;

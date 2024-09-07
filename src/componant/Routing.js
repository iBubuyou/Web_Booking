import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './Main/First.js';
import LogingIn from './Login/Login.js';
import ServiceIn from './bookQ/ServicesPage.js';
import Contacter from './contact/contact.js';
import Confirming from './bookQ/confirm.js';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/First" element={<First />} />
        <Route path="/" element={<LogingIn />} />
        <Route path="/ServicePage" element={<ServiceIn />} />
        <Route path="/contact" element={<Contacter />} />
        <Route path="/confirm" element={<Confirming />} />
      </Routes>
    </Router>
  );
}

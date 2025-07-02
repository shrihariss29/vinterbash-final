import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Navb from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import Leaderboard from './Components/Leaderboard';
import Contact from './Components/Contacts';
import PasswordForm from './Components/Imageform';
import Registerform from './Components/registerform';
import ScoreCard from './Components/Scorecard';
import Schedule from './Components/Schedule';
import SchoolPage from './Components/SchoolPage';
import Osagallery from './Components/osagallery';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navb />} >
        <Route index element={<Home />} />
        <Route path="Events" element={<Events />} />
        <Route path='Contact' element={<Contact/>}/>
        <Route path='form' element={<PasswordForm/>}/>
        <Route path='registerform' element={<Registerform/>}/>
        <Route path='Schedule' element={<Schedule/>}/>
        <Route path="/school" element={<SchoolPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

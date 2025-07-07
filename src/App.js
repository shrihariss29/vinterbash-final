import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Stateprovider } from './StateProvider';
import reducer, { initialState } from './Reducer';
import './App.css';

// Components
import Navb from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import Contact from './Components/Contacts';
import Registerform from './Components/registerform';
import Schedule from './Components/Schedule';
import SignIn from './Components/SignIn';
import Footer from './Components/Footer';

// Admin / Event Routes
import Layout from './templates/Layout';
import Participants from './Components/Participants';
import Triquizzard from './Events/Triquizzard';
import FIFA from './Events/FIFA';
import Dashboard from './Components/Dashboard';
import Groupmusic from './Events/Groupmusic';
import Improv from './Events/Improv';
import Cubing from './Events/Cubing';
import DigitalPosterDesign from './Events/DigitalPosterDesign';
import TamilLits from './Events/TamilLits';
import TitleEvent from './Events/TitleEvent';
import ClassicalDance from './Events/ClassicalDance';
import EnglishLits from './Events/EnglishLits';
import TurfCricket from './Events/TurfCricket';
import TurfFootball from './Events/TurfFootball';
import WesternDance from './Events/WesternDance';
import GroupDrama from './Events/GroupDrama';
import GroupIntrument from './Events/GroupInstrument';
import Art from './Events/Art';
import Coding from './Events/Coding';

function AppRouter() {
  const location = useLocation();
  const footerRoutes = ['/', '/events', '/Contact', '/registerform', '/Schedule'];
  const showFooter = footerRoutes.includes(location.pathname);

  if (location.pathname === '/signIn') {
    return <SignIn />;
  }

  return (
    <div className="page-content">
      <Routes>
        {/* Public Pages under Navbar */}
        <Route path="/" element={<Navb />}>
          <Route index element={<Home />} />
          <Route path="Events" element={<Events />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="registerform" element={<Registerform />} />
          <Route path="Schedule" element={<Schedule />} />
          <Route path="signIn" element={<SignIn />} />
        </Route>

        {/* Admin/Event Dashboard Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classicaldance" element={<ClassicalDance />} />
          <Route path="/triquizzard" element={<Triquizzard />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/fifa" element={<FIFA />} />
          <Route path="/groupmusic" element={<Groupmusic />} />
          <Route path="/improv" element={<Improv />} />
          <Route path="/cube" element={<Cubing />} />
          <Route path="/poster" element={<DigitalPosterDesign />} />
          <Route path="/tamillits" element={<TamilLits />} />
          <Route path="/title" element={<TitleEvent />} />
          <Route path="/elits" element={<EnglishLits />} />
          <Route path="/cricket" element={<TurfCricket />} />
          <Route path="/football" element={<TurfFootball />} />
          <Route path="/westerndance" element={<WesternDance />} />
          <Route path="/groupdrama" element={<GroupDrama />} />
          <Route path="/groupinst" element={<GroupIntrument />} />
          <Route path="/art" element={<Art />} />
          <Route path="/code" element={<Coding />} />
        </Route>
      </Routes>

      {showFooter && <Footer />}
    </div>
  );
}


export default function App() {
  return (
    <Stateprovider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Stateprovider>
  );
}

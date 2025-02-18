import React from 'react';
import { Route, Routes } from 'react-router';
import {useState} from 'react';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, Welcome, Dashboard } from './pages';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [isLight, setIsLight] = useState(JSON.parse(localStorage.getItem('isLightMode')));
  const [isActive, setIsActive] = useState('dashboard');


  return (
    <main className={`${isLight ? 'light' : '' } relative text-whit sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row`}>
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar theme={[isLight, setIsLight]} userCampaigns={userCampaigns}  setSearchQuery={setSearchQuery} activeState={[isActive, setIsActive]} />

        <Routes>
          <Route path='/' element={<Dashboard theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />} />
          <Route path="/home" element={<Home setUserCampaigns={setUserCampaigns} searchQuery={searchQuery} />} />
          <Route path="/dashboard" element={<Dashboard theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
         
        </Routes>
      </div>
    </main>
  )
}



export default App
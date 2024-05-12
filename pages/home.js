"use client"

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '@/contexts/AuthContext';

import ForYou from '@/components/ForYou';
import TryThese from '@/components/TryThese';  
import Featured from '@/components/Featured';  
import Categories from '@/components/Categories';  
import TrySaying from '@/components/TrySaying';
import SideBar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar'; 

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setToggleButton(window.innerWidth > 1023 ? false : true);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    if (!user) {
      router.push('/login');
      return null;
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const hideSideBar = () => {
    setToggleButton(prev => !prev);
  };

  return (
    <div className="flex font-Onest box-border">
        <div className="h-screen bg-gray-50">
            <SideBar toggleButton={toggleButton} hideSideBar={hideSideBar} />
        </div>
        <div className="pb-16 bg-gray-100 overflow-auto h-screen">
            <SearchBar />
            <ForYou /> 
            <TryThese />
            <Featured />
            <Categories />
            <TrySaying />
        <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default HomePage

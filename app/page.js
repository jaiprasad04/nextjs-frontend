'use client'

import { useState } from 'react'

import ForYou from '@/components/ForYou'
import TryThese from '@/components/TryThese'
import Featured from '@/components/Featured'
import Categories from '@/components/Categories'
import TrySaying from '@/components/TrySaying'
import SideBar from '@/components/SideBar'
import SearchAndToggle from '@/components/SearchAndToggle'

import './index.css'

const Home = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const hideSideBar = () => {
    setToggleButton(prev => !prev);
  };

  return (
    <div className="character-ai-app">
      <div className="side-bar-container2">
        <SideBar toggleButton={toggleButton} hideSideBar={hideSideBar} />
      </div>
      <div className="app-container">
        <SearchAndToggle />
        <ForYou /> 
        <TryThese />
        <Featured />
        <Categories />
        <TrySaying />
      </div>
    </div>
    
  )
}

export default Home
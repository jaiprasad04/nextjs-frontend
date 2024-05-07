'use client'

import { useState } from 'react'

import ForYou from '@/components/ForYou'
import TryThese from '@/components/TryThese'
import Featured from '@/components/Featured'
import Categories from '@/components/Categories'
import TrySaying from '@/components/TrySaying'
import SideBar from '@/components/Sidebar'
import SearchBar from '@/components/SearchBar'

const Home = () => {
  const [toggleButton, setToggleButton] = useState(false);

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
      </div>
    </div>
  )
}

export default Home
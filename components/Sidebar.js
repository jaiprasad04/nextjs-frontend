import { useState } from 'react';

import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { RiCompassFill, RiVoiceprintFill } from 'react-icons/ri';
import { BiSolidUserPlus } from 'react-icons/bi';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import LoginPage from './LoginPage';

const tryThese = [
    {with: "HyperGlot",
     image: "https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0",
    },
    {with: "Trip Planner",
     image: "https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&anim=0",
    },
    {with: "Interviewer",
     image: "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0",
    },
    {with: "Creative Helper",
     image: "https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0",
    },
    {with: "Brainstormer",
     image: "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0",
    },
]

const SideBar = ({ hideSideBar, toggleButton }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
 

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const openCreateModal = () => {
    setCreateModalIsOpen(true);
  }

  const closeCreateModal = () => {
    setCreateModalIsOpen(false);
  }

  const hide = toggleButton ? 'w-0 overflow-hidden' : 'w-64'

  return (
    <div className={`h-full border border-gray-300 flex justify-center transition-all duration-300 ${hide}`}>
      <div className="w-full max-w-[90%] flex flex-col my-6 mx-3.5">
        <div className="w-full flex justify-between">
          <h1 className="text-gray-900 text-lg font-bold font-poppins">character.ai</h1>
          <button type="button" className="border-none bg-transparent rounded-full h-6 w-6 p-1 cursor-pointer hover:bg-gray-300" onClick={hideSideBar}>
            <MdKeyboardDoubleArrowLeft size={16} />
          </button>
          {toggleButton && <button className="absolute left-2 bg-transparent border-none cursor-pointer rounded-full w-7.5 h-7.5 p-1 hover:bg-gray-300" onClick={hideSideBar}><HiOutlineMenuAlt2 size={24} /></button>}
        </div>
        <div className="flex items-end group">
          <div className="bg-gray-200 flex items-center justify-between rounded-3xl py-2.5 px-4 w-28 mt-3 cursor-pointer hover:bg-gray-300">
            <FaPlus size={24} color="#5e5f67" />
            <p className="ml-0.5 text-sm">Create</p>
          </div>
          <div className="bg-gray-200 shadow-md p-1 rounded-xl absolute z-10 left-36 top-16 invisible transition-all duration-500 group-hover:visible">
            <div className="flex items-center py-2.5 px-3 rounded-lg cursor-pointer hover:bg-gray-300">
              <BiSolidUserPlus className="text-gray-500 text-lg border-2 border-gray-300 rounded p-0.5" />
              <p className="text-gray-700 text-base ml-3.5 mr-5">Character</p>
            </div>
            <div className="flex items-center py-2.5 px-3 rounded-lg cursor-pointer hover:bg-gray-300">
              <RiVoiceprintFill color="#adadb3" size={18} />
              <p className="text-gray-700 text-base ml-3.5 mr-5">Voice</p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 py-2.5 px-3.5 w-full mt-3.5 rounded-lg cursor-pointer hover:bg-gray-300">
          <RiCompassFill size={24} />
          <p className="text-sm ml-2.5">Discover</p>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold mt-6 mb-3">Chats</p>
          <p className="text-xs text-gray-700 mb-4">Today</p>
          <div>
            <ul className="list-none pl-0 flex flex-col overflow-auto gap-3">
              {tryThese.map((each, index) => (
                <li key={index} className="flex items-center p-1.5 rounded-md w-full cursor-pointer hover:bg-gray-300">
                  <img src={each.image} alt="" className="w-8 h-8 rounded-full mr-2" />
                  <p className="text-sm">{each.with}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <button type="button" onClick={openModal} className="w-full text-sm border border-gray-400 rounded-3xl p-2 mb-3 hover:bg-gray-200">Sign in</button>
          <button type="button" onClick={openCreateModal} className="w-full text-sm bg-black text-white border rounded-3xl p-2 hover:bg-gray-800">Sign up</button>
        </div>
        <LoginPage modalIsOpen={modalIsOpen} createModalIsOpen={createModalIsOpen} closeModal={closeModal} closeCreateModal={closeCreateModal} />
      </div>
    </div>
  );
};

export default SideBar;

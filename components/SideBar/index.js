import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { RiCompassFill, RiVoiceprintFill } from 'react-icons/ri';
import { BiSolidUserPlus } from 'react-icons/bi';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import './index.css';

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
  const hide = toggleButton && 'side-bar-hide-container'

  return (
    <div className={`side-bar-container ${hide}`}>
      <div className="side-bar-responsive">
        <div className="side-bar-toggle">
          <h1 className="character-ai-head">character.ai</h1>
          <button type="button" className="double-arrow-button" onClick={hideSideBar}>
            <MdKeyboardDoubleArrowLeft size={16} />
          </button>
          {toggleButton && <button className="open-sidebar-button" onClick={hideSideBar}><HiOutlineMenuAlt2 size={22} /></button>}
        </div>
        <div className="create-button-host">
          <div className="create-button-container">
            <FaPlus size={24} color="#5e5f67" />
            <p className="create-button">Create</p>
          </div>
          <div className="char-voice">
            <div className="char-voice-container">
              <BiSolidUserPlus className="user-icon" />
              <p className="char-voice-para">Character</p>
            </div>
            <div className="char-voice-container">
              <RiVoiceprintFill color="#adadb3" size={18} />
              <p className="char-voice-para">Voice</p>
            </div>
          </div>
        </div>
        <div className="discover-container">
          <RiCompassFill size={24} />
          <p className="discover">Discover</p>
        </div>
        <div>
          <p className="sidebar-chats">Chats</p>
          <p className="sidebar-today">Today</p>
          <div>
            <ul className="sidebar-list">
              {tryThese.map((each, index) => (
                <li key={index} className="sidebar-list-item">
                  <img src={each.image} alt="" className="sidebar-list-img" />
                  <p className="sidebar-list-with">{each.with}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

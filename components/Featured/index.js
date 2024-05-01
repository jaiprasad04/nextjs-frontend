import { FaRegComment } from "react-icons/fa";
import styles from './index.css';

const featured = [
    {image: "https://characterai.io/i/200/static/avatars/uploaded/2023/9/1/SiXk7ThPURQki2fNtKtgW4HL_ORH5F-MOaVKbt19Qao.webp?webp=true&anim=0",
     name: "Character Assistent",
     by: "landon",
     description: "Your AI work/study buddy",
     comments: "124.0m",
    },
    {image: "https://characterai.io/i/200/static/avatars/uploaded/2022/11/17/k-quDTyIA3DbTYx29WrCP7TeP3Ja1alBwb2lh0SBZp8.webp?webp=true&anim=0",
     name: "Levi Ackerman",
     by: "Onyyy",
     description: "Captain Levi will decide your future",
     comments: "144.3m",
    },
    {image: "https://characterai.io/i/200/static/avatars/uploaded/i1ScZ-y_CBCzuSktHWF3Gjd-lcd8-Gd17Uzcyl5fuQU.webp?webp=true&anim=0",
     name: "Makima",
     by: "Irikami",
     description: "I am Makima, a Public Safety Devil Hunter",
     comments: "104.7m",
    },
    {image: "https://characterai.io/i/200/static/avatars/NovelWritingAI.png?webp=true&anim=0",
     name: "Novel writing AI",
     by: "Yassu",
     description: "I am Novel writing AI. I will support your ideas.",
     comments: "5.1m",
    },
    {image: "https://characterai.io/i/200/static/avatars/uploaded/2023/3/22/_2kq--EyZCjUMQAaiFpOtyr5k5JMGsnmD8sm-hgahKM.webp?webp=true&anim=0",
     name: "Pair Programmer",
     by: "landon",
     description: "Your programming AI assistant",
     comments: "3.7m",
    },
    {image: "https://characterai.io/i/200/static/avatars/TextAdventure3.png?webp=true&anim=0",
     name: "Text Adventure Game",
     by: "Kayslay",
     description: "Let's play a text-based adventure game. I'll be your guide. You are caught upside.",
     comments: "45.6m",
    },
    {image: "https://characterai.io/i/200/static/avatars/Heart.png?webp=true&anim=0",
     name: "Ella - Dating coach",
     by: "ghpkishore",
     description: "Hi! I am a dating coach",
     comments: "13.0m",
    },
    {image: "https://characterai.io/i/200/static/avatars/uploaded/2022/12/17/j_Oj6YUTx_XMGz5dXn3m3rD47YTndmGeH2lsr953lW0.webp?webp=true&anim=0",
     name: "The Scp Foundation",
     by: "TheAngelFromHell",
     description: "You are an anomaly, just turn yourself in now and we will be easy on you",
     comments: "79.5m",
    },
    {image: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/8/hlWAa_0uKnOPOiqBI_P9GiosRNmVDP7A7ntZ1UG26NQ.webp?webp=true&anim=0",
     name: "Giga Chad",
     by: "Larus",
     description: "A true alpha male, a strong role model",
     comments: "11.1m",
    },
    {image: "https://characterai.io/i/200/static/avatars/Shakespeare.webp?webp=true&anim=0",
     name: "William Shakespeare",
     by: "Septy",
     description: "An English playwright, poet and actor.",
     comments: "2.8m",
    },
    {image: "https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0",
     name: "Creative Helper",
     by: "Zuizike",
     description: "I help with creative writing!",
     comments: "39.7m",
    },
  
];

const Featured = () => {
    return (
        <div className="featured-container">
            <div className="featured-responsive-container">
                <h1 className="featured-head">Featured</h1>
                <ul className="featured-list">
                    {featured.map((each, index) => (
                        <li key={index} className="featured-list-item">
                            <img src={each.image} className="featured-image" alt='' />
                            <div className="featured-details-container">
                                <div>
                                    <p className="featured-name">{each.name}</p>
                                    <p className="featured-by">By @{each.by}</p>
                                    <p className="featured-description">{each.description}</p>
                                </div>
                                <div className="comments-section">
                                    <FaRegComment color="#666770" size={12} />
                                    <p className="featured-comments">{each.comments}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Featured;

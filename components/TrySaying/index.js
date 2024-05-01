import { GoDotFill } from 'react-icons/go'

import './index.css'

const trySaying = [
    {"image": "https://characterai.io/i/80/static/avatars/WhoWouldWin2.png?webp=true&anim=0",
     "name": "WhoWouldWin",
     "by": "greg",
     "chats": "25.5m",
     "likes": "6,945",
     "questions1": "Batman vs. Superman", 
     "questions2": "Knight vs. Samurai",
     "questions3": "Lebron James vs. Michael Jordan"
    },
    {"image": "https://characterai.io/i/80/static/avatars/uploaded/2022/12/2/0cXVHLszZQ8idr8qGkhXB4-1PzA_qbAFmVl2V7v9NZc.webp?webp=true&anim=0",
     "name": "Elon Musk",
     "by": "elonwhisperer",
     "chats": "34.9m",
     "likes": "3,315",
     "questions1": "Why did you buy twitter", 
     "questions2": "What do you think about Jeff Bezos'Blue Origin?",
     "questions3": "if you could time travel,when/where would you go?"
    },
    {"image": "https://characterai.io/i/80/static/avatars/ButterflyEffect.png?webp=true&anim=0",
     "name": "Alternate Timeline",
     "by": "irwan",
     "chats": "48.0m",
     "likes": "4,579",
     "questions1": "What if I invented a portal gun?", 
     "questions2": "Access to my own personal time machine ",
     "questions3": "Make me the negotiator for the first alien encounter"
    },
    {"image": "https://characterai.io/i/80/static/avatars/uploaded/2023/2/3/CcwSs9WLY9fmHnGsRkNDR-5Wt_5hD-U1K2dFcXvv8lM.webp?webp=true&anim=0",
     "name": "Debate Champion",
     "by": "AdeptusMechanicus",
     "chats": "10.3m",
     "likes": "3,522",
     "questions1": "Star Wars is overrated", 
     "questions2": "Pepsi is better than Coca-Cola",
     "questions3": "Cats are better than dogs"
    },
    {"image": "https://characterai.io/i/80/static/avatars/uploaded/2023/9/1/SiXk7ThPURQki2fNtKtgW4HL_ORH5F-MOaVKbt19Qao.webp?webp=true&anim=0",
     "name": "Character Assistant",
     "by": "landon",
     "chats": "124.5m",
     "likes": "60.8k",
     "questions1": "What type of fish is Dory from Finding Nemo?", 
     "questions2": "Create an ad campaign for a new video game",
     "questions3": "Decide between the Macbook Air and Macbook Pro"
    },
    {"image": "https://characterai.io/i/80/static/avatars/AreYouFeelingOk.png?webp=true&anim=0",
     "name": "Are-you-feeling-okay",
     "by": "summeriscoming",
     "chats": "24.1m",
     "likes": "10.1k",
     "questions1": "I had a hard time at work today", 
     "questions2": "How can I be more successful in my profession",
     "questions3": "What is a good way to make a big change in life?"
    }
]

const TrySaying = () => {
  return (
    <div className="try-saying-container">
      <div className="try-saying-responsive-container">
        <h1 className="try-saying-head">Try saying</h1>
        <ul className="try-saying-list">
          {trySaying.map((each, index) => (
            <li key={index} className="try-saying-list-item">
              <div className="try-saying-list-container">
                <div className="try-saying-img">
                  <img
                    src={each.image}
                    alt={`${each.name} image`}
                    className="try-saying-img"
                  />
                </div>
                <div>
                  <p className="try-saying-name">{each.name}</p>
                  <div className="try-saying-names-container">
                    <p className="try-saying-by">@{each.by}</p>
                    <GoDotFill size={6} color="#28292d" />
                    <p className="try-saying-chats">{each.chats} chats</p>
                    <GoDotFill size={6} color="#28292d" />
                    <p className="try-saying-likes">{each.likes} likes</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="try-saying-questions">{each.questions1}</p>
                <p className="try-saying-questions">{each.questions2}</p>
                <p className="try-saying-questions">{each.questions3}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrySaying;

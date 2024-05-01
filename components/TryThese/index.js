import './index.css';

const tryThese = [
    { type: "Practice a new language",
      with: "HyperGlot",
      image: "https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0",
    },
    { type: "Plan a trip",
      with: "Trip Planner",
      image: "https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&anim=0",
    },
    { type: "Practice interviewing",
      with: "Interviewer",
      image: "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0",
    },
    { type: "Write a story",
      with: "Creative Helper",
      image: "https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0",
    },
    { type: "Brainstorm ideas",
      with: "Brainstormer",
      image: "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0",
    },
    { type: "Play a game",
      with: "Text Adventure Game",
      image: "https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0",
    },
    { type: "Get book recommendations",
      with: "Librarian Linda",
      image: "https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0",
    },
    { type: "Help me make a decision",
      with: "DecisionHelper",
      image: "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/D1Dar3krrm79DrKNlUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0",
    },
];

const TryThese = () => {
    return (
        <div className="try-these-container">
            <div className="try-these-responsive-container">
                <h1 className="try-these-head">Try these</h1>
                <ul className="try-these-list">
                    {tryThese.map((each, index) => (
                        <li key={index} className="try-these-list-item">
                            <img src={each.image} className="try-these-image" alt='' />
                            <div className="try-these-names">
                                <p className="try-these-type">{each.type}</p>
                                <p className="try-these-with">with {each.with}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TryThese;

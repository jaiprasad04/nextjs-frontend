// import './index.css';

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
        <div className="flex justify-center">
            <div className="w-full max-w-[90%]">
                <h1 className="text-gray-900 text-base font-semibold mt-6 mb-4">Try these</h1>
                <ul className="flex flex-col h-40 flex-wrap overflow-auto gap-2 list-none">
                    {tryThese.map((each, index) => (
                        <li key={index} className="bg-gray-200 flex items-center w-72 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300">
                            <img src={each.image} className="rounded-full w-12 h-13" alt='' />
                            <div className="ml-2.5">
                                <p className="text-sm font-medium text-gray-700">{each.type}</p>
                                <p className="text-xs text-gray-600">with {each.with}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TryThese;

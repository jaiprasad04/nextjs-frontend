import { useState, useEffect } from 'react';

import CategoryItems from './CategoryItems';
import LoadingFiles from './LoadingFiles';

import { FaRegComment } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

const tabsList = [
    { tabId: 'HELPERS', displayText: 'Helpers' },
    { tabId: 'ANIMEGAMECHARACTERS', displayText: 'Anime Game Characters' },
    { tabId: 'GAMES', displayText: 'Games' },
    { tabId: 'ANIME', displayText: 'Anime' },
    { tabId: 'GAMECHARACTERS', displayText: 'Game Characters' },
    { tabId: 'COMEDY', displayText: 'Comedy' },
    { tabId: 'VTUBER', displayText: 'VTuber' },
    { tabId: 'BOOKS', displayText: 'Books' },
    { tabId: 'IMAGEGENERATING', displayText: 'Image Generating' },
    { tabId: 'DISCUSSION', displayText: 'Discussion' },
    { tabId: 'LANGUAGELEARNING', displayText: 'Language Learning' },
    { tabId: 'HISTORY', displayText: 'History' },
    { tabId: 'RELIGION', displayText: 'Religion' },
    { tabId: 'ANIMALS', displayText: 'Animals' },
    { tabId: 'PHILOSOPHY', displayText: 'Philosophy' },
    { tabId: 'POLITICS', displayText: 'Politics' },
];

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
};

const Categories = () => {
    const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
    const [charactersList, setCharactersList] = useState([]);
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);

    useEffect(() => {
        const getCharactersDetails = async () => {
            const apiUrl = `https://ap-south-1.aws.data.mongodb-api.com/app/reactjs_quizapp-tjtlm/endpoint/getdata?category=${activeTabId}`;
            const options = {
                method: 'GET',
            };

            const response5 = await fetch(apiUrl, options);

            if (response5.ok) {
                const data5 = await response5.json();
                // console.log(data)
                setCharactersList(data5);
                setApiStatus(apiStatusConstants.success);
            }
            
        
        };

        getCharactersDetails();

    }, [activeTabId]);

    const clickTabItem = (tabId) => {
        setActiveTabId(tabId);
    };

    return (
        <div className="flex flex-col items-center">
            <ul className="w-full max-w-[90%] flex items-center whitespace-nowrap gap-2 mt-8 mb-3 overflow-auto">
                {tabsList.map((each) => (
                    <CategoryItems
                        key={each.tabId}
                        clickTabItem={clickTabItem}
                        isActive={activeTabId === each.tabId}
                        data={each}
                    />
                ))}
            </ul>
            {apiStatus === apiStatusConstants.inProgress ? (
                <div className="w-full max-w-[90%]">
                    <LoadingFiles />
                </div>
            ) : (
                <ul className="w-full max-w-[90%] flex flex-nowrap items-center overflow-auto gap-2 pl-0">
                    {charactersList.map((each, index) => (
                        <li key={index} className="bg-gray-200 flex w-80 h-32 p-2 rounded-2xl flex-shrink-0 cursor-pointer hover:bg-gray-300">
                            <img src={each.image} className="h-28 w-24 object-cover rounded-2xl" alt='' />
                            <div className="ml-2.5 flex flex-col justify-between">
                                <div>
                                    <p className="text-base font-semibold text-gray-900">{each.name}</p>
                                    <p className="text-xs text-gray-600">By @{each.by}</p>
                                    <p className="text-sm text-gray-800">{each.description}</p>
                                </div>
                                <div className="flex items-center mr-3 font-semibold">
                                    <div className="flex items-center mr-3 font-semibold">
                                        <FaRegComment color='#666770' size={12} />
                                        <p className="text-xs flex items-center text-gray-600 ml-1">{each.comments}</p>
                                    </div>
                                    {each.likes && (
                                        <div className="flex items-center mr-3 font-semibold">
                                            <AiOutlineLike color='#666770' size={12} />
                                            <p className="text-xs flex items-center text-gray-600 ml-1">{each.likes}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Categories;

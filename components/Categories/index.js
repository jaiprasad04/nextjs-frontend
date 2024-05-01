'use client'

import { useState, useEffect } from 'react';

import CategoryItems from '../CategoryItems';
import './index.css';

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
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

    useEffect(() => {
        const getCharactersDetails = async () => {
            setApiStatus(apiStatusConstants.inProgress);

            const apiUrl = 'https://dev-zhzc5vrrcvlv2jg.api.raw-labs.com/mock/2';
            const options = {
                method: 'GET',
            };

            const response = await fetch(apiUrl, options);

            if (response.ok) {
                const data = await response.json();
                setCharactersList(data);
                setApiStatus(apiStatusConstants.success);
            }
        };

        getCharactersDetails();
    }, []);

    const clickTabItem = (tabId) => {
        setActiveTabId(tabId);
    };

    const categoryWise = charactersList.filter((each) => each.category === activeTabId);

    return (
        <div className="category-container">
            <ul className="category-list">
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
                <div className="box">
                    <div className="box1"></div>
                </div>
            ) : (
                <ul className="character-list">
                    {categoryWise.map((each, index) => (
                        <li key={index} className="character-list-item">
                            <img src={each.image} className="character-image" alt='' />
                            <div className="character-details-container">
                                <div>
                                    <p className="character-name">{each.name}</p>
                                    <p className="character-by">By @{each.by}</p>
                                    <p className="character-description">{each.description}</p>
                                </div>
                                <div className="comments-section">
                                    <div className="comments-section">
                                        <FaRegComment color='#666770' size={12} />
                                        <p className="character-comments">{each.comments}</p>
                                    </div>
                                    {each.likes && (
                                        <div className="comments-section">
                                            <AiOutlineLike color='#666770' size={12} />
                                            <p className="character-comments">{each.likes}</p>
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

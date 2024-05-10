import { useState, useEffect } from "react";

import LoadingFiles from "./LoadingFiles";

import { FaRegComment } from "react-icons/fa";

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
};

const ForYou = () => {
    const [forYou, setForYou] = useState([])
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress)

    useEffect(() => {
        const getForYouData = async () => {
            const apiUrl = 'https://dev-zhzc5vrrcvlv2jg.api.raw-labs.com/mock/5'
            const options = {
                method: 'GET'
            }

            const response1 = await fetch(apiUrl, options)

            if (response1.ok) {
                const data1 = await response1.json()
                setForYou(data1)
                setApiStatus(apiStatusConstants.success)
            }
            
        }

        getForYouData()
    }, [])

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[90%]">
                <h1 className="text-gray-900 text-base font-semibold mt-6 mb-4">For you</h1>
                {apiStatus === apiStatusConstants.inProgress ? (
                    <LoadingFiles />
                    ) : (
                    <ul className="flex flex-nowrap items-center overflow-auto gap-2 pl-0">
                        {forYou.map((each, index) => (
                            <li key={index} className="bg-gray-200 flex w-80 h-32 p-2 rounded-2xl flex-shrink-0 cursor-pointer hover:bg-gray-300">
                                <img src={each.image} className="h-28 w-24 object-cover rounded-2xl" alt={each.name} />
                                <div className="ml-4 flex flex-col justify-between">
                                    <div>
                                        <h1 className="text-sm font-semibold text-gray-900">{each.name}</h1>
                                        <p className="text-xs text-gray-600">By @{each.byPerson}</p>
                                        <p className="text-sm text-gray-700">{each.description}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaRegComment color="#666770" size={12} />
                                        <p className="text-xs flex items-center text-gray-600 ml-1">{each.comments}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>)
                } 
            </div>
        </div>
    );
};

export default ForYou;

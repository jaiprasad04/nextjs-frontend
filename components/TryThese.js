import { useState, useEffect } from "react";

import LoadingFiles from "./LoadingFiles";

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
};

const TryThese = () => {
  const [tryThese, setTryThese] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress)

  useEffect(() => {
    const getTryTheseData = async () => {
      const apiUrl = 'https://dev-zhzc5vrrcvlv2jg.api.raw-labs.com/mock/6'
      const options = {
        method: 'GET'
      }

      const response2 = await fetch(apiUrl, options)

      if (response2.ok) {
        const data2 = await response2.json()
        setTryThese(data2)
        setApiStatus(apiStatusConstants.success)
      }
    }

    getTryTheseData()
  }, [])

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[90%]">
                <h1 className="text-gray-900 text-base font-semibold mt-6 mb-4">Try these</h1>
                {apiStatus === apiStatusConstants.inProgress ? (
                  <ul className="flex flex-col h-44 flex-wrap overflow-auto gap-2 list-none">
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                    <li className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300"></li>
                  </ul>
                ) : (
                  <ul className="flex flex-col h-44 flex-wrap overflow-auto gap-2 list-none">
                    {tryThese.map((each, index) => (
                        <li key={index} className="bg-gray-200 flex items-center w-80 h-20 p-3 rounded-xl flex-shrink-0 cursor-pointer hover:bg-gray-300">
                            <img src={each.image} className="rounded-full w-12 h-13" alt='' />
                            <div className="ml-2.5">
                                <p className="text-sm font-medium text-gray-700">{each.type}</p>
                                <p className="text-xs text-gray-600">with {each.with}</p>
                            </div>
                        </li>
                    ))}
                  </ul>
                )}
                
            </div>
        </div>
    );
};

export default TryThese;

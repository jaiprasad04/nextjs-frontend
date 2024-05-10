import { useState, useEffect } from 'react';

import { GoDotFill } from 'react-icons/go'


const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
};

const TrySaying = () => {
  const [trySaying, setTrySaying] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress)

  useEffect(() => {
    const getTrySayingData = async () => {
      const apiUrl = 'https://dev-zhzc5vrrcvlv2jg.api.raw-labs.com/mock/8'
      const options = {
        method: 'GET'
      }

      const response4 = await fetch(apiUrl, options)

      if (response4.ok) {
        const data4 = await response4.json()
        setTrySaying(data4)
        setApiStatus(apiStatusConstants.success)
      }
    }
    getTrySayingData()
  }, [])

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[90%]">
        <h1 className="text-gray-900 text-base font-semibold mt-6 mb-4">Try saying</h1>
        {apiStatus === apiStatusConstants.inProgress ? (
          <ul className="flex flex-nowrap items-center overflow-auto gap-2 pl-0">
            <li className="bg-gray-200 flex flex-col w-96 h-52 p-3.5 shrink-0 rounded-lg cursor-pointer hover:bg-gray-300"></li>
            <li className="bg-gray-200 flex flex-col w-96 h-52 p-3.5 shrink-0 rounded-lg cursor-pointer hover:bg-gray-300"></li>
            <li className="bg-gray-200 flex flex-col w-96 h-52 p-3.5 shrink-0 rounded-lg cursor-pointer hover:bg-gray-300"></li>
            <li className="bg-gray-200 flex flex-col w-96 h-52 p-3.5 shrink-0 rounded-lg cursor-pointer hover:bg-gray-300"></li>
            <li className="bg-gray-200 flex flex-col w-96 h-52 p-3.5 shrink-0 rounded-lg cursor-pointer hover:bg-gray-300"></li>
          </ul>
        ) : (
          <ul className="flex flex-nowrap items-center overflow-auto gap-2 pl-0">
            {trySaying.map((each, index) => (
              <li key={index} className="bg-gray-200 flex flex-col w-96 p-3.5 shrink-0 rounded-lg cursor-pointer">
                <div className="flex items-center mb-3">
                  <img
                    src={each.image}
                    alt=''
                    className="rounded-full w-12 h-12 mr-2.5"
                  />
                  <div>
                    <p className="text-sm text-gray-900 font-semibold">{each.name}</p>
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <p className="text-xs text-gray-600">@{each.by}</p>
                      <GoDotFill size={6} color="#28292d" />
                      <p className="text-sm text-gray-800">{each.chats} chats</p>
                      <GoDotFill size={6} color="#28292d" />
                      <p className="text-sm text-gray-800">{each.likes} likes</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="bg-gray-300 mb-1 p-2 rounded-lg whitespace-nowrap text-sm hover:bg-gray-400">{each.questions1}</p>
                  <p className="bg-gray-300 mb-1 p-2 rounded-lg whitespace-nowrap text-sm hover:bg-gray-400">{each.questions2}</p>
                  <p className="bg-gray-300 mb-1 p-2 rounded-lg whitespace-nowrap text-sm hover:bg-gray-400">{each.questions3}</p>
                </div>
              </li>
            ))}
        </ul>
        )}

      </div>
    </div>
  );
};

export default TrySaying;

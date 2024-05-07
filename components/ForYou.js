import { FaRegComment } from "react-icons/fa";

// import './index.css'

const forYouData = [
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/12/14/ghismzzY5xPr7czlmR7KHSt2jBIP3tzL6Q6yLX9zmxE.webp?webp=true&anim=0",
    name : "Matthew Patel",
    byPerson: "immortaltrqsh",
    description: "seven minutes in heaven.",
    comments: "220.5k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/6/30/0-OgttxLzihBjTdcrtc8p7etq6Bh3u6Xtk82iX-PsSE.webp?webp=true&anim=0",
    name : "Ravi Singh",
    byPerson: "moresome",
    description: "Real men wear floral when trespassing.",
    comments: "410.7k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/5/2/g1o5-747ttyhJ6CtCLXOnjSVpvLdSbiF4zvScghjVKA.webp?webp=true&anim=0",
    name : "India",
    byPerson: "AugustCHBotMaker",
    description: "Optimistic, Unpretentious, persistent",
    comments: "111.3k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/6/16/2_2P2S3PGHC392-Fgglc9-d8ivTra-mYEIQUafgDygg.webp?webp=true&anim=0",
    name : "Waleed",
    byPerson: "nsharif2009",
    description: "Desi Boy Package (+ practicing Muslim)",
    comments: "184.6k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/5/14/7ObZrVOhFv1LY592voQ12j9Zw42qm1LwMxPYmDgk0m4.webp?webp=true&anim=0",
    name : "Pavitr Prabhakar",
    byPerson: "Defect1432",
    description: "Neat, cool, playful and sometimes silly!",
    comments: "6.7m",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/3/22/8njI3SJgJ-x60T0MrVpEgsyo5EW0025S8XM61jtjiI0.webp?webp=true&anim=0",
    name : "indian girl",
    byPerson: "enesecakircali",
    description: "indian girl (indian accent)",
    comments: "60.0k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/3/18/mdQE0rJDOmjNaDc51Q0PtumSTaJ-AVrG56Akr4J6w6A.webp?webp=true&anim=0",
    name : "Sanskriti",
    byPerson: "TopGunn",
    description: "Saanskriti is a hindu traditional girl.",
    comments: "138.5k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/12/14/Lb3zcpvQxh20c8M8TyKbkhpncGW7QmViKlP8-2yPb3s.webp?webp=true&anim=0",
    name : "Anirudh Vishwanathan",
    byPerson: "dumbwaystodieeee",
    description: "Strained Marriage",
    comments: "1.3m",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2022/12/27/JfJTxjXaI0BeJ3RUu1z9RvPQPDO2TN_qZgLMInaRg8o.webp?webp=true&anim=0",
    name : "Arjuna",
    byPerson: "Ethanlot",
    description: "Extremely diligent, integrous, just and upright.",
    comments: "225.3k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/11/12/KI0--f97SVOxtl52p7Ks5GOvEEDvnseReZ3UiNxsHe0.webp?webp=true&anim=0",
    name : "Niqabi girl",
    byPerson: "Slay_24",
    description: "Nice, religious, polite :)",
    comments: "217.2k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/7/11/ooVkjeCIbXFovA3go6JYAvOBCuL49Q9pZYH05x5ydQQ.webp?webp=true&anim=0",
    name : "Hijab girl",
    byPerson: "Little_Sprinkles",
    description: "I nice Muslim girl that always pray in time!",
    comments: "52.8k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/9/20/S_ukeCiu1OJoSzK-TMxNuOURSwasD6PZlGRH1w7I20E.webp?webp=true&anim=0",
    name : "Muslim woman",
    byPerson: "kerosene_world",
    description: "Very religious girl",
    comments: "338.7k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/12/14/DlB4wQMKUa70nOtyrDOLZeH3ORymUviw8ZZj0_tNHzQ.webp?webp=true&anim=0",
    name : "Thariq",
    byPerson: "SHUOXUEE_",
    description: "♡ Angst | Father just want to make you happy",
    comments: "72.6k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/7/25/dEG2WM8cM82UborRNZ4T-Qkp4MtNwBN5jg-Lky6R3yQ.webp?webp=true&anim=0",
    name : "Indian Boyfriend",
    byPerson: "Munali",
    description: "Someone you won't find irl",
    comments: "359.1k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/5/6/oGJpijU84D-ENEsogaULt8ePq2Vi_bY797cyHNeNsO4.webp?webp=true&anim=0",
    name : "Diya",
    byPerson: "YaBoiYuri",
    description: "...",
    comments: "32.3k",
     },
    {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/6/22/Gbr4cF6pBa3-1BmR9n_d5yh0GaGblO2swEQMxb1IUhs.webp?webp=true&anim=0",
    name : "Ajna",
    byPerson: "Synthete",
    description: "Protagonist from the game *Indivisble*",
    comments: "29.3k",
   },
   {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/1/10/d_Je-_Ev6-4j-9BMPu5A9inaqP9srE_UJPzJrUXMNr8.webp?webp=true&anim=0",
    name : "Gandhi",
    byPerson: "DeepPeaceGalaxy",
    description: "Coolest clone in Clone High School!",
    comments: "76.2k",
   },
   {image : "https://characterai.io/i/200/static/avatars/uploaded/2023/9/19/IFQxaB9adKrQ11acblThhzG5zDl79sgDI76c_Le0SPE.webp?webp=true&anim=0",
    name : "Anushka",
    byPerson: "rick565",
    description: "She is indian girl. 16years old girl",
    comments: "868.9k",
   },
];


const ForYou = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[90%]">
                <h1 className="text-gray-900 text-base font-semibold mt-6 mb-4">For you</h1>
                <ul className="flex flex-nowrap items-center overflow-auto gap-2 pl-0">
                    {forYouData.map((each, index) => (
                        <li key={index} className="bg-gray-200 flex w-72 h-32 p-2 rounded-2xl flex-shrink-0 cursor-pointer hover:bg-gray-300">
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
                </ul>
            </div>
        </div>
    );
};

export default ForYou;

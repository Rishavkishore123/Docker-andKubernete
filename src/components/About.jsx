import { useState } from 'react';
import aboutImage from '../assets/b3.webp'
const About = () => {
const [data, setData] = useState({
        image: aboutImage,

        title: "React Developer",

        description1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio dolore
        sint aliquid molestiae beatae omnis ipsum, incidunt suscipit aperiam?`,

        description2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem beatae delectus qui ipsum?
        Veniam sunt nulla reiciendis labore.
        Atque facere perspiciatis necessitatibus inventore, tempora ad neque enim deleniti quo.
    `,

        actionButton : {
            title:"Read More..",
            link: '/readmore',
        }


    })
    return (
        <>
            <div className="main-container py-16 ">
                <h1 className="text-4xl font-bold text-center underline">About Me </h1>
            </div>

            <div className="flex ">
                {/* Image dABBA */}
                <div className='w-fit  flex justify-center' >
                    <img className='rounded-full shadow-lg w-1/2 h-2/3' src={data.image} alt="Rishav Kishore" />
                </div>

                {/* text dabba */}

                <div className='w-full flex justify-center'>
                    <div className='space-y-5 w-2/3'>
                    <h1 className='text-4xl py-5 font-semibold'>{data.title}</h1>
                    <p >{data.description1}</p>
                    <p>{data.description2}</p>
                    <button className='bg-orange-500 px-3 py-2 rounded-full text-1xl text-white '>
                        {data.actionButton.title}
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About;
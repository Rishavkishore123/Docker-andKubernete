import React from 'react'
import { useState } from 'react'

const Header = () => {

    const [brandName, setBrandName] = useState("Rishav Kishore");
    const [menulinks, setMenuLinks] = useState([
        {
            title: 'Home',
            link: "/home",
            id: 1,
        },

        {
            title: 'About',
            link: '/about',
            id: 2,
        },

        {
            title: 'Skills',
            link: '/skills',
            id: 3,
        },

        {
            title: 'Portfolio',
            link: '/portfolio',
            id: 4,
        },

        {
            title: 'Contact',
            link: '/contact',
            id: 5,
        },
    ])

    const [actionButton, setActionButton]= useState({
        
        title: 'Download CV',
        link: '/hire me!',
        
    })
    return (
    <>
        <div>

            <div className='h-20 border main flex justify-between items-center px-16 bg-gray-100'>
                <div>
                <h1 className='text-2xl font-bold'>{brandName}</h1>
                </div>

                <div className='space-x-6'>
                    {menulinks.map((link) => (
                        <a key={link.id} href={link.link} className='hover:text-orange-600'>
                            {link.title}
                            </a>
                    ))}
                    </div>
                    


                    <div>

                        <a href={actionButton.link}
                        className='px-3 py-2 bg-orange-600 rounded-full text-1xl'> 
                        {actionButton.title}
                        </a>
                    </div>

                </div>
            </div>
       



                </>
                )
}

export default Header;

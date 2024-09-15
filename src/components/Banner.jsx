import bannerImage from '../assets/b2.jpg';
import bannerBackground from '../assets/b1.jpg';
import Typed from 'typed.js';
import { useRef } from 'react';
import { useEffect } from 'react';
const Banner = () => {
    const el= useRef(null);


    useEffect(()=> {
        const typed = new Typed(el.current, {
            strings: ["React Developer","Frontend Developer" ], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 100,
            loop: true
          });
        
      
          // Destropying
          return () => {
            typed.destroy();
          };
    }, [])

    return (
        <div className="main-container  flex items-center">


            <div style={
                {
                    backgroundImage: `url(${bannerBackground})`,
                    backgroundSize: "Cover",
                }
            } className=' full flex  justify-center text-white'>{/*text*/}

                <div className='w-2/3 space-y-5 ms-5'>
                    <h3 className='text-2xl font-semibold'>HI, I am </h3>
                    <h1 className=' text-4xl font-bold'>Rishav Kishore</h1>
                    <h2 className=' text-1xl '>And I am <span className='font-bold underline' ref={el}></span></h2>

                    <p className='mt-3 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta aut saepe eum, voluptatibus aperiam ullam iste voluptatem dolore,
                        culpa rem eligendi dolor illo eos obcaecati rerum fugiat, repudiandae officia voluptatum.
                    </p>

                    <div className=' icons-container space-x-5 '>
                        <a  href='https://www.linkedin.com/in/rishav-kishore-11651827b/'> <i class="fa-brands text-3xl  fa-linkedin"></i></a>
                        <a href='https://twitter.com/Ri94109Rishav'><i class="fa-brands text-3xl  fa-x-twitter"></i></a>
                        <a href='https://github.com/Rishavkishore123'><i class="fa-brands text-3xl fa-square-github"></i></a>
                        <a href='https://www.instagram.com/rishavkishore/'><i class="fa-brands text-3xl fa-instagram"></i></a>

                    </div>

                    <br />

                    <a className="text-1.5xl font-semibold px-3 py-2 bg-orange-500 rounded-full shadow-lg"
                        href="/contact">Contact Me</a>
                </div>


            </div>


            <div className=' w-full flex justify-center'>{/*image*/}
                <img className="rounded-semi shadow-lg w-1/2 " src={bannerImage} ></img>

            </div>
        </div>
    )
}

export default Banner;


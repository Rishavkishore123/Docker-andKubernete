import bannerBackground from '../assets/b1.jpg';
const skills = () => {
    return (
        <>
            <div className="">

                <h1 className=" my-10 underline font-bold text-center text-4xl mt-5  ">My Expertise</h1>


                <div
                    style={
                        {
                            backgroundImage: `url(${bannerBackground})`,
                            backgroundSize: "cover",
                        }
                    }
                    className="  box container  flex py-5 ">
                    <div className="flex justify-center ">
                        {/* text container */}

                        <div className="w-full text-center space-y-4 text-white">
                            <h1 className="text-4xl font-semi bold">I Love these technologies</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate maxime expedita
                                aperiam nobis rerum aliquam,
                                alias dolore at ipsum suscipit!
                            </p>

                            <button className="text-1xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">Hire Me</button>
                        </div>
                    </div>


                    {/* skills container */}

                    <div className="flex justify-center w-full">
                        <div className="flex  justify-center flex-wrap h-fit space-x-3 space-y-2 ">
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500  cursor-pointer">
                           
                                HTML5
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer ">
                                Tailwind CSS
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer">
                                JavaScript
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer">
                                Reactjs
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer">
                                MongoDB
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer ">
                                Expressjs
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer">
                                Nodejs
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer">
                                CSS
                            </p>
                            <p className="bg-gray-300 w-fit rounded-full  px-3 py-1 mt-2 hover:bg-orange-500 cursor-pointer ">
                                Bootstrap
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default skills;
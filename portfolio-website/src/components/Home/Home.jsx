import React from 'react';
import Navbar from '../Navbar/Navbar';
// import VideoBg from '../../assets/VideoBg1.mp4';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';


const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  };



  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar page={"home"} />
      </div>
      <div className="w-full h-screen bg-pageBackground ">
        {/* <video className="absolute top-0 left-0 w-full h-full object-cover opacity-70" autoPlay loop muted playsInline playbackRate={10}>
          <source src={VideoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <div className="flex flex-row  gap-x-10 h-screen items-center justify-center text-linecolor mx-28">
          <div className='pt-24 flex flex-col gap-y-5 w-[50%]'>
            <div>
              <h1 className="text-6xl font-bold">Muhammad Sarim</h1>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-skillsColor">Full Stack Developer</h1>
            </div>
            <div className='border border-black hover:bg-secondaryText hover:text-linecolor w-36 text-center rounded-lg px-3 py-2 transition-all duration-300 mt-10'>
              <button onClick={handleClick}>Find out More!</button>
            </div>
          </div>

          <div className='hidden md:block'>
            <Spline scene="https://prod.spline.design/EGoDtG0CuaH7bIEi/scene.splinecode" />
          </div>
        </div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-linecolor">
          <div className='pt-24 flex flex-col gap-y-10'>
            <div>
              <h1 className="text-6xl font-bold">Muhammad Sarim</h1>
            </div>
            <div>
              <h1 className="text-6xl font-bold">Full Stack Developer</h1>
            </div>
            <div className='border border-black hover:bg-secondaryText hover:text-linecolor w-36 text-center rounded-lg px-3 py-2 transition-all duration-300'>
              <button onClick={handleClick}>Find out More!</button>
            </div>
          </div>
        </div> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

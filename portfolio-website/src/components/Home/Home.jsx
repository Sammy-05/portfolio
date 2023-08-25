import React from 'react';
import Navbar from '../Navbar/Navbar';
// import VideoBg from '../../assets/VideoBg1.mp4';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
// import pp from '../../assets/sarimpic.jpg';

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
      <div className="relative w-full h-screen bg-primaryBackground ">
        {/* <video className="absolute top-0 left-0 w-full h-full object-cover opacity-70" autoPlay loop muted playsInline playbackRate={10}>
          <source src={VideoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <video className="absolute top-0 left-0 w-full h-full object-cover opacity-70" autoPlay loop muted playsInline playbackRate={10}>
          <source src="https://drive.google.com/file/d/1OeQnRhkaywvp6X95cSp5eRj5d0INz2-9/view?usp=sharing" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-linecolor">
          {/* <div className='flex flex-row gap-x-20'> */}
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
          {/* <div className=" rounded-full overflow-hidden w-[540px] h-[400px] shadow-2xl">
              <img src={pp} alt="Muhammad Sarim"/>
            </div>
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

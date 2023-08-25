import { useEffect } from "react";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Work from "../Work/Work";

// import sarimpic from "../../assets/sarimpic.jpg";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-pageBackground text-linecolor pt-24">
      <Navbar page={"about"}></Navbar>
      <div className="pt-20 flex flex-col gap-y-20">
        <div className="flex flex-row items-center justify-center gap-x-40">
          <div className="w-2/5 flex flex-col gap-y-10">
            <p>
              A passionate and experienced FULL-STACK DEVELOPER and a DIGITAL
              MARKETING CONSULTANT who can solve your technical problem in the
              easiest, most desirable, and promotional ways.
            </p>
            <p>
              A passionate and experienced FULL-STACK DEVELOPER and a DIGITAL
              MARKETING CONSULTANT who can solve your technical problem in the
              easiest, most desirable, and promotional ways.
            </p>
            <p>
              A passionate and experienced FULL-STACK DEVELOPER and a DIGITAL
              MARKETING CONSULTANT who can solve your technical problem in the
              easiest, most desirable, and promotional ways.
            </p>
          </div>
          <div className="rounded-full h-[400px] w-[400px] border solid">
            <img
              className="rounded-full h-[400px] w-[400px]"
              src=""
              alt="Profile"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-y-10 opacity-0">
            <div className="w-4/5">
              <hr className="my-4 border-skillsColor"></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">

        <Education></Education>

        <div className="flex flex-col items-center gap-y-10 ">
          <div className="w-4/5">
            <hr className="my-4 border-skillsColor"></hr>
          </div>
        </div>

        <Work></Work>
        <Footer></Footer>


      </div>
    </div>
  );
};
export default About;

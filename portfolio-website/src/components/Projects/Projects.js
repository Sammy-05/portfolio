import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ProjectData } from "../../data/data.js";

const Projects = (props) => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewporWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewporWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleProjectHover = (project) => {
    props.setSelectedProject(project)
    setSelectedProject(project);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Event listener to scroll to the top when the page loads
  window.addEventListener("load", scrollToTop);


  return (
    <div>
      <div className="bg-pageBackground pt-24">
        <Navbar page={"project"}/>
      </div>
      <div className="grid grid-cols-5 mx-10 pb-20">
        <div className="col-span-3">
          <div
            className="fixed flex items-center"
            style={{ height: viewportHeight }}
          >
            {selectedProject ? (
              <img
                alt=""
                className={`rounded-xl p-0 m-0`}
                src={selectedProject.image}
                style={{
                  height: viewportHeight * 0.6,
                  width: viewportWidth * 0.5,
                }}
              />
            ) : null}
          </div>
        </div>
        <div className="col-span-2">
          {ProjectData.map((project) => {
            const miniDescription = project.description.slice(0, 2);


            return (
              <div
                key={project.id}
                onMouseEnter={() => handleProjectHover(project)}
                onMouseLeave={() => setSelectedProject(null)}
                onClick={() => {
                  navigate("/projectdesc");
                }}
                className="group flex flex-row gap-x-6 rounded-[12px] px-5 py-5 text-skillsText mt-10 hover:cursor-pointer hover:bg-linecolor/5 hover:shadow-[inset_1px_1px_0px_0px_rgba(148,163,184,0.8)] hover:drop-shadow-lg transition duration-300 ease-in-out"
              >
                <div className="w-1/5 text-base">{project.date}</div>
                <div className="flex flex-col w-4/5">
                  <div>
                    <h1 className="text-xl text-linecolor group-hover:text-skillsColor">
                      {project.title}
                    </h1>
                  </div>
                  <div className="text-lg">
                    <p>{project.position}</p>
                  </div>
                  <div className="mt-4 text-sm text-skillsSubText">
                    <ul>
                      {miniDescription.map((desc) => {
                        return <li className="pt-2">{desc}</li>;
                      })}

                      <li className="text-linecolor font-semibold group-hover:text-skillsColor">Read More</li>

                    </ul>
                  </div>

                  <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 mt-4 text-skillsColor text-sm font-semibold">
                    {project.tech.map((skill) => {
                      return (
                        <div
                          key={skill}
                          className="px-3 py-2 bg-buttonBackground rounded-[15px]"
                        >
                          <p>{skill}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const ProjectDesc = (props) => {
    const projectData = props.selectedProject
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-row">
                <div className="flex mt-10 w-1/5 pl-16">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="text-4xl hover:cursor-pointer w-8 h-8 p-1 text-linecolor hover:text-skillsColor transition ease-in-out duration-300"
                        onClick={() => navigate("/projects")}
                    />
                </div>
                <div className="flex justify-center w-3/5">
                    <img className="rounded-b-2xl" src={projectData.image} alt="nothing" />

                </div>
                <div className="w-1/5"></div>

            </div>
            <div className="text-skillsColor grid grid-cols-5 gap-x-10 mt-10">
                <div className="col-span-1"></div>
                <div className="col-span-3">
                    <div className="font-semi-bold text-4xl">
                        <h1>{projectData.title}</h1>
                        <hr className="mt-4 border-t-2 border-skillsColor w-full" /> {/* Line added here */}
                    </div>
                    <div className="flex flex-row gap-x-">

                        <div className="flex flex-col w-1/2">
                            <div className="mt-4 text-lg flex flex-row gap-x-5">
                                <div className="w-1/4">
                                    <p>Date</p>
                                </div>
                                <div className="text-linecolor">
                                    <p>{projectData.date}</p>
                                </div>
                            </div>
                            <div className="mt-4 text-lg flex flex-row gap-x-5">
                                <div className="w-1/4">
                                    <p>Position</p>
                                </div>
                                <div className="text-linecolor">
                                    <p>{projectData.position}</p>
                                </div>
                            </div>
                            <div className="mt-4 text-lg flex flex-row gap-x-5">
                                <div className="w-1/4">
                                    <p>Project Link</p>
                                </div>
                                <div className="text-linecolor">
                                    <p>Goes here</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row flex-grow w-1/2 mt-4">
                            <div className="flex flex-col text-sm">
                                <div className="text-lg">
                                    <h2>Tech Used:</h2>
                                </div>
                                <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 mt-1 text-skillsColor text-sm font-semibold">
                                    {projectData.tech.map((tech) => {
                                        return (
                                            <div className="px-3 py-2 bg-buttonBackground rounded-[15px]">
                                                <p>{tech}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col pb-10">
                        <div className="text-skillsColor text-lg">
                            <h2>Description</h2>
                        </div>
                        <div className="text-linecolor text-sm mt-2">
                            {projectData.description.map((desc) => {
                                return (
                                    <p className="pt-2">{desc}</p>
                                )
                            })}

                        </div>


                    </div>

                </div>
                <div className="col-span-1"></div>
            </div>

        </div>
    );
}

export default ProjectDesc;

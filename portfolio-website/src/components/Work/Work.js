import AKUH from '../../assets/AKUH.png'
// const PortfolioData = require("../../data/data.js")
import { WorkExperience } from "../../data/data.js";


const Work = () => {
    return (
        <div className="font-roboto">
            <div className="mx-40 my-24">

                <div className="flex items-center justify-center text-4xl text-skillsColor">
                    <h1>Work Experience</h1>
                </div>

                <div className="grid grid-cols-2 gap-x-24 gap-y-10">

                    {WorkExperience.map((work) => {
                        const miniDescription = work.description.slice(0, 2);

                        return (

                            <div key={work.id} className=" shadow-[inset_1px_1px_1px_0px_rgba(148,163,184,0.8)] group col-span-1 rounded-[12px] px-5 py-5 text-skillsText mt-10 hover:cursor-pointer hover:bg-linecolor/5 hover:shadow-[inset_0px_1px_0px_0px_rgba(148,163,184,0.8)] hover:drop-shadow-lg transition duration-300 ease-in-out">

                                <div className='flex flex-row'>
                                    <div className="flex flex-col w-3/5">
                                        <div>
                                            <h1 className="text-xl text-linecolor group-hover:text-skillsColor">
                                                {work.company}
                                            </h1>
                                        </div>
                                        <div className="text-lg">
                                            <p>{work.date}</p>
                                        </div>
                                        <div className="text-lg text-skillsColor">
                                            <p>{work.position}</p>
                                        </div>
                                    </div>
                                    <div className='w-2/5 pt-2'>
                                        <img className='' src={AKUH} alt='AKUH'></img>

                                    </div>

                                </div>
                                <div className="text-sm pt-3 text-linecolor">
                                    <ul>
                                        {miniDescription.map((desc) => {
                                            return (
                                                <li className="py-2">{desc}</li>
                                            )
                                        })}
                                        <li className="text-linecolor font-semibold group-hover:text-skillsColor">Read More</li>

                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default Work
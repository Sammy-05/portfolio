import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    
    const [emailBody, setEmailBody] = useState("")
    const emailAddress = "m.sarim12966@gmail.com";
    const emailSubject = "Portfolio Website Contact";

    const handleSendEmail = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
            emailSubject
        )}&body=${encodeURIComponent("Dear Sarim,\n\n" + emailBody)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-linecolor bg-opacity-90">

            <div className="flex flex-row mx-40 gap-x-20 justify-center py-12 items-center">
                <div className="flex flex-col text-base text-skillsText gap-y-1 w-2/5">
                    <div className="">
                        <p>A Full Stack Developer with diverse skills-set</p>
                    </div>
                    <div className="">
                        <p>Copyrights © 2021 Muhammad Sarim. All Rights Reserved</p>
                    </div>
                    <div className="flex flex-row pt-5 gap-x-5">
                        <div>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-4xl hover:cursor-pointer w-8 h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={()=>{window.location.href = "https://www.facebook.com/muhammedsarim00/"}}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-4xl hover:cursor-pointer w-8 h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={()=>{window.location.href = "https://github.com/Sammy-05"}}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-4xl hover:cursor-pointer w-8 h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={()=>{window.location.href = "https://www.linkedin.com/in/muhammad-sarim-2517581b7/"}}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-4xl hover:cursor-pointer w-8 h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={()=>{window.location.href = "https://www.instagram.com/sketches_by_sarim/"}}
                            />
                        </div>

                    </div>
                </div>
                <div className="w-1/5"></div>

                <div className="flex flex-col gap-y-5 w-2/5">
                    <div>
                        <p className="text-2xl font-bold text-pageBackground">GET IN TOUCH</p>
                        <div className="w-full">
                            <hr className="my-3 border-t-2 border-solid border-skillsColor"></hr>
                        </div>
                    </div>
                    <div className="flex flex-row flex-grow">
                        <div className="w-full flex">
                            <textarea className="outline-skillsColor rounded-md text-pageBackground resize-none w-full h-32 leading-tight text-left pt-2 pl-2" placeholder="Enter your text here..." onChange={
                                (e) => {
                                    e.preventDefault()
                                    setEmailBody(e.target.value)
                                    console.log("THE VALUE SET TO: ", e.target.value)
                                }}
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-row hover:text-skillsColor text-linecolor pt-2">
                        <button className="flex gap-x-2 items-center font-semibold bg-pageBackground px-8 py-4 rounded-lg " onClick={handleSendEmail}>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-4xl hover:cursor-pointer w-5 h-5 transition ease-in-out duration-300"
                            />
                            Send Email
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Footer;
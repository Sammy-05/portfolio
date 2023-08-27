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

            <div className="flex flex-col-reverse md:flex-row mx-10 md:mx-40 md:gap-x-20 justify-center py-12 items-center">
                <div className="flex flex-col w-full text-xs md:text-base text-skillsText pt-20 md:pt-0 gap-y-1 md:w-2/5">
                    <div className="flex justify-center md:justify-start">
                        <p>A Full Stack Developer with diverse skills-set</p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <p>Copyrights © 2021 Muhammad Sarim. All Rights Reserved</p>
                    </div>
                    <div className="flex flex-row justify-center md:justify-start pt-5 gap-x-6 md:gap-x-5">
                        <div>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-4xl hover:cursor-pointer w-10 h-10 md:w-8 md:h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={() => { window.location.href = "https://www.facebook.com/muhammedsarim00/" }}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-4xl hover:cursor-pointer w-10 h-10 md:w-8 md:h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={() => { window.location.href = "https://github.com/Sammy-05" }}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-4xl hover:cursor-pointer w-10 h-10 md:w-8 md:h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={() => { window.location.href = "https://www.linkedin.com/in/muhammad-sarim-2517581b7/" }}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-4xl hover:cursor-pointer w-10 h-10 md:w-8 md:h-8 p-1 text-pageBackground hover:text-skillsColor transition ease-in-out duration-300"
                                onClick={() => { window.location.href = "https://www.instagram.com/sketches_by_sarim/" }}
                            />
                        </div>

                    </div>
                </div>
                <div className="md:w-1/5"></div>

                <div className="flex flex-col gap-y-2 md:gap-y-5 md:w-2/5 w-full">
                    <div>
                        <p className="text-lg md:text-2xl font-bold text-pageBackground">GET IN TOUCH</p>
                        <div className="w-full">
                            <hr className="my-2 md:my-3 border-t-2 border-solid border-skillsColor"></hr>
                        </div>
                    </div>
                    <div className="flex flex-row flex-grow">
                        <div className="w-full flex">
                            <textarea className="outline-skillsColor rounded-md text-pageBackground resize-none text-xs md:text-base w-full h-32 leading-tight text-left pt-2 pl-2" placeholder="Enter your text here..." onChange={
                                (e) => {
                                    e.preventDefault()
                                    setEmailBody(e.target.value)
                                }}
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-row hover:text-skillsColor text-linecolor pt-2">
                        <button className="flex gap-x-2 md:gap-x-3 text-xs md:text-base items-center font-semibold bg-pageBackground px-4 py-3 md:px-5 md:py-3 rounded-lg " onClick={handleSendEmail}>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="hover:cursor-pointer w-4 h-4 md:w-5 md:h-5 transition ease-in-out duration-300"
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
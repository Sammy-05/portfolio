import project1 from "../assets/projectImages/1.png";
import project2 from "../assets/projectImages/2.png"
import project3 from "../assets/projectImages/3.png"
import project4 from "../assets/projectImages/4.png"
import project5 from "../assets/projectImages/5.png"
import project6 from "../assets/projectImages/6.png"
import project7 from "../assets/projectImages/7.png"

const ProjectData = [
    {
        id: 1,
        title: "ChatGPT as a Fact Checking Service",
        date: "Jan 2023 - Present",
        position: "Research Student",
        // description: [
        //     "I worked on evaluating ChatGPT as a fact checking service",
        //     "Worked on 3 research questions and divided them on basis of Global North & Global South",
        //     "Wrote Scripts to gather authentic data from a Google Fact Check",
        //     "Used OpenAPI Script to query ChatGPT"
        // ],
        "description": [
            "Conducted an evaluation of ChatGPT as a fact-checking service.",
            "Explored 3 research questions, classifying them based on the distinction between Global North & Global South.",
            "Developed scripts to collect authentic data from Google Fact Check.",
            "Utilized OpenAPI Script to query ChatGPT."
        ],
        tech: ["Google Colab", "Pandas", "Python", "Javascript", "BERT", "Machine Learning", "Canva"],
        image: project1,
    },
    {
        id: 2,
        title: "Web Redesign",
        date: "July 2022 - Aug 2022",
        position: "Research Intern",
        // description: [
        //     "Familiarized myself with the 5G test bed – POWDER",
        //     "Worked on POWDER Profiles like SRS-Handover, Open5g UERANSIM, and OAISIM NEXTEPC",
        //     "Researched S1AP and SCTP in reference to 5G architecture",
        //     "Covered the control plane procedures",
        //     "Explored multiple 4G and 5G profiles and developed a better understanding of their architectures",
        //     "Went over the Neutrino Code Base – a project to implement a 5G Network with our own Evolved Packet Core",
        // ],
        "description": [
            "Acquired in-depth familiarity with the 5G test bed - POWDER.",
            "Engaged in the implementation and analysis of various POWDER Profiles, including SRS-Handover, Open5g UERANSIM, and OAISIM NEXTEPC.",
            "Conducted comprehensive research on S1AP and SCTP, pertaining to their roles within the 5G architecture.",
            "Thoroughly covered control plane procedures relevant to 5G networks.",
            "Conducted an extensive exploration of diverse 4G and 5G profiles, thereby enhancing comprehension of their architectural intricacies.",
            "Reviewed and assessed the Neutrino Code Base, an ambitious project aimed at independently implementing a 5G Network with a custom Evolved Packet Core."
        ],
        tech: ["POWDER", "Canva", "WireShark", "Python", "Research Papers"],
        image: project7,
    },
    {
        id: 3,
        title: "Understanding User Problems on Smart Home Devices",
        date: "June 2022 - Aug 2022",
        position: "Research Intern",
        // description: [
        //     "Responsible for going over all the past research done on smart cameras",
        //     "Working on an app which tests smart camera's vulnerability and tinkering with it to understand user perceptions of a vulnerable smart device",
        // ],

        "description": [
            "Undertook the responsibility of reviewing and analyzing existing research on smart cameras, comprehending their technological advancements and implications.",
            "Currently engaged in the development of a cutting-edge application aimed at assessing the vulnerabilities of smart cameras, while also investigating user perceptions of a compromised smart device.",
            "Collaborated with a multidisciplinary team to ensure a holistic approach in the development and testing of the app, incorporating expertise from cybersecurity, user experience, and software development domains.",
            "Conducted thorough testing of the app in controlled environments and real-world scenarios to validate its effectiveness and gather valuable insights.",
            "Implemented various attack scenarios on smart cameras within the app to understand potential security weaknesses and vulnerabilities, facilitating the development of robust countermeasures.",
            "Evaluated user feedback and responses through surveys and usability studies, enabling iterative improvements to enhance the app's usability and overall user experience.",
            "Engaged in constant research and kept abreast of the latest advancements in smart camera technology and cybersecurity trends to ensure the app remains relevant and adaptive to emerging threats.",
            "Presented findings and research outcomes at conferences and industry events, contributing to the collective knowledge and awareness surrounding smart camera security.",
            "Collaborated with industry partners and relevant stakeholders to gain valuable insights, establish strategic partnerships, and promote the adoption of best practices in securing smart camera devices."
        ],
        tech: ["Java", "Research Papers"],
        image: project6,
    },
    {
        id: 4,
        title: "Bill Management System",
        date: "Mar 2023",
        position: "Software Engineer",
        // description: [
        //     "Developed a bill management system for a client",
        //     "Worked on the front-end and back-end of the project",
        //     "Highlight of the project was i18 localization which allowed translation to Arabic ",
        // ],
        "description": [
            "Successfully developed a comprehensive bill management system for a valued client, catering to their specific requirements and business needs.",
            "Took charge of both the front-end and back-end development aspects of the project, ensuring seamless integration and optimal performance.",
            "Implemented a key highlight of the project, i18 localization, facilitating seamless translation of the system into Arabic, thus enhancing accessibility for Arabic-speaking users.",
            "Collaborated closely with the client to gather detailed specifications and conducted thorough analysis to ensure a clear understanding of the desired functionalities and user experience.",
            "Utilized agile development methodologies, ensuring a dynamic and iterative approach to project development, leading to timely deliverables and high client satisfaction.",
            "Implemented robust security measures, adhering to industry best practices, to safeguard sensitive billing information and protect against potential vulnerabilities.",
            "Conducted rigorous testing and quality assurance procedures to identify and rectify any bugs or issues, ensuring a stable and reliable bill management system.",
            "Provided comprehensive documentation and user manuals to aid the client's team in efficiently utilizing and maintaining the system.",
            "Offered post-implementation support and conducted training sessions to empower the client's personnel with the necessary knowledge and skills to maximize the system's potential.",
            "Received commendation from the client for delivering a user-friendly, scalable, and feature-rich bill management system that significantly streamlined their billing processes and improved operational efficiency."
        ],
        tech: ["JavaScript", "React", "Node", "Express", "Vercel", "Tailwind CSS", "i18Localization"],
        image: project5,
    },
    {
        id: 5,
        title: "Portfolio Website",
        date: "Mar 2023",
        position: "Fullstack Developer",
        // description: [
        //     "Worked as Full Stack Developer and used Next JS and Firebase to build a portfolio website for a client",
        // ],
        "description": [
            "Served as a proficient Full Stack Developer, responsible for conceptualizing and developing a captivating portfolio website for a valued client.",
            "Leveraged the power of Next.js, a cutting-edge React framework, and Firebase, a versatile cloud-based platform, to craft an exceptional and dynamic website.",
            "Collaborated closely with the client to comprehend their specific requirements, branding preferences, and desired user experience, ensuring a personalized and tailored approach.",
            "Designed and implemented an aesthetically pleasing and user-friendly front-end, presenting the client's portfolio in an engaging and impactful manner.",
            "Developed and integrated robust back-end functionalities, enabling seamless content management and effortless updates to showcase the client's latest work and achievements.",
            "Utilized responsive design principles to ensure the website's adaptability across various devices, providing an optimal user experience on both desktop and mobile platforms.",
            "Implemented efficient data retrieval and storage mechanisms using Firebase's real-time database and cloud functions, ensuring quick and reliable access to portfolio content.",
            "Incorporated state-of-the-art security measures and authentication protocols to safeguard sensitive user data and protect against potential cyber threats.",
            "Conducted thorough testing and debugging procedures to identify and resolve any performance issues or software glitches, ensuring the website's smooth and error-free operation.",
            "Provided comprehensive documentation and technical support to equip the client with the knowledge and skills to effectively manage and update their portfolio website.",
            "Received accolades from the client for delivering an outstanding portfolio website, perfectly aligning with their vision and contributing to an enhanced online presence and professional image."
        ],
        tech: ["JavaScript", "NextJS", "Node", "Express", "React", "Firebase", "Vercel", "Tailwind CSS"],
        image: project4,
    },
    {
        id: 6,
        title: "ALIF",
        date: "Mar 2023",
        position: "UI/UX Designer",
        // description: [
        //     "Made a working prototype for students having learning and reading disabilities", 
        //     "Researched the target audience, gathered quantitative & qualitative data, designed & tested the prototypes",
        // ],
        "description": [
            "Successfully developed a functional prototype to cater to students with learning and reading disabilities, addressing their specific needs and challenges.",
            "Conducted extensive research on the target audience, employing a combination of quantitative and qualitative methods to gain valuable insights and inform the prototype's design.",
            "Gathered quantitative data through surveys and assessments to analyze patterns and trends, while also collecting qualitative data through interviews and user observations to understand user preferences and pain points.",
            "Employed a user-centered design approach to conceptualize and design the prototype, prioritizing accessibility and ease of use for students with disabilities.",
            "Conducted iterative testing and refinement processes to ensure the prototype's effectiveness and seamless usability for the target audience.",
            "Collaborated with educators, therapists, and domain experts to garner valuable feedback and insights, ensuring the prototype aligned with best practices and educational standards.",
            "Implemented assistive technologies and features, such as text-to-speech, dyslexia-friendly fonts, and customizable reading preferences, to enhance the learning experience for students with diverse needs.",
            "Adhered to strict data privacy and security measures to safeguard sensitive student information, promoting a safe and secure learning environment.",
            "Presented the working prototype to stakeholders, including educators, parents, and representatives from educational institutions, to garner feedback and support for potential implementation.",
            "Received commendation and positive feedback from stakeholders for the prototype's effectiveness, potential impact, and contribution to empowering students with learning and reading disabilities."
        ],
        tech: ["Figma", "User Research", "Testing", "Wireframes", "Prototypes", "Documentation"],
        image: project2,
    },
    {
        id: 7,
        title: "Bitgo Development",
        date: "Mar 2023",
        position: "Full Stack Developer",
        // description: [
        //     "Worked as Full Stack Developer and worked on this using Boostrap and React with a Backend of Node and Express",
        //     "This is a crypto wallet website and allows crypto trading and exchange",
        // ],
        "description": [
            "Contributed as a skilled Full Stack Developer, utilizing Bootstrap and React for the front-end and Node.js with Express for the back-end.",
            "Developed a sophisticated crypto wallet website, empowering users to engage in crypto trading and exchange.",
            "Took an active role in designing and implementing the front-end, ensuring a seamless and visually appealing user interface for an enhanced trading experience.",
            "Implemented responsive design using Bootstrap, ensuring optimal website performance and accessibility across various devices.",
            "Collaborated with a cross-functional team to design and develop the back-end, enabling secure and efficient handling of crypto transactions and user data.",
            "Integrated cryptocurrency APIs and market data sources to provide real-time updates on exchange rates and portfolio values.",
            "Implemented robust security measures, including encryption and authentication protocols, to safeguard user accounts and sensitive financial information.",
            "Conducted rigorous testing and debugging to identify and resolve any issues, ensuring the website's stability and reliability.",
            "Deployed continuous integration and continuous deployment (CI/CD) pipelines to facilitate seamless updates and enhancements.",
            "Provided thorough documentation and technical support to enable smooth operations and future developments.",
            "Received positive feedback from users for delivering a reliable, user-friendly, and feature-rich crypto wallet website, contributing to an efficient and secure trading platform."
        ],
        tech: ["JavaScript", "React", "Node", "Express", "MySQL", "Bootstrap", "CSS"],
        image: project3,
    },
]
const WorkExperience = [
    {
        id: 1,
        company: "Aga Khan University Hospital",
        date: "Jun 2023 - Aug 2023",
        position: "Summer Intern",
        description: [
            "Deliver high-quality, robust production code for a diverse array of projects for clients including",
            "Deliver high-quality, robust production code for collaboration, knowledge shares, and mentorship.",
        ],
    },
    {
        id: 2,
        company: "Engro Corporation",
        date: "Jul 2022 - Aug 2022",
        position: "SAP ABAP Intern",
        // description: [
        //     "I learned coding in ABAP and gained understanding of several SAP Transaction codes.",
        //     "I further branched out by exploring multiple modules of SAP: Materials Management, Plant Maintenance,Production Planning and Financial Accounting and Controlling.",
        // ]
        "description": [
            "Acquired proficient coding skills in ABAP and gained a comprehensive understanding of several SAP Transaction codes.",
            "Expanded knowledge and expertise by exploring diverse modules of SAP, including Materials Management, Plant Maintenance, Production Planning, and Financial Accounting and Controlling.",
            "Developed and implemented ABAP programs to enhance system functionalities and automate business processes, contributing to increased efficiency and productivity.",
            "Collaborated with cross-functional teams to analyze business requirements and design custom solutions within the SAP environment.",
            "Participated in end-to-end project implementations, contributing to successful system deployments and seamless integration with existing business processes.",
            "Conducted testing and debugging procedures to ensure the accuracy and reliability of ABAP programs and SAP transactions.",
            "Provided technical support and assistance to users, addressing queries and resolving issues to optimize SAP system utilization.",
            "Kept up-to-date with the latest developments in ABAP and SAP technologies, incorporating best practices and innovative approaches into coding and system development.",
            "Collaborated with functional experts and key stakeholders to gather requirements and deliver tailored solutions that align with business objectives.",
            "Documented ABAP programs and SAP configurations, ensuring clear and accessible references for future maintenance and knowledge sharing.",
            "Received positive feedback from project managers and team members for consistently delivering high-quality solutions and actively contributing to successful SAP implementations."
        ],
    },
    {
        id: 3,
        company: "TEXT",
        date: "Jun 2021 - Aug 2021",
        position: "Web Developer and Graphic Designer",
        // description: [
        //     "I learned HTML, CSS and did a specialization for UI/UX on Coursera",
        //     "I worked as a graphic designer, front-end developer and designed their website"
        // ]
        "description": [
            "Acquired comprehensive skills in HTML and CSS, laying a strong foundation for front-end web development.",
            "Pursued a specialized course in UI/UX on Coursera, gaining valuable insights into user interface and user experience design principles.",
            "Served as a versatile professional, functioning as both a graphic designer and front-end developer, ensuring a cohesive and visually appealing website design.",
            "Employed creative design methodologies to craft engaging and user-friendly web interfaces, emphasizing user-centricity and intuitive navigation.",
            "Collaborated closely with cross-functional teams to gather design requirements, understanding their vision and translating it into effective design solutions.",
            "Developed and implemented responsive website designs, ensuring optimal performance across various devices and screen sizes.",
            "Conducted usability testing and gathered user feedback to iteratively refine website designs and enhance the overall user experience.",
            "Optimized website performance through efficient coding practices and image optimization techniques, ensuring fast loading times and seamless user interactions.",
            "Utilized design tools such as Adobe Photoshop, Illustrator, and Sketch to create visually stunning graphics and design elements.",
            "Contributed to the end-to-end website development process, from design conceptualization to front-end implementation, resulting in a successful and visually appealing website.",
            "Received praise from clients and team members for delivering aesthetically pleasing designs and user-friendly websites, contributing to increased user engagement and brand recognition."
        ],
    },
    {
        id: 4,
        company: "Chevron Lubricants Pvt. Ltd.",
        date: "Jun 2019 - Aug 2019",
        position: "Summer Intern",
        // description: [
        //     "I worked with engineers and technicians in the supply chain department to learn the intricacies of oil tank repairs.",
        //     "Understood the tank’s structure with the aid of drawings under the supervision of engineers of Petrocon Pvt. Ltd",
        // ]
        "description": [
            "Collaborated closely with engineers and technicians in the supply chain department to gain valuable insights into the complexities of oil tank repairs.",
            "Engaged in detailed study of the tank's structure, utilizing drawings and under the supervision of engineers from Petrocon Pvt. Ltd.",
            "Participated in on-site visits to oil tank facilities to observe repair processes and maintenance procedures firsthand.",
            "Assisted in conducting inspections and assessments of oil tanks to identify repair requirements and ensure compliance with safety standards.",
            "Learned to use specialized equipment and tools involved in oil tank repairs, honing practical skills for effective maintenance procedures.",
            "Contributed to data analysis efforts, assisting in the evaluation of repair data and maintenance records to optimize repair strategies and minimize downtime.",
            "Acquired knowledge of industry best practices and safety protocols related to oil tank repairs, emphasizing the importance of environmental protection.",
            "Developed strong communication skills by liaising with various stakeholders, including engineers, technicians, and project managers, ensuring efficient project coordination.",
            "Took part in team meetings and training sessions, actively participating in discussions on tank repair techniques and emerging industry trends.",
            "Received commendation from the engineering team at Petrocon Pvt. Ltd. for the dedication and enthusiasm shown in learning about oil tank repairs."
        ],
    },
    {
        id: 5,
        company: "Dr Ziauddin University Hospital",
        date: "Jun 2019 - Aug 2019",
        position: "Summer Intern",
        // description: [
        //     "I interned in the Cardiology Department, shadowed cardiologists through Stress ECG and non-invasive procedures.",
        //     "Organized recreational activities for the patients to alleviate their stress and cheer them up."
        // ]
        "description": [
            "Completed a rewarding internship in the Cardiology Department, where I had the opportunity to shadow experienced cardiologists during Stress ECG and non-invasive procedures.",
            "Engaged with patients and provided emotional support, assisting them throughout their medical examinations to ensure a positive and comforting experience.",
            "Organized and facilitated recreational activities for patients, recognizing the importance of alleviating their stress and fostering a cheerful environment during their hospital stay.",
            "Developed a deeper understanding of cardiology practices, diagnostics, and patient care, while actively learning from skilled medical professionals.",
            "Assisted in managing patient records and medical documentation, demonstrating attention to detail and accuracy in maintaining essential healthcare information.",
            "Collaborated with the healthcare team to coordinate patient appointments and ensure smooth clinic operations.",
            "Participated in medical rounds and discussions, contributing insights and observations that helped enhance patient care.",
            "Adhered to strict patient confidentiality guidelines and ethical principles, prioritizing patient privacy and maintaining the highest level of professionalism.",
            "Experienced the fulfillment of positively impacting patients' lives and witnessing the crucial role of empathy and compassionate care in the healing process.",
            "Received praise from supervising physicians for my dedication, strong work ethic, and genuine concern for patient well-being."
        ],

    },
    {
        id: 6,
        company: "Sketches by Sarim",
        date: "Jun 2019 - Aug 2019",
        position: "Summer Intern",
        // description: [
        //     "Personally, I am a self-taught artist who sketches realistic portraits with intricate details using innovative art skills.",
        //     "Manage custom orders, which portray my ability to adapt to problem while maintaining the quality of work.",
        // ]
        "description": [
            "As a self-taught artist, I specialize in creating captivating and realistic portraits, infusing them with intricate details that showcase my innovative art skills.",
            "Proficiently manage custom orders, demonstrating my adaptability to address challenges while consistently delivering high-quality artwork.",
            "Employ a variety of artistic techniques, such as shading, blending, and precision detailing, to bring life and emotion to each portrait.",
            "Utilize a wide range of art mediums, including graphite, charcoal, and pastels, to achieve diverse artistic expressions and cater to individual preferences.",
            "Collaborate closely with clients to understand their vision and requirements, ensuring that each portrait captures the essence and personality of the subject.",
            "Pay meticulous attention to client feedback and preferences, iterating on artwork as needed to exceed expectations and achieve utmost satisfaction.",
            "Promote and showcase my artwork on various online platforms and social media, fostering a growing community of art enthusiasts and patrons.",
            "Participate in art exhibitions and local events, gaining exposure and recognition for my talent and dedication to the art form.",
            "Constantly challenge myself to explore new artistic styles and subjects, expanding my creative horizons and honing my skills as an artist.",
            "Received acclaim from clients and admirers for the exceptional quality of my artwork and the ability to capture the essence of individuals in my portraits."
        ],

    }


]

export { ProjectData, WorkExperience };

// module.exports = {
//     ProjectData,
//     WorkExperience,
// }
const Education = () => {
    return (
        <div className="font-roboto bg-opacity-90">
            <div className="mx-40 my-24">

                <div className="flex items-center justify-center text-4xl text-skillsColor">
                    <h1>EDUCATION</h1>
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-20">


                    <div className=" shadow-[inset_1px_1px_1px_1px_rgba(148,163,184,0.8)] group col-span-1 rounded-[12px] px-5 py-5 text-skillsText mt-10 hover:cursor-pointer hover:bg-linecolor/5 hover:shadow-[inset_1px_1px_1px_1px_rgba(148,163,184,0.8)] hover:drop-shadow-lg transition duration-300 ease-in-out">
                        <div className="flex flex-col">
                            <div>
                                <h1 className="text-xl text-linecolor group-hover:text-skillsColor">
                                    Lahore University of Management Sciences
                                </h1>
                            </div>
                            <div className="text-lg">
                                <p>2020-2024</p>
                            </div>
                            <div className="text-lg pt-2">
                                <p>Bachelors Computer Science</p>
                            </div>
                            <div className="mt-text-sm text-skillsColor">
                                <p>cGPA ~ 3.71</p>
                            </div>

                        </div>
                    </div>
                    <div className=" shadow-[inset_1px_1px_1px_1px_rgba(148,163,184,0.8)] group col-span-1 rounded-[12px] px-5 py-5 text-skillsText mt-10 hover:cursor-pointer hover:bg-linecolor/5 hover:shadow-[inset_1px_1px_1px_1px_rgba(148,163,184,0.8)] hover:drop-shadow-lg transition duration-300 ease-in-out">
                        <div className="flex flex-col">
                            <div>
                                <h1 className="text-xl text-linecolor group-hover:text-skillsColor">
                                    Karachi Grammar School (KGS)
                                </h1>
                            </div>
                            <div className="text-lg">
                                <p>2018-2020</p>
                            </div>
                            <div className="text-lg pt-2">
                                <p>A Levels</p>
                            </div>
                            <div className="mt-text-sm text-skillsColor">
                                <p>Grades: 4A*s & As</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Education
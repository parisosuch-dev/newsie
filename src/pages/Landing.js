import { useState } from "react";
import { Button } from "../components/Button";
import { AboutSection } from "../components/AboutSection";

export const Landing = () => {
    const topics = ['World News', 'US News', 'Politics', 'Business', 'Tech', 'Medical', 'Space', 'Entertainment', 'Sports']
    const [selectedTopics, setSelectedTopics] = useState([]);

    return (
        <div className="h-screen bg-gradient-to-tr from-violet-500 to-orange-300 flex flex-col items-center justify-center space-y-0">
            <div className="bg-white text-void shadow-2xl p-4 sm:p-8 flex flex-col justify-between rounded-lg w-11/12 h-2/3 sm:h-3/4 sm:w-1/3">
                <div>
                    <h1 className="text-3xl sm:text-7xl font-unbounded font-semibold tracking-wider text-center">Newsie</h1>
                    <h2 className="font-inter font-thin text-xs sm:text-lg text-center">A digestable newsletter powered by AI. 📰</h2>
                </div>
                <AboutSection />
                <div className="">
                    <p className="font-inter text-md sm:text-lg font-semibold">Select what news topics you would like to receive:</p>
                    <div className="pt-2 grid grid-cols-3 sm:grid-cols-3 text-center gap-2 font-inter">
                        {topics.map((item) => (
                            <Button topic={item} key={item} setSelectedTopics={setSelectedTopics} selectedTopics={selectedTopics}></Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pt-8 shadow-2xl w-11/12 sm:w-1/3">
                <input
                    className="pl-8 py-2 rounded-tl-md rounded-bl-md w-2/3 outline-none font-inter text-sm sm:text-lg"
                    placeholder="your email address"
                />
                <button
                    className="bg-violet-500 rounded-tr-md rounded-br-md p-2 text-white font-inter font-medium tracking-tight w-1/3 text-sm sm:text-lg"
                >subscribe</button>
            </div>
        </div>
    );
};
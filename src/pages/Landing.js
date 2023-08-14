export const Landing = () => {
    return (
        <div className="h-screen bg-gradient-to-tr from-violet-500 to-orange-300 flex flex-col items-center justify-center space-y-0">
            <div className="bg-white text-void shadow-2xl p-8 rounded-lg h-3/4 w-1/3">
                <h1 className="text-7xl font-unbounded font-semibold tracking-wider text-center">Newsie</h1>
                <h2 className="font-inter font-thin text-md text-center">A digestable newsletter powered by AI. 📰</h2>
                <div className="pt-8">
                    <p className="font-inter text-lg font-semibold">Select what news topics you would like to receive:</p>
                    <div className="pt-2 grid grid-cols-3 text-center gap-2 font-inter">
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">World News</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">US News</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">Politics</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">Business</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">Tech</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">Medical</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">Space</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">Entertainment</button>
                        <button className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300">Sports</button>
                    </div>
                </div>
            </div>
            <div className="pt-8 shadow-2xl w-1/3">
                <input
                    className="pl-8 py-2 placeholder:text-orange-300 rounded-tl-md rounded-bl-md w-2/3 outline-none font-inter"
                    placeholder="your email address"
                />
                <button className="bg-violet-500 rounded-tr-md rounded-br-md p-2 text-white font-inter font-medium tracking-tight w-1/3">subscribe</button>
            </div>
        </div>
    );
};
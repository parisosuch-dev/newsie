export const Landing = () => {
    return (
        <div className="h-screen relative bg-void text-void flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center bg-stark w-1/3 h-3/4 rounded-lg">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-fuchsia-300 to-jewel opacity-100 blur-2xl"></div>
                <div className="relative w-full h-full rounded-lg text-center p-4 bg-stark flex flex-col justify-between">
                    <div className="space-y-2">
                        <h1 className="font-unbounded font-semibold text-8xl underline">Newsie</h1>
                        <p className="font-inter text-xl tracking-widest">the AI powered newsletter.</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <input
                            className="bg-stark text-black border-2 border-fuschia focus:outline-none w-3/4 p-2 rounded-tl-md rounded-bl-md ring-fuchsia-300 placeholder:text-md placeholder:font-inter placeholder:text-void"
                            placeholder="enter your email"
                        />
                        <button className="bg-fuschia w-1/4 p-2 rounded-tr-md rounded-br-md text-white font-medium tracking-tight font-inter">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
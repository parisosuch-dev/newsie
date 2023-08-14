import { useState } from "react";

export const Button = (props) => {
    const { topic, selectedTopics, setSelectedTopics } = props;
    const [active, setActive] = useState(false);
    const buttonStyle = "border-2 border-orange-300 rounded-2xl p-1 text-xs sm:text-lg"
    const activeStyle = buttonStyle + " bg-orange-300 text-white"

    const handleClick = () => {
        setActive(!active);
        // if it is not active, add it to selectedTopics
        if (!active) {
            selectedTopics.push(topic);
            setSelectedTopics(selectedTopics);
        }
        // remove it from list
        if (active) {
            const index = selectedTopics.indexOf(topic);
            selectedTopics.splice(index, 1);
            setSelectedTopics(selectedTopics);
        }
    }

    return (
        <button
            className={active ? activeStyle : buttonStyle}
            onClick={handleClick}
        >
            {topic}
        </button>
    )
}
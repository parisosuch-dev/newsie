export const Button = (props) => {
    const { topic, selectTopic } = props;

    return (
        <button
            className="border-2 border-orange-300 rounded-2xl p-1 transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1 hover:shadow-orange-300"
        >
            {topic}
        </button>
    )
}
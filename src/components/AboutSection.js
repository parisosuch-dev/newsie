export const AboutSection = () => {
    const pStyle = "text-lg font-inter font-semibold bg-gray-300/50 rounded-3xl px-2 py-1 w-fit transition ease-in-out delay-50 hover:shadow-md hover:-translate-y-1"

    return (
        <div className="space-y-2">
            <p className={pStyle}>Daily email on your favorite news topics.</p>
            <p className={pStyle}>Summaries in a digestable format.</p>
            <p className={pStyle}>Summaries powered by AI through GPT.</p>
            <p className={pStyle}>Unsubscribe at any time.</p>
        </div>
    )
}
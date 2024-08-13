import { about } from "@/data/paragraphs";

const About: () => JSX.Element = () => {
    const textStyle = "text-slate-100 font-homeVideo pb-2";
    const containerStyle = "bg-gray-900 rounded-md p-4";
    const containerCustomStyle = "bg-white rounded-md p-4";
    const customTextStyle = "text-black font-homeVideo";

    return (
        <div className="flex flex-col justify-around">
            {about.map(({ personal, carreer, honorableMentions }, id) => (
                <div className="flex flex-col gap-8" key={id}>
                    <div className={containerStyle}>
                        <h1 className={textStyle}>{personal.title}</h1>
                        <p className={textStyle}>{personal.text}</p>
                    </div>
                    <div className={containerStyle}>
                        <h1 className={textStyle}>{carreer.title}</h1>
                        <p className={textStyle}>{carreer.text}</p>
                    </div>
                    <div className={containerCustomStyle}>
                        <h1 className={customTextStyle}>
                            {honorableMentions.text}
                        </h1>
                        <div className="flex flex-row flex-wrap justify-between pt-2">
                            {honorableMentions.list.map(
                                ({ link, icon, text }, id) => (
                                    <a href={link} target="_blank" key={id}>
                                        <img
                                            src={icon}
                                            className="h-12"
                                            alt={text}
                                        />
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default About;

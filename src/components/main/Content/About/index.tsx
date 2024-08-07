import { about } from "@/data/paragraphs";

const About = () => {
    const textStyle = "text-slate-100 font-homeVideo pb-2";
    const containerStyle = "bg-gray-900 rounded-md p-4";
    const containerCustomStyle = "bg-white rounded-md p-4";
    const customTextStyle = "text-black font-homeVideo";
    return (
        <div className="flex flex-col justify-around">
            {about.map(({ personal, carreer, honorableMentions }) => (
                <div className="flex flex-col gap-8">
                    <div className={containerStyle}>
                        <h1 className={textStyle}>{personal[0].title}</h1>
                        <p className={textStyle}>{personal[0].text}</p>
                    </div>
                    <div className={containerStyle}>
                        <h1 className={textStyle}>{carreer[0].title}</h1>
                        <p className={textStyle}>{carreer[0].text}</p>
                    </div>
                    <div className={containerCustomStyle}>
                        <h1 className={customTextStyle}>
                            {honorableMentions[0].text}
                        </h1>
                        <div className="flex flex-row flex-wrap justify-between pt-2">
                            {honorableMentions[0].list.map(({ link, icon }) => {
                                return (
                                    <a href={link} target="_blank">
                                        <img src={icon} className="h-12" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default About;

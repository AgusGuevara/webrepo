import { tools } from "@/data/tools";
import React from "react";

const Tools: () => JSX.Element = () => {
    return (
        <div className="flex flex-row w-full h-auto gap-2 overflow-scroll lg:overflow-hidden lg:h-[95%]">
            {tools.map(({ label, nodes }, id) => (
                <div className="max-h-full w-full p-2" key={id}>
                    <div className="pb-4">
                        <h1 className="font-homeVideo">{label}</h1>
                    </div>
                    <div
                        className="flex flex-col justify-start gap-4 overflow-scroll lg:overflow-hidden lg:h-full"
                        key={label}
                    >
                        {nodes.map(
                            ({ toolname, toolcomponent, experience }) => (
                                <div
                                    key={toolname}
                                    className="flex flex-row justify-start content-center w-[95%] h-[50px] gap-2 p-3 bg-gray-200 rounded-md lg:h-auto"
                                >
                                    <span>
                                        {React.cloneElement(toolcomponent, {
                                            size: 30,
                                        })}
                                    </span>
                                    <p className="pt-1 text-black font-homeVideo">
                                        {toolname}
                                    </p>
                                    <p className="font-homeVideo text-gray-400 pt-2 text-xs overflow-hidden">
                                        {experience}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tools;

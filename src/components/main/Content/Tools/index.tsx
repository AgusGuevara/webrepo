import { tools } from "@/data/tools";
import React from "react";

const Tools = () => {
    return (
        <div className="flex flex-row w-full gap-24">
            {tools.map(({ label, nodes }) => (
                <div
                    className="flex flex-col justify-start w-1/3 gap-10"
                    key={label}
                >
                    <h1 className="font-homeVideo">{label}</h1>
                    {nodes.map(({ toolname, toolcomponent }) => (
                        <div
                            key={toolname}
                            className="flex flex-row justify-start w-1/2 gap-5 p-3 bg-gray-200 rounded-md"
                        >
                            <span>
                                {React.cloneElement(toolcomponent, {
                                    size: 30,
                                })}
                            </span>
                            <p className="pt-1 text-black font-homeVideo">
                                {toolname}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Tools;

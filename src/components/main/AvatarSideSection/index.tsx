import { useState, useCallback } from "react";
import ProfilePicture from "../ProfilePicture";
import Title from "../Title";
import PanelSelector from "../PanelSelector";
import MainPanel from "../MainPanel";

function AvatarSideSection() {
    const [activePanel, setActivePanel] = useState("work");

    const retrieveActivePanel = useCallback((panel: string) => {
        setActivePanel(panel);
    }, []);

    return (
        <div
            className="flex flex-col h-full md:flex-row md:min-h-fit"
            role="sidebar-avatar"
        >
            <div className="flex flex-wrap justify-between md:w-[250px] md:flex-col lg:w-1/4 order-1 lg:flex-nowrap h-full">
                <Title />
                <PanelSelector activeOption={retrieveActivePanel} />
                <ProfilePicture />
            </div>
            <MainPanel panel={activePanel} />
        </div>
    );
}

export default AvatarSideSection;

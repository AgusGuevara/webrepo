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
        <div className="flex w-full h-full" role="sidebar-avatar">
            <div className="flex flex-col justify-between w-1/4">
                <Title />
                <PanelSelector activeOption={retrieveActivePanel} />
                <ProfilePicture />
            </div>
            <div className="w-3/4">
                <MainPanel panel={activePanel} />
            </div>
        </div>
    );
}

export default AvatarSideSection;

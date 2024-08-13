import { useState, useCallback } from "react";
import ProfilePicture from "../ProfilePicture";
import Title from "../Title";
import PanelSelector from "../PanelSelector";
import MainPanel from "../MainPanel";

const Panels: React.FC = () => {
    const [activePanel, setActivePanel] = useState("work");

    const retrieveActivePanel = useCallback((panel: string) => {
        return setActivePanel(panel);
    }, []);

    return (
        <>
            <div className="flex flex-wrap justify-between h-full order-1 lg:w-1/4 lg:flex-nowrap lg:flex-col">
                <Title />
                <PanelSelector activeOption={retrieveActivePanel} />
                <ProfilePicture />
            </div>
            <MainPanel panel={activePanel} />
        </>
    );
};

export default Panels;

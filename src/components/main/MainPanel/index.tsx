import { FC } from "react";
import Work from "../Content/Work";

interface Props {
    panel: string;
}

const renderBasedOnPanel = (panel: string): JSX.Element => {
    switch (panel) {
        case "work":
            return <Work />;
        default:
            return <Work />;
    }
};

const MainPanel: FC<Props> = ({ panel }) => {
    return (
        <div className="flex justify-center w-full h-full p-4 text-white align-middle">
            {renderBasedOnPanel(panel)}
        </div>
    );
};

export default MainPanel;

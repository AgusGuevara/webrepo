import { FC } from "react";
import Work from "../Content/Work";
import Tools from "../Content/Tools";

interface Props {
    panel: string;
}

const renderBasedOnPanel = (panel: string): JSX.Element => {
    switch (panel) {
        case "work":
            return <Work />;

        case "tools":
            return <Tools />;
        case "about":
            return <div>about</div>;
        case "contact":
            return <div>contact</div>;

        default:
            return <Work />;
    }
};

const MainPanel: FC<Props> = ({ panel }) => {
    return (
        <div className="flex justify-center w-full h-full p-4 align-middle">
            {renderBasedOnPanel(panel)}
        </div>
    );
};

export default MainPanel;

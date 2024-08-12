import { FC } from "react";
import Work from "../Content/Work";
import Tools from "../Content/Tools";
import About from "../Content/About";
import Contact from "../Content/Contact";

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
            return <About />;
        case "contact":
            return <Contact />;
        default:
            return <Work />;
    }
};

const MainPanel: FC<Props> = ({ panel }) => {
    return (
        <div className="flex flex-row justify-center h-full w-full items-center p-4 order-2">
            {renderBasedOnPanel(panel)}
        </div>
    );
};

export default MainPanel;

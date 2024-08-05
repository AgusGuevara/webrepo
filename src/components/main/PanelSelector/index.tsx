import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { avatarButtons } from "@/config/buttons";
import { FC } from "react";

interface Props {
    activeOption(value: string): void;
}

export const PanelSelector: FC<Props> = ({ activeOption }) => {
    const btnStyling = "text-white font-homeVideo";

    const handleClick = (value: string) => {
        return activeOption(value);
    };

    return (
        <ToggleGroup
            className="flex flex-wrap justify-between w-1/4 gap-3 h-1/3"
            type="single"
            defaultValue="work"
        >
            {avatarButtons.map(({ label, value }) => (
                <ToggleGroupItem
                    key={value}
                    className={btnStyling}
                    value={value}
                    aria-label="See agus work experience"
                    onClick={() => handleClick(value)}
                >
                    {label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
};

export default PanelSelector;

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { avatarButtons } from "@/config/buttons";
import { FC } from "react";

interface Props {
    activeOption(value: string): void;
}

export const PanelSelector: FC<Props> = ({ activeOption }) => {
    const btnStyling = "text-white font-homeVideo";

    return (
        <ToggleGroup
            className="flex flex-wrap justify-between gap-3 order-3 w-full h-1/3 md:w-1/4 md:order-2"
            type="single"
            defaultValue="work"
        >
            {avatarButtons.map(({ label, value }) => (
                <ToggleGroupItem
                    key={value}
                    className={btnStyling}
                    value={value}
                    aria-label="work-experience"
                    onClick={() => activeOption(value)}
                >
                    {label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
};

export default PanelSelector;

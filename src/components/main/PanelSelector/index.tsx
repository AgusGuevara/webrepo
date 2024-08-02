import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const PanelSelector = () => {
    const btnStyling = 'text-white font-homeVideo'
    return (
        <div className="absolute top-[250px] left-[0]">
            <ToggleGroup className="flex w-[100px] h-[150px] flex-wrap gap-3 justify-between" type="single" >
                <ToggleGroupItem className={btnStyling} value="work" aria-label="See agus work experience">Work</ToggleGroupItem>
                <ToggleGroupItem className={btnStyling} value="personal" aria-label="See agus work style">Personal</ToggleGroupItem>
                <ToggleGroupItem className={btnStyling} value="jeje" aria-label="See agus jeje">Contact</ToggleGroupItem>
                <ToggleGroupItem className={btnStyling} value="not jeje" aria-label="See agus not jeje">Workin on</ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}

export default PanelSelector
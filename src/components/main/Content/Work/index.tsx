import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { jobs } from "@/data/paragraphs";

const Work = () => {
    return (
        <Accordion
            type="multiple"
            className="self-center w-full pb-32 text-lg font-homeVideo text-slate-200"
        >
            {jobs.map(({ date, company, type, info }, idx) => (
                <AccordionItem value={`item-${idx}`} key={idx}>
                    <AccordionTrigger>
                        <span className="w-1/3">{company}</span>
                        <span className="w-1/3 text-red-500">{date}</span>
                        <span className="w-1/3">{type}</span>
                    </AccordionTrigger>
                    <AccordionContent>{info}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default Work;

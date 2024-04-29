import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import CardContent from "./cardcontent"
import { CardDropDownContent } from "@/app/data/data"
import { DecideIcon } from "@/app/utils"

export function CardDropDown(props: CardDropDownContent) {
    return (
        <Accordion type="single" collapsible orientation='horizontal' className='flex h-fit justify-center items-center shadow-xl btn-animation bg-background rounded'>
            <AccordionItem value="item-1" className='pl-1 pr-1 border-none flex flex-col w-full'>
                <AccordionTrigger className='text-base md:text-xl hover:no-underline'>
                    <div className='flex justify-center items-center h-full'>
                        {DecideIcon(props.icon)}
                        {props.description}
                    </div>
                </AccordionTrigger>
                <AccordionContent className='bg-gradient-to-b from-background to-muted text-primary flex rounded shadow-lg px-4 m-4'>
                    <CardContent type={props.content}/>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

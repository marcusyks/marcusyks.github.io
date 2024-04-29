import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import InternshipCard from "./internshipcard"
import { InternshipCardContent } from "./internshipcard";
import { JSONContent } from "@/app/structure/mainpage";

export default function CarouselCards(props: JSONContent){
    const dataArray: InternshipCardContent[] = props.data as unknown as InternshipCardContent[];

    const items = dataArray.map((element: InternshipCardContent, index: number) => (
        <InternshipCard key={index} {...element}/>
    ));

    return(
        <Carousel className="bg-background flex justify-center items-center rounded shadow-2xl w-full lg:w-fit">
            <CarouselContent className="text-center">
                {items}
            </CarouselContent>
            <CarouselPrevious className='left-2'/>
            <CarouselNext className='right-2'/>
        </Carousel>
    )
}
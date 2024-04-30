import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import InternshipCard from "./internshipcard"
import { InternshipCardContent, InternshipContent } from "@/app/data/data";

export default function CarouselCards(props: InternshipContent){
    const internships: InternshipCardContent[] = props.internships;

    const items = internships.map((element: InternshipCardContent, index: number) => (
        <InternshipCard key={index} {...element}/>
    ));

    return(
        <Carousel className="bg-background flex justify-center items-center rounded shadow-2xl shadow-foreground/50 w-full lg:w-fit">
            <CarouselContent className="text-center">
                {items}
            </CarouselContent>
            <CarouselPrevious className='left-2'/>
            <CarouselNext className='right-2'/>
        </Carousel>
    )
}
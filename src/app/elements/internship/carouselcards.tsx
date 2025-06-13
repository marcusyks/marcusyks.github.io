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
        <Carousel className="relative justify-center items-center w-full h-1/2 lg:w-fit">
            <CarouselContent className="text-center">
                {items}
            </CarouselContent>
            <CarouselPrevious className='left-0'/>
            <CarouselNext className='right-0'/>
        </Carousel>
    )
}
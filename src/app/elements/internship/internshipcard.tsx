import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import InternshipDrawer from "./internshipdrawer";
import { InternshipCardContent } from "@/app/data/data";

export default function InternshipCard(props: InternshipCardContent){
    return(
        <CarouselItem className="flex flex-col gap-12 items-center rounded p-12 justify-center align-center">
            <Image
                src={props.image_src}
                width={160}
                height={160}
                alt={props.image_alt}
                className="rounded-full md:w-[240px] md:h-[240px] shadow-sm shadow-foreground/70"
            />
            <InternshipDrawer {...props}/>
        </CarouselItem>
    )
}

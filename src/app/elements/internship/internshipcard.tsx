import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import InternshipDrawer from "./internshipdrawer";
import { InternshipCardContent } from "@/app/data/data";

export default function InternshipCard(props: InternshipCardContent){
    return(
        <CarouselItem className="flex flex-col gap-6 items-center rounded p-12 bg-gradient-to-b from-background to-muted">
            <h1>{props.header}</h1>
            <Image
                src={props.image_src}
                width={200}
                height={200}
                alt={props.image_alt}
                className="rounded-xl"
            />
            <InternshipDrawer {...props}/>
        </CarouselItem>
    )
}

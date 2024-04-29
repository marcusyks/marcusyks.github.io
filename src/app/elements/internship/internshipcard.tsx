import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import InternshipDrawer from "./internshipdrawer";
import { useTheme } from "next-themes";

export type InternshipCardContent  = {
    header: string,
    image_src: string,
    image_alt: string,
    role: string,
    description: string[],
    skills : string[]
}

export default function InternshipCard(props: InternshipCardContent){
    const { theme } = useTheme();

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

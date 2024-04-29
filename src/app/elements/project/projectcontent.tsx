import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { EllipsisVerticalIcon } from "lucide-react"
import Image from "next/image"
import { PrintSkills } from "./projectcard"
import Link from "next/link"

type ProjectContent = {
    image_src : string,
    image_alt: string,
    project_name : string,
    long_description: string,
    skills: string[],
    link: string,
}

export default function ProjectContent(props: ProjectContent){
    return(
        <Sheet>
            <SheetTrigger>
                <div className="btn-animation bg-background text-foreground rounded-full w-fit h-fit p-2 shadow-lg">
                    <EllipsisVerticalIcon size={20}/>
                </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col pt-20 w-full sm:w-[540px] text-center overflow-scroll">
                <SheetHeader className="flex justify-center items-center">
                    <div className="w-full flex flex-col items-center justify-center gap-6">
                        <Image
                            src={props.image_src}
                            width={150}
                            height={150}
                            alt={props.image_alt}
                        />
                        <SheetTitle className='text-3xl flex flex-wrap'>{props.project_name}</SheetTitle>
                    </div>
                </SheetHeader>
                <SheetDescription className='flex flex-col items-center gap-12'>
                    <div className="px-4">
                        {props.long_description}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {PrintSkills(props.skills, false)}
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <span>Take a look at my project:</span>
                        <div className="bg-foreground text-background p-4 shadow-lg rounded-full btn-animation font-bold">
                            <Link href={props.link} target='_blank'>
                                Link
                            </Link>
                        </div>
                    </div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

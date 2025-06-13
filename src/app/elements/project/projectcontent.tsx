import { ProjectSubContent } from "@/app/data/data"
import { PrintSkills } from "@/app/utils"
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
import Link from "next/link"

export default function ProjectContent(props: ProjectSubContent){
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
                            width={120}
                            height={120}
                            alt={props.image_alt}
                            className="rounded-xl"
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
                    <div className='flex flex-col gap-4 items-center'>
                        <span>Take a look at my project:</span>
                        <div className="bg-foreground text-background p-2 shadow-lg rounded-xl btn-animation font-bold">
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

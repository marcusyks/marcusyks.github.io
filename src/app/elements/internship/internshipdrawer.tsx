import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import SidebarContent from "../sidebarcontent"
import { CheckIcon } from "lucide-react"
import { InternshipCardContent } from "@/app/data/data"
import { PrintDescription, PrintSkills } from "@/app/utils"

export default function InternshipDrawer(props: InternshipCardContent){
    return(
        <Sheet>
            <SheetTrigger>
                <div className='rounded bg-foreground text-background btn-animation p-3 text-sm font-bold shadow-lg shadow-background/50'>
                    Find Out More
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
                        <SheetTitle className='text-3xl flex flex-wrap'>{props.header}</SheetTitle>
                        <SheetTitle className='flex flex-wrap text-center font-normal'>{props.role}</SheetTitle>
                    </div>
                </SheetHeader>
                <SheetDescription className='flex flex-col items-center justify-center'>
                    <div className='m-2'>
                        {props.skills.length !== 0  ?
                            <div className="p-3 flex flex-col gap-3">
                                <div className='mb-2'>Jobs Roles:</div>
                                {PrintDescription(props.description)}
                            </div>
                            :
                            <></>
                        }
                    </div>
                    <div className='m-2'>
                        {props.skills.length !== 0  ?
                            <div className="p-3">
                                <div className='mb-2'>Skills Learnt:</div>
                                {PrintSkills(props.skills, false)}
                            </div>
                            :
                            <SidebarContent allow={false}/>
                        }
                    </div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}


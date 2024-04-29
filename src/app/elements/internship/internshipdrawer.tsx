import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { InternshipCardContent } from "./internshipcard"
import SidebarContent from "../sidebarcontent"
import { PrintSkills } from "../project/projectcard"
import { CheckIcon } from "lucide-react"

function PrintDescription(items: string[]){
    return items.map((item,index)=>(
        <div key={index} className='shadow-lg flex justify-center items-center rounded-full font-bold border-2 p-3'>
            <CheckIcon size={50}/>
            <div className='pl-3'>{item}</div>
        </div>
    ))
}

export default function InternshipDrawer(props: InternshipCardContent){
    return(
        <Sheet>
            <SheetTrigger>
                <div className='rounded bg-background text-foreground btn-animation p-3 text-sm font-bold shadow-lg'>
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


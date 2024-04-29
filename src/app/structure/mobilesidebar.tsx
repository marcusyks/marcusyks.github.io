import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import SidebarContent from "../elements/sidebarcontent"

export default function MobileSideBar(){
    return(
        <div className="right-0 fixed lg:hidden z-20">
            <Sheet>
                <SheetTrigger className="bg-background p-2 m-2 rounded-full shadow-lg border">
                    <MenuIcon/>
                </SheetTrigger>
                <SheetContent className='w-fit'>
                    <SidebarContent allow={true} />
                </SheetContent>
            </Sheet>
        </div>
    )
}


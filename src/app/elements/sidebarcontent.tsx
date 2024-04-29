import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Button } from "@/components/ui/button"
  import { ContactIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
  import Link from "next/link";
  import { ModeToggle } from "./modetoggle";

  type AllowToggle = {
    allow : boolean,
  }

  export default function SidebarContent(props: AllowToggle) {
    return (
        <Drawer>
            <div className="flex flex-col gap-4 items-center m-4">
                {/* Content */}
                {props.allow ? <ModeToggle/> : <></>}
                <DrawerTrigger className="bg-primary flex p-3 rounded text-primary-foreground btn-animation">
                    <ContactIcon/>
                </DrawerTrigger>
            </div>
            <DrawerContent className="bg-background">
                <DrawerHeader>
                    <DrawerTitle>Contact</DrawerTitle>
                    <DrawerDescription>Here are my contact methods</DrawerDescription>
                    <div className="flex gap-4 bg-background text-foreground mt-6 sm:justify-start justify-center" >
                        <Link href="https://github.com/marcusyks" target="_blank">
                            <GithubIcon size={40} className="btn-animation"/>
                        </Link>
                        <Link href='https://linkedin.com/in/marcusyks' target="_blank">
                            <LinkedinIcon size={40} className="btn-animation"/>
                        </Link>
                        <Link href='mailto:marcus.yks27@gmail.com'>
                            <MailIcon size={40} className="btn-animation"/>
                        </Link>
                    </div>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
  }
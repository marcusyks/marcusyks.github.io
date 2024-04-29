import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ReactElement } from "react"

type HoverWord = {
    word: string,
    description: string,
    picture: ReactElement,
}

export default function HoverWord(props: HoverWord){
    return(
        <HoverCard>
            <HoverCardTrigger>
                <span className="cursor-pointer text-bold underline decoration-foreground">{props.word}</span>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col justify-center items-center">
                {props.picture}
                <p className="p-2 text-2xl">{props.description}</p>
            </HoverCardContent>
        </HoverCard>
    )
}


import { Badge } from "@/components/ui/badge";

export type SkillsUsedContent = {
    name : string,
    level : number,
}

export type SkillsCardContent = {
    sector : string,
    skills_used : SkillsUsedContent[],
}

function FindCardColor(level: number){
    switch(level){
        case 3:
            return "bg-green-200"
        case 2:
            return "bg-yellow-200"
        case 1:
            return "bg-orange-200"
    }
}

function PrintSkillsCards(cards: SkillsUsedContent[]) {
    return cards.map((element, index) => (
        <Badge key={index} variant='outline' className={`p-2 lg:p-3 shadow-lg border-0 ${FindCardColor(element.level)} text-black`}>{element.name}</Badge>
    ));
}


export default function SkillsCard(props: SkillsCardContent){
    return(
        <div className="flex flex-col gap-2 p-4 lg:flex-row">
            <div className="text-xl w-full flex justify-center lg:text-3xl">{props.sector}</div>
            <div className="w-full flex flex-wrap gap-2 justify-center xl:justify-normal">
                {PrintSkillsCards(props.skills_used)}
            </div>
        </div>
    )
}
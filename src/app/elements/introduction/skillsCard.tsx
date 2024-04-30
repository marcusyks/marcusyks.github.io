import { Badge } from "@/components/ui/badge";
import { SkillsUsedContent, SkillsCardContent } from "@/app/data/data";
import { PrintSkillsCards } from "@/app/utils";

export default function SkillsCard(props: SkillsCardContent){
    return(
        <div className="flex flex-col gap-2 p-3 lg:flex-row">
            <div className="text-xl w-full flex justify-center lg:text-2xl text-center">{props.sector}</div>
            <div className="w-full flex flex-wrap gap-2 justify-center xl:justify-normal">
                {PrintSkillsCards(props.skills_used)}
            </div>
        </div>
    )
}
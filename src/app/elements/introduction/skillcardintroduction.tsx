import { Badge } from "@/components/ui/badge";

export default function SkillCardIntroduction(){
    return(
        <div className='text-xl flex flex-col lg:gap-4 w-full lg:justify-evenly p-2 lg:flex-row'>
            <div>
                <Badge className="p-1 bg-green-300 animate-pulse mx-2"/>
                <span> means <b>proficient</b></span>
            </div>
            <div>
                <Badge className="p-1 bg-yellow-300 animate-pulse mx-2"/>
                <span> means <b>competent</b></span>
            </div>
            <div>
                <Badge className="p-1 bg-orange-300 animate-pulse mx-2"/>
                <span> means <b>novice</b></span>
            </div>
        </div>
    )
}
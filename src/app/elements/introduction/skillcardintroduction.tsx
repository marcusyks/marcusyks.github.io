import { Badge } from "@/components/ui/badge";

export default function SkillCardIntroduction(){
    return(
        <div className='text-xl flex flex-col lg:gap-4 w-full lg:justify-evenly p-6 lg:flex-row'>
            <div>
                <Badge className="p-1 bg-slate-500 mx-2"/>
                <span> - <b>proficient</b></span>
            </div>
            <div>
                <Badge className="p-1 bg-slate-700 mx-2"/>
                <span> - <b>competent</b></span>
            </div>
            <div>
                <Badge className="p-1 bg-slate-900 mx-2"/>
                <span> - <b>novice</b></span>
            </div>
        </div>
    )
}
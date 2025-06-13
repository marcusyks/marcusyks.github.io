import { Badge } from "@/components/ui/badge";
import { AppWindowIcon, BarChart4Icon, CheckIcon, LaughIcon, TrophyIcon } from "lucide-react";

export function PrintSkills(skills: string[], hide: boolean){
    return skills.map((skill,index) => (
        <Badge key={skill+index} variant='outline' className={`bg-background p-3 flex flex-wrap shadow-sm shadow-foreground/70 border-0 ${hide ? 'hidden xl:table-cell' : 'table-cell'}`}>{skill}</Badge>
    ))
}

export function PrintDescription(items: string[]){
    return items.map((item,index)=>(
        <div key={index} className='shadow-lg flex justify-center items-center rounded-full font-bold border-2 p-3'>
            <CheckIcon size={50}/>
            <div className='pl-3'>{item}</div>
        </div>
    ))
}

export function CountProjects(){
    const target = document.getElementById('project-list');
    let numberOfChildren = 0;

    if (target) {
      numberOfChildren = target.children.length;
    }

    return numberOfChildren;
}


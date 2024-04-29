import { Badge } from "@/components/ui/badge";
import { AppWindowIcon, BarChart4Icon, CheckIcon, LaughIcon, TrophyIcon } from "lucide-react";
import TypingEffect from "./elements/introduction/typingeffect";
import { SkillsUsedContent } from "./data/data";

export function PrintSkills(skills: string[], hide: boolean){
    return skills.map((skill,index) => (
        <Badge key={skill+index} variant='outline' className={`bg-background p-3 flex flex-wrap shadow-lg border-0 ${hide ? 'hidden xl:table-cell' : 'table-cell'}`}>{skill}</Badge>
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

export function CardCompiler(type: string){
    const dolphin = '&#128044'

    switch(type){
        case "joker":
            return(
                <div>
                    <TypingEffect content={`Knock Knock\n ${dolphin} Who's there?\n ${dolphin} Hatch\n ${dolphin} Hatch Who?\n ${dolphin} Bless You!`}/>
                </div>
            )
        case "learner":
            return(
                <div>
                    <TypingEffect content={`Learning is a constant for me.\n ${dolphin} Delving into new tech makes me excited 🤩`}/>
                </div>
            )
        case "enthusiast":
            return(
                <div>
                    <TypingEffect content={`I am a big fan of bouldering and table tennis!\n ${dolphin} It is a must for me to do sports every week!`}/>
                </div>
            )
        case "developer":
            return(
                <div>
                    <TypingEffect content={`Developing interesting projects and coding games are a goto for me XD`}/>
                </div>
            )
        default:
            return(
                <p>
                    Work In Progress!
                </p>
            )
    }
}

export function DecideIcon(icon: string){
    switch(icon){
        case 'laugh':
            return <LaughIcon className="mx-6 flex-grow"/>
            break;
        case 'barchart':
            return<BarChart4Icon className="mx-6 flex-grow"/>
            break;
        case 'trophy':
            return<TrophyIcon className="mx-6 flex-grow"/>
            break;
        case 'appwindow':
            return <AppWindowIcon className="mx-6 flex-grow"/>
            break;
    }
}

export function FindCardColor(level: number){
    switch(level){
        case 3:
            return "bg-green-200"
        case 2:
            return "bg-yellow-200"
        case 1:
            return "bg-orange-200"
    }
}

export function PrintSkillsCards(cards: SkillsUsedContent[]) {
    return cards.map((element, index) => (
        <Badge key={index} variant='outline' className={`p-2 lg:p-3 shadow-lg border-0 ${FindCardColor(element.level)} text-black`}>{element.name}</Badge>
    ));
}

export function CountProjects(){
    const target = document.getElementById('project-list');
    let numberOfChildren = 0;

    if (target) {
      numberOfChildren = target.children.length;
    }

    return numberOfChildren;
}


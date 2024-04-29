import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HoverWord from "./hoverword"
import { AppWindowIcon, BarChart4Icon, BrainIcon, LaughIcon, TrophyIcon } from "lucide-react"
import { CardDropDown } from "./carddropdown"
import { JSONContent } from "@/app/structure/mainpage"
import { CardDropDownContent } from "./carddropdown"
import SkillsCard, { SkillsCardContent } from "./skillsCard"
import SkillCardIntroduction from "./skillcardintroduction"

type UserTabJSON = {
    usertabs : JSON,
    skills : JSON,
}


export default function UserTabs(props: UserTabJSON){
    const userTabsArray: CardDropDownContent[] = props.usertabs as unknown as CardDropDownContent[];
    const skillsArray: SkillsCardContent[] = props.skills as unknown as SkillsCardContent[];

    const items = userTabsArray.map((element: CardDropDownContent, index: number) => (
        <CardDropDown key={index} icon={element.icon} description={element.description} content={element.content}/>
    ));

    const skills = skillsArray.map((element: SkillsCardContent, index: number) => (
        <SkillsCard key={index} {...element}/>
    ));

    return(
        <Tabs defaultValue="Who Am I" className="w-full">
            <TabsList className="flex justify-center transition-transform ease-in-out delay-150">
                <TabsTrigger value="Who Am I">Who Am I</TabsTrigger>
                <TabsTrigger value="Skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="Who Am I" className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-4">
                {items}
            </TabsContent>
            <TabsContent value="Skills" className="bg-gradient-to-b from-background to-muted shadow-xl rounded text-center">
                <div className='p-2'>
                    {skills}
                </div>
                <SkillCardIntroduction/>
            </TabsContent>
        </Tabs>
    )
}


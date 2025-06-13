/* eslint-disable react/no-unescaped-entities */
import { SkillsContent } from "../data/data";
import SkillCards from "../elements/introduction/skillsCards";
import TypingEffect from "../elements/introduction/typingeffect";

export default function Skills(props: SkillsContent){
    return(
        <div className="section flex-row" id='introduction'>
            <div className="sm:w-1/2 sm:items-normal flex justify-center items-center gap-6 flex-col">
                <p className="text-4xl">My Skills</p>
                <TypingEffect content='I am proficient in a variety of programming languages and technologies'/>
            </div>
            <SkillCards {...props} />
        </div>
    );
}
import { SkillCard, SkillsContent } from "@/app/data/data";
import Image from "next/image";

export default function SkillCards(props: SkillsContent) {

    const skills : SkillCard[] = props.skills;
    const skillItems = skills.map((skill : SkillCard, index : number) => (
        <div key={index} className="text-center">
            <Image
                src={skill.image_src}
                width={48}
                height={48}
                alt={skill.image_alt}
                className="mx-auto mb-4 rounded-full md:w-[64px] md:h-[64px]"
            />
            <p className="text-xs sm:text-sm font-semibold">{skill.name}</p>
        </div>
    ))

    return (
        <div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:px-16 max-h-200px">
                {skillItems}
            </div>
        </div>
    );
  }
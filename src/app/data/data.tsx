export type JSONContent = {
    introduction: IntroductionContent,
    project: ProjectContent,
    internship: InternshipContent,
}

// Introduction

export type IntroductionContent = {
    usertabs : CardDropDownContent[]
    skills :  SkillsCardContent[]
}

export type CardDropDownContent = {
    icon: string,
    description: string,
    content: string,
}

export type SkillsCardContent = {
    sector : string,
    skills_used : SkillsUsedContent[],
}

export type SkillsUsedContent = {
    name : string,
    level : number,
}

// Project

export type ProjectContent = {
    projects : ProjectCardContent[],
}

export type ProjectSubContent = {
    image_src : string,
    image_alt: string,
    project_name : string,
    long_description: string,
    skills: string[],
    link: string,
}

export type ProjectCardContent = {
    number: number,
    image_src : string,
    image_alt : string,
    project_name : string,
    description: string,
    long_description: string,
    skills: string[],
    date_added: string,
    link: string,
}

//  Internship

export type InternshipContent = {
    internships : InternshipCardContent[]
}

export type InternshipCardContent  = {
    header: string,
    image_src: string,
    image_alt: string,
    role: string,
    description: string[],
    skills : string[]
}

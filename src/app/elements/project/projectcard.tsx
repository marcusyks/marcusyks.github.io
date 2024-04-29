import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ProjectContent from "./projectcontent";
import { Badge } from "@/components/ui/badge"


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

export function PrintSkills(skills: string[], hide: boolean){
    return skills.map((skill,index) => (
        <Badge key={skill+index} variant='outline' className={`bg-background p-3 flex flex-wrap shadow-lg ${hide ? 'hidden xl:table-cell' : 'table-cell'}`}>{skill}</Badge>
    ))
}

export function ProjectCard(props: ProjectCardContent) {
    return (
        <TableRow className="border-0">
            <TableCell className='text-center'>{props.number}</TableCell>
            <TableCell className="flex items-center gap-4">
                    <Image
                        src={props.image_src}
                        width={60}
                        height={60}
                        alt={props.image_alt}
                        className="shadow-lg rounded"
                    />
                    <div className='flex flex-col'>
                        <span className="font-bold">{props.project_name}</span>
                        <span className='text-sm hidden xl:table-cell'>{props.description}</span>
                    </div>
            </TableCell>
            <TableCell className="hidden lg:table-cell">{PrintSkills(props.skills, true)}</TableCell>
            <TableCell className="hidden xl:table-cell">{props.date_added}</TableCell>
            <TableCell className="text-right">
                <ProjectContent image_src={props.image_src} image_alt={props.image_alt} project_name={props.project_name} long_description={props.long_description} skills={props.skills} link={props.link}/>
            </TableCell>
        </TableRow>
    )
}


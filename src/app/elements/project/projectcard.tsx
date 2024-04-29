import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ProjectContent from "./projectcontent";
import { ProjectCardContent } from "@/app/data/data";
import { PrintSkills } from "@/app/utils";

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


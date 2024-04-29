import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ProjectCard } from "./projectcard"
import { useEffect, useState } from "react";
import { ProjectContent, ProjectCardContent } from "@/app/data/data";
import { CountProjects } from "@/app/utils";

export default function ProjectTable({ ChildToParent, props }: { ChildToParent: (count: number) => void, props: ProjectContent }) {
    const [childs, SetChilds] = useState(0);

    const dataArray: ProjectCardContent[] = props.projects as unknown as ProjectCardContent[];

    const items = dataArray.map((element: ProjectCardContent, index: number) => (
        <ProjectCard {...element} key={index}/>
    ));

    useEffect(() => {
        const count = CountProjects();
        SetChilds(count);
        ChildToParent(count);
    }, []);

    return(
        <div className='w-full justify-center items-center'>
            <Table>
                <TableCaption>A list of my projects...</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">#</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden xl:table-cell">Skills</TableHead>
                        <TableHead className="hidden xl:table-cell">Date added</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody id='project-list'>
                    {items}
                </TableBody>
            </Table>
        </div>
    )
}
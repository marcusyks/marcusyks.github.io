import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ProjectCard, ProjectCardContent } from "./projectcard"
import { useEffect, useState } from "react";
import { JSONContent } from "@/app/structure/mainpage";

function CountProjects(){
    const target = document.getElementById('project-list');
    let numberOfChildren = 0;

    if (target) {
      numberOfChildren = target.children.length;
    //   console.log("Number of child elements:", numberOfChildren);
    }
    else{
    //   console.log('Cannot find element')
    }

    return numberOfChildren;
}

export default function ProjectTable({ ChildToParent, props }: { ChildToParent: (count: number) => void, props: JSONContent }) {
    const [childs, SetChilds] = useState(0);

    const dataArray: ProjectCardContent[] = props.data as unknown as ProjectCardContent[];

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
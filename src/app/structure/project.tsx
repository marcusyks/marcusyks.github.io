import Image from "next/image";
import ProjectTable from "../elements/project/projecttable";
import { useState } from "react";
import { ProjectContent } from "../data/data";


export default function Project(props: ProjectContent) {
    const [childs, SetChilds] = useState(0);

    function ChildToParent(childData: number) {
      // console.log('Data from child:', childData);
      SetChilds(childData);
    }

    return (
        <div>
          <div className="section px-8 lg:px-16" id='project'>
            <div className="flex items-center w-full gap-10 px-4">
              <Image
                src='/playlist.jpg'
                width={100}
                height={100}
                alt='Playlist Image'
                className="rounded shadow-lg md:w-[250px] md:h-[250px]"
              />
              <div className="text-sm flex flex-col gap-1">
                <span className="text-sm">Public Portfolio</span>
                <h1 className="text-2xl md:text-5xl font-extrabold">Tech Playlist</h1>
                <p className="text-md md:text-xl text-accent">Here are some of my favorite projects to date!</p>
                <span className="font-bold">
                  <span>{childs} projects</span>
                </span>
              </div>
            </div>
            <ProjectTable props={props} ChildToParent={ChildToParent}/>
          </div>
        </div>
    );
  }

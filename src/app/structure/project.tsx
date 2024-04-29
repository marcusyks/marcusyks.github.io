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
        <div className="mx-6 p-4 py-32 h-fit flex flex-col justify-center items-center xl:px-16 gap-8" id='project'>
          <div className="flex flex-col items-center w-full gap-10 lg:flex-row">
            <Image
              src='/nextjs-github-pages/playlist.jpg'
              width={250}
              height={250}
              alt='Playlist Image'
              className="w-50 h-50 rounded shadow-lg md:w-[250px] md:h-[250px]"
            />
            <div className="p-4 text-sm flex flex-col gap-3">
              <span className="text-sm">Public Portfolio</span>
              <h1 className="text-2xl md:text-5xl font-extrabold">Tech Playlist</h1>
              <p>Here are some of my favorite projects to date!</p>
              <span className="font-bold">
                <span>{childs} projects</span>
              </span>
            </div>
          </div>
          <ProjectTable props={props} ChildToParent={ChildToParent}/>
        </div>
    );
  }

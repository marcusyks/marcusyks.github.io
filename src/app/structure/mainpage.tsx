"use client"

/* eslint-disable react/no-unescaped-entities */
import Project from "./project";
import Introduction from "./introduction";
import AnchorButton from "../elements/anchorbutton";
import Internship from "./internship";
import { useEffect } from "react";
import mailgo from "mailgo";

export type JSONContent = {
  data: JSON,
}

export default function MainPage(props: JSONContent) {
    const introData = props.data.introduction;
    const internshipData = props.data.internship;
    const projectData = props.data.project;

    useEffect(() => {
      mailgo();
    }, []);

    return (
      <div className="bg-secondary m-0 pb-28 lg:m-2 lg:ml-24 w-full h-fit lg:pb-0 rounded flex flex-col scroll-smooth" id='mainpage'>
        {/* <AnchorButton type='down'/> */}
        <Introduction data={introData}/>
        <Internship data={internshipData}/>
        <Project data={projectData}/>
      </div>
    );
  }

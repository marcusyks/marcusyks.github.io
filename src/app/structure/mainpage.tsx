"use client"

/* eslint-disable react/no-unescaped-entities */
import Project from "./project";
import Introduction from "./introduction";
import Internship from "./internship";
import { useEffect } from "react";
import mailgo from "mailgo";
import { JSONContent } from "../data/data";

export default function MainPage(props: JSONContent) {
    const introData = props.introduction;
    const internshipData = props.internship;
    const projectData = props.project;

    useEffect(() => {
      mailgo()
    }, []);

    return (
      <div className="bg-secondary m-0 pb-28 lg:m-2 lg:ml-24 w-full h-fit lg:pb-0 rounded flex flex-col scroll-smooth" id='mainpage'>
        {/* <AnchorButton type='down'/> */}
        <Introduction {...introData}/>
        <Internship {...internshipData}/>
        <Project {...projectData}/>
      </div>
    );
  }

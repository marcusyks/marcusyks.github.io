"use client"

/* eslint-disable react/no-unescaped-entities */
import Project from "./project";
import Internship from "./internship";
import { JSONContent } from "../data/data";
import Introduction from "./introduction";
import Skills from "./skills";

export default function MainPage(props: JSONContent) {
    const skillsData = props.introduction;
    const internshipData = props.internship;
    const projectData = props.project;

    return (
      <div className="w-full bg-secondary lg:m-2 lg:ml-24 lg:pb-0 flex flex-col scroll-smooth" id='mainpage'>
        <Introduction/>
        <Skills {...skillsData}/>
        <Internship {...internshipData}/>
        <Project {...projectData}/>
      </div>
    );
  }

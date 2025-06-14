"use client"

/* eslint-disable react/no-unescaped-entities */
import Project from "./project";
import Internship from "./internship";
import { JSONContent } from "../data/data";
import Introduction from "./introduction";
import Skills from "./skills";
import BackgroundDesign from "../elements/backgroundDesign";

export default function MainPage(props: JSONContent) {
    const skillsData = props.introduction;
    const internshipData = props.internship;
    const projectData = props.project;

    return (
      <div className="relative w-full bg-secondary lg:pb-0 flex flex-col scroll-smooth" id='mainpage'>
        <BackgroundDesign/>
        <Introduction/>
        <Skills {...skillsData}/>
        <Internship {...internshipData}/>
        <Project {...projectData}/>
      </div>
    );
  }

  // <div class="relative h-screen">
  // <!-- Background Pattern -->
  // <div class="absolute inset-0">
  //   <div class="relative h-full w-full bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
  //   <div></div>
    
  // </div>
  // </div>
  
  // <!-- Hero Content -->
  // <div class="relative z-10 flex h-full flex-col items-center justify-center px-4">
  //   <div class="max-w-3xl text-center">
  //     <h1 class="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
  //       Your Next Great
  //       <span class="text-sky-400">Project</span>
  //     </h1>
  //     <p class="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
  //       Build modern and beautiful websites with this collection of stunning background patterns. 
  //       Perfect for landing pages, apps, and dashboards.
  //     </p>
  //     <div class="flex flex-wrap justify-center gap-4">
  //       <button class="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300">
  //         Get Started
  //       </button>
  //       <button class="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
  //         Learn More
  //       </button>
  //     </div>
  //   </div>
//   </div>
// </div>
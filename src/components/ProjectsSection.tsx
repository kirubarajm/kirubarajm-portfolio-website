import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"
import { BiLogoFigma } from "react-icons/bi";
import { RxVideo } from "react-icons/rx";
import { FaGoogleScholar } from "react-icons/fa6";

const projects = [
  {
    name: "Predictive Stock Modeling",
    description:
      "Transformer based deep learning model integrating short term news sentiments with traditional technical indicators achieving 95% better prediction accuracy.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/kirubarajm/stock-predictive-model",
    design: "",
    thesis: "https://drive.google.com/file/d/159MrDcPCPRby6IWoAJysyVkLbKojDhio/view", 
    demo: "https://www.youtube.com/watch?v=wbhHdZQHf4o",
  },
  {
    name: "Daily Locally",
    description: "A native Android mobile platform to buy and sell D2C food products powered by a highly scalable backend and web dashboard.",
    image: "/platoio.png",
    github: "https://github.com/kirubarajm/Daily-Locally",
    design: "https://www.figma.com/proto/NCjc4TDdpTYRTUGgFgGlmK/Daily-Locally---Buy-and-Sell----Latest-Design?node-id=1-6426&t=8ok944674XFj41dO-1",
    thesis: "", 
    demo: "",
  },
  {
    name: "Eat From Home",
    description:
      "A food delivery platform with independent Android apps for buyers, sellers and delivery partners, interconnected by a high performance backend.",
    image: "/familyphotos.png",
    github: "https://github.com/kirubarajm/Eat-From-Home",
    design: "https://drive.google.com/file/d/1VnkZwpaO4FDFKSmNvc39gR7rIVN4z5fe/view?usp=sharing",
    thesis: "", 
    demo: "",
  },
  {
    name: "Virtual Fit",
    description:
      "A full-stack web application powered by a ResNet based deep learning model to measure human body measurements with just 2 images.",
    image: "/familyphotos.png",
    github: "",
    design: "",
    thesis: "", 
    demo: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.design}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={40}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.design && (
                        <Link href={project.design} target="_blank">
                          <BiLogoFigma
                            size={40}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.thesis && (
                        <Link href={project.thesis} target="_blank">
                          <FaGoogleScholar
                            size={40}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank">
                          <RxVideo
                            size={40}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
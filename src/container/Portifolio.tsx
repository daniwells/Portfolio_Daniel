// Libs
import { FolderGit2 } from "lucide-react";
import { useState } from "react";

// Icons
import { 
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiJsonwebtokens,
  SiCloudinary,
  SiPaypal,
  SiStripe,
  SiExpress,
  SiExpo,
  SiHere,
  SiResend,
  SiAngular,
  SiDjango
} from 'react-icons/si';
import { BsBoxArrowUpRight, BsGithub, BsAndroid } from "react-icons/bs";


// Images
import ritmoDaFormaImage from "../../public/assets/images/ritmo-da-forma.png";
import arquitetoBrownieImage from "../../public/assets/images/arquiteto-brownie.png";
import prostoreImage from "../../public/assets/images/prostore.png";
import tasksImage from "../../public/assets/images/tasks.png";
import coreSyncImage from "../../public/assets/images/coresync.png";
import danielsStoreImage from "../../public/assets/images/daniels-store.png";

const projects = [
  {
    title: "Ritmo da Forma",
    description: "An innovative presentation website for the 'Ritmo da Forma' gym.",
    builtWith: [<SiReact key={1} size={20} />, <SiDocker key={11} size={20}/>],
    img: ritmoDaFormaImage,
    liveLink: "https://ritmodaforma.vercel.app/",
    githubLink: "https://github.com/ruansilva123/RitmoDaForma_PI.git",
    bgColor: "bg-ritmo-forma/40"
  },
  {
    title: "Arquiteto do Brownie",
    description: "An efficient e-commerce for the 'Arquiteto do Brownie' business.",
    builtWith: [<SiNextdotjs key={2} size={20} />, <SiPostgresql key={22} size={20} />, <SiCloudinary key={222} size={20}/>, <SiHere key={2222} size={20}/>, <SiResend key={22222} size={20}/>],
    img: arquitetoBrownieImage,
    liveLink: "https://arquitetodobrownie.vercel.app/",
    githubLink: "https://github.com/daniwells/Prostore_Course.git",
    bgColor: "bg-arquiteto-brownie/40"
  },
  {
    title: "Prostore",
    description: "A modern e-commerce for a clothing store.",
    builtWith: [<SiNextdotjs key={3} size={20} />, <SiPostgresql key={33} size={20} />, <SiJsonwebtokens key={333} size={20} />, <SiPaypal key={3333} size={20}/>, <SiStripe key={33333} size={20}/>],
    img: prostoreImage,
    liveLink: "https://prostore-course-three.vercel.app/",
    githubLink: "https://github.com/daniwells/Prostore_Course.git",
    bgColor: "bg-prostore/40"
  },
  {
    title: "Tasks",
    description: "A powerful and intuitive mobile app for managing notes efficiently.",
    builtWith: [<SiExpo key={4} size={20} />, <SiDocker key={44} size={20} />, <SiReact key={444} size={20}/>, <BsAndroid key={4444} size={20}/>, <SiExpress key={44444} size={20}/>],
    img: tasksImage,
    liveLink: null,
    githubLink: "https://github.com/daniwells/Tasks.git",
    bgColor: "bg-tasks/40"
  },
  {
    title: "CoreSync",
    description: "A clean tool for managing and centralizing meetings.",
    builtWith: [<SiDjango key={4} size={20} />, <SiReact key={444} size={20}/>],
    img: coreSyncImage,
    liveLink: null,
    githubLink: "https://github.com/analiceleite/coresync",
    bgColor: "bg-coresync/40"
  },
  {
    title: "Daniel's Store",
    description: "A modern e-commerce using Dummy Json API.",
    builtWith: [<SiAngular key={6} size={20} />],
    img: danielsStoreImage,
    liveLink: null,
    githubLink: "https://github.com/daniwells/Daniels_Store",
    bgColor: "bg-daniels-store/40"
  },
];

const Portifolio: React.FC = () => {
  const [activeItem, setActiveItem] = useState<Record<string, boolean>>({
    "Daniel's Store": false,
    "CoreSync": false,
    "Tasks": false,
    "Prostore": false,
    "Arquiteto do Brownie": false,
    "Ritmo da Forma": false,
  });

  return <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
    <h2 className="text-5xl font-extrabold text-pink-custom font-itim" >Projects</h2>
    <div className="mt-6 mb-6 flex items-center gap-2 text-sm text-white/60">
      <FolderGit2 className="h-4 w-4"/> Some of my recent work
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          onClick={() =>
            setActiveItem((prev) => ({
              ...prev,
              [project.title]: !prev[project.title],
          }))}
          key={project.title}
          className={`p-4 group flex flex-col overflow-hidden rounded-2xl ${project.bgColor} shadow-[0_0_25px_rgba(255,255,255,0.05)]`}
        >
          <div className="relative h-40 w-full overflow-hidden">
            <div className={`flex flex-col gap-2 items-center absolute top-1/2 left-1/2 transition duration-500 transform -translate-1/2 z-10 opacity-0 group-hover:opacity-100 ${activeItem[project.title] ? 'opacity-100' : ''}`}>
                {
                  project.liveLink &&
                  <a href={project.liveLink} target="_blank" className="gap-2 flex items-center cursor-pointer hover:text-blue-custom focus:text-blue-custom">
                    <BsBoxArrowUpRight size={20}/> Live project
                  </a>
                }
                
                <a href={project.githubLink} target="_blank" className="gap-2 flex items-center cursor-pointer hover:text-blue-custom focus:text-blue-custom">
                    <BsGithub size={20}/> Github
                </a>
            </div>
            <img
              src={project.img}
              alt={project.title}
              className={`h-full w-full object-cover transition duration-500 rounded-xl filter group-hover:scale-105 group-hover:brightness-30 ${activeItem[project.title] ? 'brightness-30 scale-105' : ''}`}
            />
          </div>

          <div className="flex flex-1 flex-col py-4">
            <h3 className="font-semibold text-lg text-white">{project.title}</h3>
            <p className="mt-1 flex-1 text-sm text-white/70">{project.description}</p>

            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/50 ">
              <p className="flex gap-2 mb-1">
                Built with: {project.builtWith.map((tech) => tech)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
};

export default Portifolio;
import { FolderGit2 } from "lucide-react";
import ritmoDaFormaImage from "../../public/assets/images/ritmo-da-forma.png";
import prostoreImage from "../../public/assets/images/prostore.png";
import arquitetoBrownieImage from "../../public/assets/images/arquiteto-brownie.png";
import { 
    SiReact,
    SiNextdotjs,
    SiPostgresql,
    SiDocker,
    SiJsonwebtokens,
    SiCloudinary,
    SiPaypal
} from 'react-icons/si';
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "Ritmo da Forma",
    description: "An interactive and educational web game that simulates real-life financial situations",
    builtWith: [<SiReact size={20} />, <SiDocker size={20}/>],
    img: ritmoDaFormaImage,
    liveLink: "https://ritmodaforma.vercel.app/",
    githubLink: "https://github.com/ruansilva123/RitmoDaForma_PI.git",
    bgColor: "bg-ritmo-forma/40"
  },
  {
    title: "Arquiteto do Brownie",
    description: "A powerful and intuitive API for managing notes efficiently",
    builtWith: [<SiNextdotjs size={20} />, <SiPostgresql size={20} />, <SiCloudinary size={20}/>],
    img: arquitetoBrownieImage,
    liveLink: "https://arquitetodobrownie.vercel.app/",
    githubLink: "https://github.com/daniwells/Prostore_Course.git",
    bgColor: "bg-arquiteto-brownie/40"
  },
  {
    title: "Prostore",
    description: "Modern personal portfolio with animations",
    builtWith: [<SiNextdotjs size={20} />, <SiJsonwebtokens size={20} />, <SiPaypal size={20}/>],
    img: prostoreImage,
    liveLink: "https://prostore-course-three.vercel.app/",
    githubLink: "https://github.com/daniwells/Prostore_Course.git",
    bgColor: "bg-prostore/40"
  },
];

const Portifolio: React.FC = () => (
  <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
    <h2 className="text-5xl font-extrabold text-pink-custom font-itim" >Projects</h2>
    <div className="mt-6 mb-6 flex items-center gap-2 text-sm text-white/60">
      <FolderGit2 className="h-4 w-4"/> Some of my recent work
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <div
          key={p.title}
          className={`p-4 group flex flex-col overflow-hidden rounded-2xl ${p.bgColor} shadow-[0_0_25px_rgba(255,255,255,0.05)]`}
        >
          <div className="relative h-40 w-full overflow-hidden">
            <div className="flex flex-col gap-2 items-center absolute top-1/2 left-1/2 transition duration-500 transform -translate-1/2 z-10 opacity-0 group-hover:opacity-100" >
                <a href={p.liveLink} target="_blank" className="gap-2 flex items-center cursor-pointer hover:text-blue-custom">
                    <BsBoxArrowUpRight size={20}/> Live project
                </a>
                <a href={p.githubLink} target="_blank" className="gap-2 flex items-center cursor-pointer hover:text-blue-custom">
                    <BsGithub size={20}/> Github
                </a>
            </div>
            <img
              src={p.img}
              alt={p.title}
              className="h-full w-full object-cover transition duration-500 rounded-xl filter group-hover:scale-105 group-hover:brightness-30"
            />
          </div>

          <div className="flex flex-1 flex-col py-4">
            <h3 className="font-semibold text-lg text-white">{p.title}</h3>
            <p className="mt-1 flex-1 text-sm text-white/70">{p.description}</p>

            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/50 ">
              <p className="flex gap-2 mb-1">
                Built with: {p.builtWith.map((tech) => tech)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portifolio;
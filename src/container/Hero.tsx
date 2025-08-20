import { Download } from "lucide-react";
import photoImage from "../../public/assets/images/photo.png"
import curriculumPdf from "../../public/assets/pdf/Curriculo_Daniel.pdf"
import Button from "../components/Button";

const Hero = () => {

    return (
        <section id="home" className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-8 px-4 pt-24 md:flex-row md:gap-12">
            <div className="flex-1">
                <h1 className="text-7xl font-extrabold text-pink-custom font-itim">
                    Daniel Lima
                </h1>
                <h2 className="mt-3 text-2xl font-medium">
                    Fullstack Developer
                </h2>
                <p className="mt-6 mb-6 max-w-xl leading-relaxed text-white/70">
                    I love learning new technologies and building solutions that make a difference. Thanks for visiting my portfolio! Happy coding..!
                </p>
                <Button>
                    <a
                        type="application/pdf"
                        target="_blank"
                        href={curriculumPdf}
                        className="flex items-center gap-2"
                    >
                        <Download className="h-4 w-4" /> Download CV
                    </a>
                </Button>
            </div>

            <div className="relative flex-1">
                <div className="relative mx-auto h-80 w-72 rounded-3xl group">
                    <img 
                        src={photoImage} 
                        alt="Profile" 
                        className="absolute z-10 h-full w-full rounded-2xl object-cover duration-300 group-hover:scale-103"
                    />
                    <div className="absolute h-full w-full rounded-3xl object-cove top-12 left-12 border-2 border-pink-custom duration-300 group-hover:scale-97 group-hover:bg-pink-custom-opacity  "/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
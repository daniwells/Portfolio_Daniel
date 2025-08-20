import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import axios from "axios";
import Popup from "../components/Popup";
import Loading from "../components/Loading";
import Button from "../components/Button";

const ContactMe: React.FC = () => {
    const [ isOpenLoading, setIsOpenLoading ] = useState(false);
    const [ isOpenPopup, setIsOpenPopup ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ statusPopup, setStatusPopup ] = useState<"success" | "error">("success");

    const sendEmailRequest = async (name: string, message: string, email: string) => {
        const response = await axios.post(`/api/email`, { 
            name: name,
            message: message,
            email: email
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        return response;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsOpenLoading(true);

        const data = new FormData(e.currentTarget as HTMLFormElement);

        const name: string = data.get("name")?.toString() || "";
        const email: string = data.get("email")?.toString() || "";
        const message: string = data.get("message")?.toString() || "";
        
        setUsername(name);

        try{
            await sendEmailRequest(name, message, email);
            setIsOpenLoading(false);
            setIsOpenPopup(true);
            setStatusPopup("success");
        }catch{
            setIsOpenLoading(false);
            setIsOpenPopup(true);
            setStatusPopup("error");
        }
    }

    return  <>
        <Loading isOpen={isOpenLoading}/>
        <Popup isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} username={username} status={statusPopup}/>
        <section id="contact" className="mx-auto max-w-6xl px-4 py-24 md:py-32">    
            <h2 className="text-5xl font-extrabold text-pink-custom font-itim">Contact Me</h2>
            <form
                onSubmit={handleSubmit}
                className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-[0_0_25px_rgba(255,255,255,0.05)] md:grid-cols-2"
            >
                <div className="mt-3  md:col-span-1">
                    <label className="block text-xs uppercase tracking-wide text-white/60">Name</label>
                    <input 
                        name="name"
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40"
                        placeholder="Your name" 
                    />
                </div>
                <div className="mt-3 md:col-span-1">
                    <label className="block text-xs uppercase tracking-wide text-white/60">Email</label>
                    <input 
                        type="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40"
                        placeholder="you@email.com"
                    />
                </div>
                <div className="mt-3 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wide text-white/60">Message</label>
                    <textarea 
                        name="message"
                        rows={5}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40"
                        placeholder="How can I help?"
                        style={{resize: "none",}}
                    />
                </div>
                <div className="mt-6 flex flex-col gap-6 items-center justify-between sm:flex-row md:col-span-2">
                    <div className="flex flex-wrap justify-center items-center gap-3 text-white/70">
                        <a 
                            href="mailto:dalinellimafreita@gmail.com"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
                        >
                            <Mail className="h-4 w-4"/>dalinellimafreita@gmail.com
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/daniel-lima-4a4b4325a"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
                        >
                            <BsLinkedin className="h-4 w-4"/>LinkedIn
                        </a>
                    </div>
                    <Button>
                        <><Send className="h-4 w-4"/> Send Message</>
                    </Button>
                </div>
            </form>
        </section>
    </>
};

export default ContactMe;
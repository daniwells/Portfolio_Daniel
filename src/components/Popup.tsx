import { MdMarkEmailRead, MdMarkEmailUnread } from "react-icons/md";
import { XIcon } from "lucide-react";

const Popup: React.FC<{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    username: string;
    status: "error" | "success";
}> = ({
    isOpen, 
    setIsOpen, 
    username,
    status
}) => {
    
    if(!isOpen) return

    return <div className="fixed z-50 flex justify-center items-center w-full inset-0 max-h-full bg-[rgba(0,0,0,0.4)] ">
        <div className="relative p-4 w-full sm:w-[30rem] max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between p-4 mb-4 border-b border-gray-300">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Contact Me
                    </h3>
                    <button onClick={() => setIsOpen(false)} className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                        <XIcon/>
                    </button>
                </div>
                
                <div className="p-4 text-balance text-gray-500 text-center w-full">
                    {
                        status === "success" ?
                            <MdMarkEmailRead className="text-green-500 w-18 h-18 mx-auto"/>
                        :
                            <MdMarkEmailUnread className="text-red-500 w-18 h-18 mx-auto" />
                    }

                    {
                        status === "success" ?
                            <>
                                <p>
                                    Email was sent successfully!
                                </p>
                                <p><strong>{username}</strong>, thanks for your contact.</p>
                            </>
                        :
                            <>
                                <p>
                                    Sorry, there was an error sending the email!
                                </p>
                                <p>Please, try again later.</p>
                            </>
                    }
                    
                    
                </div>
                
                <div className="flex items-center p-4">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer flex flex-wrap items-center gap-2 rounded-xl px-6 py-3 font-medium bg-blue-custom transition-all duration-200 hover:bg-blue-custom/80 group">
                            Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
}
 
export default Popup;
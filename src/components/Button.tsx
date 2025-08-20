const Button: React.FC<{children: React.ReactElement, onClick?: () => void}> = ({children, onClick}) => {
    return <>
        <button 
            onClick={onClick} 
            className="cursor-pointer flex flex-wrap items-center gap-2 rounded-xl px-6 py-3 font-medium bg-blue-custom transition-all duration-200 hover:bg-blue-custom/80 group"
        >
            {children}
        </button>
    </>;
}
 
export default Button;


const Button = ({ title, className }) => {
    return (
        <button className={`w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ${className} ? ${className}: " "`}>
            {title}

        </button>

    )
}

export default Button
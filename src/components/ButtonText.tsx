const ButtonText = (props: { text: string, onClick?: () => void }) => {
    return (

        <button
            className="h-12 w-24 bg-transparent text-primary text-2xl font-bold 
            hover:text-secondary hover:underline
            active:text-secondary active:border-4 active:border-primary"
            onClick={props.onClick}
        >
            <a>{props.text}</a>
        </button>
    );
}

export default ButtonText;
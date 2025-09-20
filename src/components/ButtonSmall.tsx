const ButtonSmall = (props: { text: string, onClick?: () => void }) => {
    return (
        <button
            className="h-16 w-52 bg-primary text-background rounded-3xl text-2xl mt-8 font-bold 
            hover:bg-secondary 
            active:bg-secondary active:border-4 active:border-primary"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default ButtonSmall;
const ButtonSmall = (props: { text: string, onClick?: () => void }) => {
    return (
        <button
            className="h-16 bg-primary text-background rounded-3xl text-2xl mt-8 font-bold uppercase px-9
            hover:bg-secondary 
            active:bg-secondary active:border-4 active:border-primary"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default ButtonSmall;
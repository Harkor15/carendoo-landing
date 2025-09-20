const ButtonLarge = (props: { upperText: string, bottomText: string, icon:string, onClick?: () => void }) => {
    return (
        <button
            className="h-28 w-80 bg-primary text-background rounded-3xl text-2xl mt-8 font-bold 
            hover:bg-secondary 
            active:bg-secondary active:border-4 active:border-primary"
            onClick={props.onClick}
        >
            <div>IC</div>
            <div>
                <div>{props.upperText}</div>
                <div>{props.bottomText}</div>
            </div>
        </button>
    );
}

export default ButtonLarge;
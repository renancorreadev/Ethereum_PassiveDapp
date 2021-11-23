import './style.scss'

interface ButtonProps{
    text: string
    buttonStyle: "card-button" | "full-width"
}

export function Button({text, buttonStyle}: ButtonProps){

    return(
        <div id="claim-button">
            <button className={buttonStyle}>{text}</button>
        </div>
    )
}
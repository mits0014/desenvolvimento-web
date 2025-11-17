import "../styles/buttons.css"
import type { MouseEventHandler } from "react";

interface IButtonProps {
    text: string;
    secondary?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, secondary, onClick }: IButtonProps) {
    return (
        <button onClick={onClick} className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}
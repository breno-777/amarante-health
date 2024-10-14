import style from './dropdown.module.css'

interface DropdownProperty {
    title?: string,
    visibility?: boolean
    onClick?: () => void
}

export const Dropdown = ({ title, visibility }: DropdownProperty) => {

    return (
        <div id={"dropdown_overlay"} className={`${style.dropdown_overlay} ${visibility ? style.is_active : ""}`}>
            <div className={style.dropdown_content}>
                <ul>
                    <li>{title}</li>
                    <li>{title}</li>
                    <li>{title}</li>
                    <li>{title}</li>
                </ul>
            </div>
        </div>
    );
}
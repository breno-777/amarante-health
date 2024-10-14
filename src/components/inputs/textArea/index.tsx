import style from "./text-area.module.css";

interface TextAreaProperties {
    required?: boolean;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    minHeight?: number;
    maxHeight?: number;
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
    placeholder,
    required,
    minHeight,
    maxHeight,
    value,
    name,
    onChange,
}: TextAreaProperties) => {
    return (
        <div className={style.container}>
            <textarea
                onChange={onChange}
                className={style.textArea}
                required={required}
                name={name}
                value={value}
                style={{
                    minHeight: minHeight ? `${minHeight}px` : "auto",
                    maxHeight: maxHeight ? `${maxHeight}px` : "auto",
                }}
            />
            <label className={style.label}>{placeholder}</label>
        </div>
    );
};

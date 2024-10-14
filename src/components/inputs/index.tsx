'use client';

import style from "./input.module.css"

interface inputProperties {
    type?: string,
    placeholder?: string,
    value?: string | number,
    required?: boolean,
    disabled?: boolean,
    name?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, required, value, name, onChange }: inputProperties) => {
    return (
        <div className={style.container}>
            <input className={style.input} type={type ? type : "text"} required={required} name={name} value={value} onChange={onChange} />
            <label className={style.label}>{placeholder}</label>
        </div>
    );
}
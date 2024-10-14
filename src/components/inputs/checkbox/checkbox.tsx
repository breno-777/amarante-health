'use client'

import React, { useEffect, useRef, useState } from 'react';
import style from "./checkbox.module.css";
import { Input } from '..';

interface checkboxProperties {
    id: string;
    label: string;
    placeholder?: string;
    answer?: boolean;
    details?: string;
    hasInput?: boolean;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDetailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxInput = ({ id, label, placeholder, hasInput, answer, details, name, onChange, onDetailChange }: checkboxProperties) => {
    const [isChecked, setIsChecked] = useState(answer);
    const [detailValue, setDetailValue] = useState(details || '');

    const parentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setIsChecked(answer || false);
    }, [answer]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        if (onChange) {
            onChange(e);
        }
    };

    const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetailValue(e.target.value);
        if (onDetailChange) {
            onDetailChange(e);
        }
    };

    return (
        <div className={style.answer_container}>
            <div style={{ display: "flex", alignContent: "center", gap: "0.6em" }}>
                <input
                    type="checkbox"
                    id={id}
                    className={style.checkBox}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor={id}>{label}</label>
            </div>
            <div
                ref={parentRef}
                className={style.input_parent}
                style={isChecked
                    ? {
                        height: parentRef.current?.scrollHeight + "px",
                    } : {
                        height: "0px",
                    }
                }
            >
                {hasInput && (
                    <Input
                        placeholder={placeholder}
                        required={true}
                        value={detailValue}
                        name={name}
                        onChange={handleDetailChange}
                    />
                )}
            </div>
        </div>
    );
};

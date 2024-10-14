import { useEffect } from "react";
import $style from "./upload.module.css";
import { FaFile, FaTrash } from "react-icons/fa";
import { LiaCloudUploadAltSolid } from "react-icons/lia";

interface UploadProperty {
    visible?: boolean;
    setVisibility: (visible: boolean) => void;
}

export const UploadFile = ({ visible, setVisibility }: UploadProperty) => {

    useEffect(() => {
        function closeUpdateModal() {
            const closeArea = document.getElementById("closeArea");
            const handleClickOutside = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (closeArea && target === closeArea) {
                    setVisibility(false)
                }
            };
            closeArea?.addEventListener("click", handleClickOutside);
            return () => {
                closeArea?.removeEventListener("click", handleClickOutside);
            };
        }

        closeUpdateModal();
    }, [setVisibility]);

    return (
        <div id="closeArea" className={`${$style.container} ${visible && $style.is_active}`}>
            <div className={$style.contents}>
                <div className={$style.drop_area_limit}>
                    <div className={$style.drop_area}>
                        <LiaCloudUploadAltSolid className={$style.icon} size={96} />
                        <p>Browse File to upload!</p>
                    </div>
                </div>
                <div className={$style.footer}>
                    <FaFile size={20} className={$style.icon} />
                    <label>Not selected file</label>
                    <FaTrash size={20} className={$style.icon} />
                </div>
            </div>
        </div>
    );
}
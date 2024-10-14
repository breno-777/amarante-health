import Image from "next/image";
import style from "./main-card.module.css"
import { FaCalendarAlt } from "react-icons/fa";
import CardBackground from "@/assets/svgs/MainCard_Background.svg"
import CardThumbnail from "@/assets/appointment_card.png"
import { StyledButton } from "@/components/buttons";

export const MainCard = () => {
    return (

        <div className={style.container}>
            <div className={style.contents}>
                <div className={style.card_title}>
                    <FaCalendarAlt size={26} />
                    <p>Appointments for this month</p>
                </div>
                <div>
                    Be sure to check all your appointments scheduled for the next few days of the month and get organized in advance.
                </div>

                <div className={style.button_container}>
                    <StyledButton>
                        Check appointments
                    </StyledButton>
                </div>
            </div>
            <div className={style.card_thumbnail}>
                <Image src={CardThumbnail} alt={"appointment_card.png"} draggable={false} priority />
            </div>
            <div className={style.card_background}>
                <Image src={CardBackground} alt={CardBackground} draggable={false} priority />
            </div>

        </div>
    );
}
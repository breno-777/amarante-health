"use client"

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import style from "./sidebar.module.css";
import { IoDiamond, IoPeopleSharp, IoPersonAdd } from "react-icons/io5";
import { FaCalendarCheck, FaCalendarDay, FaCalendarMinus, FaCalendarPlus, FaCalendarTimes, FaCrown, FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export const Sidebar = () => {
    const router = useRouter();

    const [selected, setSelected] = useState("");

    const handleClick = (path: string, page: string) => {
        router.push(path);
        setSelected(page);
    }

    return (
        <div className={style.container}>
            <div className={style.side_wrapper}>
                <h2 className={style.title}>Main</h2>
                <ol>
                    <li className={style.item} onClick={() => handleClick("/", "home")}>
                        <div className={style.item_icon_container}>
                            <FaHome size={16} />Home
                        </div>
                        {selected === "home" && <RiCheckboxBlankCircleFill size={8} />}
                    </li>
                </ol>
            </div>
            <div className={style.side_wrapper}>
                <h2 className={style.title}>Patient</h2>
                <ol>
                    <li className={style.item} onClick={() => handleClick("/pages/patient/all", "all-patients")}>
                        <div className={style.item_icon_container}>
                            <IoPeopleSharp size={16} />All Patients
                        </div>
                        {selected === "all-patients" && <RiCheckboxBlankCircleFill size={8} />}
                    </li>
                    <li className={style.item} onClick={() => handleClick("/pages/patient/add", "add-patient")}>
                        <div className={style.item_icon_container}>
                            <IoPersonAdd size={16} />New Patient
                        </div>
                        {selected === "add-patient" && <RiCheckboxBlankCircleFill size={8} />}
                    </li>
                </ol>
            </div>
            <div className={style.side_wrapper}>
                <h2 className={style.title}>Appointment</h2>
                <ol>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <BsFillGrid3X3GapFill size={16} />All Appointments
                        </div>
                    </li>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <FaCalendarPlus size={16} />New Appointment
                        </div>
                    </li>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <FaCalendarDay size={16} />Reschedule Appointment
                        </div>
                    </li>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <FaCalendarMinus size={16} />Cancel Appointment
                        </div>
                    </li>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <FaCalendarCheck size={16} />Appointments Made
                        </div>
                    </li>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <FaCalendarTimes size={16} />Canceled Appointments
                        </div>
                    </li>
                </ol>
            </div>
            <div className={style.side_wrapper}>
                <h2 className={style.title}>Subscription plans</h2>
                <ol>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <FaCrown size={16} />All plans
                        </div>
                    </li>
                    <li className={`${style.item} ${style.disable}`}>
                        <div className={style.item_icon_container}>
                            <IoDiamond size={16} />New plans
                        </div>
                    </li>
                </ol>
            </div>

        </div>
    );
}

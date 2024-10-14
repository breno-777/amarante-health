import { Patient } from "@/types/patient.type";
import style from "./medical_record.module.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useRef } from "react";

interface MedicalRecordProperty {
    patient: Patient;
}

export const MedicalRecords = ({ patient }: MedicalRecordProperty) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const parentRef = useRef<HTMLDivElement | null>(null);

    if (patient) {
        return (
            <div>
                <div>
                    <div>
                        <p className={style.section_title}>OBSERVATIONS</p>
                        <p className={`${style.section_details} ${patient.medical_record?.observations || style.not_available}`}>
                            {patient.medical_record?.observations || "No observations available."}
                        </p>
                    </div>

                    <p className={style.section_title}>MAIN COMPLAINT</p>
                    <p className={`${style.section_details} ${patient.medical_record?.observations || style.not_available}`}>
                        {patient.medical_record?.main_complaints || "No main complaints available."}
                    </p>

                    <div>
                        <p className={style.section_title}>THERAPEUTIC FILE</p>
                        {patient.medical_record.thrombosis && <p className={style.section_details}>I have or have had thrombosis.</p>}
                        {patient.medical_record.pacemaker && <p className={style.section_details}>I use a pacemaker.</p>}
                        {patient.medical_record.pregnant && <p className={style.section_details}>I&apos;m pregnant.</p>}
                        {patient.medical_record.diabetic && <p className={style.section_details}>I&apos;m diabetic.</p>}
                        {patient.medical_record.varicose && <p className={style.section_details}>I have exposed varicose veins.</p>}
                        {patient.medical_record.cancer && <p className={style.section_details}>I have or have had cancer.</p>}
                        {patient.medical_record.heart_condition && <p className={style.section_details}>I have a heart condition.</p>}
                        {patient.medical_record.blood_pressure && <p className={style.section_details}>I have high blood pressure.</p>}
                        {patient.medical_record.smoke && <p className={style.section_details}>I smoke.</p>}
                        {patient.medical_record.painkillers && <p className={style.section_details}>I use strong painkillers.</p>}
                        {patient.medical_record.menopause && <p className={style.section_details}>I&apos;m in the menopause.</p>}
                    </div>

                    <div
                        ref={parentRef}
                        className={style.more_parent}
                        style={showMore
                            ? {
                                height: parentRef.current?.scrollHeight + "px",
                            } : {
                                height: "0px",
                            }
                        }
                    >
                        <div className={style.more}>
                            {patient.medical_record.severe_headache.answer &&
                                <>
                                    <p className={style.section_details}> I have a strong and constant headache: </p>
                                    <p className={style.section_details}> Have you been to the doctor? {patient.medical_record.severe_headache.details}</p>
                                </>
                            }
                            {patient.medical_record.autoimmune_disease.answer &&
                                <p className={style.section_details}>
                                    I have autoimmune disease: {patient.medical_record.autoimmune_disease.details}
                                </p>
                            }
                            {patient.medical_record.transplanted.answer &&
                                <p className={style.section_details}>
                                    I&apos;m a transplant: {patient.medical_record.transplanted.details}
                                </p>
                            }
                            {patient.medical_record.surgical.answer &&
                                <p className={style.section_details}>
                                    Ive already undergone a surgical procedure: {patient.medical_record.surgical.details}
                                </p>
                            }
                        </div>
                    </div>

                    <div className={style.show_more_container} onClick={() => setShowMore((prev) => !prev)}>
                        <p>{showMore ? "SHOW LESS" : "SHOW MORE"}</p>
                        {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
            </div >
        );
    }

}
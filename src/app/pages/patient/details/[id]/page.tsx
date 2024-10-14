"use client";

import Image from "next/image";
import style from "./details.module.css";
import { useEffect, useState } from "react";
import { handleGetPatient } from "@/lib/handles";
import NoAvatar from "@/assets/no_avatar.png";
import { Patient } from "@/types/patient.type";
import { useParams, useRouter } from "next/navigation";
import { StyledButton } from "@/components/buttons";
import { MedicalRecords } from "@/components/patient/medical_record";

const PatientDetails = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const patientId = Array.isArray(id) ? id[0] : id;
    const [patient, setPatient] = useState<Patient>();

    useEffect(() => {
        const fetchPatient = async () => {
            if (!patientId) {
                console.error("Invalid patient_id");
                return;
            }
            try {
                const data = await handleGetPatient(patientId);
                setPatient(data);
            } catch (error) {
                console.error("Failed to fetch patient:", error);
            }
        };
        fetchPatient();
    }, [patientId]);

    if (!patient) return <p>Loading...</p>;

    return (
        <div className={style.container}>
            <div className={style.patient_details_grid}>
                <div className={style.sidebar_container}>
                    <div className={style.avatar_container}>
                        {patient.avatar && patient.avatar !== "" ? (
                            <Image
                                src={patient.avatar}
                                alt={"Patient avatar"}
                                width={128} height={128}
                                draggable={false}
                                className={style.patient_avatar}
                            />
                        ) : (
                            <Image
                                src={NoAvatar}
                                alt={"No avatar"}
                                draggable={false}
                                priority
                                className={style.patient_avatar}
                            />
                        )}
                    </div>

                    <p style={{ fontSize: "1.25em" }}>{patient.name ? patient.name : "Patient name invalid"}</p>
                    <span style={{ fontSize: "1em" }}>{patient.age ? `${patient.age} Years` : "Age invalid"}</span>
                    <span style={{ fontSize: "1em" }}>{patient.phone ? patient.phone : "Patient phone invalid"}</span>
                    <span style={{ fontSize: "1em" }}>{patient.address ? patient.address : "Patient address invalid"}</span>
                </div>

                <div className={style.patient_records}>

                    <div className={style.patient_appointments}>
                        <div>
                            <p className={style.header}>First appointment</p>
                            <p className={style.date}>April X, 202X</p>
                            <p className={style.days}>X months ago</p>
                        </div>
                        <div>
                            <p className={style.header}>Last appointment</p>
                            <p className={style.date}>April X, 202X</p>
                            <p className={style.days}>2 weeks ago</p>
                        </div>
                        <div>
                            <p className={style.header}>Next appointment</p>
                            <p className={style.date}>April X, 202X</p>
                            <p className={style.days}>30 days left</p>
                        </div>
                    </div>

                    <MedicalRecords patient={patient} />

                    <div className={style.back_button_container}>
                        <StyledButton type="reset" onClick={() => router.back()}>
                            Back
                        </StyledButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PatientDetails;

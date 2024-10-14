"use client"

import Image from "next/image";
import style from "./patient-add.module.css";

import patientAvatar from "@/assets/user_avatar.png";
import { Input } from "@/components/inputs";
import { MdPhotoCamera } from "react-icons/md";
import { TextArea } from "@/components/inputs/textArea";
import { CheckboxInput } from "@/components/inputs/checkbox/checkbox";
import { handleAddPatient } from "@/lib/server/handles.server";
import { handleGetPatient, handleUpdatePatient } from "@/lib/handles";
import { useEffect, useState } from "react";
import { Patient } from "@/types/patient.type";
import { mapPatientData } from "@/lib/mapPatientData";
import { useRouter } from "next/navigation";
import { StyledButton } from "@/components/buttons";
import { UploadFile } from "@/components/modal/upload";
import { v4 as uuid } from "uuid";

interface AddPatientProps {
    isEditing: boolean;
    patientData?: Patient;
}

const AddPatient = ({ isEditing, patientData }: AddPatientProps) => {
    const router = useRouter();
    const defaultPatient: Patient = {
        id: "",
        status: 0,
        avatar: "",
        name: "",
        age: 0,
        phone: "",
        address: "",
        neighborhood: "",
        payments: {
            last_payment: new Date(),
            next_payment: new Date(),
        },
        medical_record: {
            observations: "",
            main_complaints: "",
            thrombosis: false,
            pacemaker: false,
            pregnant: false,
            diabetic: false,
            varicose: false,
            cancer: false,
            heart_condition: false,
            blood_pressure: false,
            smoke: false,
            painkillers: false,
            menopause: false,
            medication: {
                answer: false,
                details: "",
            },
            severe_headache: {
                answer: false,
                details: "",
            },
            autoimmune_disease: {
                answer: false,
                details: "",
            },
            transplanted: {
                answer: false,
                details: "",
            },
            surgical: {
                answer: false,
                details: "",
            },
        },
    };

    const [patientToEdit, setPatientToEdit] = useState<Patient>();
    const [formData, setFormData] = useState(() => mapPatientData(patientData ?? defaultPatient));
    const [modalVisibility, setModalVisibility] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type, value } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            if (name === "observations" || name === "main_complaints") {
                setFormData({
                    ...formData,
                    medical_record: {
                        ...formData.medical_record,
                        [name]: value,
                    },
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const updatedFormData = { ...formData };
            if (!isEditing && updatedFormData.id === "") {
                updatedFormData.id = uuid();
            }

            if (isEditing && patientToEdit) {
                await handleUpdatePatient(patientToEdit.id, updatedFormData);
            } else {
                await handleAddPatient(updatedFormData).then(() => router.push("/pages/patient/all"));
            }
        } catch (err) {
            console.error("Error submitting form", err);
        }
    };

    useEffect(() => {
        const fetchCurrent = async () => {
            try {
                if (!patientData) return;
                const patientToEdit = await handleGetPatient(patientData.id);
                if (!patientToEdit) return;
                setPatientToEdit(patientToEdit);
                setFormData(mapPatientData(patientToEdit));
            } catch (err) {
                console.error("Error fetching patient", err);
            }
        };
        fetchCurrent();
    }, [isEditing, patientData]);

    return (
        <div className={style.container}>
            <form className={style.patient_form} onSubmit={handleSubmit}>
                <div className={style.basic_information}>
                    <div className={style.avatar_container}>
                        <div className={style.icon_container}>
                            <MdPhotoCamera size={18} />
                        </div>
                        <Image
                            src={patientAvatar}
                            alt="Patient Avatar"
                            className={style.patient_avatar}
                            priority
                            draggable={false}
                            onClick={() => setModalVisibility(true)}
                        />
                    </div>

                    <div className={style.grid_basic_information}>
                        <Input placeholder="Name" required={true} value={formData.name} name="name" onChange={handleChange} />
                        <Input placeholder="Age" required={true} value={formData.age} name="age" onChange={handleChange} />
                        <Input placeholder="Address" required={true} value={formData.address} name="address" onChange={handleChange} />
                        <Input placeholder="Neighborhood" required={true} value={formData.neighborhood} name="neighborhood" onChange={handleChange} />
                        <Input placeholder="Phone" required={true} value={formData.phone} name="phone" onChange={handleChange} />
                    </div>
                </div>

                <div className={style.complements}>
                    <TextArea
                        placeholder="Observations"
                        required={true}
                        value={formData.medical_record.observations}
                        minHeight={100}
                        maxHeight={400}
                        name="observations"
                        onChange={handleChange}
                    />
                    <TextArea
                        placeholder="Main complaint"
                        required={true}
                        value={formData.medical_record.main_complaints}
                        minHeight={200}
                        maxHeight={400}
                        name="main_complaints"
                        onChange={handleChange}
                    />
                </div>

                <div className={style.questions_container}>
                    <CheckboxInput
                        hasInput={false}
                        id="thrombosisCheckbox"
                        label="Do you have or have you ever had thrombosis?"
                        answer={formData.medical_record.thrombosis}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="pacemakerCheckbox"
                        label="Do you use a pacemaker?"
                        answer={formData.medical_record.pacemaker}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="pregnantCheckbox"
                        label="Women: Are you pregnant?"
                        answer={formData.medical_record.pregnant}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="diabeticCheckbox"
                        label="Are you diabetic?"
                        answer={formData.medical_record.diabetic}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="varicoseCheckbox"
                        label="Do you have exposed varicose veins?"
                        answer={formData.medical_record.varicose}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="cancerCheckbox"
                        label="Do you have or have you ever had cancer?"
                        answer={formData.medical_record.cancer}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="heartConditionCheckbox"
                        label="Do you have a heart condition?"
                        answer={formData.medical_record.heart_condition}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="bloodPressureCheckbox"
                        label="Suffer from high blood pressure?"
                        answer={formData.medical_record.blood_pressure}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="smokeCheckbox"
                        label="Do you smoke?"
                        answer={formData.medical_record.smoke}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="painkillersCheckbox"
                        label="Do you use strong painkillers?"
                        answer={formData.medical_record.painkillers}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={false}
                        id="menopauseCheckbox"
                        label="Are you in the menopause?"
                        answer={formData.medical_record.menopause}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={true}
                        id="medicationCheckbox"
                        label="Do you take medication?"
                        placeholder="Which medication?"
                        name="medication"
                        answer={formData.medical_record.medication.answer}
                        details={formData.medical_record.medication.details}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={true}
                        id="severeHeadacheCheckbox"
                        label="Do I have a constant, severe headache?"
                        placeholder="Have you been to the doctor?"
                        name="severe_headache"
                        answer={formData.medical_record.severe_headache.answer}
                        details={formData.medical_record.severe_headache.details}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={true}
                        id="autoimmuneDiseaseCheckbox"
                        label="Do you have an autoimmune disease?"
                        placeholder="Which autoimmune disease?"
                        name="autoimmune_disease"
                        answer={formData.medical_record.autoimmune_disease.answer}
                        details={formData.medical_record.autoimmune_disease.details}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={true}
                        id="transplantedCheckbox"
                        label="Are you transplanted?"
                        placeholder="Which transplant?"
                        name="transplanted"
                        answer={formData.medical_record.transplanted.answer}
                        details={formData.medical_record.transplanted.details}
                        onChange={handleChange}
                    />
                    <CheckboxInput
                        hasInput={true}
                        id="surgicalCheckbox"
                        label="Have you undergone any surgeries?"
                        placeholder="Which surgeries?"
                        name="surgical"
                        answer={formData.medical_record.surgical.answer}
                        details={formData.medical_record.surgical.details}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.buttons_container}>
                    <StyledButton type="submit">
                        {isEditing ? "Save" : "Add Patient"}
                    </StyledButton>

                    <StyledButton variant="red" onClick={() => router.back()}>
                        Cancel
                    </StyledButton>
                </div>

            </form>

            <UploadFile visible={modalVisibility} setVisibility={setModalVisibility} />
        </div>
    );
};

export default AddPatient;
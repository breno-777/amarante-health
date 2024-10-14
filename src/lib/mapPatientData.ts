import { Patient } from "@/types/patient.type";

export const mapPatientData = (patient: Patient) => ({
    id: patient.id || "",
    status: patient.status || 0,
    avatar: patient.avatar || "",
    name: patient.name || "",
    age: patient.age || 0,
    phone: patient.phone || "",
    address: patient.address || "",
    neighborhood: patient.neighborhood || "",
    payments: {
        last_payment: patient.payments.last_payment || new Date(),
        next_payment: patient.payments.next_payment || new Date(),
    },
    medical_record: {
        observations: patient.medical_record.observations || "",
        main_complaints: patient.medical_record.main_complaints || "",
        thrombosis: patient.medical_record.thrombosis || false,
        pacemaker: patient.medical_record.pacemaker || false,
        pregnant: patient.medical_record.pregnant || false,
        diabetic: patient.medical_record.diabetic || false,
        varicose: patient.medical_record.varicose || false,
        cancer: patient.medical_record.cancer || false,
        heart_condition: patient.medical_record.heart_condition || false,
        blood_pressure: patient.medical_record.blood_pressure || false,
        smoke: patient.medical_record.smoke || false,
        painkillers: patient.medical_record.painkillers || false,
        menopause: patient.medical_record.menopause || false,
        medication: {
            answer: patient.medical_record.medication.answer || false,
            details: patient.medical_record.medication.details || "",
        },
        severe_headache: {
            answer: patient.medical_record.severe_headache.answer || false,
            details: patient.medical_record.severe_headache.details || "",
        },
        autoimmune_disease: {
            answer: patient.medical_record.autoimmune_disease.answer || false,
            details: patient.medical_record.autoimmune_disease.details || "",
        },
        transplanted: {
            answer: patient.medical_record.transplanted.answer || false,
            details: patient.medical_record.transplanted.details || "",
        },
        surgical: {
            answer: patient.medical_record.surgical.answer || false,
            details: patient.medical_record.surgical.details || "",
        },
    },
});
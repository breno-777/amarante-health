'use server'

import { Patient } from "@/types/patient.type";
import { revalidateTag } from "next/cache";
export async function handleAddPatient(patientData: Patient) {
    if (!patientData.id) {
        console.error("Patient ID is required.");
        return;
    }

    try {
        await fetch('http://localhost:3333/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData)
        });
        revalidateTag('get-patient');
    } catch (err) {
        console.error(err);
    }
}


import { Patient } from "@/types/patient.type";

export async function getAllPatients() {
    try {
        // console.log("Fetching patients...");
        const response = await fetch('http://localhost:3333/patients');
        if (!response.ok) throw new Error("Failed to fetch patients");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Fetch error:", err);
        throw err;
    }
}
export async function handleGetPatient(id: string) {
    try {
        // console.log(`Fetching patient with ID: ${id}`);
        const response = await fetch(`http://localhost:3333/patients/${id}`);
        if (!response.ok) throw new Error("Failed to fetch patient");
        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function handleUpdatePatient(id: string, updatePatient: Patient) {
    try {
        // console.log(`Fetching patient with ID: ${id}`);
        const response = await fetch(`http://localhost:3333/patients/${id}/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatePatient),
        });
        if (!response.ok) throw new Error("Failed to update patient");
        const data = await response.json();

        return data[0];
    } catch (err) {
        console.error(err);
        return [];
    }
}


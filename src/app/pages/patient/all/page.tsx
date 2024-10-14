"use client"

import { SearchBar } from "@/components/searchBar";
import style from "./all-patient.module.css";
import { Table } from "@/components/table";
import { getAllPatients } from "@/lib/handles";
import { useEffect, useState } from "react";
import { IoFileTrayStacked } from "react-icons/io5";
import { Loading } from "@/components/loading";

const AllPatients = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPatients = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAllPatients();
            setPatients(data);
        } catch (err) {
            console.error("Error fetching patients:", err);
            setError("Error fetching patients");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;

    return (
        <div className={style.container}>
            <div className={style.search_bar_container}>
                <SearchBar fill />
            </div>

            {patients.length > 0 ? (
                <div className={style.patient_list}>
                    <Table
                        headers={["Name", "Age", "Priority", "Last Payment", "Next Payment", "Status"]}
                        minCellWidth={320}
                        tableContent={patients}
                    />
                </div>
            ) : (
                <div className={style.empty_patient_list}>
                    <div>
                        <IoFileTrayStacked size={64} />
                        <p>Empty List</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AllPatients;
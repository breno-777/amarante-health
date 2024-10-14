import { IMedicalRecord } from "./medical-record.interface";
import { IPayments } from "./payments.interface";

export interface IPatient {
    id: string,
    avatar?: string,
    name: string,
    age: number,
    phone: string,
    address: string,
    neighborhood: string,
    payments?: IPayments,
    medical_record: IMedicalRecord
}
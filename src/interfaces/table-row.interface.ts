import { IPayments } from "./payments.interface";

export interface TableRow {
    id: string;
    thumbnail: string;
    name: string;
    age: number;
    priority: number;
    payments: IPayments;
    status: number;
}

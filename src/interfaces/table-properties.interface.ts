import { TableRow } from "./table-row.interface";

export interface TableProperties {
    headers: string[];
    minCellWidth: number;
    tableContent: TableRow[];
}

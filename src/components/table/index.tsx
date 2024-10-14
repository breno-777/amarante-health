import { useRef, useState } from "react";
import Image from "next/image";
import style from "./table.module.css";

import { FaEllipsisH, FaSort } from "react-icons/fa";
import NoAvatar from "@/assets/no_avatar.png"
import { TableProperties } from "@/interfaces/table-properties.interface";
import { TableRow } from "@/interfaces/table-row.interface";
import { useRouter } from "next/navigation";
// import { Dropdown } from "../modal/dropdown";

const createHeaders = (headers: string[]) => {
    return headers.map((item) => ({
        text: item,
        ref: useRef(),
    }));
}

export const Table = ({ headers, tableContent }: TableProperties) => {
    const router = useRouter();

    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selected, setSelected] = useState<TableRow[]>([]);

    // const [activeDropdownRow, setActiveDropdownRow] = useState<number | null>(null);

    const tableElement = useRef(null);
    const columns = createHeaders(headers);

    const handleSelectAll = () => {
        if (selectAll) {
            setSelected([]);
        } else {
            setSelected(tableContent);
        }
        setSelectAll(!selectAll);
        console.log(selected);
    };

    const handleSelect = (row: TableRow) => {
        if (selected.includes(row)) {
            setSelected(selected.filter((item) => item !== row));
        } else {
            setSelected([...selected, row]);
        }
    };

    return (
        <div className={style.table_wrapper}>
            <table className={style.resizeable_table} ref={tableElement}>
                <thead>
                    <tr>
                        {columns.map(({ text }) => (
                            <th key={text}>
                                {text === "Name" ?
                                    <div className={style.header_with_checkbox}>
                                        <input type="checkbox" checked={selectAll} onChange={() => handleSelectAll()} />
                                        <span>{text}</span>
                                        <FaSort size={16} />
                                    </div>
                                    :
                                    <>
                                        <span>{text}</span>
                                        <FaSort size={16} />
                                    </>
                                }
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {tableContent.map((row: TableRow, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(row)}
                                    onChange={() => handleSelect(row)}
                                />
                                {row.thumbnail && row.thumbnail !== "" ?
                                    <Image src={row.thumbnail} alt={"Patient avatar"} property="" className={style.avatar} draggable={false} />
                                    :
                                    <Image src={NoAvatar} alt={"No avatar"} property="" className={style.avatar} draggable={false} />
                                }
                                {row.name}
                            </td>
                            <td>{row.age}</td>
                            <td>{row.priority}</td>
                            <td>{new Date(row.payments.last_payment).toLocaleDateString('pt-BR')}</td>
                            <td>{new Date(row.payments.next_payment).toLocaleDateString('pt-BR')}</td>
                            <td className={`${row.status === 0 ? style.active : row.status === 1 ? style.inactive : style.suspent}`}>
                                <p>{row.status === 0 ? "Active" : row.status === 1 ? "Inactive" : "Suspent"}</p>
                                <div
                                    className={"open_dropdown"}
                                    style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
                                    onClick={() => router.push(`/pages/patient/details/${row.id}`)}
                                >
                                    <FaEllipsisH
                                        size={18}
                                        style={{ color: "rgba(var(--primary), 0.6)", zIndex: -1 }}

                                    // onClick={() => setActiveDropdownRow(activeDropdownRow === index ? null : index)}
                                    />
                                    {/* <Dropdown visibility={activeDropdownRow === index} title="Testing" /> */}
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
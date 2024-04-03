import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { IconButton } from "./icon-button";
import { Table } from "../table/table";
import { TableHeader } from "../table/table-header";
import { TableCell } from "../table/table-cell";
import { TableRow } from "../table/table-row";
import { ChangeEvent, useState} from 'react';
import { attendees } from "../data/attendees";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeeList() {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1);

    let TotalPages = Math.ceil(attendees.length / 10)

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
    }
 
    function goToFirstPage() {
        setPage(1);
    }

    function goToLastPage() {
        setPage(TotalPages);
    }

    function goToNextPage() {
        setPage(page + 1);
    }

    function goToPreviusPage() {
        setPage(page - 1);
    }

    return (
    <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                <Search className="size-4 text-emerald-300"/>
                <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0  p-0 text-sm" placeholder="Buscar participantes..." />
                {search}
            </div>
        </div>

        <Table>
                <thead>
                    <tr className="border-b border-white/10 ">
                        <th style={{ width:48 }} className="py-3 px-4 text-sm font-semibold text-left">
                            <input className="size-4 bg-black/20 rounded  border border-white/10 accent-orange-400"  type="checkbox" />
                        </th>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participantes</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width:64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                        return (
                        <TableRow key={attendee.id} className="border-b border-white/10 hover:bg-white/5">
                            <TableCell style={{ width:48 }}>
                                <input className="size-4 bg-black/20 rounded  border border-white/10 accent-orange-400" type="checkbox" />  
                            </TableCell>
                            <TableCell>{attendee.id}</TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold">{attendee.name}</span>
                                    <span>{attendee.email}</span>
                                </div>
                            </TableCell>
                            <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                            <TableCell>{dayjs().to(attendee.checkIn)}</TableCell>
                            <TableCell>
                                <IconButton transparent={true}>
                                    <MoreHorizontal className="size-4"/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Mostrando 10 de {attendees.length} itens</TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            
                        <div className="inline-flex items-center gap-8">
                            <span>Páginas {page} de {TotalPages}</span>

                            <div className="flex gap-1.5">
                            <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                <ChevronsLeft className="size-4"/>
                            </IconButton>
                            <IconButton onClick={goToPreviusPage} disabled={page === 1}>
                                <ChevronLeft className="size-4"/>
                            </IconButton>
                            <IconButton onClick={goToNextPage} disabled={page === TotalPages}>
                                <ChevronRight className="size-4"/>
                            </IconButton>
                            <IconButton onClick={goToLastPage} disabled={page === TotalPages}>
                                <ChevronsRight className="size-4"/>
                            </IconButton>
                            </div>
                        </div>  
                        </TableCell>
                    </tr>
                </tfoot>
        </Table>
    </div>  
 )
}
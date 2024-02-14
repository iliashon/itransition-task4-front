import { IUser } from "../types/IUser.ts";
import {
    DataGrid,
    GridColDef,
    GridRowSelectionModel,
    GridValueGetterParams,
} from "@mui/x-data-grid";
import { useState } from "react";
import { Button } from "@mui/material";
import {
    LockClosedIcon,
    LockOpenIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";

const style = {
    actionButton: "h-8",
};

const COLUMNS: GridColDef[] = [
    { field: "id" },
    { field: "email", width: 170 },
    { field: "first_name" },
    { field: "last_name", width: 130 },
    { field: "blocked" },
    {
        field: "last_login",
        valueGetter: (params: GridValueGetterParams) =>
            params.value ? params.value : "null",
    },
    {
        field: "updated_at",
        width: 200,
        valueGetter: (params: GridValueGetterParams) => params.value,
    },
    { field: "created_at", width: 200 },
];

const Table = ({ data }: { data: IUser[] }) => {
    const [rowSelected, setRowSelected] = useState<GridRowSelectionModel>([]);
    return (
        <>
            <div className="flex justify-between mb-2">
                <h1 className="text-2xl mb-2">Table</h1>
                <div className="flex gap-5">
                    <Button
                        variant="contained"
                        className={style.actionButton}
                        startIcon={<TrashIcon className="h-5" />}
                        color="error"
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        className={style.actionButton}
                        startIcon={<LockClosedIcon className="h-5" />}
                        color="warning"
                    >
                        Block
                    </Button>
                    <Button
                        variant="contained"
                        className={style.actionButton}
                        startIcon={<LockOpenIcon className="h-5" />}
                        color="success"
                    >
                        Unblock
                    </Button>
                </div>
            </div>
            <div>
                <DataGrid
                    columns={COLUMNS}
                    rows={data}
                    checkboxSelection
                    onRowSelectionModelChange={(newRowSelected) => {
                        setRowSelected(newRowSelected);
                    }}
                    rowSelectionModel={rowSelected}
                />
                <pre>{JSON.stringify(rowSelected)}</pre>
            </div>
        </>
    );
};

export default Table;

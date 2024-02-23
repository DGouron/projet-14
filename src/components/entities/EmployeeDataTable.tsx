"use client"

import { useAppContext } from "../providers"
import { DataTable } from "../ui/data-table"
import { EmployeesColumns } from "./employeeColumns";


export function EmployeeDataTable() {
  const appContext = useAppContext();
  return (
    <div>
      <DataTable columns={EmployeesColumns} data={appContext.employeeList} />
    </div>
  )
}

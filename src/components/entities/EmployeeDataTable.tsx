"use client"

import { EmployeesColumns } from "../entities/EmployeeColumns.tsx";
import { useAppContext } from "../providers"
import { DataTable } from "../ui/data-table"


export function EmployeeDataTable() {
  const appContext = useAppContext();
  return (
    <section className="mt-4 w-full ">
      <DataTable columns={EmployeesColumns} data={appContext.employeeList} />
    </section>
  )
}

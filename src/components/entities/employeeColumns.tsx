import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { EmployeeType } from "../providers"
import { Button } from "../ui/button"

export const EmployeesColumns: ColumnDef<EmployeeType>[] = [
  {
    accessorKey: "firstName",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("firstName")}</div>,
  },
  {
    accessorKey: "lastName",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="lowercase">{row.getValue("lastName")}</div>,
  },
  {
    accessorKey: "startDate",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="lowercase">{row.getValue("startDate")}</div>,
  }
]
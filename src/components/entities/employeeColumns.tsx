import { findStateInitials, formatDate } from "@/lib/tools";
import {
  CaretSortIcon,
} from "@radix-ui/react-icons";
import type { ColumnDef } from "@tanstack/react-table"
import type { EmployeeType } from "../providers"
import { Button } from "../ui/button"

export const EmployeesColumns: ColumnDef<EmployeeType>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-lg"
        >
          First Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize text-base font-normal">{row.getValue("firstName")}</div>,
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
          className="text-lg"
        >
          Last Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="capitalize text-lg font-normal">{row.getValue("lastName")}</div>,
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
          className="text-lg"
        >
          Start Date
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="lowercase text-lg font-normal">{formatDate(row.getValue("startDate"))}</div>,
  },
  {
    accessorKey: "jobDepartment",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-lg"
        >
          Department
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="capitalize text-lg font-normal">{row.getValue("jobDepartment")}</div>,
  },
  {
    accessorKey: "dateOfBirth",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-lg"
        >
          Date of Birth
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="lowercase text-lg font-normal">{formatDate(row.getValue("dateOfBirth"))}</div>,
  },
  {
    accessorKey: "street",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-lg"
        >
          Street
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="lowercase text-lg font-normal">{row.getValue("street")}</div>,
  },
  {
    accessorKey: "city",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-lg"
        >
          City
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="capitalize text-lg font-normal">{row.getValue("city")}</div>,
  },
  {
    accessorKey: "state",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-lg"
        >
          State
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="uppercase text-lg font-normal">{findStateInitials(row.getValue("state"))}</div>,
  },
  {
    accessorKey: "zip",
    enableColumnFilter: true,
    enableHiding: true,
    enableSorting: true,
    enableResizing: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-lg"
        >
          Zip Code
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => <div className="lowercase text-lg font-normal">{row.getValue("zip")}</div>,
  }
]
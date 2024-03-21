/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {
  type ColumnDef,
  type ColumnFiltersState,
  type FilterFn,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { rankItem } from "@tanstack/match-sorter-utils";
import SelectComponent from "magic-select";
import { useState } from "react";
import SwitchPage from "../actions/SwitchPage"
import { Input } from "./input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);
  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = useState("");

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  })

  const numberOfPages = table.getPageCount();
  const numberOfEntriesPerPage = table.getState().pagination.pageSize;
  const currentPage = table.getState().pagination.pageIndex + 1;
  const numberOfEntries = table.getFilteredRowModel().rows.length;
  const firstEntry = numberOfEntriesPerPage * (currentPage - 1) + 1;
  const lastEntry =
    numberOfEntriesPerPage * currentPage > numberOfEntries
      ? numberOfEntries
      : numberOfEntriesPerPage * currentPage;

  return (
    <div className="rounded-md border p-4">
      <div className="flex py-4 gap-4 justify-between w-full">
        <div className="flex gap-4 flex-1 items-center">
          <p>Search : </p>
          <Input
            placeholder="Filter..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(String(e.target.value))}
            className="max-w-sm"
          />
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8 ml-auto">
          <div className="flex items-center space-x-2 gap-4 flex-1">
            <p>Show</p>
            <SelectComponent label="" optionsToDisplay={[
              { value: "10" },
              { value: "20" },
              { value: "30" },
              { value: "40" },
              { value: "50" },
            ]}
              triggerCurrentOption={(value) => table.setPageSize(Number(value))}
            />
            <p>entries</p>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups()?.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers?.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows?.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells()?.map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {firstEntry} to {lastEntry} of {numberOfEntries} entries{" "}
        </div>

        <SwitchPage
          table={table}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </div>
    </div>
  )
}


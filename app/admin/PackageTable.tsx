"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Package } from "./page";

import "./admin.css";

interface Props {
  data: Package[];
  onEdit: (pkg: Package) => void;
  onDelete: (pkg: Package) => void;
}

export default function PackageTable({ data, onEdit, onDelete }: Props) {
  const [globalFilter, setGlobalFilter] = useState("");

  const columns: ColumnDef<Package>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const url = row.original.imageUrl;
      return url ? (
        <img
          src={url}
          alt={row.original.name}
          style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
        />
      ) : (
        <span>No Image</span>
      );
    },
  },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "offerPrice",
      header: "Offer",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="admin-actions">
          <button
            className="admin-btn admin-btn-edit"
            onClick={() => onEdit(row.original)}
          >
            Edit
          </button>
          <button
            className="admin-btn admin-btn-delete"
            onClick={() => onDelete(row.original)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="admin-table-wrapper">
      {/* Search */}
      <input
        placeholder="Search packages..."
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="admin-search"
      />

      {/* Table */}
      <table className="admin-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="admin-pagination">
        <button
          className="admin-page-btn"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </button>

        <span className="admin-page-info">
          Page {table.getState().pagination.pageIndex + 1}
        </span>

        <button
          className="admin-page-btn"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

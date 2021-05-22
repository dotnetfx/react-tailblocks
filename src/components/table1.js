import React, { useMemo } from 'react'
import { useTable } from 'react-table'

export default function Table1({ data, columns, className }) {
    const _data = data || useMemo(() => [
        {
            name:
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt="" />
                    </div>

                    <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">John Doe</div>
                        <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                    </div>
                </div>,
            title:
                <div>
                    <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                    <div className="text-sm leading-5 text-gray-500">Web dev</div>
                </div>,
            status: 
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>,
            role: 
                <span className="text-sm leading-5 text-gray-500">Owner</span>,
            edit:
                <a href="#" className="text-blue-600 hover:text-blue-900 text-sm leading-5 font-medium">Edit</a>
        }
    ], [])

    const _columns = columns || useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
        }, {
            Header: 'Title',
            accessor: 'title',
        }, {
            Header: 'Status',
            accessor: 'status',
        }, {
            Header: 'Role',
            accessor: 'role',
        }, {
            Header: '',
            accessor: 'edit',
        }
    ], [])

    const table = useTable({ columns: _columns, data: _data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = table

    return (
        <div className={"flex flex-col mt-8" + className}>
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full" {...getTableProps()}>
                        <thead>
                            {headerGroups.map(hg => (
                                <tr {...hg.getHeaderGroupProps()}>
                                    { hg.headers.map(column => (
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" {...column.getHeaderProps()}>
                                            { column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="bg-white" {...getTableBodyProps()}>
                            {rows.map(r => {
                                prepareRow(r)
                                return (
                                    <tr {...r.getRowProps()}>
                                        { r.cells.map(c => {
                                            return (
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200" {...c.getCellProps()}>
                                                    { c.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
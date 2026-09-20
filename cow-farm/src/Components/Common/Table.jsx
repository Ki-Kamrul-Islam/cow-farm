const ALIGN = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

// columns: [{ key, header, align?, render? }]
//   key    = অনন্য নাম (row[key] থেকে মান নেয়)
//   header = মাথার লেখা (আগে থেকে অনুবাদ করা)
//   align  = 'left' | 'center' | 'right' (সংখ্যার জন্য 'right')
//   render = দিলে row থেকে নিজের মতো কিছু দেখাতে পারে (যেমন Badge)
// rows: data-র তালিকা
// getRowKey: প্রতিটি row-এর অনন্য পরিচয় বের করার function
function Table({ columns, rows, getRowKey }) {
    return (
        // ছোট screen-এ table চওড়া হলে ভেতরে আড়াআড়ি scroll হয়, পুরো page ভাঙে না
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
                <thead>
                    <tr className="border-b border-line bg-background/60 text-muted">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                scope="col"
                                className={`whitespace-nowrap px-4 py-3 font-medium ${
                                    ALIGN[column.align ?? "left"]
                                }`}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-line">
                    {rows.map((row) => (
                        <tr
                            key={getRowKey(row)}
                            className="transition-colors hover:bg-background"
                        >
                            {columns.map((column) => (
                                <td
                                    key={column.key}
                                    className={`whitespace-nowrap px-4 py-3 text-content ${
                                        ALIGN[column.align ?? "left"]
                                    }`}
                                >
                                    {column.render ?
                                        column.render(row)
                                    :   row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

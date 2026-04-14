import StatusBadge from "./ui/StatusBadge";

function ItemTable({ items, onDelete }) {
  return (
    <section className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-ink">Recent Work Items</h2>
          <p className="text-sm text-slate-500">
            A sample table powered by the Express API.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-500">
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Owner</th>
              <th className="px-6 py-4 font-medium">Due Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 bg-white">
            {items.map((item) => (
              <tr key={item.id} className="text-sm text-slate-700">
                <td className="px-6 py-4 font-medium text-ink">{item.title}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.owner}</td>
                <td className="px-6 py-4">{item.dueDate}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-sm font-semibold text-rose-500 transition hover:text-rose-600"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ItemTable;

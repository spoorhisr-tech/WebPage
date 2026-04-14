const statusStyles = {
  Completed: "bg-emerald-100 text-emerald-700",
  "In Progress": "bg-amber-100 text-amber-700",
  Pending: "bg-slate-200 text-slate-700",
};

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-slate-200 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;

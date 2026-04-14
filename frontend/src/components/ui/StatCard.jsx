function StatCard({ title, value, helper }) {
  return (
    <article className="card px-5 py-5">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="mt-3 text-3xl font-semibold text-ink">{value}</h3>
      <p className="mt-2 text-sm text-slate-500">{helper}</p>
    </article>
  );
}

export default StatCard;

function Loader() {
  return (
    <div className="card flex min-h-40 items-center justify-center px-6 py-8">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-brand-100 border-t-brand-500" />
        <p className="mt-4 text-sm font-medium text-slate-500">
          Loading dashboard data...
        </p>
      </div>
    </div>
  );
}

export default Loader;

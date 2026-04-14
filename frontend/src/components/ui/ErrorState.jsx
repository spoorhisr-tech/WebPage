function ErrorState({ message, onRetry }) {
  return (
    <div className="card flex flex-col items-start gap-4 px-6 py-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
          Error
        </p>
        <h3 className="mt-2 text-xl font-semibold text-ink">
          Something needs attention
        </h3>
        <p className="mt-2 text-sm text-slate-600">{message}</p>
      </div>

      <button type="button" className="btn-secondary" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
}

export default ErrorState;

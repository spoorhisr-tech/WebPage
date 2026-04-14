import { HiOutlineBell, HiOutlineMagnifyingGlass } from "react-icons/hi2";

function Navbar() {
  return (
    <header className="card flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-brand-600">Welcome back</p>
        <h1 className="text-2xl font-semibold text-ink">Team Operations Hub</h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <HiOutlineMagnifyingGlass className="text-slate-400" />
          <input
            type="text"
            placeholder="Search projects"
            className="bg-transparent text-sm text-slate-700 placeholder:text-slate-400"
          />
        </label>

        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
        >
          <HiOutlineBell className="text-xl" />
          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-amber-400" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

import {
  HiOutlineChartBarSquare,
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
  HiOutlineUsers,
} from "react-icons/hi2";

const menuItems = [
  { label: "Dashboard", icon: HiOutlineChartBarSquare, active: true },
  { label: "Tasks", icon: HiOutlineClipboardDocumentList, active: false },
  { label: "Team", icon: HiOutlineUsers, active: false },
  { label: "Settings", icon: HiOutlineCog6Tooth, active: false },
];

function Sidebar() {
  return (
    <aside className="card h-fit px-4 py-5">
      <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-5 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">
          Workspace
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Pulse Panel</h2>
        <p className="mt-2 text-sm text-white/80">
          A clean starter dashboard with reusable sections and scalable layout.
        </p>
      </div>

      <nav className="mt-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                item.active
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className="text-lg" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

import ItemForm from "../components/ItemForm";
import ItemTable from "../components/ItemTable";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ErrorState from "../components/ui/ErrorState";
import Loader from "../components/ui/Loader";
import StatCard from "../components/ui/StatCard";
import { useItems } from "../hooks/useItems";

function DashboardPage() {
  const { items, isLoading, error, fetchItems, addItem, removeItem } = useItems();

  const completedCount = items.filter((item) => item.status === "Completed").length;
  const inProgressCount = items.filter(
    (item) => item.status === "In Progress"
  ).length;

  const handleAddItem = async (payload) => {
    await addItem(payload);
  };

  const handleDeleteItem = async (id) => {
    await removeItem(id);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(31,138,112,0.14),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <Sidebar />

        <main className="space-y-6">
          <Navbar />

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total Items"
              value={items.length}
              helper="All current items from the API"
            />
            <StatCard
              title="Completed"
              value={completedCount}
              helper="Finished and delivered work"
            />
            <StatCard
              title="In Progress"
              value={inProgressCount}
              helper="Tasks actively moving forward"
            />
            <StatCard
              title="Team Members"
              value="08"
              helper="Example summary card for dashboards"
            />
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            {isLoading ? (
              <Loader />
            ) : error ? (
              <ErrorState message={error} onRetry={fetchItems} />
            ) : (
              <ItemTable items={items} onDelete={handleDeleteItem} />
            )}

            <ItemForm onSubmit={handleAddItem} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;

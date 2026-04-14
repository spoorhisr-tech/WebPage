// In a real project this file would connect to a database.
// For a beginner-friendly starter, we use in-memory data.
const items = [
  {
    id: "1",
    title: "Quarterly planning",
    category: "Planning",
    status: "In Progress",
    owner: "Ava",
    dueDate: "2026-04-20",
  },
  {
    id: "2",
    title: "Landing page refresh",
    category: "Design",
    status: "Completed",
    owner: "Liam",
    dueDate: "2026-04-10",
  },
  {
    id: "3",
    title: "API integration audit",
    category: "Engineering",
    status: "Pending",
    owner: "Noah",
    dueDate: "2026-04-30",
  },
];

export const itemModel = {
  findAll() {
    return items;
  },

  findById(id) {
    return items.find((item) => item.id === id);
  },

  create(payload) {
    const newItem = {
      id: String(Date.now()),
      ...payload,
    };

    items.unshift(newItem);
    return newItem;
  },

  update(id, payload) {
    const itemIndex = items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return null;
    }

    items[itemIndex] = { ...items[itemIndex], ...payload };
    return items[itemIndex];
  },

  remove(id) {
    const itemIndex = items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return null;
    }

    const [deletedItem] = items.splice(itemIndex, 1);
    return deletedItem;
  },
};

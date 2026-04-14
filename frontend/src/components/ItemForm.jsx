import { useState } from "react";

const initialFormData = {
  title: "",
  category: "",
  status: "Pending",
  owner: "",
  dueDate: "",
};

function ItemForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.title.trim()) nextErrors.title = "Title is required.";
    if (!formData.category.trim()) nextErrors.category = "Category is required.";
    if (!formData.owner.trim()) nextErrors.owner = "Owner is required.";
    if (!formData.dueDate) nextErrors.dueDate = "Due date is required.";

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});
      await onSubmit(formData);
      setFormData(initialFormData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="card px-6 py-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-ink">Create New Item</h2>
        <p className="text-sm text-slate-500">
          This sample form demonstrates React hooks, validation, and API calls.
        </p>
      </div>

      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Enter task title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title ? (
            <p className="mt-2 text-sm text-rose-500">{errors.title}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            className="input"
            placeholder="Design, Marketing, Engineering"
            value={formData.category}
            onChange={handleChange}
          />
          {errors.category ? (
            <p className="mt-2 text-sm text-rose-500">{errors.category}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Owner
          </label>
          <input
            type="text"
            name="owner"
            className="input"
            placeholder="Assigned team member"
            value={formData.owner}
            onChange={handleChange}
          />
          {errors.owner ? (
            <p className="mt-2 text-sm text-rose-500">{errors.owner}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
          </label>
          <select
            name="status"
            className="input"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            className="input"
            value={formData.dueDate}
            onChange={handleChange}
          />
          {errors.dueDate ? (
            <p className="mt-2 text-sm text-rose-500">{errors.dueDate}</p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Add Item"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ItemForm;

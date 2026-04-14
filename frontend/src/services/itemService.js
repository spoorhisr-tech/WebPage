import api from "./api";

export const itemService = {
  async getItems() {
    const response = await api.get("/items");
    return response.data.data;
  },

  async createItem(payload) {
    const response = await api.post("/items", payload);
    return response.data.data;
  },

  async deleteItem(id) {
    const response = await api.delete(`/items/${id}`);
    return response.data.data;
  },
};

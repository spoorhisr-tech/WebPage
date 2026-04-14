import { supabase } from "../lib/supabaseClient";

/**
 * Service to handle Item operations using Supabase.
 * Maps snake_case database fields to camelCase for the UI.
 */
export const itemService = {
  async getItems() {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Map database fields to camelCase for the UI
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      status: item.status,
      owner: item.owner,
      dueDate: item.due_date,
    }));
  },

  async createItem(payload) {
    // Map camelCase UI fields to snake_case database fields
    const dbPayload = {
      title: payload.title,
      category: payload.category,
      status: payload.status,
      owner: payload.owner,
      due_date: payload.dueDate,
    };

    const { data, error } = await supabase
      .from("items")
      .insert([dbPayload])
      .select()
      .single();

    if (error) throw error;

    return {
      id: data.id,
      title: data.title,
      category: data.category,
      status: data.status,
      owner: data.owner,
      dueDate: data.due_date,
    };
  },

  async deleteItem(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);

    if (error) throw error;
    return true;
  },

  async updateItem(id, payload) {
    const dbPayload = {};
    if (payload.title) dbPayload.title = payload.title;
    if (payload.category) dbPayload.category = payload.category;
    if (payload.status) dbPayload.status = payload.status;
    if (payload.owner) dbPayload.owner = payload.owner;
    if (payload.dueDate) dbPayload.due_date = payload.dueDate;

    const { data, error } = await supabase
      .from("items")
      .update(dbPayload)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return {
      id: data.id,
      title: data.title,
      category: data.category,
      status: data.status,
      owner: data.owner,
      dueDate: data.due_date,
    };
  },
};

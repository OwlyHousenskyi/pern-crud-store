import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data.data });
    } catch (err) {
      if (err.response?.status === 429) {
        set({ error: "Rate limit exceeded" });
      } else {
        set({ error: "Something went wrong" });
      }
    } finally {
      set({ loading: false });
    }
  }
}));

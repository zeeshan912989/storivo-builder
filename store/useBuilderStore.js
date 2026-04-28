import { create } from 'zustand';
import { temporal } from 'zundo';

const initialData = {
  content: [],
  root: {
    props: {
      title: "Storivo | Premium Store",
      description: "Welcome to our next-gen e-commerce store.",
      primaryColor: "#000000",
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
      borderRadius: "8px",
    },
  },
};

export const useBuilderStore = create(
  temporal(
    (set) => ({
      data: initialData,
      setData: (newData) => set({ data: newData }),
    }),
    { limit: 100 }
  )
);

import create from "zustand";
import { persist } from "zustand/middleware";

let dashboardApp = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

dashboardApp = persist(dashboardApp, { name: "dashboard_app" });
export const useDasboardApp = create(dashboardApp);

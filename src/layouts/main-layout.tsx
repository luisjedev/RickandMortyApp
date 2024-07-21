import { Outlet } from "react-router-dom";
import { Header } from "../components";

export function MainLayout() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="p-4 max-w-[1000px] w-full">
        <Outlet />
      </main>
    </div>
  );
}

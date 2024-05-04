import { Outlet } from "react-router-dom";
import { Navbar } from "../app/components";

const RootLayout = () => {
  return (
    <div className="flex flex-row">
      <div>{/* Sidebar */}</div>
      <div className="w-full bg-light-1">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="bg-background h-screen w-screen">
      <Header />
      <main className="w-full h-[calc(100vh-15rem)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

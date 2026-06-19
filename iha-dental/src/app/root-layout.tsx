import { Outlet } from "@tanstack/react-router";
import Navbar from "@/shared/layout/Navbar";
import Footer from "@/shared/layout/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="border-b border-zinc-800">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-xl font-bold">
            1Fi Store
          </a>
          <div className="text-sm text-zinc-300">Powered by 1Fi</div>
        </div>
      </header>
      <main className="container py-6">
        <Outlet />
      </main>
    </>
  );
}

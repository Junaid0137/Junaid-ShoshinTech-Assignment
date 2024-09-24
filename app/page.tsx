import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <hr className="mt-5" />
      <div className="mx-auto">
        <Dashboard />
      </div>
    </div>
  );
}

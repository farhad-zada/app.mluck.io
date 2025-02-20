import { Metadata } from "next";
import Dashboard from "./components/Dashboard";

export const metadata: Metadata = {
  title: "Mluck",
  description: "Mluck",
};

export default function Home() {
  return (
    <Dashboard />
  );
}

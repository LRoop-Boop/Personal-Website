import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import Projects from "./pages/ProjectsPage";

import Navbar from "../src/components/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}

function RouterLayout() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouterLayout />
    </BrowserRouter>
  );
}
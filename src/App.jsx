import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-accent font-sans">
      <Navbar />
      <Landing />
      <ProductGrid />
      <Footer />
    </div>
  );
}

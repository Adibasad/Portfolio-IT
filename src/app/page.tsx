"use client";
import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <Header/>
      <Hero/>
    </div>
    
    </>
  );
}

export default App;

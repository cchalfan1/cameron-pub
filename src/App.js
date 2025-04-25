import React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import TermsOfService from "./pages/TermsOfService";
import Footer from "./pages/Footer";
import Support from "./pages/Support";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/tos" element={<TermsOfService />} />
          <Route exact path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

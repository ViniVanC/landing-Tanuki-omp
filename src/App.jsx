import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./sections/AboutUs/AboutUs";
import { Contacts } from "./sections/Contacts/Contacts";
import { Hi } from "./sections/Hi/Hi";
import { Works } from "./sections/Works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hi />
        <AboutUs />
        <Works />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

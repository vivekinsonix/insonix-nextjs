import { DarkThemeToggle } from "flowbite-react";

import Header from "./layout/header";
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Services from "./components/service/services";
import Portfolio from "./components/portfolio/portfolio";
// import Clients from "./components/clients/clients";
import Contact from "./components/contacts/contacts";
import Footer from "./layout/footer";
import Careers from "./components/careers/careers";

export default function Home() {


  return (
    <main className="">

      <Header />
      <Hero />
      <About />
      <Careers />
      <Services />
      <Portfolio />
      {/* <Clients /> */}
      <Contact />
      <Footer />

    </main>
  );
}

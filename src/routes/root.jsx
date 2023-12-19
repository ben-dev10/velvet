import AOS from "aos";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Sheet from "../components/ui/Sheet";
import { Outlet } from "react-router-dom";

AOS.init({
  easing: "ease-in-out-sine",
});

export default function Root() {
  return (
    <>
      <header className="flex p-4 pt-3 sticky z-[999] top-0 bg-transparent">
        <Header />
        <Sheet />
      </header>
      <main className="main">
        <div id="detail">
          <Outlet>
            <Main />
          </Outlet>
        </div>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}

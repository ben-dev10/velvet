import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sheet from "./components/ui/Sheet";
import AOS from "aos";

AOS.init({
  easing: "ease-in-out-sine",
});

function App() {
  return (
    <>
      <header className="flex p-4 pt-3 sticky z-[999] top-0 bg-transparent">
        <Header />
        <Sheet />
      </header>
      <main className="">
        <Main />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}

export default App;

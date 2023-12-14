import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sheet from "./components/ui/Sheet";

function App() {
  return (
    <>
      <header className="flex p-4 pt-3 sticky top-0 bg-transparent">
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

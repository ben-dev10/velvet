import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <header className="flex p-4 pt-3 sticky top-0">
        <Header />
      </header>
      <main className="">
        <Main />
      </main>
      <footer className="mt-5 p-4 pb-[70px] border-t">
        <Footer />
      </footer>
    </>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16">
      <Header />
      <div className="fixed -z-50 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-emerald-500 blur-[150px] md:blur-[350px] opacity-30 left-0 top-0"></div>
      <div className="fixed -z-50 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-emerald-500 blur-[150px] md:blur-[350px] opacity-30 right-0 bottom-0"></div>
      <main className="flex flex-col gap-20">
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

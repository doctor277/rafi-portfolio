import { useEffect } from "react";
import { AboutV2 } from "./components/AboutV2";
import { ContactV2 } from "./components/ContactV2";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsV2 } from "./components/ProjectsV2";

function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ProjectsV2 />
        <AboutV2 />
        <ContactV2 />
      </main>
    </>
  );
}

export default App;

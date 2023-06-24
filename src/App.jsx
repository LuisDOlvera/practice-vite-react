import ViteCard from "./components/ViteCard";

export default function App() {
  return (
    <>
      <section className="head-container">
        <div className="title">
          <h1 className="vite-header">
            <span className="clip">Vite</span>
          </h1>
          <p className="text">
            Next Generation <br /> Frontend Tooling
          </p>
          <p className="tagline">
            Get ready for a development environment that <br /> can finnaly
            catch up with tou
          </p>
          <div className="buttons">
            <button>
              <span>Get Started</span>
            </button>
            <button>
              <span>Why Vite?</span>
            </button>
            <button>
              <span>View on GitHub</span>
            </button>
          </div>
        </div>
        <div className="image">
          <img src="https://vitejs.dev/logo-with-shadow.png" alt="vite-image" />
        </div>
      </section>
      <section className="listCards">
        <div className="container-cards">
          <span className="article-cont">
            <article className="box">
              <ViteCard
                title="Lorem ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <ViteCard
                title="Lorem ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <ViteCard
                title="Lorem ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <ViteCard
                title="Lorem ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <ViteCard
                title="Lorem ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </article>
          </span>
        </div>
      </section>
    </>
  );
}

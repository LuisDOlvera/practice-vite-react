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
                emoji="💡"
                title="Instant Server Start."
                description="On demand file serving over native ESM, no bundling required!."
              />
              <ViteCard
                emoji="⚡"
                title="Lightning Fast HMR."
                description="Hot Module Replacement (HMR) that stays fast regardless of app size."
              />
              <ViteCard
                emoji="🛠️"
                title="Rich Features."
                description="Out-of-the-box support for TypeScript, JSX, CSS and more."
              />
              <ViteCard
                emoji="📦"
                title="Optimized Build."
                description="Pre-configured Rollup build with multi-page and library mode support."
              />
              <ViteCard
                emoji="🔩"
                title="Universal Plugins."
                description="Rollup-superset plugin interface shared between dev and build."
              />
              <ViteCard
                emoji="🔑"
                title="Fully Typed APIs."
                description="Flexible programmatic APIs with full TypeScript typing."
              />
            </article>
          </span>
        </div>
      </section>
    </>
  );
}

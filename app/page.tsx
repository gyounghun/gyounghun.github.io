import { Mail, MapPin } from 'lucide-react';
import { SiteFooter, SiteHeader } from './site-components';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Gyounghun Ko</h1>
            <p className="hero-field">
              Mathematics <span>•</span> Kinetic Theory <span>•</span> PDE
            </p>
            <p className="hero-role">Postdoctoral Researcher</p>
          </div>
          <img
            className="portrait-slot"
            src="/Electronic_Photo_GH.jpg"
            alt="Gyounghun Ko"
          />
        </div>
        <div className="hero-intro">
          <p>
            My current research interests are nonlinear partial differential equations of various kinetic models, especially the Boltzmann equation. 
            The research topic include boundary problems, Cauchy problems, and stability problems, etc. 
            Recently, I have interested in the hydrodynamic limit, which connects solutions of the Boltzmann equation to those of the Euler equation or Navier-Stokes equations.
          </p>
          <div className="hero-meta">
            <a href="http://english.amss.cas.cn/" target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" size={17} />
              AMSS, Chinese Academy of Sciences
            </a>
            <a href="mailto:gyeonghungo@amss.ac.cn">
              <Mail aria-hidden="true" size={17} />
              gyeonghungo@amss.ac.cn
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

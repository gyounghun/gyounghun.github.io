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
          <aside className="portrait-slot" aria-label="Reserved space for a profile photograph" />
        </div>
        <div className="hero-intro">
          <p>
            I study nonlinear partial differential equations arising from kinetic models,
            with a particular focus on the Boltzmann equation. Recently, I have been
            interested in the hydrodynamic limit—the rigorous bridge connecting solutions
            of the Boltzmann equation to the Euler and Navier–Stokes equations.
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

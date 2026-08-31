import type { Metadata } from 'next';
import { awards } from '../profile-data';
import { BackHome, ExternalLink, PageHeading, SiteFooter, SiteHeader } from '../site-components';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Experience · Gyounghun Ko',
  description: 'Employment, education, honors, and awards of Gyounghun Ko.',
};

export default function ExperiencePage() {
  return (
    <main>
      <SiteHeader active="experience" />
      <PageHeading
        number="02"
        eyebrow="Experience"
        title="Appointments & recognition"
        description="Academic appointments, education, and selected honors."
      />
      <section className="content-page two-column experience-page">
        <div>
          <p className="eyebrow">Appointments</p>
          <h2>Employment</h2>
          <div className="timeline">
            <article>
              <time>2025.10 — present</time>
              <h3>Postdoctoral Researcher</h3>
              <p>Academy of Mathematics and Systems Science, Chinese Academy of Sciences</p>
              <ExternalLink href="http://english.amss.cas.cn/">AMSS, CAS</ExternalLink>
            </article>
            <article>
              <time>2024.03 — 2025.08</time>
              <h3>Postdoctoral Researcher</h3>
              <p>Center for Mathematical Machine Learning and its Applications</p>
              <ExternalLink href="https://www.cm2la.com/">CM2LA</ExternalLink>
            </article>
            <article>
              <time>February 2024</time>
              <h3>Ph.D. in Mathematics</h3>
              <p>
                POSTECH · Advisor:{' '}
                <a href="https://sites.google.com/site/donghyunlee295/" target="_blank" rel="noreferrer">Donghyun Lee</a>
              </p>
            </article>
          </div>
        </div>
        <div className="awards-panel">
          <p className="eyebrow">Recognition</p>
          <h2>Honors &amp; awards</h2>
          <ul>
            {awards.map(([year, title, detail]) => (
              <li key={title}>
                <span>{year}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <BackHome />
      </section>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { publications } from '../profile-data';
import { BackHome, ExternalLink, PageHeading, SiteFooter, SiteHeader } from '../site-components';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Publications · Gyounghun Ko',
  description: 'Publications and preprints by Gyounghun Ko.',
};

export default function PublicationsPage() {
  return (
    <main>
      <SiteHeader active="publications" />
      <PageHeading
        number="01"
        eyebrow="Selected work"
        title="Publications & preprints"
        description="Research articles on the Boltzmann equation, kinetic models, stability, and large-amplitude solutions."
      />
      <section className="content-page publications-page">
        <div className="section-heading-row compact-heading">
          <p className="content-count">{publications.length} works</p>
          <a
            className="cv-button"
            href="https://drive.google.com/file/d/12t26Ub4nb3SkVY38lxESAhifUkBZKyKR/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            <FileText aria-hidden="true" size={17} /> Full CV
          </a>
        </div>
        <ol className="publication-list">
          {publications.map((paper, index) => (
            <li key={paper.title}>
              <div className="paper-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="paper-body">
                <div className="paper-meta">
                  <span>{paper.year}</span>
                  {paper.venue && <span>{paper.venue}</span>}
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
              </div>
              <div className="paper-links">
                {paper.links.map((link) => (
                  <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <BackHome />
      </section>
      <SiteFooter />
    </main>
  );
}

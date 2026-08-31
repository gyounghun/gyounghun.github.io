import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const navigation = [
  ['publications', 'Publications', '/publications'],
  ['experience', 'Experience', '/experience'],
  ['teaching', 'Teaching', '/teaching'],
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Gyounghun Ko, home">
        GK<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        {navigation.map(([key, label, href]) => (
          <a key={href} href={href} aria-current={active === key ? 'page' : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <a
        className="header-cv"
        href="/CV_Gyounghun.pdf"
        target="_blank"
        rel="noreferrer"
      >
        CV <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer-simple">
      <div className="footer-links">
        <a href="mailto:gyeonghungo@amss.ac.cn">gyeonghungo@amss.ac.cn</a>
        <a href="mailto:gyounghun347@gmail.com">gyounghun347@gmail.com</a>
        <a href="mailto:gyounghun347@postech.ac.kr">gyounghun347@postech.ac.kr</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Gyounghun Ko</p>
    </footer>
  );
}

export function PageHeading({ number, eyebrow, title, description }: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-heading">
      <div className="page-heading-number">{number}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function BackHome() {
  return (
    <a className="back-home" href="/">
      <ArrowLeft aria-hidden="true" size={16} /> Back to overview
    </a>
  );
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="external-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.8} />
    </a>
  );
}

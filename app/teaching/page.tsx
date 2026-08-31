import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { courses } from '../profile-data';
import { BackHome, PageHeading, SiteFooter, SiteHeader } from '../site-components';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Teaching · Gyounghun Ko',
  description: 'Courses taught by Gyounghun Ko at POSTECH.',
};

export default function TeachingPage() {
  return (
    <main>
      <SiteHeader active="teaching" />
      <PageHeading
        number="03"
        eyebrow="POSTECH"
        title="Teaching"
        description="Instruction and teaching assistance in analysis, calculus, differential equations, and partial differential equations."
      />
      <section className="content-page teaching-page">
        <div className="section-heading-row compact-heading">
          <p className="content-count">Courses</p>
          <BookOpen aria-hidden="true" size={38} strokeWidth={1.2} />
        </div>
        <div className="course-list">
          {courses.map(([role, course, term]) => (
            <article key={course}>
              <span>{role}</span>
              <h3>{course}</h3>
              <p>{term}</p>
            </article>
          ))}
        </div>
        <BackHome />
      </section>
      <SiteFooter />
    </main>
  );
}

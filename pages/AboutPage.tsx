
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <section className="pt-32 pb-12 md:pt-40 md:pb-20 text-center relative bg-gray-100 dark:bg-gray-950/30">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">{title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      </AnimatedSection>
    </div>
  </section>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader title="About GenIntern" subtitle="Our mission and our vision for the future of tech careers." />

      <section id="our-story" className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">GenIntern was founded on a simple principle: talent is everywhere, but opportunity is not. We saw countless brilliant students graduating with theoretical knowledge but lacking the practical, real-world project experience that tech companies demand.</p>
                <p className="text-gray-600 dark:text-gray-300">Our goal is to create a launchpad for the next generation of tech professionals. As a task-based internship platform, we provide an environment where you learn by building. We believe that a strong portfolio, built through hands-on project work, is the key to unlocking a successful career in tech.</p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80" alt="A diverse team of interns collaborating on a project" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

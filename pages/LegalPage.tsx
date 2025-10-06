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

const LegalPage: React.FC = () => {
  const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold font-heading mt-8 mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-2">{children}</h2>
  );
  const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-bold font-heading mt-6 mb-3 text-gray-800 dark:text-gray-100">{children}</h3>
  );
  const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{children}</p>
  );
  const MailLink: React.FC<{ email: string }> = ({ email }) => (
     <a href={`mailto:${email}`} className="text-cyan-500 dark:text-cyan-400 hover:underline">{email}</a>
  );

  return (
    <>
      <PageHeader title="Legal Policies" subtitle="Terms of Service, Privacy Policy, and Disclaimer." />

      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-right text-sm text-gray-500 dark:text-gray-400 mb-8"><em>Last Updated: October 2025</em></p>
              
              <SectionTitle>1. Terms of Service</SectionTitle>
              
              <SubTitle>Introduction</SubTitle>
              <Paragraph>Welcome to <strong>GenIntern</strong> (“we”, “us”, or “our”). By accessing or using our website <a href="https://gen-intern.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-500 dark:text-cyan-400 hover:underline">https://gen-intern.vercel.app</a> (“Platform”) or any of our services (“Services”), you agree to comply with and be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, please do not use our Platform.</Paragraph>

              <SubTitle>Nature of Our Services</SubTitle>
              <Paragraph>GenIntern is an independent educational platform that provides <strong>project-based remote internship experiences</strong> designed to enhance participants’ skills and portfolios. We are not a university, government body, or accredited institution and do not provide academic credits or formal degrees. Our programs are purely designed for <strong>practical skill development and experiential learning</strong>.</Paragraph>

              <SubTitle>No Employment Relationship</SubTitle>
              <Paragraph>Participation in any GenIntern program does <strong>not</strong> create an employment, partnership, or agency relationship between the participant and GenIntern. We do not guarantee any job offer, employment placement, or monetary compensation as part of our programs.</Paragraph>

              <SubTitle>Certificates and Letter of Recommendation (LoR)</SubTitle>
              <Paragraph>Upon successful completion of assigned projects or learning tasks, participants may receive a <strong>Certificate of Internship Completion</strong> and, where applicable, a <strong>Letter of Recommendation (LoR)</strong>.</Paragraph>
              <Paragraph>The internship program itself is <strong>completely free of cost</strong>. However, if a participant wishes to obtain a <strong>verified completion certificate</strong> or <strong>Letter of Recommendation</strong>, a <strong>nominal administrative fee</strong> may be applicable. This fee will be <strong>clearly communicated in advance</strong> by GenIntern and is used solely to cover administrative and processing expenses.</Paragraph>
              <Paragraph>These documents serve as recognition of participation and skill-building and are <strong>not equivalent to academic credits, government-recognized certifications, or formal qualifications</strong>.</Paragraph>

              <SubTitle>Eligibility</SubTitle>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                <li>You are at least 18 years old or have obtained parental consent.</li>
                <li>You will provide accurate and truthful information during registration.</li>
                <li>You will use the Platform only for lawful and educational purposes.</li>
              </ul>

              <SubTitle>Intellectual Property</SubTitle>
              <Paragraph>All materials, code, graphics, content, and data available on the Platform are the intellectual property of GenIntern unless otherwise stated. Participants may not reproduce, distribute, or modify any GenIntern materials without written consent. Projects or content created during an internship may be used by GenIntern for <strong>educational, evaluation, or promotional purposes</strong>, unless otherwise agreed in writing.</Paragraph>
              
              <SubTitle>Payments &amp; Refund Policy</SubTitle>
              <Paragraph>Participation in GenIntern internship programs is <strong>free of charge</strong>. Only optional requests for <strong>certificates or recommendation letters</strong> may involve a <strong>specified administrative fee</strong>, determined by GenIntern.</Paragraph>
              <Paragraph>All such fees, if applicable, will be displayed clearly before payment. Once access to a certificate or LoR has been granted, fees are <strong>non-refundable</strong>, except in cases of technical issues or administrative errors initiated by GenIntern.</Paragraph>
              <Paragraph>Refund requests must be submitted to <MailLink email="contact.genintern@gmail.com" /> within <strong>7 days of payment</strong> and will be reviewed on a case-by-case basis.</Paragraph>
              <Paragraph>Any fee payments made to GenIntern are solely for access to administrative and coordination services, not for employment or recruitment.</Paragraph>
              
              <SubTitle>Limitation of Liability</SubTitle>
              <Paragraph>GenIntern shall not be held responsible for:</Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                <li>Any direct, indirect, or incidental damages arising from participation.</li>
                <li>Any loss or misuse of data.</li>
                <li>Any decision, employment outcome, or result based on program participation.</li>
              </ul>
              <Paragraph>Our total liability shall not exceed the amount paid by the participant for the respective program or service.</Paragraph>

              <SubTitle>User Conduct</SubTitle>
              <Paragraph>You agree not to:</Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                <li>Misrepresent your identity or impersonate another person.</li>
                <li>Use the Platform for illegal, fraudulent, or unethical purposes.</li>
                <li>Copy, resell, or redistribute GenIntern’s materials or content.</li>
              </ul>

              <SubTitle>Termination</SubTitle>
              <Paragraph>GenIntern reserves the right to suspend or terminate access if a participant violates these Terms or engages in conduct that harms the integrity of the Platform, staff, or other users.</Paragraph>

              <SubTitle>Governing Law</SubTitle>
              <Paragraph>These Terms are governed by the laws of <strong>India</strong>. Any disputes arising from these Terms or our Services will be subject to the <strong>exclusive jurisdiction of the courts of New Delhi, India</strong>.</Paragraph>


              <SectionTitle>2. Privacy Policy</SectionTitle>
              
              <SubTitle>Information We Collect</SubTitle>
              <Paragraph>We may collect the following information:</Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <li><strong>Personal Data:</strong> name, email address, LinkedIn/GitHub profile links.</li>
                  <li><strong>Technical Data:</strong> device type, browser, IP address.</li>
                  <li><strong>User-Provided Content:</strong> submissions, responses, or project files.</li>
              </ul>

              <SubTitle>How We Use Your Information</SubTitle>
              <Paragraph>We collect and use data to:</Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <li>Deliver and manage our Services.</li>
                  <li>Send certificates, communications, and updates.</li>
                  <li>Improve website functionality and user experience.</li>
                  <li>Analyze engagement patterns to enhance future programs.</li>
              </ul>

              <SubTitle>Data Sharing</SubTitle>
              <Paragraph>We do not sell or rent user data. We may share limited data with trusted third-party service providers who assist in operations (such as hosting or analytics), under strict confidentiality agreements. We may also disclose data if required by law, court order, or government request.</Paragraph>

              <SubTitle>Data Storage &amp; Security</SubTitle>
              <Paragraph>Your data is stored securely on verified servers with encryption and restricted access. Data collected is retained only for as long as necessary to fulfill the purposes outlined in this policy, after which it is securely deleted. While we take reasonable precautions, no system is entirely immune to breaches, and users agree to use the Platform at their own risk.</Paragraph>

              <SubTitle>Your Rights</SubTitle>
              <Paragraph>In accordance with the Indian IT Act (2000) and GDPR (for international users), you have the right to:</Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <li>Request access to or deletion of your personal data.</li>
                  <li>Correct inaccuracies in your profile.</li>
                  <li>Withdraw consent for communications at any time.</li>
              </ul>
              <Paragraph>Requests can be sent to <MailLink email="contact.genintern@gmail.com" />.</Paragraph>

              <SubTitle>Cookies</SubTitle>
              <Paragraph>We may use cookies or similar technologies to enhance site functionality and track engagement. You may disable cookies in your browser settings, though this may affect site performance.</Paragraph>


              <SectionTitle>3. Disclaimer</SectionTitle>

              <SubTitle>General Disclaimer</SubTitle>
              <Paragraph>GenIntern provides <strong>educational and project-based internship experiences</strong> for skill enhancement only. We make no warranties or representations that:</Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <li>Participation guarantees a job, employment, or financial compensation.</li>
                  <li>The content or materials are error-free or universally applicable.</li>
                  <li>Completion of a program ensures mastery or certification recognized by any third-party institution.</li>
              </ul>
              <Paragraph>Participation is voluntary, and outcomes depend on individual performance and commitment.</Paragraph>

              <SubTitle>No Professional Advice</SubTitle>
              <Paragraph>All information and materials provided through GenIntern are for learning and training purposes only. Nothing on the Platform constitutes legal, professional, or employment advice.</Paragraph>

              <SubTitle>Third-Party Links</SubTitle>
              <Paragraph>Our Platform may contain links to third-party websites. We are not responsible for their content, data handling, or privacy practices.</Paragraph>
              
              <SubTitle>Limitation of Liability</SubTitle>
              <Paragraph>To the fullest extent permitted by law, GenIntern, its team, and affiliates shall not be liable for any direct, indirect, or consequential loss or damage resulting from:</Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <li>Use or inability to use the Platform.</li>
                  <li>Actions taken based on materials or advice provided.</li>
                  <li>Any errors, omissions, or inaccuracies in the content.</li>
              </ul>
              <Paragraph>By participating in GenIntern programs, users acknowledge that outcomes depend on their own effort, learning pace, and engagement.</Paragraph>

              <SectionTitle>4. Contact Us</SectionTitle>
              <Paragraph>For any legal inquiries, feedback, or requests, please contact:</Paragraph>
              <Paragraph>📧 <MailLink email="contact.genintern@gmail.com" /></Paragraph>
              <Paragraph>🌐 <a href="https://gen-intern.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-500 dark:text-cyan-400 hover:underline">https://gen-intern.vercel.app</a></Paragraph>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default LegalPage;

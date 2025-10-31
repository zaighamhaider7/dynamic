import React from 'react';
import Footer from '../components/Generic/Footer';
import Navbar from '../components/Generic/Navbar';


export default function PrivacyPolicy() {
  return (
    <>
<div >
                <Navbar />
               
               
            </div>
      <main className="data-handling-page">
        <h1 className="main-heading">Privacy Policy</h1>

        <p className="section-text">
          At WizSpeed, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you visit <strong>wizspeed.com</strong> or engage our web and software development services. By using our website, you agree to the terms outlined here.
        </p>

        <section>
          <h2 className="section-heading">1. Information We Collect</h2>
          <p className="section-text">
            We collect information to provide our services efficiently and improve your experience.
          </p>

          <h3 className="sub-heading">a. Information You Provide</h3>
          <p className="section-text">
            You may provide personal information when you:
          </p>
          <ul className="section-text">
            <li>Request a quote or project consultation</li>
            <li>Contact us via forms or email</li>
            <li>Subscribe to newsletters or updates</li>
          </ul>
          <p className="section-text">
            This may include:
          </p>
          <ul className="section-text">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Project details or related notes</li>
          </ul>

          <h3 className="sub-heading">b. Automatically Collected Information</h3>
          <ul className="section-text">
            <li>IP address</li>
            <li>Browser type, version, and device information</li>
            <li>Pages visited, time spent, and referring URLs</li>
            <li>General geographic location (city/state level)</li>
          </ul>

          <h3 className="sub-heading">c. Cookies and Tracking</h3>
          <p className="section-text">
            Our website may use cookies and analytics tools (like Google Analytics) to understand user behavior, improve website performance, and enhance usability. You can manage cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="section-heading">2. How We Use Your Information</h2>
          <p className="section-text">
            We use the information collected to:
          </p>
          <ul className="section-text">
            <li>Respond to your inquiries and deliver requested services</li>
            <li>Communicate about projects, proposals, and updates</li>
            <li>Improve website functionality and user experience</li>
            <li>Conduct internal research and analytics</li>
            <li>Ensure security and prevent unauthorized activity</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
          <p className="section-text"><strong>We do not sell your personal information to third parties.</strong></p>
        </section>

        <section>
          <h2 className="section-heading">3. Information Sharing</h2>
          <p className="section-text">
            We only share information when necessary:
          </p>
          <ul className="section-text">
            <li>With service providers who assist with hosting, analytics, communication, or marketing (under confidentiality agreements)</li>
            <li>If required by law, court order, or to protect our rights and property</li>
            <li>During a merger, acquisition, or asset transfer (with appropriate safeguards)</li>
          </ul>
          <p className="section-text">
            All partners and vendors are required to handle your data responsibly and securely.
          </p>
        </section>

        <section>
          <h2 className="section-heading">4. Data Security</h2>
          <p className="section-text">
            We implement industry-standard security measures to protect your data against loss, misuse, or unauthorized access. While we strive for complete security, no method of electronic storage or transmission is entirely foolproof.
          </p>
        </section>

        <section>
          <h2 className="section-heading">5. Data Retention</h2>
          <p className="section-text">
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="section-heading">6. Your Privacy Rights</h2>
          <p className="section-text">
            If you are a resident of the United States, you may have specific privacy rights depending on your state (for example, under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA)).
          </p>
          <p className="section-text">
            These rights may include:
          </p>
          <ul className="section-text">
            <li>Requesting access to the personal data we hold about you</li>
            <li>Requesting correction or deletion of your data</li>
            <li>Opting out of data sharing or targeted advertising</li>
            <li>Receiving a copy of your data in a portable format</li>
          </ul>
          <p className="section-text">
            To exercise these rights, contact us at <strong>contact@wizspeed.com</strong>.  
            We will verify your request and respond within the timeframe required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="section-heading">7. Email Communications</h2>
          <p className="section-text">
            We may send you emails related to your inquiries, project updates, or newsletters.
            You can unsubscribe from promotional emails at any time by clicking the “unsubscribe” link in our messages.
            We comply with the CAN-SPAM Act and never send misleading or unsolicited marketing emails.
          </p>
        </section>

        <section>
          <h2 className="section-heading">8. Children’s Privacy</h2>
          <p className="section-text">
            Our website and services are not directed toward children under the age of 13.
            We do not knowingly collect personal data from minors. If we discover such data has been provided, we will delete it immediately.
          </p>
        </section>

        <section>
          <h2 className="section-heading">9. Third-Party Links</h2>
          <p className="section-text">
            Our site may include links to third-party websites, tools, or platforms.
            We are not responsible for their privacy practices or content. Please review their privacy policies before sharing any personal information.
          </p>
        </section>

        <section>
          <h2 className="section-heading">10. Changes to This Policy</h2>
          <p className="section-text">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
            The revised policy will be posted on this page with an updated “Last Updated” date.
          </p>
        </section>

        <section>
          <h2 className="section-heading">11. Contact Us</h2>
          <p className="section-text">
            If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <ul className="section-text">
            <li>📧 <strong>contact@wizspeed.com</strong></li>
            <li>🌐 <strong>wizspeed.com</strong></li>
            <li>🏢 5250 Old Orchard Rd, Suite #300, Skokie, IL 60077</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

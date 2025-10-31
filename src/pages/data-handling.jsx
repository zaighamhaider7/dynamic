import React from 'react';
import Footer from '../components/Generic/Footer';
import Navbar from '../components/Generic/Navbar';
export default function DataHandling() {
  return (
    <>
    <div>
              <Navbar />

    </div>

      <main className="data-handling-page">
        <h1 className="main-heading">Data Handling &amp; Security</h1>

        <section>
          <h2 className="section-heading">1. Data Collection and Use</h2>
          <p className="section-text">
            We only collect the essential data required for the provision of our services, and ensure that clients are fully informed of the specific use of their data. At WizSpeed, we comply with all applicable privacy laws and maintain transparency in our data-collection practices.
          </p>
        </section>

        <section>
          <h2 className="section-heading">2. Data Protection Measures</h2>
          <p className="section-text">
            We employ robust security measures including encryption, secure servers, and physical security controls to protect client data from unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        <section>
          <h2 className="section-heading">3. Data Breach Protocol</h2>
          <p className="section-text">
            In the event of a data breach, our incident-response team will act immediately to mitigate the breach, assess the damage, and initiate recovery procedures. Affected clients will be notified within 72 hours of discovering the breach.
          </p>
        </section>

        <section>
          <h2 className="section-heading">4. Data Retention and Disposal</h2>
          <p className="section-text">
            Client data is retained only as long as necessary to fulfill contractual obligations and to comply with legal requirements. Once no longer needed, data is securely disposed of to prevent any potential misuse.
          </p>
        </section>

        <section>
          <h2 className="section-heading">5. Monthly Data Backup</h2>
          <p className="section-text">
            Monthly backups are performed on all critical client data. These backups are stored securely with encryption to protect against unauthorized access.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
